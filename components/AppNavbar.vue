<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-3 group" @click.prevent="scrollTo('#hero')">
        <!-- SLSTL logo: white on dark, teal-bg pill on white -->
        <div
          class="flex-shrink-0 transition-all duration-300"
          :class="isScrolled ? 'bg-primary rounded-lg p-1.5' : ''"
        >
          <img
            src="/slstl-logo.png"
            alt="SLSTL"
            class="w-auto transition-all duration-300"
            :class="isScrolled ? 'h-7' : 'h-9'"
          />
        </div>
        <div class="flex flex-col leading-none">
          <span
            :class="['font-display font-black text-xl transition-colors', isScrolled ? 'text-primary-darker' : 'text-white']"
          >
            R4TLI <span class="text-accent">2026</span>
          </span>
          <span
            :class="['text-[11px] font-medium tracking-wide transition-colors', isScrolled ? 'text-slate-400' : 'text-white/55']"
          >
            SLSTL International Conference
          </span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-6">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          :class="[
            'text-sm font-medium transition-colors hover:text-accent',
            isScrolled ? 'text-slate-600' : 'text-white/90',
          ]"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- CTA + Mobile toggle -->
      <div class="flex items-center gap-3">
        <a
          href="#register"
          class="hidden lg:inline-flex btn-accent text-sm py-2 px-5"
          @click.prevent="scrollTo('#register')"
        >
          Register Now
        </a>
        <button
          class="lg:hidden p-2 rounded-md transition-colors"
          :class="isScrolled ? 'text-primary-darker' : 'text-white'"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <component :is="mobileOpen ? X : Menu" :size="22" />
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-40 bg-primary-darker flex flex-col items-center justify-center gap-8"
      >
        <!-- Close button top-right -->
        <button
          class="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          @click="mobileOpen = false"
        >
          <X :size="26" />
        </button>

        <!-- Logo in overlay -->
        <div class="flex flex-col items-center gap-3 mb-2">
          <img src="/slstl-logo.png" alt="SLSTL" class="h-14 w-auto opacity-90" />
          <div class="font-display font-black text-3xl text-white">
            R4TLI <span class="text-accent">2026</span>
          </div>
        </div>

        <nav class="flex flex-col items-center gap-5">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="font-display font-semibold text-xl text-white/80 hover:text-accent transition-colors"
            @click="navigate(link.href)"
          >
            {{ link.label }}
          </a>
        </nav>
        <a href="#register" class="btn-accent mt-4" @click="navigate('#register')">
          Register Now
        </a>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Dates',          href: '#dates' },
  { label: 'Speakers',       href: '#speakers' },
  { label: 'Schedule',       href: '#schedule' },
  { label: 'Call for Papers',href: '#cfp' },
  { label: 'Venue',          href: '#venue' },
  { label: 'Sponsors',       href: '#sponsors' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

function navigate(href: string) {
  mobileOpen.value = false
  nextTick(() => scrollTo(href))
}

onMounted(() => {
  const handler = () => { isScrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>
