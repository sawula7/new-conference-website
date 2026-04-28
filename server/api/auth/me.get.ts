import { getAuthUser } from '~/server/utils/auth'
import { queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const payload = getAuthUser(event)
  if (!payload) return null

  const user = await queryOne<any>(
    'SELECT id, email, role, status FROM users WHERE id = ?',
    [payload.userId]
  )
  if (!user) return null

  const profile = await queryOne<any>(
    'SELECT membership_number, membership_category FROM member_profiles WHERE user_id = ?',
    [user.id]
  )

  return {
    id:                  user.id,
    email:               user.email,
    role:                user.role,
    status:              user.status,
    membershipNumber:    profile?.membership_number  ?? null,
    membershipCategory:  profile?.membership_category ?? null,
  }
})
