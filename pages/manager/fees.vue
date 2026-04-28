<template>
  <div>
    <InnerPageHero title="Fee Schedule" parent="Manager" parent-href="/manager" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">

        <!-- Add fee form -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">Add Fee</h3>
          </div>
          <form class="p-6 grid sm:grid-cols-2 gap-4" @submit.prevent="addFee">
            <div>
              <label class="block text-sm font-semibold text-slate-600 mb-1.5">Membership Category <span class="text-red-500">*</span></label>
              <select v-model="newFee.membership_category" class="f-input" required>
                <option value="">— Select —</option>
                <option v-for="cat in CATEGORIES" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-600 mb-1.5">Year <span class="text-red-500">*</span></label>
              <input v-model="newFee.year" type="number" min="2020" max="2099" placeholder="e.g. 2026" class="f-input" required />
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-600 mb-1.5">Amount (LKR) <span class="text-red-500">*</span></label>
              <input v-model="newFee.amount" type="number" min="0" step="0.01" placeholder="0.00" class="f-input" required />
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-600 mb-1.5">Due Date</label>
              <input v-model="newFee.due_date" type="date" class="f-input" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold text-slate-600 mb-1.5">Description</label>
              <input v-model="newFee.description" type="text" placeholder="e.g. Annual membership fee 2026" class="f-input" />
            </div>
            <p v-if="addError" class="sm:col-span-2 text-xs text-red-500">{{ addError }}</p>
            <p v-if="addSuccess" class="sm:col-span-2 text-xs text-emerald-600">{{ addSuccess }}</p>
            <div class="sm:col-span-2">
              <button type="submit" :disabled="adding" class="btn-primary text-sm py-2.5 px-6 disabled:opacity-60">
                <span v-if="adding">Adding…</span>
                <span v-else>Add Fee</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Fee table -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">Current Fee Schedule</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-slate-50 text-left">
                  <th class="px-6 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wide">Category</th>
                  <th class="px-4 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wide">Year</th>
                  <th class="px-4 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wide">Amount (LKR)</th>
                  <th class="px-4 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wide">Due Date</th>
                  <th class="px-4 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-if="!fees || fees.length === 0">
                  <td colspan="5" class="px-6 py-8 text-center text-slate-400">No fees configured yet.</td>
                </tr>
                <tr v-for="fee in fees" :key="fee.id" class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-3 font-medium text-slate-700">{{ fee.membership_category }}</td>
                  <td class="px-4 py-3 text-slate-600">{{ fee.year }}</td>
                  <td class="px-4 py-3 font-semibold text-primary-darker">{{ parseFloat(fee.amount).toLocaleString() }}</td>
                  <td class="px-4 py-3 text-slate-500">{{ fee.due_date ? new Date(fee.due_date).toLocaleDateString() : '—' }}</td>
                  <td class="px-4 py-3">
                    <button class="text-xs text-red-400 hover:text-red-600 transition-colors font-semibold"
                            @click="deleteFee(fee.id)">Delete</button>
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
definePageMeta({ middleware: 'manager' })
useHead({ title: 'Fee Schedule — SLSTL Manager' })

const CATEGORIES = [
  'Temporary Member', 'Graduate Student Member', 'Associate Member',
  'Regular Member', 'Fellow Member', 'Life Member', 'Honorary Member',
]

const { data: fees, refresh } = await useFetch<any[]>('/api/manager/fees')

const newFee = reactive({
  membership_category: '',
  year: new Date().getFullYear() + 1,
  amount: '',
  due_date: '',
  description: '',
})

const adding    = ref(false)
const addError  = ref('')
const addSuccess = ref('')

async function addFee() {
  adding.value = true
  addError.value = ''
  addSuccess.value = ''
  try {
    await $fetch('/api/manager/fees', { method: 'POST', body: { ...newFee } })
    addSuccess.value = 'Fee added successfully.'
    newFee.membership_category = ''
    newFee.amount = ''
    newFee.due_date = ''
    newFee.description = ''
    refresh()
  } catch (e: any) {
    addError.value = e?.data?.statusMessage ?? 'Failed to add fee.'
  } finally {
    adding.value = false
  }
}

async function deleteFee(id: number) {
  if (!confirm('Delete this fee?')) return
  await $fetch(`/api/manager/fees/${id}`, { method: 'DELETE' })
  refresh()
}
</script>

<style scoped>
.f-input {
  @apply w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5
         focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition;
}
</style>
