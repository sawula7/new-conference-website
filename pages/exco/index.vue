<template>
  <div>
    <InnerPageHero title="Exco Members" subtitle="Meet the elected executive committee members who lead SLSTL." parent="Home" parent-href="/" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="flex flex-wrap gap-3 mb-10">
          <NuxtLink
            v-for="y in years" :key="y.slug"
            :to="`/exco/${y.slug}`"
            class="btn-outline-primary text-sm py-2 px-5"
          >
            {{ y.label }}
          </NuxtLink>
        </div>
        <div class="card p-10 text-center text-slate-400">
          <p class="text-lg font-medium">Select a term above to view the executive committee members.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Exco Members — SLSTL' })
const years = [
  { slug: '2019-2020', label: 'Exco 2019/2020' },
  { slug: '2018-2019', label: 'Exco 2018/2019' },
]
</script>
