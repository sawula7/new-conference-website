<template>
  <div>
    <InnerPageHero title="Member Area" subtitle="Welcome back to your SLSTL member dashboard." />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">

        <!-- Welcome card -->
        <div class="rounded-2xl text-white px-6 py-6 mb-8 shadow-md flex flex-wrap items-center justify-between gap-4"
             style="background: linear-gradient(135deg, #0a3d52 0%, #1786a5 100%)">
          <div>
            <p class="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Welcome back</p>
            <h2 class="font-display font-black text-xl">{{ profile?.fullName ?? user?.email }}</h2>
            <p class="text-white/70 text-sm mt-0.5">{{ profile?.membershipCategory }}</p>
          </div>
          <div class="text-right">
            <p class="text-white/60 text-xs">Membership No.</p>
            <p class="font-mono font-black text-2xl text-accent">{{ user?.membershipNumber ?? '—' }}</p>
          </div>
        </div>

        <!-- Quick stats -->
        <div class="grid sm:grid-cols-3 gap-5 mb-8">
          <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Status</p>
            <span class="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600">
              <CheckCircle2 :size="14" /> Active Member
            </span>
          </div>
          <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Category</p>
            <p class="text-sm font-bold text-primary-darker">{{ user?.membershipCategory ?? '—' }}</p>
          </div>
          <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Pending Fees</p>
            <p class="text-sm font-bold" :class="pendingCount > 0 ? 'text-red-500' : 'text-slate-700'">
              {{ pendingCount }} unpaid year{{ pendingCount !== 1 ? 's' : '' }}
            </p>
          </div>
        </div>

        <!-- Navigation cards -->
        <div class="grid sm:grid-cols-3 gap-5">
          <NuxtLink to="/member/profile"
                    class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <User :size="22" class="text-primary mb-3" />
            <h3 class="font-display font-bold text-primary-darker">My Profile</h3>
            <p class="text-xs text-slate-400 mt-1">View and update your contact details</p>
          </NuxtLink>
          <NuxtLink to="/member/payments"
                    class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <CreditCard :size="22" class="text-primary mb-3" />
            <h3 class="font-display font-bold text-primary-darker">Payments</h3>
            <p class="text-xs text-slate-400 mt-1">View history and pay pending fees</p>
          </NuxtLink>
          <NuxtLink to="/member/events"
                    class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <Calendar :size="22" class="text-primary mb-3" />
            <h3 class="font-display font-bold text-primary-darker">Events</h3>
            <p class="text-xs text-slate-400 mt-1">Browse and register for SLSTL events</p>
          </NuxtLink>
          <button class="text-left bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  @click="logout">
            <LogOut :size="22" class="text-slate-400 mb-3" />
            <h3 class="font-display font-bold text-slate-500">Sign Out</h3>
            <p class="text-xs text-slate-400 mt-1">Log out of your account</p>
          </button>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2, User, CreditCard, LogOut, Calendar } from 'lucide-vue-next'
definePageMeta({ middleware: 'member' })
useHead({ title: 'Member Dashboard — SLSTL' })

const { user, logout } = useAuth()

const { data: profile } = await useFetch('/api/member/profile')
const { data: feesData } = await useFetch('/api/member/fees')

const pendingCount = computed(() =>
  (feesData.value?.fees ?? []).filter((f: any) => f.paymentStatus !== 'completed').length
)
</script>
