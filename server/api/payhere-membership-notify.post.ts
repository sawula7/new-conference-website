import { createHash } from 'node:crypto'
import { queryOne, execute } from '~/server/utils/db'
import { sendPaymentConfirmation } from '~/server/utils/mailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const {
    merchant_id, order_id, payhere_amount, payhere_currency,
    status_code, md5sig,
  } = body

  // Verify signature
  const hashedSecret = createHash('md5').update(config.payhereSecret as string).digest('hex').toUpperCase()
  const expected = createHash('md5')
    .update(merchant_id + order_id + payhere_amount + payhere_currency + status_code + hashedSecret)
    .digest('hex').toUpperCase()

  if (md5sig !== expected) {
    console.error('[PayHere Notify] Invalid signature for order', order_id)
    return 'INVALID'
  }

  const payment = await queryOne<any>(
    `SELECT mp.id, mp.user_id, mp.fee_id, mp.amount,
            u.email, ma.full_name, mf.description, mf.year
     FROM member_payments mp
     JOIN users u ON u.id = mp.user_id
     LEFT JOIN membership_applications ma ON ma.user_id = mp.user_id
     JOIN membership_fees mf ON mf.id = mp.fee_id
     WHERE mp.order_id = ?`,
    [order_id]
  )
  if (!payment) return 'NOT_FOUND'

  const statusMap: Record<string, string> = {
    '2': 'completed', '-1': 'cancelled', '-2': 'failed', '-3': 'cancelled',
  }
  const newStatus = statusMap[status_code] ?? 'pending'

  await execute(
    `UPDATE member_payments
     SET status = ?, payhere_order_id = ?, payhere_data = ?,
         paid_at = ${newStatus === 'completed' ? 'NOW()' : 'NULL'}
     WHERE id = ?`,
    [newStatus, order_id, JSON.stringify(body), payment.id]
  )

  if (newStatus === 'completed') {
    const desc = payment.description ?? `Membership Fee ${payment.year}`
    await sendPaymentConfirmation(
      payment.email,
      payment.full_name ?? payment.email,
      desc,
      parseFloat(payment.amount).toLocaleString(),
      order_id
    )
  }

  return 'OK'
})
