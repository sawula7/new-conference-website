import { requireRole } from '~/server/utils/auth'
import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['manager', 'admin'])

  const url    = getRequestURL(event)
  const status = url.searchParams.get('status') ?? 'pending'

  const applications = await query<any>(
    `SELECT a.id, a.full_name, a.email_1, a.apply_for, a.status,
            a.created_at, a.reviewed_at, a.review_notes,
            u.email AS account_email
     FROM membership_applications a
     JOIN users u ON u.id = a.user_id
     WHERE a.status = ?
     ORDER BY a.created_at ASC`,
    [status]
  )

  return applications
})
