<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
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
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-1">
        <template v-for="link in navLinks" :key="link.label">

          <!-- Top-level link with dropdown -->
          <div v-if="link.children" class="relative group/top">
            <NuxtLink
              :to="link.href"
              :class="[
                'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent',
                isScrolled ? 'text-slate-600' : 'text-white/90',
              ]"
            >
              {{ link.label }}
              <ChevronDown :size="13" class="transition-transform duration-200 group-hover/top:rotate-180 mt-px" />
            </NuxtLink>

            <!-- Level-1 dropdown panel -->
            <div
              class="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50
                     opacity-0 invisible translate-y-1
                     group-hover/top:opacity-100 group-hover/top:visible group-hover/top:translate-y-0
                     transition-all duration-200"
            >
              <template v-for="child in link.children" :key="child.label">
                <div v-if="child.children" class="relative group/sub">
                  <button
                    class="w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-slate-600
                           hover:text-primary hover:bg-primary-50 transition-colors"
                  >
                    <span class="flex items-center gap-2.5">
                      <component v-if="child.icon" :is="child.icon" :size="14" class="text-primary/60 flex-shrink-0" />
                      {{ child.label }}
                    </span>
                    <ChevronRight :size="12" class="text-slate-400 flex-shrink-0" />
                  </button>
                  <div
                    class="absolute left-full top-0 ml-1 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50
                           opacity-0 invisible translate-x-1
                           group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0
                           transition-all duration-200"
                  >
                    <NuxtLink
                      v-for="grand in child.children"
                      :key="grand.label"
                      :to="grand.href"
                      class="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-primary-50 transition-colors"
                    >
                      <component v-if="grand.icon" :is="grand.icon" :size="13" class="text-primary/60 flex-shrink-0" />
                      {{ grand.label }}
                    </NuxtLink>
                  </div>
                </div>
                <NuxtLink
                  v-else
                  :to="child.href"
                  class="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-primary-50 transition-colors"
                >
                  <component v-if="child.icon" :is="child.icon" :size="14" class="text-primary/60 flex-shrink-0" />
                  {{ child.label }}
                </NuxtLink>
              </template>
            </div>
          </div>

          <!-- Plain top-level link -->
          <NuxtLink
            v-else
            :to="link.href"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent',
              isScrolled ? 'text-slate-600' : 'text-white/90',
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </template>
      </nav>

      <!-- CTA + Mobile toggle -->
      <div class="flex items-center gap-2">
        <NuxtLink to="/login"
                  class="hidden lg:inline-flex items-center text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                  :class="isScrolled ? 'text-primary-darker hover:bg-primary/5' : 'text-white/90 hover:text-white'">
          Login
        </NuxtLink>
        <NuxtLink to="/membership/apply"
                  class="hidden lg:inline-flex btn-accent text-sm py-2 px-5">
          Be a Member
        </NuxtLink>
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
      <div v-if="mobileOpen" class="fixed inset-0 z-40 bg-primary-darker overflow-y-auto">
        <button class="absolute top-5 right-5 text-white/70 hover:text-white transition-colors" @click="mobileOpen = false">
          <X :size="26" />
        </button>
        <div class="flex flex-col items-center justify-center min-h-full py-20 gap-6">
          <div class="flex flex-col items-center gap-3 mb-2">
            <img src="/slstl-logo.png" alt="SLSTL" class="h-14 w-auto opacity-90" />
            <div class="font-display font-black text-3xl text-white">R4TLI <span class="text-accent">2026</span></div>
          </div>
          <nav class="flex flex-col items-center gap-1 w-full max-w-xs">
            <template v-for="link in navLinks" :key="link.label">
              <div v-if="link.children" class="w-full">
                <button
                  class="w-full flex items-center justify-center gap-2 font-display font-semibold text-xl text-white/80 hover:text-accent transition-colors py-2"
                  @click="toggleMobile(link.label)"
                >
                  {{ link.label }}
                  <ChevronDown :size="16" class="transition-transform duration-200" :class="mobileExpanded === link.label ? 'rotate-180' : ''" />
                </button>
                <Transition name="accordion">
                  <div v-if="mobileExpanded === link.label" class="flex flex-col items-center gap-0.5 pb-3">
                    <template v-for="child in link.children" :key="child.label">
                      <div v-if="child.children" class="w-full flex flex-col items-center">
                        <button
                          class="flex items-center gap-1.5 text-base text-white/60 hover:text-accent transition-colors py-1.5"
                          @click="toggleMobileSub(child.label)"
                        >
                          {{ child.label }}
                          <ChevronDown :size="13" class="transition-transform duration-200" :class="mobileSubExpanded === child.label ? 'rotate-180' : ''" />
                        </button>
                        <Transition name="accordion">
                          <div v-if="mobileSubExpanded === child.label" class="flex flex-col items-center gap-0.5 pb-1">
                            <NuxtLink v-for="grand in child.children" :key="grand.label" :to="grand.href" class="text-sm text-white/40 hover:text-accent transition-colors py-1 pl-4" @click="closeMobile">
                              {{ grand.label }}
                            </NuxtLink>
                          </div>
                        </Transition>
                      </div>
                      <NuxtLink v-else :to="child.href" class="text-base text-white/55 hover:text-accent transition-colors py-1.5" @click="closeMobile">
                        {{ child.label }}
                      </NuxtLink>
                    </template>
                  </div>
                </Transition>
              </div>
              <NuxtLink v-else :to="link.href" class="font-display font-semibold text-xl text-white/80 hover:text-accent transition-colors py-2" @click="closeMobile">
                {{ link.label }}
              </NuxtLink>
            </template>
          </nav>
          <div class="flex flex-col items-center gap-3 mt-4">
            <NuxtLink to="/login" class="text-white/80 font-semibold text-lg hover:text-accent transition-colors" @click="closeMobile">Login</NuxtLink>
            <NuxtLink to="/membership/apply" class="btn-accent" @click="closeMobile">Be a Member</NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Menu, X, ChevronDown, ChevronRight, Info, Users, Clock, Mail, BookOpen, FileText, Scale } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileOpen = ref(false)
const mobileExpanded = ref<string | null>(null)
const mobileSubExpanded = ref<string | null>(null)

const navLinks = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Who We Are',            href: '/about',        icon: Info      },
      { label: 'Our Objectives',        href: '/objectives',   icon: Users     },
      { label: 'Our Scope',             href: '/scope',        icon: Clock     },
      {
        label: 'Exco Members',
        href: '/exco',
        icon: Users,
        children: [
          { label: 'Exco Members 2019/2020', href: '/exco/2019-2020', icon: FileText },
          { label: 'Exco Members 2018/2019', href: '/exco/2018-2019', icon: FileText },
        ],
      },
      {
        label: 'Annual Reports',
        href: '/annual-reports',
        icon: BookOpen,
        children: [
          { label: '2026', href: '/annual-reports/2026', icon: FileText },
          { label: '2025', href: '/annual-reports/2025', icon: FileText },
        ],
      },
      { label: 'Contact Us',            href: '/contact',      icon: Mail      },
      { label: 'Constitution of SLSTL', href: '/constitution', icon: Scale     },
    ],
  },
  {
    label: 'Membership',
    href: '/membership',
    children: [
      { label: 'Membership Levels and Criteria', href: '/membership/levels',   icon: FileText },
      { label: 'How to Apply',                   href: '/membership/apply',    icon: FileText },
      { label: 'Existing Members',               href: '/membership/existing', icon: FileText },
    ],
  },
  {
    label: 'R4TLI Conference',
    href: '/conference',
    children: [
      { label: 'R4TLI 2025', href: '/conference/r4tli-2025', icon: FileText },
      {
        label: 'Conference Proceedings',
        href: '/conference/proceedings',
        icon: BookOpen,
        children: [
          { label: '2025', href: '/conference/proceedings/2025', icon: FileText },
          { label: '2024', href: '/conference/proceedings/2024', icon: FileText },
          { label: '2023', href: '/conference/proceedings/2023', icon: FileText },
          { label: '2022', href: '/conference/proceedings/2022', icon: FileText },
          { label: '2021', href: '/conference/proceedings/2021', icon: FileText },
          { label: '2020', href: '/conference/proceedings/2020', icon: FileText },
          { label: '2019', href: '/conference/proceedings/2019', icon: FileText },
          { label: '2018', href: '/conference/proceedings/2018', icon: FileText },
          { label: '2017', href: '/conference/proceedings/2017', icon: FileText },
          { label: '2016', href: '/conference/proceedings/2016', icon: FileText },
        ],
      },
      {
        label: 'Past Conferences',
        href: '/conference/past',
        icon: FileText,
        children: [
          { label: 'TLOG-2024',           href: '/conference/past/tlog-2024',  icon: FileText },
          { label: 'R4TLI-2024',          href: '/conference/past/r4tli-2024', icon: FileText },
          { label: 'R4TLI-2023',          href: '/conference/past/r4tli-2023', icon: FileText },
          { label: 'R4TLI-2022',          href: '/conference/past/r4tli-2022', icon: FileText },
          { label: 'R4TLI-2021',          href: '/conference/past/r4tli-2021', icon: FileText },
          { label: 'R4TLI-2020',          href: '/conference/past/r4tli-2020', icon: FileText },
          { label: 'EAST2019 Conference', href: '/conference/past/east-2019',  icon: FileText },
          { label: 'R4TLI-2019',          href: '/conference/past/r4tli-2019', icon: FileText },
          { label: 'R4TLI-2018',          href: '/conference/past/r4tli-2018', icon: FileText },
          { label: 'R4TLI-2017',          href: '/conference/past/r4tli-2017', icon: FileText },
          { label: 'R4TLI-2016',          href: '/conference/past/r4tli-2016', icon: FileText },
        ],
      },
    ],
  },
  { label: 'Journal (JSALT)', href: '/journal' },
  { label: 'Events',          href: '/events'  },
]

function closeMobile() {
  mobileOpen.value = false
  mobileExpanded.value = null
  mobileSubExpanded.value = null
}

function toggleMobile(label: string) {
  mobileExpanded.value = mobileExpanded.value === label ? null : label
  mobileSubExpanded.value = null
}

function toggleMobileSub(label: string) {
  mobileSubExpanded.value = mobileSubExpanded.value === label ? null : label
}

onMounted(() => {
  const handler = () => { isScrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>
