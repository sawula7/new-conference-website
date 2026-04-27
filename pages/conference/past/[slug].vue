<template>
  <div>
    <InnerPageHero
      :title="meta.name"
      :subtitle="`${meta.location} · ${meta.year}`"
      parent="Past Conferences"
      parent-href="/conference/past"
    />
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="card p-8 text-center">
          <h2 class="font-display font-bold text-primary-darker text-2xl mb-3">{{ meta.name }}</h2>
          <p class="text-slate-500 leading-relaxed max-w-xl mx-auto">
            Detailed information, proceedings, and resources for {{ meta.name }} will be available here.
          </p>
          <div class="flex flex-wrap justify-center gap-3 mt-6">
            <NuxtLink :to="`/conference/proceedings/${meta.year}`" class="btn-primary text-sm py-2 px-5">
              <BookOpen :size="15" /> View Proceedings
            </NuxtLink>
            <NuxtLink to="/conference/past" class="btn-outline-primary text-sm py-2 px-5">
              Back to Past Conferences
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BookOpen } from 'lucide-vue-next'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const confData: Record<string, { name: string; year: string; location: string }> = {
  'tlog-2024':  { name: 'TLOG-2024',           year: '2024', location: 'Colombo, Sri Lanka' },
  'r4tli-2024': { name: 'R4TLI-2024',          year: '2024', location: 'Colombo, Sri Lanka' },
  'r4tli-2023': { name: 'R4TLI-2023',          year: '2023', location: 'Colombo, Sri Lanka' },
  'r4tli-2022': { name: 'R4TLI-2022',          year: '2022', location: 'Virtual Conference' },
  'r4tli-2021': { name: 'R4TLI-2021',          year: '2021', location: 'Virtual Conference' },
  'r4tli-2020': { name: 'R4TLI-2020',          year: '2020', location: 'Colombo, Sri Lanka' },
  'east-2019':  { name: 'EAST2019 Conference', year: '2019', location: 'Colombo, Sri Lanka' },
  'r4tli-2019': { name: 'R4TLI-2019',          year: '2019', location: 'Colombo, Sri Lanka' },
  'r4tli-2018': { name: 'R4TLI-2018',          year: '2018', location: 'Colombo, Sri Lanka' },
  'r4tli-2017': { name: 'R4TLI-2017',          year: '2017', location: 'Colombo, Sri Lanka' },
  'r4tli-2016': { name: 'R4TLI-2016',          year: '2016', location: 'Colombo, Sri Lanka' },
}

const meta = computed(() => confData[slug.value] ?? { name: slug.value, year: '—', location: '—' })
useHead({ title: computed(() => `${meta.value.name} — SLSTL`) })
</script>
