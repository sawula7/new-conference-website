<template>
  <div>
    <InnerPageHero title="Manager Dashboard" subtitle="SLSTL Membership Management" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">

        <div class="grid sm:grid-cols-3 gap-5 mb-8">
          <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Pending Applications</p>
            <p class="font-black text-3xl" :class="(stats?.pending ?? 0) > 0 ? 'text-accent-darker' : 'text-slate-300'">
              {{ stats?.pending ?? 0 }}
            </p>
          </div>
          <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Active Members</p>
            <p class="font-black text-3xl text-primary-darker">{{ stats?.active ?? 0 }}</p>
          </div>
          <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Logged in as</p>
            <p class="text-sm font-bold text-slate-700 truncate">{{ user?.email }}</p>
            <span class="text-[10px] font-bold uppercase tracking-wide text-primary">{{ user?.role }}</span>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-5">
          <NuxtLink to="/manager/applications"
                    class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <FileText :size="22" class="text-primary mb-3" />
            <h3 class="font-display font-bold text-primary-darker">Applications</h3>
            <p class="text-xs text-slate-400 mt-1">Review and approve membership applications</p>
            <span v-if="(stats?.pending ?? 0) > 0"
                  class="inline-block mt-3 text-[10px] font-bold uppercase tracking-wide bg-accent/20 text-accent-darker px-2.5 py-1 rounded-full">
              {{ stats?.pending }} pending
            </span>
          </NuxtLink>
          <NuxtLink to="/manager/fees"
                    class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <DollarSign :size="22" class="text-primary mb-3" />
            <h3 class="font-display font-bold text-primary-darker">Fee Schedule</h3>
            <p class="text-xs text-slate-400 mt-1">Manage annual membership fees by category and year</p>
          </NuxtLink>
        </div>

        <div class="mt-6 text-right">
          <button class="text-sm text-slate-400 hover:text-red-500 transition-colors" @click="logout">Sign Out</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FileText, DollarSign } from 'lucide-vue-next'
definePageMeta({ middleware: 'manager' })
useHead({ title: 'Manager Dashboard — SLSTL' })

const { user, logout } = useAuth()

const { data: stats } = await useFetch<any>('/api/manager/stats')
</script>
