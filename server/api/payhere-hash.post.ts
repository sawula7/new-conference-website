import { createHash } from 'node:crypto'

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    merchant_id: string
    order_id: string
    amount: string
    currency: string
  }>(event)

  const config = useRuntimeConfig()
  const secret = config.payhereSecret

  if (!secret) {
    throw createError({ statusCode: 500, statusMessage: 'Payment service is not configured on this server.' })
  }

  const { merchant_id, order_id, amount, currency } = body

  if (!merchant_id || !order_id || !amount || !currency) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required payment fields.' })
  }

  // PayHere hash algorithm:
  // MD5( merchant_id + order_id + amountFormatted + currency + MD5(secret).toUpperCase() ).toUpperCase()
  const amountFormatted = parseFloat(amount).toFixed(2)
  const hashedSecret = createHash('md5').update(secret).digest('hex').toUpperCase()
  const hash = createHash('md5')
    .update(merchant_id + order_id + amountFormatted + currency + hashedSecret)
    .digest('hex')
    .toUpperCase()

  return { hash }
})
