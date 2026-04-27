<template>
  <div>
    <InnerPageHero title="Our Scope" subtitle="The domains and disciplines covered by SLSTL's research and activities." parent="Home" parent-href="/" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <span class="section-tag">Areas of Focus</span>
        <h2 class="section-heading mb-12">Scope of Activities</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="area in areas" :key="area.title" class="card p-6">
            <div class="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <component :is="area.icon" :size="22" class="text-primary" />
            </div>
            <h3 class="font-display font-bold text-primary-darker">{{ area.title }}</h3>
            <p class="text-slate-500 text-sm mt-2 leading-relaxed">{{ area.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Truck, Ship, Train, Globe, BarChart2, Cpu, Leaf, Building2, Users } from 'lucide-vue-next'

useHead({ title: 'Our Scope — SLSTL' })

const areas = [
  { icon: Truck,     title: 'Road Transport',           desc: 'Urban and inter-city road transport planning, traffic management, freight logistics, and last-mile delivery.' },
  { icon: Ship,      title: 'Maritime & Port Logistics', desc: 'Port operations, maritime freight, container logistics, and Colombo Port expansion and connectivity.' },
  { icon: Train,     title: 'Rail & Multimodal',        desc: 'Railway modernisation, multimodal transport hubs, and integrated passenger and freight systems.' },
  { icon: Globe,     title: 'Supply Chain Management',  desc: 'End-to-end supply chain optimisation, resilience, procurement, and inventory management.' },
  { icon: BarChart2, title: 'Transport Economics',      desc: 'Pricing, demand modelling, cost-benefit analysis, and economic impact of transport infrastructure.' },
  { icon: Cpu,       title: 'Smart & Digital Logistics', desc: 'IoT, AI, blockchain, and data analytics applications in transport and logistics systems.' },
  { icon: Leaf,      title: 'Sustainable Mobility',     desc: 'Green logistics, electric vehicles, carbon footprint reduction, and sustainable urban transport.' },
  { icon: Building2, title: 'Infrastructure Planning',  desc: 'Transport infrastructure development, project appraisal, and public-private partnerships.' },
  { icon: Users,     title: 'Human Factors & Safety',  desc: 'Road safety, driver behaviour, ergonomics, and human-centred transport system design.' },
]
</script>
