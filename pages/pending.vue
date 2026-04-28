<template>
  <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16 text-center">
    <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
      <Clock :size="32" class="text-accent" />
    </div>
    <h1 class="font-display font-black text-primary-darker text-2xl mb-3">Application Under Review</h1>
    <p class="text-slate-500 max-w-md mb-6 leading-relaxed">
      Your membership application has been received and is currently being reviewed by the SLSTL secretariat.
      You will be notified at <strong class="text-slate-700">{{ user?.email }}</strong> once a decision has been made.
    </p>
    <p class="text-sm text-slate-400 mb-8">For queries: <a href="mailto:admin.secretary@slstl.lk" class="text-primary hover:underline">admin.secretary@slstl.lk</a></p>
    <button class="btn-outline-primary text-sm" @click="logout">Sign Out</button>
  </div>
</template>

<script setup lang="ts">
import { Clock } from 'lucide-vue-next'
definePageMeta({ layout: false, middleware: 'auth' })
useHead({ title: 'Application Pending — SLSTL' })
const { user, logout } = useAuth()
if (user.value?.status === 'active') navigateTo('/member')
</script>
