<template>
  <div>
    <InnerPageHero title="Events" parent="Member Area" parent-href="/member" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">

        <!-- Upcoming events -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">Upcoming Events</h3>
          </div>
          <div class="divide-y divide-slate-100">
            <div v-if="upcoming.length === 0" class="px-6 py-8 text-center text-slate-400 text-sm">
              No upcoming events at this time.
            </div>
            <div v-for="ev in upcoming" :key="ev.id" class="px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div class="flex-1 min-w-0">
                <p class="font-semibold text-slate-700 text-sm">{{ ev.title }}</p>
                <p class="text-xs text-slate-400 mt-0.5">
                  {{ fmtDate(ev.event_date) }}
                  <span v-if="ev.venue || ev.platform"> · {{ ev.venue || ev.platform }}</span>
                </p>
                <div class="mt-1">
                  <span v-if="ev.reg_status === 'completed' || ev.reg_status === 'free'"
                        class="text-[10px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                    Registered
                  </span>
                  <span v-else-if="ev.reg_status === 'pending'"
                        class="text-[10px] font-bold uppercase tracking-wide bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                    Payment Pending
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-3 flex-shrink-0">
                <div class="text-right text-sm">
                  <span v-if="ev.is_free" class="font-bold text-emerald-600">Free</span>
                  <span v-else class="font-bold text-primary-darker">LKR {{ minFee(ev).toLocaleString() }}+</span>
                </div>
                <button v-if="!ev.reg_status"
                        class="btn-accent text-xs py-1.5 px-4 disabled:opacity-60"
                        :disabled="registering === ev.id"
                        @click="register(ev)">
                  <span v-if="registering === ev.id" class="flex items-center gap-1">
                    <Loader2 :size="12" class="animate-spin" /> …
                  </span>
                  <span v-else>Register</span>
                </button>
                <NuxtLink v-else :to="`/events/${ev.slug}`" class="text-xs text-primary hover:underline font-semibold">
                  View
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Ticket type modal -->
        <div v-if="ticketModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm space-y-4">
            <h3 class="font-display font-bold text-primary-darker">Select Ticket Type</h3>
            <p class="text-sm text-slate-500">{{ ticketModal.title }}</p>
            <div class="space-y-2">
              <label v-if="+ticketModal.general_fee" class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-primary/40 transition-colors"
                     :class="ticketType === 'general' ? 'border-primary bg-primary/5' : 'border-slate-200'">
                <input type="radio" value="general" v-model="ticketType" class="accent-primary" />
                <span class="text-sm flex-1">General / Non-Member</span>
                <span class="font-bold text-sm text-primary-darker">LKR {{ (+ticketModal.general_fee).toLocaleString() }}</span>
              </label>
              <label v-if="+ticketModal.member_fee" class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-primary/40 transition-colors"
                     :class="ticketType === 'member' ? 'border-primary bg-primary/5' : 'border-slate-200'">
                <input type="radio" value="member" v-model="ticketType" class="accent-primary" />
                <span class="text-sm flex-1">SLSTL Member</span>
                <span class="font-bold text-sm text-primary-darker">LKR {{ (+ticketModal.member_fee).toLocaleString() }}</span>
              </label>
              <label v-if="+ticketModal.student_fee" class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-primary/40 transition-colors"
                     :class="ticketType === 'student' ? 'border-primary bg-primary/5' : 'border-slate-200'">
                <input type="radio" value="student" v-model="ticketType" class="accent-primary" />
                <span class="text-sm flex-1">Student</span>
                <span class="font-bold text-sm text-primary-darker">LKR {{ (+ticketModal.student_fee).toLocaleString() }}</span>
              </label>
            </div>
            <div class="flex gap-3 pt-2">
              <button class="btn-primary flex-1 text-sm py-2.5" @click="confirmRegister">Confirm</button>
              <button class="flex-1 text-sm py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                      @click="ticketModal = null">Cancel</button>
            </div>
          </div>
        </div>

        <!-- My registrations -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">My Registrations</h3>
          </div>
          <div class="divide-y divide-slate-100">
            <div v-if="registered.length === 0" class="px-6 py-8 text-center text-slate-400 text-sm">
              No event registrations yet.
            </div>
            <div v-for="ev in registered" :key="ev.id" class="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p class="font-semibold text-slate-700 text-sm">{{ ev.title }}</p>
                <p class="text-xs text-slate-400">{{ fmtDate(ev.event_date) }}</p>
              </div>
              <span class="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full"
                    :class="ev.reg_status === 'completed' || ev.reg_status === 'free'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'">
                {{ ev.reg_status === 'free' ? 'Registered' : ev.reg_status }}
              </span>
            </div>
          </div>
        </div>

        <p v-if="regError" class="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{{ regError }}</p>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
definePageMeta({ middleware: 'member' })
useHead({ title: 'Events — SLSTL Member' })

const config = useRuntimeConfig()
const { data: events, refresh } = await useFetch<any[]>('/api/member/events')

const upcoming   = computed(() => (events.value ?? []).filter(e => !e.reg_status && isUpcoming(e)))
const registered = computed(() => (events.value ?? []).filter(e => e.reg_status))

function isUpcoming(ev: any) {
  if (!ev.event_date) return true
  return new Date(ev.event_date) >= new Date(new Date().toDateString())
}

function fmtDate(d: string | null) {
  if (!d) return 'TBA'
  return new Date(d).toLocaleDateString('en-LK', { day: 'numeric', month: 'short', year: 'numeric' })
}

function minFee(ev: any) {
  const fees = [ev.general_fee, ev.member_fee, ev.student_fee].map(Number).filter(f => f > 0)
  return fees.length ? Math.min(...fees) : 0
}

const registering = ref<number | null>(null)
const regError    = ref('')
const ticketModal = ref<any>(null)
const ticketType  = ref('general')

function register(ev: any) {
  if (ev.is_free) {
    doRegister(ev.id, 'general')
  } else {
    ticketModal.value = ev
    ticketType.value  = ev.member_fee ? 'member' : 'general'
  }
}

async function confirmRegister() {
  const ev = ticketModal.value
  ticketModal.value = null
  await doRegister(ev.id, ticketType.value)
}

async function loadPayHere(): Promise<void> {
  if ((window as any).payhere) return
  return new Promise((resolve, reject) => {
    const mode = config.public.payhereMode as string
    const src  = mode === 'live' ? 'https://www.payhere.lk/lib/payhere.js' : 'https://sandbox.payhere.lk/lib/payhere.js'
    const s    = document.createElement('script')
    s.src = src; s.onload = () => resolve(); s.onerror = () => reject(new Error('Failed to load PayHere'))
    document.head.appendChild(s)
  })
}

async function doRegister(id: number, ticket: string) {
  registering.value = id
  regError.value    = ''
  try {
    const res = await $fetch<any>(`/api/member/events/${id}/register`, {
      method: 'POST',
      body:   { ticketType: ticket },
    })

    if (res.free) {
      refresh()
      return
    }

    await loadPayHere()
    const payhere = (window as any).payhere

    payhere.onCompleted = () => { refresh(); registering.value = null }
    payhere.onDismissed = () => { registering.value = null }
    payhere.onError     = (e: string) => { regError.value = `Payment error: ${e}`; registering.value = null }

    payhere.startPayment({
      sandbox:     config.public.payhereMode !== 'live',
      merchant_id: res.merchantId,
      return_url:  `${window.location.origin}/member/events?status=success`,
      cancel_url:  `${window.location.origin}/member/events?status=cancel`,
      notify_url:  `${window.location.origin}/api/payhere-event-notify`,
      order_id:    res.orderId,
      items:       `SLSTL Event: ${res.eventTitle}`,
      amount:      res.amount,
      currency:    res.currency,
      hash:        res.hash,
    })
  } catch (e: any) {
    regError.value    = e?.data?.statusMessage ?? 'Registration failed.'
    registering.value = null
  }
}
</script>
