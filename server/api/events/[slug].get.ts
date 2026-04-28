import { queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const ev   = await queryOne<any>(
    "SELECT * FROM events WHERE slug = ? AND status = 'published'",
    [slug]
  )
  if (!ev) throw createError({ statusCode: 404, statusMessage: 'Event not found.' })
  if (ev.extra_data && typeof ev.extra_data === 'string') ev.extra_data = JSON.parse(ev.extra_data)
  return ev
})
