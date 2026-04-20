<template>
  <section id="speakers" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="section-tag">Invited Experts</span>
        <h2 class="section-heading">Keynote Speakers</h2>
        <p class="section-subtext mx-auto">
          World-leading researchers and industry pioneers sharing cutting-edge insights at R4TLI 2026.
        </p>
      </div>

      <!-- Speaker cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <div
          v-for="(speaker, i) in speakers"
          :key="speaker.name"
          class="card p-6 reveal group"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <!-- Avatar + name row -->
          <div class="flex items-start gap-4 mb-4">
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-xl group-hover:scale-105 transition-transform duration-300"
              :class="avatarGradient(i)"
            >
              {{ initials(speaker.name) }}
            </div>
            <div class="min-w-0">
              <span
                class="text-xs font-bold px-2 py-0.5 rounded-full"
                :class="badgeClass(speaker.type)"
              >
                {{ speaker.type }}
              </span>
              <h3 class="font-display font-bold text-primary-darker mt-1 text-sm leading-snug">
                {{ speaker.name }}
              </h3>
              <p class="text-xs text-slate-400 mt-0.5 leading-snug">{{ speaker.title }}</p>
            </div>
          </div>

          <!-- Org + country -->
          <div class="space-y-1.5 mb-4">
            <div class="flex items-center gap-2 text-xs text-slate-500">
              <Building2 :size="12" class="text-primary flex-shrink-0" />
              <span class="truncate">{{ speaker.org }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-500">
              <Globe :size="12" class="text-primary flex-shrink-0" />
              <span>{{ speaker.country }}</span>
            </div>
          </div>

          <!-- Talk topic -->
          <div class="border-t border-slate-100 pt-4">
            <p class="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Talk Topic</p>
            <p class="text-sm text-slate-600 italic leading-snug">"{{ speaker.topic }}"</p>
          </div>
        </div>
      </div>

      <!-- TBA note -->
      <div class="text-center mt-12 reveal">
        <p class="text-slate-400 text-sm">
          Additional speakers to be announced.
          <a href="#" class="text-primary hover:underline ml-1">Get notified →</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Building2, Globe } from 'lucide-vue-next'

const speakers = [
  {
    name: 'Prof. A. Placeholder',
    title: 'Professor of Transport Engineering',
    org: 'University of Moratuwa',
    country: 'Sri Lanka',
    type: 'Keynote',
    topic: 'Digital Twins in Urban Transport Planning',
  },
  {
    name: 'Dr. B. Placeholder',
    title: 'Director, Logistics Research Centre',
    org: 'University of Huddersfield',
    country: 'United Kingdom',
    type: 'Keynote',
    topic: 'AI-Driven Supply Chain Resilience',
  },
  {
    name: 'Prof. C. Placeholder',
    title: 'Chair, Maritime Studies',
    org: 'Indian Institute of Technology',
    country: 'India',
    type: 'Keynote',
    topic: 'Green Shipping and Decarbonisation',
  },
  {
    name: 'Dr. D. Placeholder',
    title: 'Senior Transport Economist',
    org: 'Asian Development Bank',
    country: 'Philippines',
    type: 'Invited',
    topic: 'Infrastructure Financing in Developing Asia',
  },
  {
    name: 'Ms. E. Placeholder',
    title: 'Chief Supply Chain Officer',
    org: 'Global Logistics Corp.',
    country: 'Singapore',
    type: 'Industry',
    topic: 'Last-Mile Innovation in ASEAN Markets',
  },
  {
    name: 'Prof. F. Placeholder',
    title: 'Research Professor, Transport Policy',
    org: 'Delft University of Technology',
    country: 'Netherlands',
    type: 'Keynote',
    topic: 'Sustainable Urban Mobility Transitions',
  },
]

function initials(name: string) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('')
}

const gradients = [
  'bg-gradient-to-br from-primary to-primary-dark',
  'bg-gradient-to-br from-primary-dark to-primary-darker',
  'bg-gradient-to-br from-accent-600 to-accent-darker',
  'bg-gradient-to-br from-primary to-primary-dark',
  'bg-gradient-to-br from-primary-dark to-primary-darker',
  'bg-gradient-to-br from-primary to-primary-dark',
]
function avatarGradient(i: number) {
  return gradients[i % gradients.length]
}

function badgeClass(type: string) {
  if (type === 'Keynote')  return 'bg-primary/10 text-primary'
  if (type === 'Industry') return 'bg-accent/20 text-accent-darker'
  return 'bg-slate-100 text-slate-500'
}
</script>
