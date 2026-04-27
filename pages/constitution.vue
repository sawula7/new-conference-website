<template>
  <div>
    <InnerPageHero title="Constitution of SLSTL" subtitle="The governing document of the Sri Lanka Society of Transport & Logistics." parent="Home" parent-href="/" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="card p-8 mb-6 flex items-center gap-5">
          <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Scale :size="26" class="text-primary" />
          </div>
          <div class="flex-1">
            <h3 class="font-display font-bold text-primary-darker">SLSTL Constitution</h3>
            <p class="text-slate-500 text-sm mt-1">Official governing document — latest edition</p>
          </div>
          <button class="btn-primary text-sm py-2 px-5">
            <Download :size="15" />
            Download PDF
          </button>
        </div>

        <div class="card p-8">
          <h2 class="font-display font-bold text-primary-darker text-xl mb-6">Table of Contents</h2>
          <ol class="space-y-3 list-none">
            <li v-for="(section, i) in sections" :key="i" class="flex items-start gap-3 text-slate-600 text-sm">
              <span class="font-bold text-primary min-w-[2rem]">{{ i + 1 }}.</span>
              <span>{{ section }}</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Scale, Download } from 'lucide-vue-next'
useHead({ title: 'Constitution — SLSTL' })

const sections = [
  'Name and Registered Office',
  'Objects and Purposes',
  'Membership — Categories and Eligibility',
  'Membership Fees and Subscriptions',
  'Governance and Executive Committee',
  'Elections and Term of Office',
  'Meetings — Annual General and Special',
  'Financial Management and Auditing',
  'Amendments to the Constitution',
  'Dissolution of the Society',
]
</script>
