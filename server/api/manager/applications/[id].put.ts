import { requireRole } from '~/server/utils/auth'
import { queryOne, execute, query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const auth   = requireRole(event, ['manager', 'admin'])
  const id     = getRouterParam(event, 'id')
  const body   = await readBody<{ action: 'approve' | 'reject'; notes?: string }>(event)

  if (!['approve', 'reject'].includes(body.action))
    throw createError({ statusCode: 400, statusMessage: 'action must be "approve" or "reject".' })

  const app = await queryOne<any>(
    "SELECT * FROM membership_applications WHERE id = ? AND status = 'pending'",
    [id]
  )
  if (!app) throw createError({ statusCode: 404, statusMessage: 'Pending application not found.' })

  if (body.action === 'approve') {
    // Generate next membership number
    const last = await queryOne<any>(
      'SELECT membership_number FROM member_profiles ORDER BY id DESC LIMIT 1'
    )
    const nextNum = last
      ? String(parseInt(last.membership_number) + 1).padStart(3, '0')
      : '001'

    await execute(
      "UPDATE membership_applications SET status='approved', reviewed_by=?, reviewed_at=NOW(), review_notes=? WHERE id=?",
      [auth.userId, body.notes ?? null, id]
    )
    await execute(
      "UPDATE users SET status='active' WHERE id=?",
      [app.user_id]
    )
    await execute(
      `INSERT INTO member_profiles (user_id, membership_number, membership_category, application_id, approved_by)
       VALUES (?, ?, ?, ?, ?)`,
      [app.user_id, nextNum, app.apply_for, app.id, auth.userId]
    )
    return { message: `Application approved. Membership number: ${nextNum}` }
  } else {
    await execute(
      "UPDATE membership_applications SET status='rejected', reviewed_by=?, reviewed_at=NOW(), review_notes=? WHERE id=?",
      [auth.userId, body.notes ?? null, id]
    )
    await execute("UPDATE users SET status='rejected' WHERE id=?", [app.user_id])
    return { message: 'Application rejected.' }
  }
})
