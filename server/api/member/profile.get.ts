import { requireActive } from '~/server/utils/auth'
import { queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const auth = requireActive(event)

  const app = await queryOne<any>(
    `SELECT a.*, mp.membership_number, mp.membership_category, mp.approved_at
     FROM membership_applications a
     LEFT JOIN member_profiles mp ON mp.user_id = a.user_id
     WHERE a.user_id = ? AND a.status = 'approved'
     LIMIT 1`,
    [auth.userId]
  )

  if (!app) throw createError({ statusCode: 404, statusMessage: 'Profile not found.' })

  return {
    title:                app.title,
    fullName:             app.full_name,
    lastNameInitials:     app.last_name_initials,
    gender:               app.gender,
    nicNo:                app.nic_no,
    age:                  app.age,
    address:              app.address,
    workPhone:            app.work_phone,
    homePhone:            app.home_phone,
    mobile:               app.mobile,
    email:                app.email_1,
    membershipNumber:     app.membership_number,
    membershipCategory:   app.membership_category,
    approvedAt:           app.approved_at,
  }
})
