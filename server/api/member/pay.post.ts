import { createHash } from 'node:crypto'
import { requireActive } from '~/server/utils/auth'
import { queryOne, execute } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const auth  = requireActive(event)
  const { feeId } = await readBody<{ feeId: number }>(event)
  const config = useRuntimeConfig()

  if (!feeId) throw createError({ statusCode: 400, statusMessage: 'feeId is required.' })

  // Verify fee exists and belongs to this member's category
  const profile = await queryOne<any>(
    'SELECT membership_category FROM member_profiles WHERE user_id = ?',
    [auth.userId]
  )
  if (!profile) throw createError({ statusCode: 403, statusMessage: 'Member profile not found.' })

  const fee = await queryOne<any>(
    'SELECT * FROM membership_fees WHERE id = ? AND membership_category = ?',
    [feeId, profile.membership_category]
  )
  if (!fee) throw createError({ statusCode: 404, statusMessage: 'Fee not found for your membership category.' })

  // Check if already paid
  const existing = await queryOne<any>(
    "SELECT id, status FROM member_payments WHERE user_id = ? AND fee_id = ? AND status = 'completed'",
    [auth.userId, feeId]
  )
  if (existing) throw createError({ statusCode: 409, statusMessage: 'This fee has already been paid.' })

  const orderId         = `SLSTL-MEM-${auth.userId}-${feeId}-${Date.now()}`
  const amount          = parseFloat(fee.amount).toFixed(2)
  const currency        = 'LKR'
  const merchantId      = config.public.payhereMerchantId as string
  const secret          = config.payhereSecret as string

  if (!secret || !merchantId)
    throw createError({ statusCode: 500, statusMessage: 'Payment service not configured.' })

  const hashedSecret = createHash('md5').update(secret).digest('hex').toUpperCase()
  const hash = createHash('md5')
    .update(merchantId + orderId + amount + currency + hashedSecret)
    .digest('hex').toUpperCase()

  // Create pending payment record
  await execute(
    `INSERT INTO member_payments (user_id, fee_id, order_id, amount, currency, status)
     VALUES (?, ?, ?, ?, ?, 'pending')
     ON DUPLICATE KEY UPDATE order_id = VALUES(order_id)`,
    [auth.userId, feeId, orderId, fee.amount, currency]
  )

  return { orderId, amount, currency, hash, merchantId }
})
