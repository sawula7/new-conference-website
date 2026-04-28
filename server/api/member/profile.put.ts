import { requireActive } from '~/server/utils/auth'
import { execute } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const auth = requireActive(event)
  const { address, workPhone, homePhone, mobile } = await readBody(event)

  await execute(
    `UPDATE membership_applications
     SET address = ?, work_phone = ?, home_phone = ?, mobile = ?
     WHERE user_id = ? AND status = 'approved'`,
    [address, workPhone, homePhone, mobile, auth.userId]
  )

  return { message: 'Profile updated.' }
})
