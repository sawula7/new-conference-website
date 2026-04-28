import crypto from 'crypto'
import { requireActive } from '~/server/utils/auth'
import { queryOne, execute } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const me  = requireActive(event)
  const id  = getRouterParam(event, 'id')
  const { ticketType } = await readBody(event)   // 'general' | 'member' | 'student'

  const ev = await queryOne<any>(
    "SELECT * FROM events WHERE id = ? AND status = 'published'", [id]
  )
  if (!ev) throw createError({ statusCode: 404, statusMessage: 'Event not found.' })

  const existing = await queryOne<any>(
    'SELECT id FROM event_registrations WHERE event_id = ? AND user_id = ?',
    [id, me.userId]
  )
  if (existing) throw createError({ statusCode: 409, statusMessage: 'You are already registered for this event.' })

  // Determine amount
  let amount = 0
  if (!ev.is_free) {
    if (ticketType === 'member')  amount = parseFloat(ev.member_fee)
    else if (ticketType === 'student') amount = parseFloat(ev.student_fee)
    else amount = parseFloat(ev.general_fee)
  }

  const orderId = `EVT-${id}-${me.userId}-${Date.now().toString(36).toUpperCase()}`

  if (amount === 0) {
    // Free — register immediately
    await execute(
      `INSERT INTO event_registrations (event_id, user_id, order_id, amount, status)
       VALUES (?, ?, ?, 0, 'free')`,
      [id, me.userId, orderId]
    )
    return { free: true, orderId, message: 'Registered successfully.' }
  }

  // Paid — create pending record and return PayHere params
  await execute(
    `INSERT INTO event_registrations (event_id, user_id, order_id, amount, status)
     VALUES (?, ?, ?, ?, 'pending')`,
    [id, me.userId, orderId, amount]
  )

  const config     = useRuntimeConfig()
  const merchantId = config.public.payhereMerchantId as string
  const amtStr     = amount.toFixed(2)
  const currency   = 'LKR'
  const hash = crypto
    .createHash('md5')
    .update(`${merchantId}${orderId}${amtStr}${currency}${crypto.createHash('md5').update(config.payhereSecret).digest('hex').toUpperCase()}`)
    .digest('hex')
    .toUpperCase()

  return {
    free: false,
    orderId,
    amount: amtStr,
    currency,
    hash,
    merchantId,
    eventTitle: ev.title,
  }
})
