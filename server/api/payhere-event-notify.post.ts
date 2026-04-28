import crypto from 'crypto'
import { queryOne, execute } from '~/server/utils/db'
import { sendEventRegistrationConfirmation } from '~/server/utils/mailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {
    merchant_id, order_id, payhere_amount, payhere_currency,
    status_code, md5sig,
  } = body

  const config = useRuntimeConfig()
  const secretHash = crypto.createHash('md5').update(config.payhereSecret).digest('hex').toUpperCase()
  const expected   = crypto
    .createHash('md5')
    .update(`${merchant_id}${order_id}${payhere_amount}${payhere_currency}${status_code}${secretHash}`)
    .digest('hex')
    .toUpperCase()

  if (md5sig !== expected) {
    console.warn('[event-notify] Invalid signature for order', order_id)
    return 'ok'
  }

  const reg = await queryOne<any>(
    `SELECT er.*, u.email, ma.full_name, e.title AS event_title,
            e.event_date, e.venue, e.platform
     FROM event_registrations er
     JOIN users u ON u.id = er.user_id
     LEFT JOIN membership_applications ma ON ma.user_id = er.user_id
     JOIN events e ON e.id = er.event_id
     WHERE er.order_id = ?`,
    [order_id]
  )
  if (!reg) return 'ok'

  if (status_code === '2') {
    await execute(
      "UPDATE event_registrations SET status = 'completed', payhere_data = ?, paid_at = NOW() WHERE order_id = ?",
      [JSON.stringify(body), order_id]
    )
    const name     = reg.full_name ?? reg.email
    const dateStr  = reg.event_date ? new Date(reg.event_date).toLocaleDateString('en-LK', { dateStyle: 'long' }) : 'TBA'
    const venue    = reg.venue ?? reg.platform ?? 'TBA'
    await sendEventRegistrationConfirmation(reg.email, name, reg.event_title, dateStr, venue, order_id, false)
  } else if (['0', '-1', '-2', '-3'].includes(status_code)) {
    await execute(
      "UPDATE event_registrations SET status = 'cancelled' WHERE order_id = ?",
      [order_id]
    )
  }

  return 'ok'
})
