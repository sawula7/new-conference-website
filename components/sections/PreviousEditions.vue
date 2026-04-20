<template>
  <section id="editions" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="section-tag">Conference History</span>
        <h2 class="section-heading">Previous Editions</h2>
        <p class="section-subtext mx-auto">
          Over a decade of advancing transport and logistics research in Sri Lanka and across South Asia.
        </p>
      </div>

      <!-- Editions grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(edition, i) in editions"
          :key="edition.year"
          class="card p-5 reveal group"
          :class="`reveal-delay-${(i % 4) + 1}`"
        >
          <div class="flex items-start justify-between mb-4">
            <span
              class="font-display font-black text-4xl text-primary/15 group-hover:text-primary/25 transition-colors duration-300 leading-none"
            >
              {{ edition.year }}
            </span>
            <span class="text-[10px] font-bold bg-slate-100 text-slate-400 px-2 py-1 rounded-full">
              {{ edition.edition }}th Ed.
            </span>
          </div>

          <h3 class="font-display font-bold text-primary-darker text-sm">{{ edition.title }}</h3>
          <p class="text-xs text-slate-400 mt-1">{{ edition.location }}</p>

          <div class="flex items-center gap-3 mt-3 text-xs text-slate-400">
            <span class="flex items-center gap-1">
              <FileText :size="11" class="text-primary/50" />
              {{ edition.papers }} papers
            </span>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-dark font-semibold mt-4 group-hover:gap-2 transition-all duration-200"
          >
            View Proceedings
            <ExternalLink :size="11" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, ExternalLink } from 'lucide-vue-next'

const editions = [
  { year: '2024', edition: 10, title: 'R4TLI 2024', location: 'Colombo, Sri Lanka',  papers: 85 },
  { year: '2023', edition: 9,  title: 'R4TLI 2023', location: 'Colombo, Sri Lanka',  papers: 78 },
  { year: '2021', edition: 8,  title: 'R4TLI 2021', location: 'Virtual Conference',  papers: 92 },
  { year: '2020', edition: 7,  title: 'R4TLI 2020', location: 'Colombo, Sri Lanka',  papers: 67 },
  { year: '2019', edition: 6,  title: 'R4TLI 2019', location: 'Colombo, Sri Lanka',  papers: 72 },
  { year: '2018', edition: 5,  title: 'R4TLI 2018', location: 'Colombo, Sri Lanka',  papers: 61 },
  { year: '2017', edition: 4,  title: 'R4TLI 2017', location: 'Colombo, Sri Lanka',  papers: 55 },
  { year: '2016', edition: 3,  title: 'R4TLI 2016', location: 'Colombo, Sri Lanka',  papers: 48 },
]
</script>
