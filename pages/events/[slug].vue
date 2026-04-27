<template>
  <div>
    <!-- Hero banner with event gradient -->
    <div class="relative min-h-[320px] flex flex-col justify-end overflow-hidden" :style="{ background: event.gradient }">
      <!-- Breadcrumb -->
      <div class="absolute top-0 left-0 right-0 pt-24 pb-4 px-6">
        <div class="max-w-5xl mx-auto">
          <nav class="flex items-center gap-1.5 text-white/60 text-sm">
            <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
            <ChevronRight :size="13" />
            <NuxtLink to="/events" class="hover:text-white transition-colors">Events</NuxtLink>
            <ChevronRight :size="13" />
            <span class="text-white/90 line-clamp-1">{{ event.shortTitle }}</span>
          </nav>
        </div>
      </div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 pb-12 pt-8 w-full">
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">{{ event.category }}</span>
          <span
            v-if="event.badge === 'going-fast'"
            class="inline-flex items-center gap-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
          ><Zap :size="9" /> Going Fast</span>
          <span
            v-else-if="event.badge === 'sales-end-soon'"
            class="inline-flex items-center gap-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
          ><Clock :size="9" /> Sales End Soon</span>
        </div>
        <h1 class="font-display font-black text-white text-2xl sm:text-4xl leading-tight drop-shadow-md max-w-3xl">
          {{ event.title }}
        </h1>
      </div>

      <!-- Wave -->
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

            <!-- Event meta card -->
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 class="font-display font-bold text-primary-darker text-lg mb-4">Event Details</h2>
              <dl class="grid sm:grid-cols-2 gap-4">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CalendarDays :size="15" class="text-primary" />
                  </div>
                  <div>
                    <dt class="text-xs text-slate-400 font-medium uppercase tracking-wide">Date</dt>
                    <dd class="text-sm font-semibold text-slate-700 mt-0.5">{{ event.dateDisplay }}</dd>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock2 :size="15" class="text-primary" />
                  </div>
                  <div>
                    <dt class="text-xs text-slate-400 font-medium uppercase tracking-wide">Time</dt>
                    <dd class="text-sm font-semibold text-slate-700 mt-0.5">{{ event.time }}{{ event.endTime ? ` – ${event.endTime}` : '' }}</dd>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin :size="15" class="text-primary" />
                  </div>
                  <div>
                    <dt class="text-xs text-slate-400 font-medium uppercase tracking-wide">Venue</dt>
                    <dd class="text-sm font-semibold text-slate-700 mt-0.5">{{ event.venue }}</dd>
                    <dd class="text-xs text-slate-400">{{ event.location }}</dd>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users :size="15" class="text-primary" />
                  </div>
                  <div>
                    <dt class="text-xs text-slate-400 font-medium uppercase tracking-wide">Organiser</dt>
                    <dd class="text-sm font-semibold text-slate-700 mt-0.5">{{ event.organizer }}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <!-- Highlights -->
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 class="font-display font-bold text-primary-darker text-lg mb-4">Highlights</h2>
              <ul class="space-y-2.5">
                <li v-for="h in event.highlights" :key="h" class="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 :size="16" class="text-accent mt-0.5 flex-shrink-0" />
                  {{ h }}
                </li>
              </ul>
            </div>

            <!-- Description -->
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 class="font-display font-bold text-primary-darker text-lg mb-4">About This Event</h2>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="prose prose-sm prose-slate max-w-none event-description" v-html="event.description" />
            </div>

            <!-- Brochure card -->
            <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-md">

              <!-- Brochure header -->
              <div class="relative px-6 py-5 flex items-center justify-between" :style="{ background: event.gradient }">
                <div>
                  <p class="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                    {{ event.sessionType ?? event.category }}
                  </p>
                  <p class="text-white font-black text-lg leading-snug max-w-xs drop-shadow">
                    {{ event.shortTitle }}
                  </p>
                </div>
                <img src="/slstl-logo.png" alt="SLSTL" class="h-10 w-auto opacity-80 flex-shrink-0" />
              </div>

              <!-- Brochure body -->
              <div class="bg-white">

                <!-- Speaker + investment row -->
                <div class="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">

                  <!-- Speaker column -->
                  <div v-if="event.speakers?.length" class="p-6">
                    <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Conducted by</p>
                    <div v-for="speaker in event.speakers" :key="speaker.name" class="flex flex-col items-center text-center gap-3">
                      <!-- Avatar -->
                      <div class="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/25 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img v-if="speaker.photo" :src="speaker.photo" :alt="speaker.name" class="w-full h-full object-cover" />
                        <span v-else class="font-black text-primary text-xl">{{ speakerInitials(speaker.name) }}</span>
                      </div>
                      <div>
                        <p class="font-black text-primary-darker text-sm uppercase tracking-wide">{{ speaker.name }}</p>
                        <p class="text-xs text-slate-500 mt-0.5 leading-snug">{{ speaker.role }}</p>
                      </div>
                      <p class="text-xs text-slate-500 leading-relaxed text-left">{{ speaker.bio }}</p>
                    </div>
                  </div>

                  <!-- Details column -->
                  <div class="p-6 flex flex-col gap-4">
                    <!-- Investment -->
                    <div class="text-center">
                      <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Investment</p>
                      <p class="font-black text-xl" :class="minPrice(event) === 0 ? 'text-emerald-600' : 'text-accent-darker'">
                        {{ minPrice(event) === 0 ? 'FREE' : `${event.currency} ${minPrice(event).toLocaleString()}` }}
                      </p>
                    </div>

                    <!-- Date / Time / Platform pills -->
                    <div class="grid grid-cols-3 gap-2 text-center">
                      <div class="border border-slate-200 rounded-xl p-2.5">
                        <p class="text-[9px] font-bold uppercase tracking-wider text-slate-400">Date</p>
                        <p class="text-xs font-bold text-slate-700 mt-0.5 leading-snug">{{ event.dateDisplay }}</p>
                      </div>
                      <div class="border border-slate-200 rounded-xl p-2.5">
                        <p class="text-[9px] font-bold uppercase tracking-wider text-slate-400">Time</p>
                        <p class="text-xs font-bold text-slate-700 mt-0.5 leading-snug">
                          {{ event.time }}<span v-if="event.endTime"><br/>– {{ event.endTime }}</span>
                        </p>
                      </div>
                      <div class="border border-slate-200 rounded-xl p-2.5">
                        <p class="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                          {{ event.platform ? 'Platform' : 'Venue' }}
                        </p>
                        <p class="text-xs font-bold text-slate-700 mt-0.5 leading-snug">
                          {{ event.platform ?? event.venue.split(',')[0] }}
                        </p>
                      </div>
                    </div>

                    <!-- Description excerpt -->
                    <p class="text-xs text-slate-500 leading-relaxed">
                      The transport and logistics sector faces persistent challenges, including dynamic conditions
                      and escalating costs — all demanding innovative solutions. This session discusses the potential
                      of Artificial Intelligence in transport and logistics, presenting use cases and ideas for innovation.
                    </p>
                  </div>
                </div>

                <!-- Contact footer -->
                <div v-if="event.contact" class="border-t border-slate-100 px-6 py-3 flex flex-wrap items-center justify-between gap-2 bg-slate-50">
                  <p class="text-xs text-slate-400 italic">For further information, contact:</p>
                  <div class="text-xs text-slate-600 font-medium text-right">
                    <span>{{ event.contact.name }}</span>
                    <span v-if="event.contact.role">, {{ event.contact.role }}</span>
                    <span v-if="event.contact.email"> · {{ event.contact.email }}</span>
                    <span v-if="event.contact.phone"> · {{ event.contact.phone }}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Sidebar: tickets / registration -->
          <div class="space-y-5">

            <!-- Ticket / registration box -->
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden sticky top-24">
              <div class="bg-primary/5 border-b border-slate-100 px-5 py-4">
                <p class="text-xs font-bold uppercase tracking-wide text-primary/70">
                  {{ isPaidEvent ? 'Select Ticket' : 'Free Registration' }}
                </p>
                <p v-if="isPaidEvent" class="text-2xl font-black text-primary-darker mt-1">
                  {{ event.currency }} {{ selectedTicket?.price.toLocaleString() ?? '—' }}
                </p>
                <p v-else class="text-2xl font-black text-emerald-600 mt-1">Free</p>
              </div>

              <div class="p-5 space-y-4">

                <!-- Ticket type selector (paid events only) -->
                <div v-if="isPaidEvent" class="space-y-2">
                  <label class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Ticket Type</label>
                  <div class="space-y-2">
                    <label
                      v-for="ticket in event.tickets"
                      :key="ticket.type"
                      class="flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors"
                      :class="selectedTicketType === ticket.type
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 hover:border-primary/40'"
                    >
                      <input
                        type="radio"
                        :value="ticket.type"
                        v-model="selectedTicketType"
                        class="mt-0.5 accent-primary"
                      />
                      <div>
                        <div class="flex items-center gap-2">
                          <span class="text-sm font-semibold text-slate-700">{{ ticket.type }}</span>
                          <span class="text-sm font-bold text-primary ml-auto">{{ event.currency }} {{ ticket.price.toLocaleString() }}</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-0.5">{{ ticket.description }}</p>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Buyer details form -->
                <div class="space-y-3">
                  <label class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Your Details</label>
                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        v-model="form.firstName"
                        type="text"
                        placeholder="First name"
                        class="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition"
                      />
                    </div>
                    <div>
                      <input
                        v-model="form.lastName"
                        type="text"
                        placeholder="Last name"
                        class="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition"
                      />
                    </div>
                  </div>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Email address"
                    class="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition"
                  />
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="Phone number"
                    class="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition"
                  />
                </div>

                <!-- Error / success message -->
                <p v-if="formError" class="text-xs text-red-500">{{ formError }}</p>
                <p v-if="formSuccess" class="text-xs text-emerald-600 font-medium">{{ formSuccess }}</p>

                <!-- CTA button -->
                <button
                  :disabled="processing"
                  class="w-full btn-accent py-3 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                  @click="handleSubmit"
                >
                  <span v-if="processing" class="flex items-center justify-center gap-2">
                    <Loader2 :size="15" class="animate-spin" /> Processing…
                  </span>
                  <span v-else-if="isPaidEvent">Pay with PayHere</span>
                  <span v-else>Register for Free</span>
                </button>

                <p class="text-center text-xs text-slate-400">
                  {{ isPaidEvent ? 'Secure payment via PayHere · SSL encrypted' : 'No payment required' }}
                </p>
              </div>
            </div>

            <!-- Back link -->
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
import {
  ChevronRight, Zap, Clock, CalendarDays, Clock2, MapPin, Users,
  CheckCircle2, Loader2, ArrowLeft,
} from 'lucide-vue-next'
import { getEvent, type SLSTLEvent } from '~/data/events'

const route = useRoute()
const slug = route.params.slug as string

const event = computed(() => {
  const ev = getEvent(slug)
  if (!ev) throw createError({ statusCode: 404, statusMessage: 'Event not found' })
  return ev
})

useHead({ title: computed(() => `${event.value.title} — SLSTL Events`) })

const config = useRuntimeConfig()

// ── Ticket state ──────────────────────────────────────────────────────────────
const isPaidEvent = computed(() => event.value.tickets.some(t => t.price > 0))
const selectedTicketType = ref(event.value.tickets[0]?.type ?? '')
const selectedTicket = computed(() => event.value.tickets.find(t => t.type === selectedTicketType.value))

// ── Form state ────────────────────────────────────────────────────────────────
const form = reactive({ firstName: '', lastName: '', email: '', phone: '' })
const formError = ref('')
const formSuccess = ref('')
const processing = ref(false)

function minPrice(ev: SLSTLEvent) {
  return Math.min(...ev.tickets.map(t => t.price))
}

function speakerInitials(name: string) {
  return name.replace(/^(Dr|Prof|Mr|Mrs|Ms)\.?\s*/i, '')
    .split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function validate(): boolean {
  formError.value = ''
  if (!form.firstName.trim() || !form.lastName.trim()) { formError.value = 'Please enter your full name.'; return false }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { formError.value = 'Please enter a valid email address.'; return false }
  if (isPaidEvent.value && !selectedTicket.value) { formError.value = 'Please select a ticket type.'; return false }
  return true
}

// ── PayHere ───────────────────────────────────────────────────────────────────
function loadPayHereScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).payhere) { resolve(); return }
    const mode = config.public.payhereMode as string
    const src = mode === 'live'
      ? 'https://www.payhere.lk/lib/payhere.js'
      : 'https://sandbox.payhere.lk/lib/payhere.js'
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load PayHere script'))
    document.head.appendChild(script)
  })
}

async function handleSubmit() {
  if (!validate()) return
  processing.value = true
  formError.value = ''
  formSuccess.value = ''

  try {
    if (isPaidEvent.value) {
      await handlePayment()
    } else {
      await handleFreeRegistration()
    }
  } catch (err: any) {
    formError.value = err?.message ?? 'Something went wrong. Please try again.'
  } finally {
    processing.value = false
  }
}

async function handleFreeRegistration() {
  // In a real integration this would POST to a server route or email service.
  // For now we just simulate success after a short delay.
  await new Promise(r => setTimeout(r, 800))
  formSuccess.value = `Registration confirmed! A confirmation will be sent to ${form.email}.`
}

async function handlePayment() {
  const orderId = `SLSTL-${event.value.slug.slice(0, 8).toUpperCase()}-${Date.now()}`
  const amount  = (selectedTicket.value!.price).toFixed(2)
  const currency = event.value.currency
  const merchantId = config.public.payhereMerchantId as string

  // Fetch server-generated hash (keeps merchant secret off the client)
  const { hash } = await $fetch<{ hash: string }>('/api/payhere-hash', {
    method: 'POST',
    body: { merchant_id: merchantId, order_id: orderId, amount, currency },
  })

  await loadPayHereScript()

  const payhere = (window as any).payhere
  const mode = config.public.payhereMode as string

  payhere.onCompleted = (orderId: string) => {
    formSuccess.value = `Payment successful! Order ID: ${orderId}. A confirmation will be sent to ${form.email}.`
    processing.value = false
  }
  payhere.onDismissed = () => {
    formError.value = 'Payment was cancelled. You can try again.'
    processing.value = false
  }
  payhere.onError = (error: string) => {
    formError.value = `Payment error: ${error}`
    processing.value = false
  }

  const payment = {
    sandbox:     mode !== 'live',
    merchant_id: merchantId,
    return_url:  `${window.location.origin}/events/${event.value.slug}?status=success`,
    cancel_url:  `${window.location.origin}/events/${event.value.slug}?status=cancel`,
    notify_url:  `${window.location.origin}/api/payhere-notify`,
    order_id:    orderId,
    items:       `${event.value.shortTitle} — ${selectedTicket.value!.type}`,
    amount,
    currency,
    hash,
    first_name:  form.firstName,
    last_name:   form.lastName,
    email:       form.email,
    phone:       form.phone,
    address:     'N/A',
    city:        'Colombo',
    country:     'Sri Lanka',
  }

  payhere.startPayment(payment)
}
</script>

<style>
.event-description h3 {
  @apply font-display font-bold text-primary-darker text-base mt-5 mb-2;
}
.event-description p {
  @apply text-slate-600 leading-relaxed mb-3;
}
.event-description ul {
  @apply list-disc list-inside text-slate-600 space-y-1 mb-3;
}
.event-description li {
  @apply text-sm;
}
.event-description strong {
  @apply font-semibold text-slate-700;
}
</style>
