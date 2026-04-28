import { requireRole } from '~/server/utils/auth'
import { execute, queryOne } from '~/server/utils/db'

const VALID_CATEGORIES = [
  'Temporary Member', 'Graduate Student Member', 'Associate Member',
  'Regular Member', 'Fellow Member', 'Life Member', 'Honorary Member',
]

export default defineEventHandler(async (event) => {
  const auth = requireRole(event, ['manager', 'admin'])
  const { membership_category, year, amount, due_date, description } = await readBody(event)

  if (!membership_category || !year || amount == null)
    throw createError({ statusCode: 400, statusMessage: 'membership_category, year, and amount are required.' })

  if (!VALID_CATEGORIES.includes(membership_category))
    throw createError({ statusCode: 400, statusMessage: 'Invalid membership category.' })

  if (parseFloat(amount) < 0)
    throw createError({ statusCode: 400, statusMessage: 'Amount must be non-negative.' })

  const existing = await queryOne<any>(
    'SELECT id FROM membership_fees WHERE membership_category = ? AND year = ?',
    [membership_category, year]
  )
  if (existing)
    throw createError({ statusCode: 409, statusMessage: `A fee for ${membership_category} / ${year} already exists. Delete it first or update the existing record.` })

  const result = await execute(
    'INSERT INTO membership_fees (membership_category, year, amount, due_date, description, created_by) VALUES (?,?,?,?,?,?)',
    [membership_category, year, amount, due_date || null, description || null, auth.userId]
  )

  return { id: result.insertId, message: 'Fee added.' }
})
