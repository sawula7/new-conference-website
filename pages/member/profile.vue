<template>
  <div>
    <InnerPageHero title="My Profile" parent="Member Area" parent-href="/member" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">

        <!-- Read-only card -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">Membership Information</h3>
          </div>
          <div class="p-6 grid sm:grid-cols-2 gap-4 text-sm">
            <Info label="Membership No."   :value="user?.membershipNumber ?? '—'" mono />
            <Info label="Category"         :value="user?.membershipCategory ?? '—'" />
            <Info label="Email"            :value="profile?.email ?? '—'" />
            <Info label="NIC / Passport"   :value="profile?.nicNo ?? '—'" />
          </div>
        </div>

        <!-- Editable card -->
        <form class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden" @submit.prevent="save">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">Contact Details</h3>
          </div>
          <div class="p-6 space-y-4">
            <div>
              <label class="block text-sm font-semibold text-slate-600 mb-1.5">Address for Correspondence</label>
              <textarea v-model="form.address" rows="3" class="f-input resize-none" />
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-slate-600 mb-1.5">Work Phone</label>
                <input v-model="form.workPhone" type="tel" class="f-input" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-600 mb-1.5">Home Phone</label>
                <input v-model="form.homePhone" type="tel" class="f-input" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-600 mb-1.5">Mobile</label>
                <input v-model="form.mobile" type="tel" class="f-input" />
              </div>
            </div>
            <p v-if="msg" class="text-sm" :class="isError ? 'text-red-500' : 'text-emerald-600'">{{ msg }}</p>
            <button type="submit" :disabled="saving" class="btn-primary text-sm py-2.5 px-6 disabled:opacity-60">
              <span v-if="saving">Saving…</span>
              <span v-else>Save Changes</span>
            </button>
          </div>
        </form>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'member' })
useHead({ title: 'My Profile — SLSTL Member' })

const { user } = useAuth()
const { data: profile, refresh } = await useFetch('/api/member/profile')

const form = reactive({
  address:   '',
  workPhone: '',
  homePhone: '',
  mobile:    '',
})

watch(profile, (p) => {
  if (p) {
    form.address   = p.address   ?? ''
    form.workPhone = p.workPhone ?? ''
    form.homePhone = p.homePhone ?? ''
    form.mobile    = p.mobile    ?? ''
  }
}, { immediate: true })

const saving  = ref(false)
const msg     = ref('')
const isError = ref(false)

async function save() {
  saving.value = true
  msg.value = ''
  try {
    await $fetch('/api/member/profile', { method: 'PUT', body: form })
    msg.value = 'Changes saved successfully.'
    isError.value = false
    refresh()
  } catch (e: any) {
    msg.value = e?.data?.statusMessage ?? 'Save failed.'
    isError.value = true
  } finally {
    saving.value = false
  }
}
</script>

<script lang="ts">
// Small read-only display component defined inline
const Info = defineComponent({
  props: { label: String, value: String, mono: Boolean },
  template: `<div><p class="text-xs font-medium text-slate-400">{{ label }}</p>
              <p class="font-semibold text-slate-700 mt-0.5" :class="mono ? 'font-mono' : ''">{{ value }}</p></div>`,
})
</script>

<style scoped>
.f-input {
  @apply w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5
         focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition;
}
</style>
