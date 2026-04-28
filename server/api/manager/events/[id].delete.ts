import { requireRole } from '~/server/utils/auth'
import { execute } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['manager', 'admin'])
  const id = getRouterParam(event, 'id')
  await execute('DELETE FROM events WHERE id = ?', [id])
  return { message: 'Event deleted.' }
})
