import { createHash } from 'node:crypto'
import { queryOne, execute } from '~/server/utils/db'

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
    'SELECT id, user_id, fee_id FROM member_payments WHERE order_id = ?',
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

  return 'OK'
})
