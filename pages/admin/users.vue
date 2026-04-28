<template>
  <div>
    <InnerPageHero title="User Management" parent="Admin" parent-href="/admin" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">

        <!-- Create user form -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">Create User</h3>
          </div>
          <form class="p-6 grid sm:grid-cols-2 gap-4" @submit.prevent="createUser">
            <div>
              <label class="f-label">Email <span class="text-red-500">*</span></label>
              <input v-model="newUser.email" type="email" class="f-input" required />
            </div>
            <div>
              <label class="f-label">Password <span class="text-red-500">*</span></label>
              <input v-model="newUser.password" type="text" class="f-input" placeholder="Will be emailed to user" required minlength="8" />
            </div>
            <div>
              <label class="f-label">Role <span class="text-red-500">*</span></label>
              <select v-model="newUser.role" class="f-input" required>
                <option value="user">User (Member)</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label class="f-label">Status</label>
              <select v-model="newUser.status" class="f-input">
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <p v-if="createError"   class="sm:col-span-2 text-xs text-red-500">{{ createError }}</p>
            <p v-if="createSuccess" class="sm:col-span-2 text-xs text-emerald-600">{{ createSuccess }}</p>
            <div class="sm:col-span-2">
              <button type="submit" :disabled="creating" class="btn-primary text-sm py-2.5 px-6 disabled:opacity-60">
                <span v-if="creating">Creating…</span><span v-else>Create User</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Users table -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4 flex items-center justify-between gap-3">
            <h3 class="font-display font-bold text-primary-darker">All Users</h3>
            <input v-model="search" type="search" placeholder="Search email…" class="f-input text-xs w-48 py-1.5" />
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-slate-50 text-left">
                  <th class="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Email</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Role</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Member #</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-if="filteredUsers.length === 0">
                  <td colspan="5" class="px-5 py-8 text-center text-slate-400">No users found.</td>
                </tr>
                <tr v-for="u in filteredUsers" :key="u.id" class="hover:bg-slate-50 transition-colors">
                  <td class="px-5 py-3 font-medium text-slate-700">{{ u.email }}</td>
                  <td class="px-4 py-3">
                    <select class="text-xs border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:border-primary/60"
                            :value="u.role" @change="updateUser(u.id, 'role', ($event.target as HTMLSelectElement).value)">
                      <option value="user">user</option>
                      <option value="manager">manager</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                  <td class="px-4 py-3">
                    <select class="text-xs border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:border-primary/60"
                            :value="u.status" @change="updateUser(u.id, 'status', ($event.target as HTMLSelectElement).value)">
                      <option value="active">active</option>
                      <option value="pending">pending</option>
                      <option value="rejected">rejected</option>
                      <option value="suspended">suspended</option>
                    </select>
                  </td>
                  <td class="px-4 py-3 text-slate-500 text-xs">{{ u.membership_number ?? '—' }}</td>
                  <td class="px-4 py-3">
                    <button class="text-xs text-red-400 hover:text-red-600 font-semibold transition-colors"
                            @click="deleteUser(u.id, u.email)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin' })
useHead({ title: 'User Management — SLSTL Admin' })

const { data: users, refresh } = await useFetch<any[]>('/api/admin/users')

const search = ref('')
const filteredUsers = computed(() =>
  (users.value ?? []).filter(u =>
    !search.value || u.email.toLowerCase().includes(search.value.toLowerCase())
  )
)

const newUser = reactive({ email: '', password: '', role: 'user', status: 'active' })
const creating      = ref(false)
const createError   = ref('')
const createSuccess = ref('')

async function createUser() {
  creating.value      = true
  createError.value   = ''
  createSuccess.value = ''
  try {
    await $fetch('/api/admin/users', { method: 'POST', body: { ...newUser } })
    createSuccess.value = `User ${newUser.email} created and welcome email sent.`
    newUser.email = ''; newUser.password = ''
    refresh()
  } catch (e: any) {
    createError.value = e?.data?.statusMessage ?? 'Failed to create user.'
  } finally {
    creating.value = false
  }
}

async function updateUser(id: number, field: 'role' | 'status', value: string) {
  await $fetch(`/api/admin/users/${id}`, { method: 'PUT', body: { [field]: value } })
  refresh()
}

async function deleteUser(id: number, email: string) {
  if (!confirm(`Delete user ${email}? This cannot be undone.`)) return
  await $fetch(`/api/admin/users/${id}`, { method: 'DELETE' })
  refresh()
}
</script>

<style scoped>
.f-input { @apply w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition; }
.f-label { @apply block text-sm font-semibold text-slate-600 mb-1.5; }
</style>
