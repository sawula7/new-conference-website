<template>
  <div>
    <InnerPageHero title="Payments" parent="Member Area" parent-href="/member" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">

        <!-- Pending fees -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <h3 class="font-display font-bold text-primary-darker">Pending Fees</h3>
            <span class="text-xs text-slate-400">{{ feesData?.category }}</span>
          </div>
          <div class="divide-y divide-slate-100">
            <div v-if="pendingFees.length === 0" class="px-6 py-8 text-center text-slate-400 text-sm">
              All fees are paid up to date.
            </div>
            <div v-for="fee in pendingFees" :key="fee.id" class="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p class="font-semibold text-slate-700 text-sm">{{ fee.description ?? `Membership Fee ${fee.year}` }}</p>
                <p class="text-xs text-slate-400">Year: {{ fee.year }}</p>
              </div>
              <div class="flex items-center gap-4">
                <span class="font-bold text-primary-darker">LKR {{ fee.amount.toLocaleString() }}</span>
                <button
                  class="btn-accent text-xs py-1.5 px-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  :disabled="paying === fee.id"
                  @click="payFee(fee)"
                >
                  <span v-if="paying === fee.id" class="flex items-center gap-1"><Loader2 :size="12" class="animate-spin" /> Loading…</span>
                  <span v-else>Pay Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment history -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">Payment History</h3>
          </div>
          <div class="divide-y divide-slate-100">
            <div v-if="!payments || payments.length === 0" class="px-6 py-8 text-center text-slate-400 text-sm">
              No payment records yet.
            </div>
            <div v-for="p in payments" :key="p.id" class="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p class="font-semibold text-slate-700 text-sm">{{ p.description ?? `Membership Fee ${p.year}` }}</p>
                <p class="text-xs text-slate-400">Order: {{ p.orderId }}</p>
                <p v-if="p.paidAt" class="text-xs text-slate-400">{{ new Date(p.paidAt).toLocaleDateString() }}</p>
              </div>
              <div class="text-right">
                <p class="font-bold text-slate-700 text-sm">{{ p.currency }} {{ p.amount.toLocaleString() }}</p>
                <span class="inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mt-1"
                      :class="p.status === 'completed' ? 'bg-emerald-100 text-emerald-700'
                                : p.status === 'pending' ? 'bg-amber-100 text-amber-700'
                                : 'bg-red-100 text-red-600'">
                  {{ p.status }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p v-if="payError" class="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{{ payError }}</p>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
definePageMeta({ middleware: 'member' })
useHead({ title: 'Payments — SLSTL Member' })

const config = useRuntimeConfig()

const { data: feesData, refresh: refreshFees } = await useFetch('/api/member/fees')
const { data: payments,  refresh: refreshPay  } = await useFetch('/api/member/payments')

const pendingFees = computed(() =>
  (feesData.value?.fees ?? []).filter((f: any) => f.paymentStatus !== 'completed')
)

const paying  = ref<number | null>(null)
const payError = ref('')

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

async function payFee(fee: any) {
  paying.value  = fee.id
  payError.value = ''
  try {
    const { orderId, amount, currency, hash, merchantId } =
      await $fetch<any>('/api/member/pay', { method: 'POST', body: { feeId: fee.id } })

    await loadPayHere()
    const payhere = (window as any).payhere

    payhere.onCompleted = () => { refreshFees(); refreshPay(); paying.value = null }
    payhere.onDismissed = () => { paying.value = null }
    payhere.onError     = (e: string) => { payError.value = `Payment error: ${e}`; paying.value = null }

    payhere.startPayment({
      sandbox:     config.public.payhereMode !== 'live',
      merchant_id: merchantId,
      return_url:  `${window.location.origin}/member/payments?status=success`,
      cancel_url:  `${window.location.origin}/member/payments?status=cancel`,
      notify_url:  `${window.location.origin}/api/payhere-membership-notify`,
      order_id:    orderId,
      items:       `SLSTL ${fee.description ?? 'Membership Fee'} ${fee.year}`,
      amount,
      currency,
      hash,
    })
  } catch (e: any) {
    payError.value = e?.data?.statusMessage ?? 'Could not initiate payment.'
    paying.value = null
  }
}
</script>
