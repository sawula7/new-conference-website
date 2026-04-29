<template>
  <div>
    <InnerPageHero
      title="Membership Fees"
      subtitle="Annual fees, application fees, and upgrade fees for all membership categories."
      parent="Membership"
      parent-href="/membership"
    />

    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">

        <!-- Fees Table -->
        <div>
          <h2 class="font-display font-black text-2xl text-primary-darker mb-2">
            The Annual Fees, Application Fees and Upgrade Fees are as Follows:
          </h2>
          <div class="w-16 h-1 bg-accent rounded-full mb-8"></div>

          <div class="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-primary text-white">
                  <th class="text-center px-6 py-4 font-display font-bold w-56">Membership</th>
                  <th class="text-center px-6 py-4 font-display font-bold">Fee (Rs)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white">
                <tr v-for="row in feeRows" :key="row.type"
                    class="hover:bg-slate-50 transition-colors"
                    :class="row.highlight ? 'bg-primary/5' : ''">
                  <td class="px-6 py-4 text-center font-display font-semibold text-primary-darker">
                    {{ row.type }}
                  </td>
                  <td class="px-6 py-4 text-center text-slate-600 leading-relaxed">
                    {{ row.fee }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Remarks -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
          <div class="flex items-start gap-3 mb-4">
            <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Info :size="16" class="text-accent" />
            </div>
            <h3 class="font-display font-bold text-primary-darker text-lg pt-0.5">Remarks</h3>
          </div>
          <ul class="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-primary font-bold mt-0.5">*</span>
              Members should renew their membership by <strong>1 October</strong> each year.
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary font-bold mt-0.5">*</span>
              Annual Subscription notice will be issued prior to the date due on <strong>30 September</strong> each year.
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="bg-primary rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="font-display font-black text-white text-xl mb-1">Ready to Join?</h3>
            <p class="text-white/70 text-sm">Apply for SLSTL membership and connect with transport & logistics professionals.</p>
          </div>
          <NuxtLink to="/membership/apply" class="btn-accent flex-shrink-0">Apply Now</NuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Info } from 'lucide-vue-next'
useHead({ title: 'Membership Fees — SLSTL' })

const feeRows = [
  {
    type: 'Student Member',
    fee: 'A one-time all-inclusive fee of Rs 500/= valid for five years, but expiring at end of completion of studies whichever happens first',
    highlight: false,
  },
  { type: 'Associate Member', fee: 'Annual Fee of Rs 1,000/=',          highlight: false },
  { type: 'Regular Member',   fee: 'Annual Fee of Rs 2,000/=',          highlight: false },
  { type: 'Fellow',           fee: 'Annual Fee of Rs 4,000/=',          highlight: false },
  { type: 'Life Member',      fee: 'Lump sum Fee of Rs. 10,000/=',      highlight: false },
  { type: 'Honorary Member',  fee: 'No Membership Fee',                  highlight: false },
  {
    type: 'Joining Fee',
    fee: 'Rs 1,000/= for any grade other than Student Member, Life and Honorary Member',
    highlight: true,
  },
  {
    type: 'Upgrading Fee',
    fee: 'Rs 1,000/= for any grade other than Honorary and Life Member',
    highlight: true,
  },
]
</script>
