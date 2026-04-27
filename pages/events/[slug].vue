<template>
  <div>
    <InnerPageHero
      :title="event.title"
      :subtitle="event.date"
      parent="Events"
      parent-href="/events"
    />
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="card p-8">
          <div class="flex items-center gap-2 mb-6">
            <span class="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
              :class="event.status === 'upcoming' ? 'bg-accent/20 text-accent-darker' : 'bg-slate-100 text-slate-400'">
              {{ event.status === 'upcoming' ? 'Upcoming Event' : 'Past Event' }}
            </span>
          </div>
          <h2 class="font-display font-bold text-primary-darker text-2xl mb-4">{{ event.title }}</h2>
          <p class="text-slate-500 leading-relaxed">{{ event.desc }}</p>
          <p class="text-slate-500 leading-relaxed mt-4">
            Full details, presentations, and resources from this event will be posted here.
          </p>
          <div class="flex flex-wrap gap-3 mt-8">
            <NuxtLink to="/events" class="btn-outline-primary text-sm py-2 px-5">Back to Events</NuxtLink>
            <NuxtLink to="/contact" class="btn-primary text-sm py-2 px-5">Enquire</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const eventData: Record<string, { title: string; date: string; status: string; desc: string }> = {
  'rethinking-transport-ai': { title: 'Rethinking Transport & Logistics with AI',  date: '2026', status: 'upcoming', desc: 'Exploring how artificial intelligence and machine learning are transforming transport and logistics systems.' },
  'port-access-highway':     { title: 'Port Access Elevated Highway',               date: '2024', status: 'past',     desc: 'Expert panel discussion on the proposed elevated highway connecting the Colombo Port to the expressway network.' },
  'excel-workshops':         { title: 'Advanced Excel Workshops',                   date: '2023', status: 'past',     desc: 'Hands-on workshops on advanced data analysis techniques using Microsoft Excel for logistics professionals.' },
  'ipfa':                    { title: 'IPFA',                                       date: '2022', status: 'past',     desc: 'International Professional Forum on Aviation.' },
  'pt-covid19':              { title: 'PT-COVID19',                                 date: '2020', status: 'past',     desc: 'Seminar on the impact of the COVID-19 pandemic on public transport systems and recovery strategies.' },
  'kvline':                  { title: 'KVLINE',                                     date: '2019', status: 'past',     desc: 'Study and discussion on the Kelani Valley Railway Line upgrade and urban rail connectivity for Colombo.' },
}

const event = computed(() => eventData[slug.value] ?? { title: slug.value, date: '—', status: 'past', desc: 'Event details coming soon.' })
useHead({ title: computed(() => `${event.value.title} — SLSTL Events`) })
</script>
