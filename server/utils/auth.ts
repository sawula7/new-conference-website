import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'

export interface AuthPayload {
  userId: number
  email:  string
  role:   string
  status: string
}

export function signToken(payload: AuthPayload): string {
  const config = useRuntimeConfig()
  return jwt.sign(payload, config.jwtSecret as string, { expiresIn: '7d' })
}

export function verifyToken(token: string): AuthPayload | null {
  try {
    const config = useRuntimeConfig()
    return jwt.verify(token, config.jwtSecret as string) as AuthPayload
  } catch {
    return null
  }
}

export function getAuthUser(event: H3Event): AuthPayload | null {
  const token = getCookie(event, 'slstl_auth')
  if (!token) return null
  return verifyToken(token)
}

export function requireAuth(event: H3Event): AuthPayload {
  const user = getAuthUser(event)
  if (!user) throw createError({ statusCode: 401, statusMessage: 'Authentication required.' })
  return user
}

export function requireRole(event: H3Event, roles: string[]): AuthPayload {
  const user = requireAuth(event)
  if (!roles.includes(user.role))
    throw createError({ statusCode: 403, statusMessage: 'Insufficient permissions.' })
  return user
}

export function requireActive(event: H3Event): AuthPayload {
  const user = requireAuth(event)
  if (user.status !== 'active')
    throw createError({ statusCode: 403, statusMessage: 'Account not yet activated.' })
  return user
}

export function setAuthCookie(event: H3Event, token: string) {
  setCookie(event, 'slstl_auth', token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   60 * 60 * 24 * 7,   // 7 days
    path:     '/',
  })
}

export function clearAuthCookie(event: H3Event) {
  deleteCookie(event, 'slstl_auth', { path: '/' })
}
