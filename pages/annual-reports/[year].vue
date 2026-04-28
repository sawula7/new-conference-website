<template>
  <div>
    <InnerPageHero
      :title="`Annual Report ${year}`"
      subtitle="SLSTL Annual Report — activities, events, membership, and financial summary."
      parent="Annual Reports"
      parent-href="/annual-reports"
    />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">

        <!-- Download bar -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center justify-between gap-4 mb-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText :size="22" class="text-primary" />
            </div>
            <div>
              <p class="font-display font-bold text-primary-darker">SLSTL Annual Report {{ year }}</p>
              <p class="text-xs text-slate-400 mt-0.5">Sri Lanka Society for Transport &amp; Logistics</p>
            </div>
          </div>
          <a :href="`/documents/annual-report-${year}.pdf`" target="_blank" download
             class="btn-primary text-sm py-2 px-5 flex items-center gap-2">
            <Download :size="15" /> Download PDF
          </a>
        </div>

        <!-- Inline PDF viewer -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <iframe
            :src="`/documents/annual-report-${year}.pdf`"
            class="w-full"
            style="height: 80vh; min-height: 600px;"
            type="application/pdf"
          >
            <div class="p-8 text-center text-slate-500">
              <p>Your browser does not support inline PDFs.</p>
              <a :href="`/documents/annual-report-${year}.pdf`" class="text-primary hover:underline font-semibold mt-2 inline-block">
                Click here to download the PDF
              </a>
            </div>
          </iframe>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FileText, Download } from 'lucide-vue-next'

const route = useRoute()
const year  = computed(() => route.params.year as string)
useHead({ title: computed(() => `Annual Report ${year.value} — SLSTL`) })
</script>
