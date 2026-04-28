import { requireRole, getAuthUser } from '~/server/utils/auth'
import { execute } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const me = requireRole(event, ['admin'])
  const id = getRouterParam(event, 'id')

  if (String(me.userId) === String(id))
    throw createError({ statusCode: 400, statusMessage: 'You cannot delete your own account.' })

  await execute('DELETE FROM users WHERE id = ?', [id])
  return { message: 'User deleted.' }
})
