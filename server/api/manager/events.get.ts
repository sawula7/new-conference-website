import { requireRole } from '~/server/utils/auth'
import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['manager', 'admin'])

  const events = await query<any>(`
    SELECT e.*, u.email AS created_by_email,
           COUNT(DISTINCT er.id) AS registration_count
    FROM events e
    LEFT JOIN users u ON u.id = e.created_by
    LEFT JOIN event_registrations er ON er.event_id = e.id
    GROUP BY e.id
    ORDER BY e.event_date DESC, e.created_at DESC
  `)
  return events
})
