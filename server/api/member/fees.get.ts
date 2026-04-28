import { requireActive } from '~/server/utils/auth'
import { query, queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const auth = requireActive(event)

  const profile = await queryOne<any>(
    'SELECT membership_category FROM member_profiles WHERE user_id = ?',
    [auth.userId]
  )
  if (!profile) throw createError({ statusCode: 404, statusMessage: 'Member profile not found.' })

  // All fees for this category
  const fees = await query<any>(
    `SELECT f.id, f.year, f.amount, f.due_date, f.description,
            p.id AS payment_id, p.status AS payment_status, p.paid_at
     FROM membership_fees f
     LEFT JOIN member_payments p ON p.fee_id = f.id AND p.user_id = ?
     WHERE f.membership_category = ?
     ORDER BY f.year DESC`,
    [auth.userId, profile.membership_category]
  )

  return {
    category: profile.membership_category,
    fees: fees.map(f => ({
      id:            f.id,
      year:          f.year,
      amount:        parseFloat(f.amount),
      dueDate:       f.due_date,
      description:   f.description,
      paymentId:     f.payment_id   ?? null,
      paymentStatus: f.payment_status ?? null,
      paidAt:        f.paid_at       ?? null,
    })),
  }
})
