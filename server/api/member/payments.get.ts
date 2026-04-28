import { requireActive } from '~/server/utils/auth'
import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const auth = requireActive(event)

  const payments = await query<any>(
    `SELECT p.id, p.order_id, p.amount, p.currency, p.status, p.paid_at,
            f.year, f.membership_category, f.description
     FROM member_payments p
     JOIN membership_fees f ON f.id = p.fee_id
     WHERE p.user_id = ?
     ORDER BY p.created_at DESC`,
    [auth.userId]
  )

  return payments.map(p => ({
    id:       p.id,
    orderId:  p.order_id,
    amount:   parseFloat(p.amount),
    currency: p.currency,
    status:   p.status,
    paidAt:   p.paid_at,
    year:     p.year,
    category: p.membership_category,
    description: p.description,
  }))
})
