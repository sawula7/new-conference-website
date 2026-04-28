<template>
  <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16">
    <NuxtLink to="/" class="flex items-center gap-3 mb-8">
      <img src="/slstl-logo.png" alt="SLSTL" class="h-10 w-auto" />
      <div class="font-display font-black text-xl text-primary-darker">SLSTL <span class="text-accent">Portal</span></div>
    </NuxtLink>

    <div class="w-full max-w-sm bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div class="bg-primary px-6 py-5 text-center">
        <h1 class="font-display font-black text-white text-xl">Reset Password</h1>
        <p class="text-white/60 text-xs mt-1">Enter your email to receive a reset link</p>
      </div>

      <form v-if="!sent" class="p-6 space-y-4" @submit.prevent="submit">
        <div>
          <label class="block text-sm font-semibold text-slate-600 mb-1.5">Email Address</label>
          <input v-model="email" type="email" placeholder="your@email.com" required
                 class="w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition" />
        </div>
        <p v-if="error" class="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">{{ error }}</p>
        <button type="submit" :disabled="loading" class="w-full btn-primary py-3 font-bold disabled:opacity-60">
          <span v-if="loading" class="flex items-center justify-center gap-2"><Loader2 :size="15" class="animate-spin" /> Sending…</span>
          <span v-else>Send Reset Link</span>
        </button>
      </form>

      <div v-else class="p-6 text-center space-y-4">
        <CheckCircle2 :size="40" class="text-emerald-500 mx-auto" />
        <p class="text-sm text-slate-600">If that email is registered, a reset link has been sent. Please check your inbox.</p>
      </div>

      <div class="border-t border-slate-100 px-6 py-4 text-center">
        <NuxtLink to="/login" class="text-sm text-primary hover:underline">← Back to login</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2, CheckCircle2 } from 'lucide-vue-next'
definePageMeta({ layout: false })
useHead({ title: 'Reset Password — SLSTL' })

const email   = ref('')
const error   = ref('')
const loading = ref(false)
const sent    = ref(false)

async function submit() {
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/auth/forgot-password', { method: 'POST', body: { email: email.value } })
    sent.value = true
  } catch (e: any) {
    error.value = e?.data?.statusMessage ?? 'Something went wrong.'
  } finally {
    loading.value = false
  }
}
</script>
