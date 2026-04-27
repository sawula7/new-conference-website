<template>
  <div>
    <InnerPageHero title="Events" subtitle="Professional development events, workshops, and seminars organised by SLSTL." />
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <NuxtLink
            v-for="event in events" :key="event.slug"
            :to="`/events/${event.slug}`"
            class="card p-6 hover:border-primary/30 group"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <component :is="event.icon" :size="18" class="text-primary" />
              </div>
              <span class="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full"
                :class="event.status === 'upcoming' ? 'bg-accent/20 text-accent-darker' : 'bg-slate-100 text-slate-400'">
                {{ event.status === 'upcoming' ? 'Upcoming' : 'Past' }}
              </span>
            </div>
            <h3 class="font-display font-bold text-primary-darker text-sm leading-snug">{{ event.title }}</h3>
            <p class="text-slate-400 text-xs mt-1">{{ event.date }}</p>
            <p class="text-slate-500 text-xs mt-2 leading-relaxed">{{ event.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Cpu, Truck, BarChart2, Globe, Activity, Train } from 'lucide-vue-next'
useHead({ title: 'Events — SLSTL' })

const events = [
  { slug: 'rethinking-transport-ai', icon: Cpu,       status: 'upcoming', title: 'Rethinking Transport & Logistics with AI',  date: '2026',      desc: 'Exploring how artificial intelligence and machine learning are transforming transport and logistics systems.' },
  { slug: 'port-access-highway',     icon: Truck,     status: 'past',     title: 'Port Access Elevated Highway',               date: '2024',      desc: 'Expert panel discussion on the proposed elevated highway connecting the Colombo Port to the expressway network.' },
  { slug: 'excel-workshops',         icon: BarChart2, status: 'past',     title: 'Advanced Excel Workshops',                   date: '2023',      desc: 'Hands-on workshops on advanced data analysis techniques using Microsoft Excel for logistics professionals.' },
  { slug: 'ipfa',                    icon: Globe,     status: 'past',     title: 'IPFA',                                       date: '2022',      desc: 'International Professional Forum on Aviation — a multidisciplinary forum on air transport and connectivity.' },
  { slug: 'pt-covid19',              icon: Activity,  status: 'past',     title: 'PT-COVID19',                                 date: '2020',      desc: 'Seminar on the impact of the COVID-19 pandemic on public transport systems and recovery strategies.' },
  { slug: 'kvline',                  icon: Train,     status: 'past',     title: 'KVLINE',                                     date: '2019',      desc: 'Study and discussion on the Kelani Valley Railway Line upgrade and urban rail connectivity for Colombo.' },
]
</script>
