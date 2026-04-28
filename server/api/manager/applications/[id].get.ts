import { requireRole } from '~/server/utils/auth'
import { queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['manager', 'admin'])
  const id = getRouterParam(event, 'id')

  const app = await queryOne<any>(
    `SELECT a.*, u.email AS account_email
     FROM membership_applications a
     JOIN users u ON u.id = a.user_id
     WHERE a.id = ?`,
    [id]
  )
  if (!app) throw createError({ statusCode: 404, statusMessage: 'Application not found.' })

  // Parse JSON fields
  for (const key of ['employment','qualifications','professional_works','proposers']) {
    if (typeof app[key] === 'string') {
      try { app[key] = JSON.parse(app[key]) } catch { app[key] = [] }
    }
  }

  return app
})
