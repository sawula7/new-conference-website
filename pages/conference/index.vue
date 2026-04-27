<template>
  <div>
    <InnerPageHero title="R4TLI Conference" subtitle="The premier international research conference for transport & logistics in South Asia, organised by SLSTL." />
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Current edition CTA -->
        <div class="card p-10 mb-10 bg-gradient-to-br from-primary-darker to-primary text-white rounded-2xl border-0">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span class="inline-block bg-accent text-primary-darker text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide mb-3">12th Edition</span>
              <h2 class="font-display font-black text-3xl md:text-4xl">R4TLI 2026</h2>
              <p class="text-white/70 mt-2">August 5–7, 2026 · Colombo, Sri Lanka</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <NuxtLink to="/" class="btn-accent">Submit Paper</NuxtLink>
              <NuxtLink to="/" class="btn-outline-white">View Programme</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Sub-links -->
        <div class="grid sm:grid-cols-3 gap-5">
          <NuxtLink v-for="item in links" :key="item.href" :to="item.href" class="card p-6 hover:border-primary/30 group">
            <div class="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <component :is="item.icon" :size="22" class="text-primary" />
            </div>
            <h3 class="font-display font-bold text-primary-darker">{{ item.label }}</h3>
            <p class="text-slate-500 text-sm mt-1">{{ item.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FileText, BookOpen, Calendar } from 'lucide-vue-next'
useHead({ title: 'R4TLI Conference — SLSTL' })

const links = [
  { href: '/conference/r4tli-2025', icon: FileText,  label: 'R4TLI 2025',              desc: 'Information and proceedings from the 2025 edition.' },
  { href: '/conference/proceedings', icon: BookOpen, label: 'Conference Proceedings',   desc: 'Access papers and proceedings from all past editions.' },
  { href: '/conference/past',        icon: Calendar, label: 'Past Conferences',         desc: 'Browse the history of R4TLI and related conferences.' },
]
</script>
