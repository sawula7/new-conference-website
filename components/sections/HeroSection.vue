<template>
  <section id="hero" class="relative min-h-screen hero-bg flex flex-col items-center justify-center overflow-hidden">

    <!-- Deep vignette overlay -->
    <div class="absolute inset-0 hero-vignette pointer-events-none"></div>

    <!-- Ambient radial glows -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[140px] opacity-25" style="background:radial-gradient(ellipse, #1a96ba 0%, transparent 70%)"></div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20" style="background:radial-gradient(circle, #f0c040 0%, transparent 70%)"></div>
      <div class="absolute bottom-1/4 -left-20 w-[350px] h-[350px] rounded-full blur-3xl opacity-10" style="background:#1786a5"></div>
    </div>

    <!-- Colombo cityscape SVG (decorative, behind content) -->
    <div class="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none select-none">
      <svg viewBox="0 0 1440 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice" class="w-full">
        <!-- Distant horizon haze -->
        <path d="M0 300 Q360 265 720 280 Q1080 295 1440 270 L1440 340 L0 340 Z" fill="rgba(10,61,82,0.5)"/>

        <!-- === BACKGROUND buildings (faint) === -->
        <!-- Left cluster -->
        <rect x="10"  y="230" width="38" height="90"  fill="rgba(255,255,255,0.03)"/>
        <rect x="52"  y="210" width="28" height="110" fill="rgba(255,255,255,0.03)"/>
        <rect x="84"  y="222" width="44" height="98"  fill="rgba(255,255,255,0.03)"/>
        <rect x="133" y="198" width="32" height="122" fill="rgba(255,255,255,0.03)"/>
        <rect x="170" y="218" width="50" height="102" fill="rgba(255,255,255,0.03)"/>

        <!-- Mid-left cluster -->
        <rect x="260" y="215" width="42" height="105" fill="rgba(255,255,255,0.03)"/>
        <rect x="307" y="200" width="55" height="120" fill="rgba(255,255,255,0.03)"/>
        <rect x="367" y="225" width="38" height="95"  fill="rgba(255,255,255,0.03)"/>
        <rect x="410" y="208" width="30" height="112" fill="rgba(255,255,255,0.03)"/>
        <rect x="445" y="220" width="52" height="100" fill="rgba(255,255,255,0.03)"/>

        <!-- Center-right cluster -->
        <rect x="780" y="218" width="48" height="102" fill="rgba(255,255,255,0.03)"/>
        <rect x="833" y="205" width="36" height="115" fill="rgba(255,255,255,0.03)"/>
        <rect x="874" y="222" width="60" height="98"  fill="rgba(255,255,255,0.03)"/>
        <rect x="940" y="212" width="42" height="108" fill="rgba(255,255,255,0.03)"/>

        <!-- Far right cluster -->
        <rect x="1100" y="220" width="45" height="100" fill="rgba(255,255,255,0.03)"/>
        <rect x="1150" y="205" width="32" height="115" fill="rgba(255,255,255,0.03)"/>
        <rect x="1187" y="218" width="55" height="102" fill="rgba(255,255,255,0.03)"/>
        <rect x="1248" y="225" width="40" height="95"  fill="rgba(255,255,255,0.03)"/>
        <rect x="1293" y="210" width="33" height="110" fill="rgba(255,255,255,0.03)"/>
        <rect x="1331" y="222" width="58" height="98"  fill="rgba(255,255,255,0.03)"/>
        <rect x="1395" y="232" width="45" height="88"  fill="rgba(255,255,255,0.03)"/>

        <!-- === FOREGROUND buildings (more visible) === -->
        <!-- Left CBD cluster -->
        <rect x="5"   y="250" width="52" height="90"  fill="rgba(255,255,255,0.055)"/>
        <rect x="62"  y="232" width="42" height="108" fill="rgba(255,255,255,0.055)"/>
        <rect x="109" y="245" width="30" height="95"  fill="rgba(255,255,255,0.055)"/>

        <!-- CBD towers (mid-left) — taller, more defined -->
        <rect x="220" y="220" width="48" height="120" fill="rgba(255,255,255,0.065)"/>
        <!-- Tall tower with antenna -->
        <rect x="273" y="195" width="38" height="145" fill="rgba(255,255,255,0.07)"/>
        <rect x="284" y="160" width="6"  height="35"  fill="rgba(255,255,255,0.06)"/>
        <rect x="316" y="178" width="52" height="162" fill="rgba(255,255,255,0.07)"/>
        <rect x="373" y="200" width="44" height="140" fill="rgba(255,255,255,0.065)"/>
        <rect x="422" y="215" width="35" height="125" fill="rgba(255,255,255,0.06)"/>

        <!-- Glass tower (mid) with stepped top -->
        <rect x="490" y="205" width="55" height="135" fill="rgba(255,255,255,0.07)"/>
        <rect x="497" y="190" width="40" height="20"  fill="rgba(255,255,255,0.065)"/>
        <rect x="503" y="175" width="28" height="18"  fill="rgba(255,255,255,0.06)"/>
        <rect x="543" y="218" width="48" height="122" fill="rgba(255,255,255,0.065)"/>
        <rect x="596" y="228" width="35" height="112" fill="rgba(255,255,255,0.06)"/>

        <!-- ====== LOTUS TOWER (Colombo landmark) — center ====== -->
        <!-- Base platform -->
        <rect x="688" y="298" width="64" height="20" fill="rgba(255,255,255,0.09)"/>
        <rect x="700" y="288" width="40" height="12" fill="rgba(255,255,255,0.09)"/>
        <!-- Stem -->
        <rect x="717" y="110" width="6"  height="180" fill="rgba(255,255,255,0.085)"/>
        <!-- Bulbous observation pod -->
        <ellipse cx="720" cy="208" rx="30" ry="58" fill="rgba(255,255,255,0.07)"/>
        <!-- Inner highlight -->
        <ellipse cx="716" cy="196" rx="12" ry="25" fill="rgba(255,255,255,0.04)"/>
        <!-- Neck above pod -->
        <rect x="715" y="150" width="10" height="32" fill="rgba(255,255,255,0.09)"/>
        <!-- Crown dome -->
        <ellipse cx="720" cy="160" rx="18" ry="25" fill="rgba(255,255,255,0.09)"/>
        <!-- Antenna needle -->
        <rect x="718" y="65"  width="4"  height="96"  fill="rgba(255,255,255,0.08)"/>
        <rect x="719" y="55"  width="2"  height="15"  fill="rgba(255,255,255,0.07)"/>
        <!-- Glow halo -->
        <ellipse cx="720" cy="208" rx="50" ry="80" fill="rgba(240,192,64,0.04)"/>

        <!-- Right-of-tower buildings -->
        <rect x="760" y="230" width="55" height="110" fill="rgba(255,255,255,0.065)"/>
        <rect x="820" y="218" width="42" height="122" fill="rgba(255,255,255,0.07)"/>
        <rect x="867" y="226" width="50" height="114" fill="rgba(255,255,255,0.065)"/>
        <rect x="922" y="215" width="38" height="125" fill="rgba(255,255,255,0.07)"/>
        <rect x="965" y="230" width="55" height="110" fill="rgba(255,255,255,0.065)"/>

        <!-- ====== PORT CRANES (right side — Colombo Harbour) ====== -->
        <!-- Crane 1 -->
        <rect x="1030" y="195" width="7"  height="145" fill="rgba(255,255,255,0.075)"/>
        <rect x="994"  y="195" width="82" height="6"   fill="rgba(255,255,255,0.075)"/>
        <rect x="1033" y="201" width="4"  height="80"  fill="rgba(255,255,255,0.055)"/>
        <!-- Crane 1 cable lines -->
        <line x1="994"  y1="195" x2="1033" y2="270" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        <line x1="1075" y1="195" x2="1034" y2="270" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

        <!-- Crane 2 -->
        <rect x="1115" y="210" width="7"  height="130" fill="rgba(255,255,255,0.075)"/>
        <rect x="1085" y="210" width="72" height="5"   fill="rgba(255,255,255,0.075)"/>
        <rect x="1118" y="215" width="4"  height="70"  fill="rgba(255,255,255,0.055)"/>

        <!-- Crane 3 -->
        <rect x="1195" y="220" width="6"  height="120" fill="rgba(255,255,255,0.07)"/>
        <rect x="1168" y="220" width="65" height="5"   fill="rgba(255,255,255,0.07)"/>

        <!-- Port warehouse/shed -->
        <rect x="1050" y="295" width="200" height="45" fill="rgba(255,255,255,0.06)"/>
        <!-- Shed roof ridge line -->
        <polyline points="1050,295 1150,280 1250,295" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>

        <!-- Foreground ground plane -->
        <path d="M0 318 L1440 318 L1440 340 L0 340 Z" fill="rgba(0,0,0,0.25)"/>
        <!-- Horizon glow line -->
        <rect x="0" y="310" width="1440" height="2" fill="rgba(255,255,255,0.04)"/>
      </svg>
    </div>

    <!-- Main centred content -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12 text-center">

      <!-- SLSTL Logo -->
      <div class="mb-8">
        <img
          src="/slstl-logo.png"
          alt="SLSTL — Sri Lanka Society of Transport & Logistics"
          class="h-16 sm:h-20 w-auto mx-auto drop-shadow-lg opacity-95"
        />
      </div>

      <!-- Top badges -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-10">
        <span class="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
          <Building2 :size="12" class="text-accent" />
          Organised by SLSTL
        </span>
        <span class="inline-flex items-center gap-1.5 bg-accent text-primary-darker text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide">
          <Star :size="11" />
          12th Edition · 2026
        </span>
      </div>

      <!-- Conference acronym -->
      <h1 class="font-display text-white leading-none tracking-tight">
        <span class="block font-black text-[5.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-none hero-title-glow">
          R4TLI
        </span>
      </h1>

      <!-- Full name -->
      <p class="text-white/60 font-light text-lg sm:text-2xl md:text-3xl mt-3 tracking-wide">
        Research for Transport &amp; Logistics Industry
      </p>

      <!-- Gold divider -->
      <div class="flex items-center justify-center gap-4 my-8">
        <div class="h-px w-20 bg-gradient-to-r from-transparent to-accent/60"></div>
        <div class="w-2 h-2 bg-accent rounded-full ring-4 ring-accent/20"></div>
        <div class="h-px w-20 bg-gradient-to-l from-transparent to-accent/60"></div>
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
        <a href="#dates" class="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors" @click.prevent="scrollTo('#dates')">
          <CalendarCheck :size="15" />
          Important Dates
        </a>
      </div>

      <!-- Countdown -->
      <div class="mt-14">
        <p class="text-white/35 text-[10px] font-bold uppercase tracking-[0.22em] mb-5">Conference Begins In</p>
        <div class="flex items-center justify-center gap-3">
          <template v-for="(unit, idx) in countdown" :key="unit.label">
            <div class="countdown-box">
              <span class="font-display font-black text-2xl md:text-3xl text-white leading-none">
                {{ pad(unit.value) }}
              </span>
              <span class="text-white/40 text-[9px] uppercase tracking-wide mt-1">
                {{ unit.label }}
              </span>
            </div>
            <span v-if="idx < countdown.length - 1" class="text-white/20 text-2xl font-thin -mt-3">:</span>
          </template>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/20 animate-bounce-slow z-20">
      <ChevronDown :size="24" />
    </div>

    <!-- Wave bottom separator (above cityscape) -->
    <div class="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
      <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-10 sm:h-16">
        <path d="M0 64 L0 36 Q240 4 480 28 Q720 52 960 24 Q1200 -2 1440 32 L1440 64 Z" fill="#f8fafc"/>
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
