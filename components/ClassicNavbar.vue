<template>
  <header class="w-full z-50 font-display" :class="scrolled ? 'fixed top-0 shadow-lg' : 'fixed top-0'">
    <!-- Top Info Bar -->
    <div class="bg-ct-navy-dark text-white text-xs py-2 hidden md:block">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <a href="tel:+94117773300" class="flex items-center gap-1.5 hover:text-ct-gold transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +94 11 7 77 33 00
          </a>
          <a href="mailto:info@classictravel.lk" class="flex items-center gap-1.5 hover:text-ct-gold transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            info@classictravel.lk
          </a>
          <span class="flex items-center gap-1.5 text-white/70">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            379/4, Galle Road, Colombo 3
          </span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-white/70">Open 24 Hours · 365 Days</span>
          <div class="flex items-center gap-2 ml-2">
            <a href="https://www.facebook.com/clatra/" target="_blank" class="hover:text-ct-gold transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.youtube.com/@ClassicTravelColombo" target="_blank" class="hover:text-ct-gold transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zm-12.65 8.98V8.6L15.73 12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav
      class="transition-all duration-300"
      :class="scrolled ? 'bg-ct-navy-dark/98 backdrop-blur-md' : 'bg-ct-navy'"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 flex-shrink-0">
            <div class="bg-ct-gold rounded p-1.5">
              <svg class="w-6 h-6 text-ct-navy-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <span class="text-white font-bold text-lg leading-none block">Classic</span>
              <span class="text-ct-gold text-xs font-semibold tracking-widest uppercase">Travel</span>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-1">
            <!-- Home -->
            <NuxtLink to="/" class="ct-nav-link" active-class="ct-nav-link-active">Home</NuxtLink>

            <!-- Leisure Dropdown -->
            <div class="ct-nav-item relative">
              <button class="ct-nav-link flex items-center gap-1">
                Leisure
                <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="ct-dropdown absolute top-full left-0 bg-white shadow-xl rounded-lg overflow-hidden min-w-[200px] z-50 border border-slate-100">
                <NuxtLink to="/leisure" class="ct-dropdown-link">Leisure</NuxtLink>
                <NuxtLink to="/leisure-travel" class="ct-dropdown-link">Leisure Travel</NuxtLink>
                <NuxtLink to="/leisure-destinations" class="ct-dropdown-link">Destinations</NuxtLink>
                <NuxtLink to="/leisure-packages" class="ct-dropdown-link">Packages & Activities</NuxtLink>
                <NuxtLink to="/leisure-offers" class="ct-dropdown-link">Offers & Promotions</NuxtLink>
                <NuxtLink to="/leisure-services" class="ct-dropdown-link">Leisure Services</NuxtLink>
              </div>
            </div>

            <!-- Sri Lanka -->
            <NuxtLink to="/sri-lanka" class="ct-nav-link">Sri Lanka</NuxtLink>

            <!-- Wild -->
            <NuxtLink to="/wild" class="ct-nav-link">Wild</NuxtLink>

            <!-- Corporate -->
            <NuxtLink to="/corporate" class="ct-nav-link">Corporate</NuxtLink>

            <!-- Students Dropdown -->
            <div class="ct-nav-item relative">
              <button class="ct-nav-link flex items-center gap-1">
                Students
                <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="ct-dropdown absolute top-full left-0 bg-white shadow-xl rounded-lg overflow-hidden min-w-[200px] z-50 border border-slate-100">
                <NuxtLink to="/students" class="ct-dropdown-link">Student Services</NuxtLink>
                <NuxtLink to="/students-services" class="ct-dropdown-link">Student Resources</NuxtLink>
              </div>
            </div>

            <!-- Yuthukama Dropdown -->
            <div class="ct-nav-item relative">
              <button class="ct-nav-link flex items-center gap-1">
                Yuthukama
                <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="ct-dropdown absolute top-full left-0 bg-white shadow-xl rounded-lg overflow-hidden min-w-[200px] z-50 border border-slate-100">
                <NuxtLink to="/yuthukama" class="ct-dropdown-link">Yuthukama</NuxtLink>
                <NuxtLink to="/yuthukama-services" class="ct-dropdown-link">Yuthukama Services</NuxtLink>
              </div>
            </div>

            <!-- About Dropdown -->
            <div class="ct-nav-item relative">
              <button class="ct-nav-link flex items-center gap-1">
                About
                <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="ct-dropdown absolute top-full left-0 bg-white shadow-xl rounded-lg overflow-hidden min-w-[200px] z-50 border border-slate-100">
                <NuxtLink to="/about-us" class="ct-dropdown-link">About Us</NuxtLink>
                <NuxtLink to="/careers" class="ct-dropdown-link">Careers</NuxtLink>
                <NuxtLink to="/news" class="ct-dropdown-link">News</NuxtLink>
              </div>
            </div>

            <!-- Contact -->
            <NuxtLink to="/contact-us" class="ml-2 ct-btn-gold text-sm py-2 px-4">
              Get in Touch
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden text-white p-2 rounded"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div v-if="mobileOpen" class="lg:hidden bg-ct-navy-dark border-t border-white/10 max-h-screen overflow-y-auto">
          <div class="px-4 py-4 space-y-1">
            <NuxtLink to="/" class="ct-mob-link" @click="mobileOpen=false">Home</NuxtLink>

            <!-- Leisure accordion -->
            <div>
              <button @click="toggleMob('leisure')" class="ct-mob-link w-full flex justify-between items-center">
                Leisure
                <svg class="w-4 h-4 transition-transform" :class="mobOpen.leisure ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <Transition name="accordion">
                <div v-if="mobOpen.leisure" class="pl-4 border-l border-white/10 ml-2 mt-1 space-y-1">
                  <NuxtLink to="/leisure" class="ct-mob-sub-link" @click="mobileOpen=false">Leisure</NuxtLink>
                  <NuxtLink to="/leisure-travel" class="ct-mob-sub-link" @click="mobileOpen=false">Leisure Travel</NuxtLink>
                  <NuxtLink to="/leisure-destinations" class="ct-mob-sub-link" @click="mobileOpen=false">Destinations</NuxtLink>
                  <NuxtLink to="/leisure-packages" class="ct-mob-sub-link" @click="mobileOpen=false">Packages & Activities</NuxtLink>
                  <NuxtLink to="/leisure-offers" class="ct-mob-sub-link" @click="mobileOpen=false">Offers & Promotions</NuxtLink>
                  <NuxtLink to="/leisure-services" class="ct-mob-sub-link" @click="mobileOpen=false">Leisure Services</NuxtLink>
                </div>
              </Transition>
            </div>

            <NuxtLink to="/sri-lanka" class="ct-mob-link" @click="mobileOpen=false">Sri Lanka</NuxtLink>
            <NuxtLink to="/wild" class="ct-mob-link" @click="mobileOpen=false">Wild</NuxtLink>
            <NuxtLink to="/corporate" class="ct-mob-link" @click="mobileOpen=false">Corporate</NuxtLink>

            <!-- Students accordion -->
            <div>
              <button @click="toggleMob('students')" class="ct-mob-link w-full flex justify-between items-center">
                Students
                <svg class="w-4 h-4 transition-transform" :class="mobOpen.students ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <Transition name="accordion">
                <div v-if="mobOpen.students" class="pl-4 border-l border-white/10 ml-2 mt-1 space-y-1">
                  <NuxtLink to="/students" class="ct-mob-sub-link" @click="mobileOpen=false">Student Services</NuxtLink>
                  <NuxtLink to="/students-services" class="ct-mob-sub-link" @click="mobileOpen=false">Student Resources</NuxtLink>
                </div>
              </Transition>
            </div>

            <!-- Yuthukama accordion -->
            <div>
              <button @click="toggleMob('yuthukama')" class="ct-mob-link w-full flex justify-between items-center">
                Yuthukama
                <svg class="w-4 h-4 transition-transform" :class="mobOpen.yuthukama ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <Transition name="accordion">
                <div v-if="mobOpen.yuthukama" class="pl-4 border-l border-white/10 ml-2 mt-1 space-y-1">
                  <NuxtLink to="/yuthukama" class="ct-mob-sub-link" @click="mobileOpen=false">Yuthukama</NuxtLink>
                  <NuxtLink to="/yuthukama-services" class="ct-mob-sub-link" @click="mobileOpen=false">Yuthukama Services</NuxtLink>
                </div>
              </Transition>
            </div>

            <!-- About accordion -->
            <div>
              <button @click="toggleMob('about')" class="ct-mob-link w-full flex justify-between items-center">
                About
                <svg class="w-4 h-4 transition-transform" :class="mobOpen.about ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <Transition name="accordion">
                <div v-if="mobOpen.about" class="pl-4 border-l border-white/10 ml-2 mt-1 space-y-1">
                  <NuxtLink to="/about-us" class="ct-mob-sub-link" @click="mobileOpen=false">About Us</NuxtLink>
                  <NuxtLink to="/careers" class="ct-mob-sub-link" @click="mobileOpen=false">Careers</NuxtLink>
                  <NuxtLink to="/news" class="ct-mob-sub-link" @click="mobileOpen=false">News</NuxtLink>
                </div>
              </Transition>
            </div>

            <NuxtLink to="/contact-us" class="block mt-4 ct-btn-gold text-center py-3 rounded font-semibold" @click="mobileOpen=false">
              Get in Touch
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)
const mobOpen = reactive({
  leisure: false,
  students: false,
  yuthukama: false,
  about: false,
})

function toggleMob(key: keyof typeof mobOpen) {
  mobOpen[key] = !mobOpen[key]
}

onMounted(() => {
  const handleScroll = () => { scrolled.value = window.scrollY > 10 }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.ct-nav-link {
  @apply text-white/90 hover:text-ct-gold text-sm font-medium px-3 py-2 rounded transition-colors duration-200;
}
.ct-nav-link-active {
  @apply text-ct-gold;
}
.ct-dropdown-link {
  @apply block px-4 py-2.5 text-sm text-slate-700 hover:bg-ct-navy hover:text-white transition-colors duration-150 border-b border-slate-50 last:border-0 font-medium;
}
.ct-mob-link {
  @apply block text-white/90 hover:text-ct-gold text-sm font-medium py-2.5 border-b border-white/10 transition-colors;
}
.ct-mob-sub-link {
  @apply block text-white/70 hover:text-ct-gold text-sm py-2 transition-colors;
}
</style>
