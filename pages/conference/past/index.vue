<template>
  <div>
    <InnerPageHero title="Past Conferences" subtitle="A decade of R4TLI and SLSTL-organised conferences." parent="R4TLI Conference" parent-href="/conference" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink
            v-for="conf in conferences" :key="conf.slug"
            :to="`/conference/past/${conf.slug}`"
            class="card p-5 hover:border-primary/30 group"
          >
            <div class="flex items-start justify-between mb-3">
              <span class="font-display font-black text-3xl text-primary/15 group-hover:text-primary/25 transition-colors">{{ conf.year }}</span>
              <span class="text-[10px] font-bold bg-slate-100 text-slate-400 px-2 py-1 rounded-full">{{ conf.edition }}</span>
            </div>
            <h3 class="font-display font-bold text-primary-darker text-sm">{{ conf.name }}</h3>
            <p class="text-xs text-slate-400 mt-1">{{ conf.location }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Past Conferences — R4TLI' })

const conferences = [
  { slug: 'tlog-2024',  year: '2024', edition: 'TLOG',  name: 'TLOG-2024',           location: 'Colombo, Sri Lanka' },
  { slug: 'r4tli-2024', year: '2024', edition: '10th',  name: 'R4TLI-2024',          location: 'Colombo, Sri Lanka' },
  { slug: 'r4tli-2023', year: '2023', edition: '9th',   name: 'R4TLI-2023',          location: 'Colombo, Sri Lanka' },
  { slug: 'r4tli-2022', year: '2022', edition: '8th',   name: 'R4TLI-2022',          location: 'Virtual Conference' },
  { slug: 'r4tli-2021', year: '2021', edition: '7th',   name: 'R4TLI-2021',          location: 'Virtual Conference' },
  { slug: 'r4tli-2020', year: '2020', edition: '6th',   name: 'R4TLI-2020',          location: 'Colombo, Sri Lanka' },
  { slug: 'east-2019',  year: '2019', edition: 'EAST',  name: 'EAST2019 Conference', location: 'Colombo, Sri Lanka' },
  { slug: 'r4tli-2019', year: '2019', edition: '5th',   name: 'R4TLI-2019',          location: 'Colombo, Sri Lanka' },
  { slug: 'r4tli-2018', year: '2018', edition: '4th',   name: 'R4TLI-2018',          location: 'Colombo, Sri Lanka' },
  { slug: 'r4tli-2017', year: '2017', edition: '3rd',   name: 'R4TLI-2017',          location: 'Colombo, Sri Lanka' },
  { slug: 'r4tli-2016', year: '2016', edition: '2nd',   name: 'R4TLI-2016',          location: 'Colombo, Sri Lanka' },
]
</script>
