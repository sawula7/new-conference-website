<template>
  <section id="themes" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="section-tag">Research Tracks</span>
        <h2 class="section-heading">Conference Themes &amp; Topics</h2>
        <p class="section-subtext mx-auto">
          R4TLI 2026 welcomes original research across all dimensions of transport and logistics.
          Submit your work under one of these six core themes.
        </p>
      </div>

      <!-- Themes grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(theme, i) in themes"
          :key="theme.title"
          class="card p-6 reveal group cursor-default"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <div
            :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300', theme.bg]"
          >
            <component :is="theme.icon" :size="22" :class="theme.iconColor" />
          </div>
          <h3 class="font-display font-bold text-base text-primary-darker">{{ theme.title }}</h3>
          <p class="text-slate-500 text-sm mt-2 leading-relaxed">{{ theme.desc }}</p>
          <ul class="mt-4 space-y-1.5">
            <li
              v-for="t in theme.topics"
              :key="t"
              class="flex items-start gap-2 text-xs text-slate-400"
            >
              <span class="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
              {{ t }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Cpu, Leaf, Ship, Bus, Package, BarChart3 } from 'lucide-vue-next'

const themes = [
  {
    icon: Cpu,
    title: 'Digital Transformation',
    desc: 'Emerging technologies reshaping transport and logistics operations.',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    topics: [
      'AI & Machine Learning in Logistics',
      'IoT and Real-Time Asset Tracking',
      'Autonomous & Connected Vehicles',
      'Blockchain in Supply Chain',
    ],
  },
  {
    icon: Leaf,
    title: 'Green & Sustainable Transport',
    desc: 'Low-carbon mobility and sustainable logistics practices.',
    bg: 'bg-green-50',
    iconColor: 'text-green-600',
    topics: [
      'Electric & Hydrogen Mobility',
      'Carbon Footprint Reduction',
      'Green Port Management',
      'Circular Economy Logistics',
    ],
  },
  {
    icon: Ship,
    title: 'Maritime & Port Logistics',
    desc: 'Innovation in seaports, shipping, and maritime supply chains.',
    bg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    topics: [
      'Port Efficiency & Automation',
      'Container Terminal Operations',
      'Maritime Safety & Security',
      'Blue Economy',
    ],
  },
  {
    icon: Bus,
    title: 'Urban Mobility & Public Transport',
    desc: 'Smart urban mobility systems and public transport innovation.',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    topics: [
      'Smart City Integration',
      'Multimodal Transport Planning',
      'Ride-Hailing & Shared Mobility',
      'First/Last Mile Solutions',
    ],
  },
  {
    icon: Package,
    title: 'Supply Chain Management',
    desc: 'Resilient and efficient supply chain strategies and operations.',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    topics: [
      'Supply Chain Resilience',
      'Cold Chain Management',
      'Demand Forecasting & Planning',
      'Inventory Optimisation',
    ],
  },
  {
    icon: BarChart3,
    title: 'Transport Policy & Economics',
    desc: 'Policy frameworks, regulatory analysis, and economic modelling.',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    topics: [
      'Transport Infrastructure Investment',
      'Regulatory Impact Analysis',
      'Trade Facilitation',
      'Aviation Economics',
    ],
  },
]
</script>
