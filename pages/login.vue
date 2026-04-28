<template>
  <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16">
    <!-- Logo -->
    <NuxtLink to="/" class="flex items-center gap-3 mb-8">
      <img src="/slstl-logo.png" alt="SLSTL" class="h-10 w-auto" />
      <div class="font-display font-black text-xl text-primary-darker">
        SLSTL <span class="text-accent">Portal</span>
      </div>
    </NuxtLink>

    <div class="w-full max-w-sm bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div class="bg-primary px-6 py-5 text-center">
        <h1 class="font-display font-black text-white text-xl">Member Login</h1>
        <p class="text-white/60 text-xs mt-1">Sri Lanka Society of Transport &amp; Logistics</p>
      </div>

      <form class="p-6 space-y-4" @submit.prevent="submit">
        <div>
          <label class="block text-sm font-semibold text-slate-600 mb-1.5">Email Address</label>
          <input v-model="email" type="email" placeholder="your@email.com" required
                 class="w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition" />
        </div>
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label class="text-sm font-semibold text-slate-600">Password</label>
            <NuxtLink to="/forgot-password" class="text-xs text-primary hover:underline">Forgot password?</NuxtLink>
          </div>
          <input v-model="password" type="password" placeholder="••••••••" required
                 class="w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition" />
        </div>

        <p v-if="error" class="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">{{ error }}</p>

        <button type="submit" :disabled="loading"
                class="w-full btn-accent py-3 font-bold disabled:opacity-60 disabled:cursor-not-allowed">
          <span v-if="loading" class="flex items-center justify-center gap-2">
            <Loader2 :size="15" class="animate-spin" /> Signing in…
          </span>
          <span v-else>Sign In</span>
        </button>
      </form>

      <div class="border-t border-slate-100 px-6 py-4 text-center">
        <p class="text-sm text-slate-500">
          Not a member yet?
          <NuxtLink to="/membership/apply" class="text-primary font-semibold hover:underline">Apply for membership</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

definePageMeta({ layout: false })
useHead({ title: 'Login — SLSTL Member Portal' })

const { login, user } = useAuth()

// Redirect if already logged in
if (user.value?.role === 'admin')                                          navigateTo('/admin')
else if (user.value?.role === 'manager')                                   navigateTo('/manager')
else if (user.value?.status === 'active')                                  navigateTo('/member')
else if (user.value?.status === 'pending')                                 navigateTo('/pending')

const email    = ref('')
const password = ref('')
const error    = ref('')
const loading  = ref(false)

async function submit() {
  error.value = ''
  loading.value = true
  try {
    const u = await login(email.value, password.value)
    if (u.role === 'admin') {
      await navigateTo('/admin')
    } else if (u.role === 'manager') {
      await navigateTo('/manager')
    } else if (u.status === 'active') {
      await navigateTo('/member')
    } else {
      await navigateTo('/pending')
    }
  } catch (e: any) {
    error.value = e?.data?.statusMessage ?? e?.message ?? 'Login failed.'
  } finally {
    loading.value = false
  }
}
</script>
