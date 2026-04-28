import { requireRole } from '~/server/utils/auth'
import { queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['manager', 'admin'])
  const id = getRouterParam(event, 'id')
  const ev = await queryOne<any>('SELECT * FROM events WHERE id = ?', [id])
  if (!ev) throw createError({ statusCode: 404, statusMessage: 'Event not found.' })
  if (ev.extra_data && typeof ev.extra_data === 'string') ev.extra_data = JSON.parse(ev.extra_data)
  return ev
})
