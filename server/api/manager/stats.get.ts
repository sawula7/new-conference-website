import { requireRole } from '~/server/utils/auth'
import { queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['manager', 'admin'])

  const pending = await queryOne<any>(
    "SELECT COUNT(*) AS cnt FROM membership_applications WHERE status = 'pending'"
  )
  const active = await queryOne<any>(
    "SELECT COUNT(*) AS cnt FROM users WHERE status = 'active' AND role = 'user'"
  )

  return {
    pending: pending?.cnt ?? 0,
    active:  active?.cnt  ?? 0,
  }
})
