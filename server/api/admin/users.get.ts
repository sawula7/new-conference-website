import { requireRole } from '~/server/utils/auth'
import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['admin'])

  const users = await query<any>(`
    SELECT u.id, u.email, u.role, u.status, u.created_at,
           mp.membership_number, mp.membership_category
    FROM users u
    LEFT JOIN member_profiles mp ON mp.user_id = u.id
    ORDER BY u.created_at DESC
  `)
  return users
})
