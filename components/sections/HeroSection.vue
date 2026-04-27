<template>
  <section id="hero" class="relative min-h-screen hero-bg flex flex-col overflow-hidden">
    <!-- Ambient blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-24 -right-24 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-40 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Main content -->
    <div class="flex-1 flex items-center relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 w-full">
        <div class="max-w-3xl">

          <!-- Badges -->
          <div class="flex flex-wrap items-center gap-3 mb-8">
            <span class="inline-flex items-center gap-1.5 bg-accent text-primary-darker text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide">
              <Star :size="11" />
              12th Edition · 2026
            </span>
            <span class="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/20">
              IEEE Technically Co-Sponsored
            </span>
          </div>

          <!-- Title -->
          <h1 class="font-display text-white leading-none">
            <span class="block font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight">
              R4TLI
            </span>
            <span class="block text-xl sm:text-2xl md:text-3xl font-light text-white/70 mt-2">
              Research for Transport &amp; Logistics Industry
            </span>
          </h1>

          <!-- Theme -->
          <div class="mt-7 border-l-[3px] border-accent pl-5">
            <p class="text-accent font-bold text-xs uppercase tracking-[0.18em]">Conference Theme 2026</p>
            <p class="text-white text-xl md:text-2xl font-medium mt-1.5 leading-snug">
              "Smart Mobility &amp; Sustainable Logistics<br class="hidden sm:block"> in the Digital Age"
            </p>
          </div>

          <!-- Meta -->
          <div class="flex flex-wrap items-center gap-6 mt-8 text-white/75">
            <div class="flex items-center gap-2">
              <CalendarDays :size="16" class="text-accent" />
              <span class="text-sm font-medium">August 5–7, 2026</span>
            </div>
            <div class="flex items-center gap-2">
              <MapPin :size="16" class="text-accent" />
              <span class="text-sm font-medium">Colombo, Sri Lanka</span>
            </div>
            <div class="flex items-center gap-2">
              <Building2 :size="16" class="text-accent" />
              <span class="text-sm font-medium">Organised by SLSTL</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 mt-10">
            <a href="#cfp" class="btn-accent" @click.prevent="scrollTo('#cfp')">
              <FileText :size="17" />
              Submit Paper
            </a>
            <a href="#register" class="btn-outline-white" @click.prevent="scrollTo('#register')">
              <UserPlus :size="17" />
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Countdown strip -->
    <div class="relative z-10 bg-black/25 backdrop-blur-sm border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p class="text-white/55 text-xs font-bold uppercase tracking-[0.18em]">
            Conference Begins In
          </p>

          <!-- Timer boxes -->
          <div class="flex items-center gap-2.5">
            <template v-for="(unit, idx) in countdown" :key="unit.label">
              <div class="countdown-box">
                <span class="font-display font-black text-2xl md:text-3xl text-white">
                  {{ pad(unit.value) }}
                </span>
                <span class="text-white/50 text-[10px] uppercase tracking-wide mt-0.5">
                  {{ unit.label }}
                </span>
              </div>
              <span v-if="idx < countdown.length - 1" class="text-white/30 text-2xl font-light -mt-4">:</span>
            </template>
          </div>

          <a
            href="#dates"
            class="hidden sm:flex items-center gap-1 text-white/55 hover:text-accent text-sm font-medium transition-colors"
            @click.prevent="scrollTo('#dates')"
          >
            View Important Dates
            <ChevronRight :size="14" />
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll bounce -->
    <div class="absolute bottom-36 left-1/2 -translate-x-1/2 text-white/30 animate-bounce-slow z-10">
      <ChevronDown :size="22" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  CalendarDays, MapPin, Building2, FileText, UserPlus,
  ChevronRight, ChevronDown, Star,
} from 'lucide-vue-next'

const targetDate = new Date('2026-08-05T09:00:00')

const countdown = ref([
  { label: 'Days',  value: 0 },
  { label: 'Hrs',   value: 0 },
  { label: 'Mins',  value: 0 },
  { label: 'Secs',  value: 0 },
])

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function updateCountdown() {
  const diff = targetDate.getTime() - Date.now()
  if (diff <= 0) return
  countdown.value = [
    { label: 'Days',  value: Math.floor(diff / 86400000) },
    { label: 'Hrs',   value: Math.floor((diff % 86400000) / 3600000) },
    { label: 'Mins',  value: Math.floor((diff % 3600000) / 60000) },
    { label: 'Secs',  value: Math.floor((diff % 60000) / 1000) },
  ]
}

let timer: ReturnType<typeof setInterval>
onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})
onUnmounted(() => clearInterval(timer))

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
