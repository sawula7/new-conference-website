<template>
  <section class="py-10 bg-slate-50 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">

      <form @submit.prevent="save">

        <!-- Basic info -->
        <FormCard title="Event Details" class="mb-6">
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="sm:col-span-2">
              <FLabel required>Title</FLabel>
              <input v-model="form.title" type="text" class="f-input" required />
            </div>
            <div>
              <FLabel required>Category</FLabel>
              <select v-model="form.category" class="f-input" required>
                <option v-for="c in CATEGORIES" :key="c" :value="c">{{ c }}</option>
              </select>
            </div>
            <div>
              <FLabel required>Status</FLabel>
              <select v-model="form.status" class="f-input">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <FLabel>Event Date</FLabel>
              <input v-model="form.event_date" type="date" class="f-input" />
            </div>
            <div>
              <FLabel>Platform / Mode</FLabel>
              <input v-model="form.platform" type="text" class="f-input" placeholder="Zoom, In-person…" />
            </div>
            <div>
              <FLabel>Start Time</FLabel>
              <input v-model="form.time_start" type="time" class="f-input" />
            </div>
            <div>
              <FLabel>End Time</FLabel>
              <input v-model="form.time_end" type="time" class="f-input" />
            </div>
            <div class="sm:col-span-2">
              <FLabel>Venue Name</FLabel>
              <input v-model="form.venue" type="text" class="f-input" />
            </div>
            <div class="sm:col-span-2">
              <FLabel>Location / Address</FLabel>
              <input v-model="form.location" type="text" class="f-input" />
            </div>
            <div class="sm:col-span-2">
              <FLabel>Short Description</FLabel>
              <input v-model="form.short_description" type="text" class="f-input" maxlength="500" />
            </div>
            <div class="sm:col-span-2">
              <FLabel>Full Description (HTML supported)</FLabel>
              <textarea v-model="form.description" rows="5" class="f-input resize-y" />
            </div>
            <div>
              <FLabel>Image URL</FLabel>
              <input v-model="form.image_url" type="url" class="f-input" />
            </div>
            <div>
              <FLabel>Capacity</FLabel>
              <input v-model="form.capacity" type="number" min="1" class="f-input" />
            </div>
            <div>
              <FLabel>Registration Deadline</FLabel>
              <input v-model="form.registration_deadline" type="date" class="f-input" />
            </div>
          </div>
        </FormCard>

        <!-- Fees -->
        <FormCard title="Registration Fees" class="mb-6">
          <div class="flex items-center gap-3 mb-4">
            <input id="is_free" v-model="form.is_free" type="checkbox" class="rounded border-slate-300 text-primary focus:ring-primary/30" />
            <label for="is_free" class="text-sm font-semibold text-slate-600 cursor-pointer">This is a free event</label>
          </div>
          <div v-if="!form.is_free" class="grid sm:grid-cols-3 gap-4">
            <div>
              <FLabel>General / Non-Member (LKR)</FLabel>
              <input v-model="form.general_fee" type="number" min="0" step="0.01" class="f-input" />
            </div>
            <div>
              <FLabel>SLSTL Member (LKR)</FLabel>
              <input v-model="form.member_fee" type="number" min="0" step="0.01" class="f-input" />
            </div>
            <div>
              <FLabel>Student (LKR)</FLabel>
              <input v-model="form.student_fee" type="number" min="0" step="0.01" class="f-input" />
            </div>
          </div>
        </FormCard>

        <!-- Submit -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex items-center gap-4">
          <button type="submit" :disabled="saving" class="btn-primary text-sm py-2.5 px-6 disabled:opacity-60">
            <span v-if="saving">Saving…</span>
            <span v-else>{{ isEdit ? 'Save Changes' : 'Create Event' }}</span>
          </button>
          <NuxtLink to="/manager/events" class="text-sm text-slate-400 hover:text-slate-600 transition-colors">Cancel</NuxtLink>
          <p v-if="error" class="text-sm text-red-500 ml-auto">{{ error }}</p>
        </div>

      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ event?: any }>()
const emit  = defineEmits<{ (e: 'saved'): void }>()

const CATEGORIES = ['webinar', 'workshop', 'conference', 'seminar', 'other']

const isEdit = computed(() => !!props.event?.id)

const form = reactive({
  title: '', short_description: '', description: '',
  event_date: '', time_start: '', time_end: '',
  venue: '', location: '', category: 'webinar', platform: '',
  status: 'draft', image_url: '', is_free: false,
  general_fee: '', member_fee: '', student_fee: '',
  capacity: '', registration_deadline: '',
})

watch(() => props.event, (ev) => {
  if (!ev) return
  Object.assign(form, {
    title:                 ev.title               ?? '',
    short_description:     ev.short_description   ?? '',
    description:           ev.description         ?? '',
    event_date:            ev.event_date ? ev.event_date.split('T')[0] : '',
    time_start:            ev.time_start           ?? '',
    time_end:              ev.time_end             ?? '',
    venue:                 ev.venue               ?? '',
    location:              ev.location            ?? '',
    category:              ev.category            ?? 'webinar',
    platform:              ev.platform            ?? '',
    status:                ev.status              ?? 'draft',
    image_url:             ev.image_url           ?? '',
    is_free:               !!ev.is_free,
    general_fee:           ev.general_fee         ?? '',
    member_fee:            ev.member_fee          ?? '',
    student_fee:           ev.student_fee         ?? '',
    capacity:              ev.capacity            ?? '',
    registration_deadline: ev.registration_deadline ? ev.registration_deadline.split('T')[0] : '',
  })
}, { immediate: true })

const saving = ref(false)
const error  = ref('')

async function save() {
  saving.value = true
  error.value  = ''
  try {
    if (isEdit.value) {
      await $fetch(`/api/manager/events/${props.event.id}`, { method: 'PUT', body: { ...form } })
    } else {
      await $fetch('/api/manager/events', { method: 'POST', body: { ...form } })
    }
    emit('saved')
  } catch (e: any) {
    error.value = e?.data?.statusMessage ?? 'Failed to save event.'
  } finally {
    saving.value = false
  }
}
</script>

<style scoped>
.f-input {
  @apply w-full text-sm border border-slate-200 rounded-lg px-3.5 py-2.5
         focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition;
}
</style>
