<template>
  <section class="relative inner-page-hero overflow-hidden pt-28 pb-14">
    <!-- Subtle grid overlay -->
    <div class="absolute inset-0 pointer-events-none" style="background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px);background-size:50px 50px"></div>
    <!-- Radial glow -->
    <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse 70% 60% at 50% 50%,rgba(23,134,165,0.25) 0%,transparent 70%)"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Breadcrumb -->
      <nav class="flex items-center flex-wrap gap-1.5 text-white/40 text-xs mb-5">
        <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
        <ChevronRight :size="11" />
        <template v-if="parent">
          <NuxtLink :to="parentHref || '/'" class="hover:text-white transition-colors">{{ parent }}</NuxtLink>
          <ChevronRight :size="11" />
        </template>
        <span class="text-white/75">{{ title }}</span>
      </nav>

      <!-- Title -->
      <h1 class="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-white/60 mt-3 text-base sm:text-lg max-w-2xl leading-relaxed">
        {{ subtitle }}
      </p>
    </div>

    <!-- Wave bottom -->
    <div class="absolute bottom-0 left-0 right-0 pointer-events-none">
      <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-6 sm:h-10">
        <path d="M0 40 L0 20 Q360 0 720 20 Q1080 40 1440 15 L1440 40 Z" fill="#f8fafc"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  title: string
  subtitle?: string
  parent?: string
  parentHref?: string
}>()
</script>
