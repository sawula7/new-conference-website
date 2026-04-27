<template>
  <div>
    <InnerPageHero title="Journal of SLSTL (JSALT)" subtitle="A peer-reviewed academic journal dedicated to transport and logistics research in South Asia." />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-10 mb-10">
          <div>
            <span class="section-tag">About the Journal</span>
            <h2 class="section-heading">Journal of the SLSTL (JSALT)</h2>
            <p class="text-slate-500 mt-4 leading-relaxed">
              JSALT is a peer-reviewed academic journal published by the Sri Lanka Society of Transport
              &amp; Logistics. It publishes original research, review articles, and case studies
              covering all aspects of transport and logistics science.
            </p>
            <div class="space-y-3 mt-6">
              <div v-for="item in details" :key="item.label" class="flex gap-3 text-sm">
                <span class="font-semibold text-slate-700 min-w-[140px]">{{ item.label }}</span>
                <span class="text-slate-500">{{ item.value }}</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-3 mt-8">
              <button class="btn-primary text-sm py-2 px-5"><ExternalLink :size="15" /> Submit a Paper</button>
              <button class="btn-outline-primary text-sm py-2 px-5"><BookOpen :size="15" /> Browse Issues</button>
            </div>
          </div>
          <div class="space-y-4">
            <h3 class="font-display font-bold text-primary-darker text-lg">Recent Issues</h3>
            <div v-for="issue in issues" :key="issue.vol" class="card p-5 flex items-center gap-4 hover:border-primary/30 group cursor-pointer">
              <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <BookOpen :size="18" class="text-primary" />
              </div>
              <div class="flex-1">
                <p class="font-semibold text-slate-700 text-sm">Vol. {{ issue.vol }}, No. {{ issue.no }} ({{ issue.year }})</p>
                <p class="text-slate-400 text-xs">{{ issue.papers }} articles</p>
              </div>
              <ExternalLink :size="14" class="text-slate-300 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BookOpen, ExternalLink } from 'lucide-vue-next'
useHead({ title: 'Journal JSALT — SLSTL' })

const details = [
  { label: 'Publisher',      value: 'Sri Lanka Society of Transport & Logistics (SLSTL)' },
  { label: 'ISSN (Print)',   value: 'XXXX-XXXX (Placeholder)' },
  { label: 'ISSN (Online)',  value: 'XXXX-XXXX (Placeholder)' },
  { label: 'Frequency',      value: 'Bi-annual (June and December)' },
  { label: 'Review Process', value: 'Double-blind peer review' },
  { label: 'Scope',          value: 'Transport planning, logistics, supply chain, port operations, sustainable mobility' },
]

const issues = [
  { vol: 12, no: 2, year: 2025, papers: 8 },
  { vol: 12, no: 1, year: 2025, papers: 7 },
  { vol: 11, no: 2, year: 2024, papers: 9 },
  { vol: 11, no: 1, year: 2024, papers: 6 },
]
</script>
