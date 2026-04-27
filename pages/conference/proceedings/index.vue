<template>
  <div>
    <InnerPageHero title="Conference Proceedings" subtitle="Access peer-reviewed papers from all past R4TLI editions." parent="R4TLI Conference" parent-href="/conference" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-2 gap-4">
          <NuxtLink
            v-for="y in years" :key="y"
            :to="`/conference/proceedings/${y}`"
            class="card p-5 flex items-center gap-4 hover:border-primary/30 group"
          >
            <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <BookOpen :size="18" class="text-primary" />
            </div>
            <div class="flex-1">
              <p class="font-display font-bold text-primary-darker">R4TLI {{ y }}</p>
              <p class="text-slate-400 text-xs">Conference Proceedings</p>
            </div>
            <ChevronRight :size="16" class="text-slate-300 group-hover:text-primary transition-colors" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BookOpen, ChevronRight } from 'lucide-vue-next'
useHead({ title: 'Conference Proceedings — R4TLI' })
const years = ['2025','2024','2023','2022','2021','2020','2019','2018','2017','2016']
</script>
