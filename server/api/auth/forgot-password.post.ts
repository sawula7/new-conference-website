import crypto from 'node:crypto'
import { queryOne, execute } from '~/server/utils/db'
import { sendPasswordResetEmail } from '~/server/utils/mailer'

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event)
  if (!email) throw createError({ statusCode: 400, statusMessage: 'Email is required.' })

  const user = await queryOne<any>('SELECT id FROM users WHERE email = ?', [email])

  // Always return success to avoid email enumeration
  if (!user) return { message: 'If that email exists, a reset link has been sent.' }

  const token   = crypto.randomBytes(32).toString('hex')
  const expires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

  await execute(
    'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, ?)',
    [user.id, token, expires]
  )

  const config   = useRuntimeConfig()
  const resetUrl = `${config.public.siteUrl}/reset-password?token=${token}`
  await sendPasswordResetEmail(email, resetUrl)

  return { message: 'If that email exists, a reset link has been sent.' }
})
