export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuth()
  if (!user.value) return navigateTo('/login')
  if (!['manager', 'admin'].includes(user.value.role)) return navigateTo('/')
})
