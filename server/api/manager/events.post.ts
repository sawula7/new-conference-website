import { requireRole } from '~/server/utils/auth'
import { execute } from '~/server/utils/db'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default defineEventHandler(async (event) => {
  const me = requireRole(event, ['manager', 'admin'])
  const body = await readBody(event)

  if (!body.title) throw createError({ statusCode: 400, statusMessage: 'Title is required.' })

  const slug = slugify(body.title) + '-' + Date.now().toString(36)

  await execute(`
    INSERT INTO events
      (title, slug, short_description, description, event_date, time_start, time_end,
       venue, location, category, platform, status, image_url, is_free,
       general_fee, member_fee, student_fee, capacity, registration_deadline,
       extra_data, created_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    body.title,
    slug,
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
    body.is_free           ? 1 : 0,
    parseFloat(body.general_fee) || 0,
    parseFloat(body.member_fee)  || 0,
    parseFloat(body.student_fee) || 0,
    body.capacity                ?? null,
    body.registration_deadline   ?? null,
    body.extra_data ? JSON.stringify(body.extra_data) : null,
    me.userId,
  ])

  return { message: 'Event created.', slug }
})
