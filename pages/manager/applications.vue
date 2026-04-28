<template>
  <div>
    <InnerPageHero title="Membership Applications" parent="Manager" parent-href="/manager" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">

        <!-- Filter tabs -->
        <div class="flex gap-2 flex-wrap">
          <button v-for="tab in ['pending','approved','rejected']" :key="tab"
                  class="px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors"
                  :class="filter === tab
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-primary/40'"
                  @click="filter = tab; refresh()">
            {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
          </button>
        </div>

        <!-- Table -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div v-if="!apps || apps.length === 0" class="px-6 py-12 text-center text-slate-400 text-sm">
            No {{ filter }} applications.
          </div>
          <div v-else class="divide-y divide-slate-100">
            <div v-for="app in apps" :key="app.id"
                 class="px-6 py-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p class="font-semibold text-slate-700">{{ app.full_name }}</p>
                <p class="text-xs text-slate-400">{{ app.account_email }} · {{ app.apply_for }}</p>
                <p class="text-xs text-slate-400">Applied: {{ new Date(app.created_at).toLocaleDateString() }}</p>
              </div>
              <div class="flex items-center gap-2">
                <button class="text-xs text-primary hover:underline font-semibold" @click="openApp(app)">
                  View
                </button>
                <template v-if="app.status === 'pending'">
                  <button class="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors"
                          @click="action(app.id, 'approve')">
                    Approve
                  </button>
                  <button class="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                          @click="action(app.id, 'reject')">
                    Reject
                  </button>
                </template>
                <span v-else class="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full"
                      :class="app.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'">
                  {{ app.status }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Detail drawer -->
        <div v-if="selected" class="bg-white rounded-2xl border border-slate-100 shadow-md p-6 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-display font-bold text-primary-darker text-lg">{{ selected.full_name }}</h3>
            <button class="text-slate-400 hover:text-slate-600" @click="selected = null">✕</button>
          </div>
          <div class="grid sm:grid-cols-2 gap-3 text-sm">
            <p><span class="font-medium text-slate-400">Email:</span> {{ selected.account_email }}</p>
            <p><span class="font-medium text-slate-400">NIC:</span> {{ selected.nic_no }}</p>
            <p><span class="font-medium text-slate-400">Mobile:</span> {{ selected.mobile }}</p>
            <p><span class="font-medium text-slate-400">Gender:</span> {{ selected.gender }}</p>
            <p><span class="font-medium text-slate-400">Applying for:</span> {{ selected.apply_for }}</p>
            <p v-if="selected.upgrade_from"><span class="font-medium text-slate-400">Upgrading from:</span> {{ selected.upgrade_from }}</p>
          </div>
          <div v-if="selected.address">
            <p class="text-xs font-medium text-slate-400">Address</p>
            <p class="text-sm text-slate-700">{{ selected.address }}</p>
          </div>

          <template v-if="selected.status === 'pending'">
            <div>
              <label class="block text-sm font-semibold text-slate-600 mb-1.5">Notes (optional)</label>
              <textarea v-model="notes" rows="2" class="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition resize-none" />
            </div>
            <div class="flex gap-3">
              <button class="btn-primary text-sm py-2 px-5" @click="action(selected.id, 'approve')">Approve</button>
              <button class="bg-red-500 text-white text-sm py-2 px-5 rounded-xl font-bold hover:bg-red-600 transition" @click="action(selected.id, 'reject')">Reject</button>
            </div>
          </template>
          <p v-if="actionMsg" class="text-sm font-medium" :class="actionErr ? 'text-red-500' : 'text-emerald-600'">{{ actionMsg }}</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'manager' })
useHead({ title: 'Applications — SLSTL Manager' })

const filter   = ref('pending')
const selected = ref<any>(null)
const notes    = ref('')
const actionMsg = ref('')
const actionErr = ref(false)

const { data: apps, refresh } = await useFetch<any[]>(() => `/api/manager/applications?status=${filter.value}`)

async function openApp(app: any) {
  const detail = await $fetch<any>(`/api/manager/applications/${app.id}`)
  selected.value = detail
  notes.value = ''
  actionMsg.value = ''
}

async function action(id: number, act: 'approve' | 'reject') {
  try {
    const res = await $fetch<any>(`/api/manager/applications/${id}`, {
      method: 'PUT',
      body:   { action: act, notes: notes.value },
    })
    actionMsg.value = res.message
    actionErr.value = false
    selected.value  = null
    refresh()
  } catch (e: any) {
    actionMsg.value = e?.data?.statusMessage ?? 'Action failed.'
    actionErr.value = true
  }
}
</script>
