import { requireRole } from '~/server/utils/auth'
import { queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['admin'])

  const [total, pending] = await Promise.all([
    queryOne<any>('SELECT COUNT(*) AS cnt FROM users'),
    queryOne<any>("SELECT COUNT(*) AS cnt FROM membership_applications WHERE status = 'pending'"),
  ])

  return {
    totalUsers: total?.cnt ?? 0,
    pending:    pending?.cnt ?? 0,
  }
})
