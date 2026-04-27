<template>
  <div>
    <InnerPageHero title="R4TLI 2025" subtitle="11th International Research Conference for Transport & Logistics Industry · Colombo, Sri Lanka" parent="R4TLI Conference" parent-href="/conference" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-3 gap-5 mb-10">
          <div v-for="stat in stats" :key="stat.label" class="card p-6 text-center">
            <div class="font-display font-black text-3xl text-primary">{{ stat.value }}</div>
            <div class="text-slate-500 text-sm mt-1">{{ stat.label }}</div>
          </div>
        </div>
        <div class="card p-8 mb-6">
          <h2 class="font-display font-bold text-primary-darker text-xl mb-4">About R4TLI 2025</h2>
          <p class="text-slate-500 leading-relaxed">
            The 11th edition of R4TLI was held in Colombo, Sri Lanka, bringing together researchers,
            practitioners, and policymakers from across South Asia and beyond to present and discuss
            the latest advances in transport and logistics research.
          </p>
          <p class="text-slate-500 leading-relaxed mt-4">
            Proceedings from R4TLI 2025 are available via the conference proceedings page.
          </p>
          <div class="flex flex-wrap gap-3 mt-6">
            <NuxtLink to="/conference/proceedings/2025" class="btn-primary text-sm py-2 px-5">
              <BookOpen :size="15" /> View Proceedings
            </NuxtLink>
            <button class="btn-outline-primary text-sm py-2 px-5">
              <Download :size="15" /> Download Programme
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BookOpen, Download } from 'lucide-vue-next'
useHead({ title: 'R4TLI 2025 — SLSTL Conference' })

const stats = [
  { value: '80+', label: 'Papers Presented' },
  { value: '40+', label: 'Countries Represented' },
  { value: '500+', label: 'Attendees' },
]
</script>
