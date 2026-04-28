import { requireRole } from '~/server/utils/auth'
import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['manager', 'admin'])
  return query<any>('SELECT * FROM membership_fees ORDER BY year DESC, membership_category ASC')
})
