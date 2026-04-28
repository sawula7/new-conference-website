import { requireRole } from '~/server/utils/auth'
import { execute, queryOne } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  requireRole(event, ['admin'])

  const id   = getRouterParam(event, 'id')
  const body = await readBody(event)

  const user = await queryOne<any>('SELECT id FROM users WHERE id = ?', [id])
  if (!user) throw createError({ statusCode: 404, statusMessage: 'User not found.' })

  const fields: string[] = []
  const values: any[]   = []

  if (body.role)   { fields.push('role = ?');   values.push(body.role)   }
  if (body.status) { fields.push('status = ?'); values.push(body.status) }

  if (!fields.length)
    throw createError({ statusCode: 400, statusMessage: 'Nothing to update.' })

  values.push(id)
  await execute(`UPDATE users SET ${fields.join(', ')} WHERE id = ?`, values)

  return { message: 'User updated.' }
})
