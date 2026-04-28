<template>
  <div>
    <!-- Hero -->
    <div class="relative min-h-[320px] flex flex-col justify-end overflow-hidden"
         :style="{ background: gradient }">
      <div class="absolute top-0 left-0 right-0 pt-24 pb-4 px-6">
        <div class="max-w-5xl mx-auto">
          <nav class="flex items-center gap-1.5 text-white/60 text-sm">
            <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
            <ChevronRight :size="13" />
            <NuxtLink to="/events" class="hover:text-white transition-colors">Events</NuxtLink>
            <ChevronRight :size="13" />
            <span class="text-white/90 line-clamp-1">{{ event?.title }}</span>
          </nav>
        </div>
      </div>
      <div class="max-w-5xl mx-auto px-4 sm:px-6 pb-12 pt-8 w-full">
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
            {{ event?.category }}
          </span>
        </div>
        <h1 class="font-display font-black text-white text-2xl sm:text-4xl leading-tight drop-shadow-md max-w-3xl">
          {{ event?.title }}
        </h1>
      </div>
      <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style="height:40px">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" class="w-full h-full">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#f8fafc" />
        </svg>
      </div>
    </div>

    <!-- Body -->
    <section class="bg-slate-50 pb-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-3 gap-8 -mt-2">

          <!-- Main content -->
          <div class="lg:col-span-2 space-y-8">

            <!-- Event meta -->
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 class="font-display font-bold text-primary-darker text-lg mb-4">Event Details</h2>
              <dl class="grid sm:grid-cols-2 gap-4">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CalendarDays :size="15" class="text-primary" />
                  </div>
                  <div>
                    <dt class="text-xs text-slate-400 font-medium uppercase tracking-wide">Date</dt>
                    <dd class="text-sm font-semibold text-slate-700 mt-0.5">{{ fmtDate(event?.event_date) }}</dd>
                  </div>
                </div>
                <div v-if="event?.time_start" class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock2 :size="15" class="text-primary" />
                  </div>
                  <div>
                    <dt class="text-xs text-slate-400 font-medium uppercase tracking-wide">Time</dt>
                    <dd class="text-sm font-semibold text-slate-700 mt-0.5">
                      {{ event.time_start }}{{ event.time_end ? ` – ${event.time_end}` : '' }}
                    </dd>
                  </div>
                </div>
                <div v-if="event?.venue" class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin :size="15" class="text-primary" />
                  </div>
                  <div>
                    <dt class="text-xs text-slate-400 font-medium uppercase tracking-wide">Venue</dt>
                    <dd class="text-sm font-semibold text-slate-700 mt-0.5">{{ event.venue }}</dd>
                    <dd v-if="event.location" class="text-xs text-slate-400">{{ event.location }}</dd>
                  </div>
                </div>
                <div v-if="event?.platform" class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MonitorPlay :size="15" class="text-primary" />
                  </div>
                  <div>
                    <dt class="text-xs text-slate-400 font-medium uppercase tracking-wide">Platform</dt>
                    <dd class="text-sm font-semibold text-slate-700 mt-0.5">{{ event.platform }}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <!-- Description -->
            <div v-if="event?.description" class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 class="font-display font-bold text-primary-darker text-lg mb-4">About This Event</h2>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="prose prose-sm prose-slate max-w-none event-description" v-html="event.description" />
            </div>

            <!-- Brochure card (speakers from extra_data) -->
            <div v-if="speakers.length" class="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div class="relative px-6 py-5 flex items-center justify-between" :style="{ background: gradient }">
                <div>
                  <p class="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">{{ event?.category }}</p>
                  <p class="text-white font-black text-lg leading-snug max-w-xs drop-shadow">{{ event?.title }}</p>
                </div>
                <img src="/slstl-logo.png" alt="SLSTL" class="h-10 w-auto opacity-80 flex-shrink-0" />
              </div>
              <div class="bg-white">
                <div class="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                  <div class="p-6">
                    <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Conducted by</p>
                    <div v-for="sp in speakers" :key="sp.name" class="flex flex-col items-center text-center gap-3">
                      <div class="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/25 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img v-if="sp.photo" :src="sp.photo" :alt="sp.name" class="w-full h-full object-cover" />
                        <span v-else class="font-black text-primary text-xl">{{ initials(sp.name) }}</span>
                      </div>
                      <div>
                        <p class="font-black text-primary-darker text-sm uppercase tracking-wide">{{ sp.name }}</p>
                        <p class="text-xs text-slate-500 mt-0.5 leading-snug">{{ sp.role }}</p>
                      </div>
                      <p v-if="sp.bio" class="text-xs text-slate-500 leading-relaxed text-left">{{ sp.bio }}</p>
                    </div>
                  </div>
                  <div class="p-6 flex flex-col gap-4">
                    <div class="text-center">
                      <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Investment</p>
                      <p class="font-black text-xl" :class="minFee === 0 ? 'text-emerald-600' : 'text-accent-darker'">
                        {{ minFee === 0 ? 'FREE' : `LKR ${minFee.toLocaleString()}` }}
                      </p>
                    </div>
                    <div class="grid grid-cols-3 gap-2 text-center">
                      <div class="border border-slate-200 rounded-xl p-2.5">
                        <p class="text-[9px] font-bold uppercase tracking-wider text-slate-400">Date</p>
                        <p class="text-xs font-bold text-slate-700 mt-0.5 leading-snug">{{ fmtDate(event?.event_date) }}</p>
                      </div>
                      <div class="border border-slate-200 rounded-xl p-2.5">
                        <p class="text-[9px] font-bold uppercase tracking-wider text-slate-400">Time</p>
                        <p class="text-xs font-bold text-slate-700 mt-0.5 leading-snug">{{ event?.time_start ?? 'TBA' }}</p>
                      </div>
                      <div class="border border-slate-200 rounded-xl p-2.5">
                        <p class="text-[9px] font-bold uppercase tracking-wider text-slate-400">{{ event?.platform ? 'Platform' : 'Venue' }}</p>
                        <p class="text-xs font-bold text-slate-700 mt-0.5 leading-snug">{{ event?.platform ?? event?.venue?.split(',')[0] ?? 'TBA' }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="contact" class="border-t border-slate-100 px-6 py-3 flex flex-wrap items-center justify-between gap-2 bg-slate-50">
                  <p class="text-xs text-slate-400 italic">For further information, contact:</p>
                  <div class="text-xs text-slate-600 font-medium text-right">
                    <span>{{ contact.name }}</span>
                    <span v-if="contact.role">, {{ contact.role }}</span>
                    <span v-if="contact.email"> · {{ contact.email }}</span>
                    <span v-if="contact.phone"> · {{ contact.phone }}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Sidebar -->
          <div class="space-y-5">
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden sticky top-24">
              <div class="bg-primary/5 border-b border-slate-100 px-5 py-4">
                <p class="text-xs font-bold uppercase tracking-wide text-primary/70">
                  {{ event?.is_free ? 'Free Registration' : 'Registration' }}
                </p>
                <p v-if="event?.is_free" class="text-2xl font-black text-emerald-600 mt-1">Free</p>
                <p v-else class="text-2xl font-black text-primary-darker mt-1">
                  LKR {{ minFee.toLocaleString() }}+
                </p>
              </div>

              <div class="p-5 space-y-4">
                <!-- Fee breakdown for paid events -->
                <div v-if="!event?.is_free" class="space-y-1.5 text-sm">
                  <div v-if="+event?.general_fee" class="flex justify-between">
                    <span class="text-slate-500">General</span>
                    <span class="font-semibold">LKR {{ (+event.general_fee).toLocaleString() }}</span>
                  </div>
                  <div v-if="+event?.member_fee" class="flex justify-between">
                    <span class="text-slate-500">SLSTL Member</span>
                    <span class="font-semibold">LKR {{ (+event.member_fee).toLocaleString() }}</span>
                  </div>
                  <div v-if="+event?.student_fee" class="flex justify-between">
                    <span class="text-slate-500">Student</span>
                    <span class="font-semibold">LKR {{ (+event.student_fee).toLocaleString() }}</span>
                  </div>
                </div>

                <!-- CTA -->
                <template v-if="isActive">
                  <NuxtLink :to="`/member/events`"
                            class="btn-accent w-full text-sm py-3 font-bold text-center block">
                    Register Now
                  </NuxtLink>
                  <p class="text-center text-xs text-slate-400">You're logged in as a member</p>
                </template>
                <template v-else-if="user">
                  <p class="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
                    Your membership is pending approval. Registration will be available once approved.
                  </p>
                </template>
                <template v-else>
                  <NuxtLink to="/login"
                            class="btn-primary w-full text-sm py-3 font-bold text-center block">
                    Login to Register
                  </NuxtLink>
                  <p class="text-center text-xs text-slate-400">
                    <NuxtLink to="/membership/apply" class="text-primary hover:underline">Apply for membership</NuxtLink>
                    to attend SLSTL events
                  </p>
                </template>
              </div>
            </div>

            <NuxtLink to="/events" class="flex items-center gap-1.5 text-sm text-primary hover:underline">
              <ArrowLeft :size="14" /> Back to all events
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight, CalendarDays, Clock2, MapPin, MonitorPlay, ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const { user, isActive } = useAuth()
const { data: event } = await useFetch<any>(`/api/events/${route.params.slug}`)

if (!event.value) throw createError({ statusCode: 404, statusMessage: 'Event not found' })

useHead({ title: computed(() => `${event.value?.title ?? 'Event'} — SLSTL Events`) })

const GRADIENTS: Record<string, string> = {
  webinar:    'linear-gradient(135deg,#1e3a5f,#2563eb)',
  workshop:   'linear-gradient(135deg,#065f46,#059669)',
  conference: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
  seminar:    'linear-gradient(135deg,#b45309,#d97706)',
  other:      'linear-gradient(135deg,#1e3a5f,#0e7490)',
}

const gradient = computed(() => GRADIENTS[event.value?.category ?? ''] ?? GRADIENTS.other)
const speakers = computed(() => event.value?.extra_data?.speakers ?? [])
const contact  = computed(() => event.value?.extra_data?.contact ?? null)

const minFee = computed(() => {
  if (event.value?.is_free) return 0
  const fees = [event.value?.general_fee, event.value?.member_fee, event.value?.student_fee]
    .map(Number).filter(f => f > 0)
  return fees.length ? Math.min(...fees) : 0
})

function fmtDate(d: string | null | undefined) {
  if (!d) return 'TBA'
  return new Date(d).toLocaleDateString('en-LK', { day: 'numeric', month: 'long', year: 'numeric' })
}

function initials(name: string) {
  return name.replace(/^(Dr|Prof|Mr|Mrs|Ms)\.?\s*/i, '')
    .split(' ').slice(0, 2).map((w: string) => w[0]).join('').toUpperCase()
}
</script>

<style>
.event-description h3 { @apply font-display font-bold text-primary-darker text-base mt-5 mb-2; }
.event-description p  { @apply text-slate-600 leading-relaxed mb-3; }
.event-description ul { @apply list-disc list-inside text-slate-600 space-y-1 mb-3; }
.event-description li { @apply text-sm; }
.event-description strong { @apply font-semibold text-slate-700; }
</style>
