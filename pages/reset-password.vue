<template>
  <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16">
    <NuxtLink to="/" class="flex items-center gap-3 mb-8">
      <img src="/slstl-logo.png" alt="SLSTL" class="h-10 w-auto" />
      <div class="font-display font-black text-xl text-primary-darker">SLSTL <span class="text-accent">Portal</span></div>
    </NuxtLink>

    <div class="w-full max-w-sm bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div class="bg-primary px-6 py-5 text-center">
        <h1 class="font-display font-black text-white text-xl">Set New Password</h1>
      </div>

      <form v-if="!done" class="p-6 space-y-4" @submit.prevent="submit">
        <div>
          <label class="block text-sm font-semibold text-slate-600 mb-1.5">New Password</label>
          <input v-model="password" type="password" placeholder="Min 8 characters" required minlength="8"
                 class="w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-slate-600 mb-1.5">Confirm Password</label>
          <input v-model="confirm" type="password" placeholder="Repeat password" required
                 class="w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition" />
        </div>
        <p v-if="error" class="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">{{ error }}</p>
        <button type="submit" :disabled="loading" class="w-full btn-primary py-3 font-bold disabled:opacity-60">
          <span v-if="loading" class="flex items-center justify-center gap-2"><Loader2 :size="15" class="animate-spin" /> Updating…</span>
          <span v-else>Set New Password</span>
        </button>
      </form>

      <div v-else class="p-6 text-center space-y-4">
        <CheckCircle2 :size="40" class="text-emerald-500 mx-auto" />
        <p class="text-sm text-slate-600">Password updated successfully!</p>
        <NuxtLink to="/login" class="btn-primary inline-block">Go to Login</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2, CheckCircle2 } from 'lucide-vue-next'
definePageMeta({ layout: false })
useHead({ title: 'Set New Password — SLSTL' })

const route    = useRoute()
const token    = route.query.token as string

const password = ref('')
const confirm  = ref('')
const error    = ref('')
const loading  = ref(false)
const done     = ref(false)

async function submit() {
  if (password.value !== confirm.value) { error.value = 'Passwords do not match.'; return }
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/auth/reset-password', { method: 'POST', body: { token, password: password.value } })
    done.value = true
  } catch (e: any) {
    error.value = e?.data?.statusMessage ?? 'Reset failed. The link may have expired.'
  } finally {
    loading.value = false
  }
}
</script>
