import bcrypt from 'bcryptjs'
import { queryOne } from '~/server/utils/db'
import { signToken, setAuthCookie } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  if (!email || !password)
    throw createError({ statusCode: 400, statusMessage: 'Email and password are required.' })

  const user = await queryOne<any>(
    'SELECT id, email, password_hash, role, status FROM users WHERE email = ?',
    [email]
  )

  if (!user || !(await bcrypt.compare(password, user.password_hash)))
    throw createError({ statusCode: 401, statusMessage: 'Invalid email or password.' })

  if (user.status === 'rejected')
    throw createError({ statusCode: 403, statusMessage: 'Your application was not approved. Please contact the secretariat.' })

  if (user.status === 'suspended')
    throw createError({ statusCode: 403, statusMessage: 'Your account has been suspended. Please contact the secretariat.' })

  const token = signToken({
    userId: user.id,
    email:  user.email,
    role:   user.role,
    status: user.status,
  })
  setAuthCookie(event, token)

  return {
    user: { id: user.id, email: user.email, role: user.role, status: user.status }
  }
})
