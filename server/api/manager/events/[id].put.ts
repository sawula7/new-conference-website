import { requireRole } from '~/server/utils/auth'
import { execute, queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['manager', 'admin'])
  const id   = getRouterParam(event, 'id')
  const body = await readBody(event)

  const ev = await queryOne<any>('SELECT id FROM events WHERE id = ?', [id])
  if (!ev) throw createError({ statusCode: 404, statusMessage: 'Event not found.' })

  await execute(`
    UPDATE events SET
      title = ?, short_description = ?, description = ?, event_date = ?,
      time_start = ?, time_end = ?, venue = ?, location = ?, category = ?,
      platform = ?, status = ?, image_url = ?, is_free = ?,
      general_fee = ?, member_fee = ?, student_fee = ?,
      capacity = ?, registration_deadline = ?, extra_data = ?
    WHERE id = ?
  `, [
    body.title,
    body.short_description ?? null,
    body.description       ?? null,
    body.event_date        ?? null,
    body.time_start        ?? null,
    body.time_end          ?? null,
    body.venue             ?? null,
    body.location          ?? null,
    body.category          ?? 'webinar',
    body.platform          ?? null,
    body.status            ?? 'draft',
    body.image_url         ?? null,
    body.is_free ? 1 : 0,
    parseFloat(body.general_fee) || 0,
    parseFloat(body.member_fee)  || 0,
    parseFloat(body.student_fee) || 0,
    body.capacity              ?? null,
    body.registration_deadline ?? null,
    body.extra_data ? JSON.stringify(body.extra_data) : null,
    id,
  ])

  return { message: 'Event updated.' }
})
