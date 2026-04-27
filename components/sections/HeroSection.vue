<template>
  <section id="hero" class="relative min-h-screen hero-bg flex flex-col items-center justify-center overflow-hidden">

    <!-- Ambient radial glows -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] opacity-40"></div>
      <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-32 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Main centred content -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-10 text-center">

      <!-- Top badges row -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-10">
        <span class="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
          <Building2 :size="12" class="text-accent" />
          Organised by SLSTL
        </span>
        <span class="inline-flex items-center gap-1.5 bg-accent text-primary-darker text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide">
          <Star :size="11" />
          12th Edition · 2026
        </span>
        <span class="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
          IEEE Technically Co-Sponsored
        </span>
      </div>

      <!-- Conference acronym -->
      <h1 class="font-display text-white leading-none tracking-tight">
        <span class="block font-black text-[5.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-none drop-shadow-2xl">
          R4TLI
        </span>
      </h1>

      <!-- Full name -->
      <p class="text-white/65 font-light text-lg sm:text-2xl md:text-3xl mt-3 tracking-wide">
        Research for Transport &amp; Logistics Industry
      </p>

      <!-- Divider -->
      <div class="flex items-center justify-center gap-4 my-8">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-accent/60"></div>
        <div class="w-2 h-2 bg-accent rounded-full"></div>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-accent/60"></div>
      </div>

      <!-- Theme card -->
      <div class="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl px-6 sm:px-10 py-6 max-w-2xl mx-auto">
        <p class="text-accent font-bold text-[10px] uppercase tracking-[0.22em] mb-2">Conference Theme 2026</p>
        <p class="text-white text-base sm:text-lg md:text-xl font-medium leading-snug">
          "Smart Mobility &amp; Sustainable Logistics<br class="hidden sm:block"> in the Digital Age"
        </p>
      </div>

      <!-- Meta strip -->
      <div class="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-9 text-white/70">
        <div class="flex items-center gap-2">
          <CalendarDays :size="15" class="text-accent flex-shrink-0" />
          <span class="text-sm font-medium">August 5–7, 2026</span>
        </div>
        <div class="hidden sm:block h-4 w-px bg-white/25"></div>
        <div class="flex items-center gap-2">
          <MapPin :size="15" class="text-accent flex-shrink-0" />
          <span class="text-sm font-medium">Colombo, Sri Lanka</span>
        </div>
        <div class="hidden sm:block h-4 w-px bg-white/25"></div>
        <div class="flex items-center gap-2">
          <Users :size="15" class="text-accent flex-shrink-0" />
          <span class="text-sm font-medium">In-Person Conference</span>
        </div>
      </div>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center justify-center gap-4 mt-10">
        <a href="#cfp" class="btn-accent text-sm px-7 py-3" @click.prevent="scrollTo('#cfp')">
          <FileText :size="16" />
          Submit Your Paper
        </a>
        <a href="#register" class="btn-outline-white text-sm px-7 py-3" @click.prevent="scrollTo('#register')">
          <UserPlus :size="16" />
          Register Now
        </a>
        <a href="#dates" class="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-sm font-medium transition-colors" @click.prevent="scrollTo('#dates')">
          <CalendarCheck :size="15" />
          Important Dates
        </a>
      </div>

      <!-- Countdown -->
      <div class="mt-14">
        <p class="text-white/40 text-[10px] font-bold uppercase tracking-[0.22em] mb-5">Conference Begins In</p>
        <div class="flex items-center justify-center gap-3">
          <template v-for="(unit, idx) in countdown" :key="unit.label">
            <div class="countdown-box">
              <span class="font-display font-black text-2xl md:text-3xl text-white leading-none">
                {{ pad(unit.value) }}
              </span>
              <span class="text-white/45 text-[9px] uppercase tracking-wide mt-1">
                {{ unit.label }}
              </span>
            </div>
            <span v-if="idx < countdown.length - 1" class="text-white/25 text-2xl font-thin -mt-3">:</span>
          </template>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/25 animate-bounce-slow z-10">
      <ChevronDown :size="24" />
    </div>

    <!-- Wave bottom separator -->
    <div class="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-10 sm:h-14">
        <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#f8fafc"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  CalendarDays, MapPin, Building2, FileText, UserPlus,
  ChevronDown, Star, Users, CalendarCheck,
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
