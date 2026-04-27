<template>
  <div>
    <InnerPageHero
      :title="`Annual Report ${year}`"
      subtitle="SLSTL Annual Report — activities, events, membership, and financial summary."
      parent="Annual Reports"
      parent-href="/annual-reports"
    />
    <section class="py-16 bg-slate-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div class="card p-12">
          <FileText :size="48" class="text-primary/30 mx-auto mb-4" />
          <h2 class="font-display font-bold text-primary-darker text-2xl">Annual Report {{ year }}</h2>
          <p class="text-slate-500 mt-3 leading-relaxed">
            The full annual report for {{ year }} will be available here for download once published.
          </p>
          <button class="btn-primary mt-6 mx-auto">
            <Download :size="16" />
            Download Report (PDF)
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FileText, Download } from 'lucide-vue-next'

const route = useRoute()
const year = computed(() => route.params.year as string)
useHead({ title: computed(() => `Annual Report ${year.value} — SLSTL`) })
</script>
