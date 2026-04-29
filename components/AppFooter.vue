<template>
  <footer class="bg-primary-darker text-white">
    <!-- Main content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="font-display font-black text-2xl">
            R4TLI <span class="text-accent">2026</span>
          </div>
          <p class="text-primary-300 text-sm mt-1 font-medium">
            12th International Conference
          </p>
          <p class="text-white/55 text-sm mt-3 leading-relaxed">
            Research for Transport &amp; Logistics Industry<br>
            Colombo, Sri Lanka · August 5–7, 2026
          </p>
          <p class="text-white/40 text-xs mt-3">
            Organized by<br>
            <a
              href="https://slstl.lk"
              target="_blank"
              rel="noopener"
              class="text-accent/80 hover:text-accent transition-colors font-medium"
            >
              Sri Lanka Society of Transport &amp; Logistics (SLSTL)
            </a>
          </p>
          <!-- Socials -->
          <div class="flex gap-2.5 mt-5">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.label"
              class="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent hover:text-primary-darker flex items-center justify-center transition-all duration-200 text-white/60"
            >
              <component :is="s.icon" :size="14" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
            Quick Links
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-white/65 hover:text-accent text-sm transition-colors flex items-center gap-1.5"
              >
                <ChevronRight :size="12" class="opacity-40" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Past Conferences -->
        <div>
          <h4 class="font-display font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
            Past Editions
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in conferenceLinks" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener"
                class="text-white/65 hover:text-accent text-sm transition-colors flex items-center gap-1.5"
              >
                <ChevronRight :size="12" class="opacity-40" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-display font-semibold text-xs uppercase tracking-widest text-white/40 mb-5">
            Contact
          </h4>
          <ul class="space-y-4">
            <li v-for="c in contacts" :key="c.label" class="flex items-start gap-3">
              <div class="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <component :is="c.icon" :size="13" class="text-accent" />
              </div>
              <div>
                <p class="text-xs text-white/35 uppercase tracking-wide mb-0.5">{{ c.label }}</p>
                <a
                  v-if="c.href"
                  :href="c.href"
                  class="text-sm text-white/65 hover:text-accent transition-colors"
                >
                  {{ c.value }}
                </a>
                <p v-else class="text-sm text-white/65">{{ c.value }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35"
      >
        <p>© 2026 Sri Lanka Society of Transport &amp; Logistics (SLSTL). All rights reserved.</p>
        <div class="flex items-center gap-5">
          <a href="#" class="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white/60 transition-colors">Terms of Use</a>
          <a href="https://slstl.lk/contact-us" target="_blank" rel="noopener" class="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ChevronRight, Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-vue-next'

const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/SLSTL.SriLanka/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://lk.linkedin.com/company/sri-lanka-society-of-transport-and-logistics' },
]

const quickLinks = [
  { label: 'About the Conference', href: '#about' },
  { label: 'Call for Papers',       href: '#cfp' },
  { label: 'Important Dates',       href: '#dates' },
  { label: 'Registration',          href: '#register' },
  { label: 'Keynote Speakers',      href: '#speakers' },
  { label: 'Conference Schedule',   href: '#schedule' },
  { label: 'Venue',                 href: '#venue' },
]

const conferenceLinks = [
  { label: 'R4TLI 2024',             href: 'https://slstl.lk/r4tli-2024/' },
  { label: 'R4TLI 2023',             href: 'https://slstl.lk/r4tli-2023/' },
  { label: 'R4TLI 2021',             href: 'https://slstl.lk/r4tli-2021/' },
  { label: 'R4TLI 2020',             href: 'https://slstl.lk/r4tli-2020/' },
  { label: 'Conference Proceedings', href: 'https://slstl.lk/conference-proceedings-2020-backup/' },
  { label: 'TLOG 2024',              href: 'https://slstl.lk/tlog-2024/' },
]

const contacts = [
  { icon: Mail,  label: 'Email',   value: 'r4tli2026@slstl.lk',      href: 'mailto:r4tli2026@slstl.lk' },
  { icon: Phone, label: 'Phone',   value: '+94 11 XXX XXXX',          href: null },
  { icon: MapPin,label: 'Address', value: 'Colombo, Sri Lanka',       href: null },
]
</script>
