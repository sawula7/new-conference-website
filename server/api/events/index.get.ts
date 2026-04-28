import { query } from '~/server/utils/db'

export default defineEventHandler(async () => {
  const events = await query<any>(`
    SELECT id, title, slug, short_description, event_date, time_start, time_end,
           venue, location, category, platform, status, image_url, is_free,
           general_fee, member_fee, student_fee, capacity, registration_deadline
    FROM events
    WHERE status = 'published'
    ORDER BY event_date ASC
  `)
  return events
})
