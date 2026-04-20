<template>
  <section id="sponsors" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="section-tag">Partners &amp; Sponsors</span>
        <h2 class="section-heading">Our Sponsors</h2>
        <p class="section-subtext mx-auto">
          R4TLI 2026 is made possible with the generous support of our sponsors and partners.
        </p>
      </div>

      <!-- Platinum -->
      <div class="mb-14 reveal">
        <div class="flex items-center gap-4 mb-6">
          <div class="flex-1 h-px bg-slate-200"></div>
          <span class="text-xs font-bold uppercase tracking-widest text-slate-400 px-3">Platinum Sponsors</span>
          <div class="flex-1 h-px bg-slate-200"></div>
        </div>
        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="i in 2"
            :key="i"
            class="card px-14 py-10 flex items-center justify-center min-w-[220px] hover:border-primary/30"
          >
            <div class="text-slate-200 font-display font-bold text-xl">Your Logo Here</div>
          </div>
        </div>
      </div>

      <!-- Gold -->
      <div class="mb-14 reveal">
        <div class="flex items-center gap-4 mb-6">
          <div class="flex-1 h-px bg-slate-200"></div>
          <span class="text-xs font-bold uppercase tracking-widest text-slate-400 px-3">Gold Sponsors</span>
          <div class="flex-1 h-px bg-slate-200"></div>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <div
            v-for="i in 3"
            :key="i"
            class="card px-10 py-7 flex items-center justify-center min-w-[170px] hover:border-primary/20"
          >
            <div class="text-slate-200 font-display font-semibold text-lg">Logo</div>
          </div>
        </div>
      </div>

      <!-- Supporting -->
      <div class="mb-16 reveal">
        <div class="flex items-center gap-4 mb-6">
          <div class="flex-1 h-px bg-slate-200"></div>
          <span class="text-xs font-bold uppercase tracking-widest text-slate-400 px-3">Supporting Organisations</span>
          <div class="flex-1 h-px bg-slate-200"></div>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="i in 5"
            :key="i"
            class="card px-8 py-5 flex items-center justify-center min-w-[130px]"
          >
            <div class="text-slate-200 font-medium text-sm">Logo</div>
          </div>
        </div>
      </div>

      <!-- Become a sponsor CTA -->
      <div class="text-center reveal">
        <div class="inline-block border-2 border-dashed border-primary/25 rounded-2xl p-10 max-w-md">
          <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Handshake :size="26" class="text-primary" />
          </div>
          <h3 class="font-display font-bold text-primary-darker text-xl mb-2">Become a Sponsor</h3>
          <p class="text-slate-500 text-sm mb-6 leading-relaxed">
            Partner with R4TLI 2026 to connect with leading transport &amp; logistics researchers,
            practitioners, and policy makers from across Asia.
          </p>
          <a href="#" class="btn-primary text-sm">
            <Download :size="15" />
            Download Sponsorship Package
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Handshake, Download } from 'lucide-vue-next'
</script>
