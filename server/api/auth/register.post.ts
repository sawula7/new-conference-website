import bcrypt from 'bcryptjs'
import { query, queryOne, execute } from '~/server/utils/db'
import { signToken, setAuthCookie } from '~/server/utils/auth'
import { sendRegistrationConfirmation } from '~/server/utils/mailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const {
    email, password,
    title, full_name, last_name_initials, gender, nic_no, age,
    employment, address, work_phone, home_phone, mobile, fax,
    email_1, email_2, publish_name, share_email, share_mobile,
    qualifications, professional_works, areas_of_interest,
    apply_for, upgrade_from, current_mem_no, ms_number, proposers,
  } = body

  if (!email || !password || !full_name || !apply_for)
    throw createError({ statusCode: 400, statusMessage: 'Required fields missing.' })

  if (password.length < 8)
    throw createError({ statusCode: 400, statusMessage: 'Password must be at least 8 characters.' })

  const existing = await queryOne('SELECT id FROM users WHERE email = ?', [email])
  if (existing)
    throw createError({ statusCode: 409, statusMessage: 'An account with this email already exists.' })

  const password_hash = await bcrypt.hash(password, 12)

  const userResult = await execute(
    'INSERT INTO users (email, password_hash, role, status) VALUES (?, ?, "user", "pending")',
    [email, password_hash]
  )
  const userId = userResult.insertId

  await execute(
    `INSERT INTO membership_applications
     (user_id, title, full_name, last_name_initials, gender, nic_no, age,
      employment, address, work_phone, home_phone, mobile, fax, email_1, email_2,
      publish_name, share_email, share_mobile, qualifications, professional_works,
      areas_of_interest, apply_for, upgrade_from, current_mem_no, ms_number, proposers)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      userId, title, full_name, last_name_initials, gender, nic_no, age ?? null,
      JSON.stringify(employment ?? []),
      address, work_phone, home_phone, mobile, fax,
      email_1 || email, email_2,
      publish_name ? 1 : 0, share_email ? 1 : 0, share_mobile ? 1 : 0,
      JSON.stringify(qualifications ?? []),
      JSON.stringify(professional_works ?? []),
      areas_of_interest,
      apply_for, upgrade_from, current_mem_no, ms_number,
      JSON.stringify(proposers ?? []),
    ]
  )

  const token = signToken({ userId, email, role: 'user', status: 'pending' })
  setAuthCookie(event, token)

  await sendRegistrationConfirmation(email, full_name)

  return { message: 'Application submitted successfully. Awaiting manager approval.' }
})
