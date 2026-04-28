export interface AuthUser {
  id:                  number
  email:               string
  role:                'user' | 'manager' | 'admin'
  status:              'pending' | 'active' | 'rejected' | 'suspended'
  membershipNumber:    string | null
  membershipCategory:  string | null
}

export const useAuth = () => {
  const user = useState<AuthUser | null>('auth-user', () => null)

  const fetchUser = async () => {
    try {
      const data = await $fetch<AuthUser | null>('/api/auth/me')
      user.value = data
    } catch {
      user.value = null
    }
  }

  const login = async (email: string, password: string) => {
    const data = await $fetch<{ user: AuthUser }>('/api/auth/login', {
      method: 'POST',
      body:   { email, password },
    })
    user.value = data.user
    return data.user
  }

  const logout = async () => {
    await $fetch('/api/auth/logout', { method: 'POST' })
    user.value = null
    await navigateTo('/login')
  }

  const isActive   = computed(() => user.value?.status === 'active')
  const isManager  = computed(() => ['manager', 'admin'].includes(user.value?.role ?? ''))
  const isAdmin    = computed(() => user.value?.role === 'admin')

  return { user, fetchUser, login, logout, isActive, isManager, isAdmin }
}
