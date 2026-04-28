<template>
  <div>
    <InnerPageHero title="Annual Reports" subtitle="SLSTL annual reports documenting activities, financials, and achievements." parent="Home" parent-href="/" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-2 gap-5">
          <NuxtLink
            v-for="r in reports" :key="r.year"
            :to="`/annual-reports/${r.year}`"
            class="card p-6 flex items-center gap-5 hover:border-primary/30 group"
          >
            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <FileText :size="24" class="text-primary" />
            </div>
            <div>
              <h3 class="font-display font-bold text-primary-darker text-lg">{{ r.year }}</h3>
              <p class="text-slate-400 text-sm">SLSTL Annual Report</p>
            </div>
            <ChevronRight :size="18" class="text-slate-300 group-hover:text-primary ml-auto transition-colors" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FileText, ChevronRight } from 'lucide-vue-next'
useHead({ title: 'Annual Reports — SLSTL' })
const reports = [{ year: '2024' }, { year: '2023' }, { year: '2022' }, { year: '2021' }]
</script>
