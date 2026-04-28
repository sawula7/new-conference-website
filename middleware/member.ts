export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuth()
  if (!user.value) return navigateTo('/login')
  if (user.value.status === 'pending') return navigateTo('/pending')
  if (user.value.status !== 'active') return navigateTo('/login')
})
