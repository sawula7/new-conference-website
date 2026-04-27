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
          <span :class="['font-display font-black text-xl transition-colors', isScrolled ? 'text-primary-darker' : 'text-white']">
            R4TLI <span class="text-accent">2026</span>
          </span>
          <span :class="['text-[11px] font-medium tracking-wide transition-colors', isScrolled ? 'text-slate-400' : 'text-white/55']">
            SLSTL International Conference
          </span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-1">
        <template v-for="link in navLinks" :key="link.label">

          <!-- Link with dropdown -->
          <div v-if="link.children" class="relative group">
            <button
              :class="[
                'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent',
                isScrolled ? 'text-slate-600' : 'text-white/90',
              ]"
            >
              {{ link.label }}
              <ChevronDown
                :size="13"
                class="transition-transform duration-200 group-hover:rotate-180 mt-px"
              />
            </button>

            <!-- Dropdown panel -->
            <div
              class="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50
                     opacity-0 invisible translate-y-1
                     group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                     transition-all duration-200"
            >
              <a
                v-for="child in link.children"
                :key="child.label"
                :href="child.href"
                class="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-primary-50 transition-colors"
                @click.prevent="scrollTo(child.href)"
              >
                <component v-if="child.icon" :is="child.icon" :size="14" class="text-primary/60 flex-shrink-0" />
                {{ child.label }}
              </a>
            </div>
          </div>

          <!-- Plain link -->
          <a
            v-else
            :href="link.href"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent',
              isScrolled ? 'text-slate-600' : 'text-white/90',
            ]"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </template>
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
        class="fixed inset-0 z-40 bg-primary-darker overflow-y-auto"
      >
        <!-- Close button -->
        <button
          class="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          @click="mobileOpen = false"
        >
          <X :size="26" />
        </button>

        <div class="flex flex-col items-center justify-center min-h-full py-20 gap-6">
          <!-- Logo -->
          <div class="flex flex-col items-center gap-3 mb-2">
            <img src="/slstl-logo.png" alt="SLSTL" class="h-14 w-auto opacity-90" />
            <div class="font-display font-black text-3xl text-white">
              R4TLI <span class="text-accent">2026</span>
            </div>
          </div>

          <!-- Nav items -->
          <nav class="flex flex-col items-center gap-1 w-full max-w-xs">
            <template v-for="link in navLinks" :key="link.label">

              <!-- Item with children — accordion -->
              <div v-if="link.children" class="w-full">
                <button
                  class="w-full flex items-center justify-center gap-2 font-display font-semibold text-xl text-white/80 hover:text-accent transition-colors py-2"
                  @click="toggleMobile(link.label)"
                >
                  {{ link.label }}
                  <ChevronDown
                    :size="16"
                    class="transition-transform duration-200"
                    :class="mobileExpanded === link.label ? 'rotate-180' : ''"
                  />
                </button>
                <!-- Sub-items -->
                <Transition name="accordion">
                  <div v-if="mobileExpanded === link.label" class="flex flex-col items-center gap-1 pb-2">
                    <a
                      v-for="child in link.children"
                      :key="child.label"
                      :href="child.href"
                      class="text-base text-white/55 hover:text-accent transition-colors py-1.5"
                      @click="navigate(child.href)"
                    >
                      {{ child.label }}
                    </a>
                  </div>
                </Transition>
              </div>

              <!-- Plain item -->
              <a
                v-else
                :href="link.href"
                class="font-display font-semibold text-xl text-white/80 hover:text-accent transition-colors py-2"
                @click="navigate(link.href)"
              >
                {{ link.label }}
              </a>
            </template>
          </nav>

          <a href="#register" class="btn-accent mt-4" @click="navigate('#register')">
            Register Now
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Menu, X, ChevronDown, Info, Users, Clock, Mail } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileOpen = ref(false)
const mobileExpanded = ref<string | null>(null)

const navLinks = [
  {
    label: 'Home',
    href: '#hero',
    children: [
      { label: 'About SLSTL',        href: '#about',     icon: Info  },
      { label: 'Executive Committee', href: '#committee', icon: Users },
      { label: 'History',             href: '#history',   icon: Clock },
      { label: 'Contact Us',          href: '#contact',   icon: Mail  },
    ],
  },
  { label: 'Membership',        href: '#dates'    },
  { label: 'R4TLI Conference',  href: '#speakers' },
  { label: 'Journal (JSALT)',   href: '#schedule' },
  { label: 'Events',            href: '#cfp'      },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

function navigate(href: string) {
  mobileOpen.value = false
  mobileExpanded.value = null
  nextTick(() => scrollTo(href))
}

function toggleMobile(label: string) {
  mobileExpanded.value = mobileExpanded.value === label ? null : label
}

onMounted(() => {
  const handler = () => { isScrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>
