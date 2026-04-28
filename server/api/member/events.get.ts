import { requireActive } from '~/server/utils/auth'
import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const me = requireActive(event)

  const events = await query<any>(`
    SELECT e.id, e.title, e.slug, e.short_description, e.event_date, e.time_start,
           e.time_end, e.venue, e.location, e.category, e.platform, e.is_free,
           e.general_fee, e.member_fee, e.student_fee, e.capacity,
           e.registration_deadline,
           er.id        AS reg_id,
           er.status    AS reg_status,
           er.order_id  AS reg_order_id
    FROM events e
    LEFT JOIN event_registrations er ON er.event_id = e.id AND er.user_id = ?
    WHERE e.status = 'published'
    ORDER BY e.event_date ASC
  `, [me.userId])

  return events
})
