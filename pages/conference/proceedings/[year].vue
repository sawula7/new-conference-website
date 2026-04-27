<template>
  <div>
    <InnerPageHero
      :title="`R4TLI ${year} Proceedings`"
      subtitle="Peer-reviewed papers presented at the conference."
      parent="Conference Proceedings"
      parent-href="/conference/proceedings"
    />
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="card p-10 text-center">
          <BookOpen :size="48" class="text-primary/30 mx-auto mb-4" />
          <h2 class="font-display font-bold text-primary-darker text-2xl">R4TLI {{ year }} Proceedings</h2>
          <p class="text-slate-500 mt-3 max-w-lg mx-auto leading-relaxed">
            The full proceedings for R4TLI {{ year }} are available for download. Individual papers can be
            accessed via the IEEE Xplore Digital Library.
          </p>
          <div class="flex flex-wrap justify-center gap-3 mt-6">
            <button class="btn-primary"><Download :size="15" /> Download Proceedings (PDF)</button>
            <button class="btn-outline-primary"><ExternalLink :size="15" /> IEEE Xplore</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BookOpen, Download, ExternalLink } from 'lucide-vue-next'
const route = useRoute()
const year = computed(() => route.params.year as string)
useHead({ title: computed(() => `R4TLI ${year.value} Proceedings — SLSTL`) })
</script>
