import bcrypt from 'bcryptjs'
import { queryOne, execute } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const { token, password } = await readBody(event)

  if (!token || !password)
    throw createError({ statusCode: 400, statusMessage: 'Token and new password are required.' })

  if (password.length < 8)
    throw createError({ statusCode: 400, statusMessage: 'Password must be at least 8 characters.' })

  const record = await queryOne<any>(
    'SELECT id, user_id, expires_at, used FROM password_reset_tokens WHERE token = ?',
    [token]
  )

  if (!record || record.used || new Date(record.expires_at) < new Date())
    throw createError({ statusCode: 400, statusMessage: 'Reset link is invalid or has expired.' })

  const hash = await bcrypt.hash(password, 12)

  await execute('UPDATE users SET password_hash = ? WHERE id = ?', [hash, record.user_id])
  await execute('UPDATE password_reset_tokens SET used = TRUE WHERE id = ?', [record.id])

  return { message: 'Password updated successfully. You can now log in.' }
})
