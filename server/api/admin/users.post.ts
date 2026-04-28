import bcrypt from 'bcryptjs'
import { requireRole } from '~/server/utils/auth'
import { execute, queryOne } from '~/server/utils/db'
import { sendNewUserWelcome } from '~/server/utils/mailer'

export default defineEventHandler(async (event) => {
  requireRole(event, ['admin'])

  const { email, password, role, status } = await readBody(event)

  if (!email || !password || !role)
    throw createError({ statusCode: 400, statusMessage: 'Email, password and role are required.' })

  const existing = await queryOne('SELECT id FROM users WHERE email = ?', [email])
  if (existing)
    throw createError({ statusCode: 409, statusMessage: 'A user with this email already exists.' })

  const hash = await bcrypt.hash(password, 12)
  await execute(
    'INSERT INTO users (email, password_hash, role, status) VALUES (?, ?, ?, ?)',
    [email, hash, role, status ?? 'active']
  )

  await sendNewUserWelcome(email, password)

  return { message: 'User created successfully.' }
})
