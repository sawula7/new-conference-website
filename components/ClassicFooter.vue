<template>
  <footer class="bg-ct-navy-deeper text-white font-display">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-3 mb-5">
            <div class="bg-ct-gold rounded p-1.5">
              <svg class="w-6 h-6 text-ct-navy-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <span class="text-white font-bold text-xl leading-none block">Classic</span>
              <span class="text-ct-gold text-xs font-semibold tracking-widest uppercase">Travel</span>
            </div>
          </NuxtLink>
          <p class="text-white/60 text-sm leading-relaxed mb-6">
            Your journey made unique like ours. IATA accredited, Sri Lanka's premier travel management company since 1994. Open 24 hours, 365 days.
          </p>
          <div class="flex items-center gap-3">
            <a href="https://www.facebook.com/clatra/" target="_blank" class="w-9 h-9 rounded-full bg-white/10 hover:bg-ct-gold hover:text-ct-navy-dark text-white flex items-center justify-center transition-all duration-200">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.youtube.com/@ClassicTravelColombo" target="_blank" class="w-9 h-9 rounded-full bg-white/10 hover:bg-ct-gold hover:text-ct-navy-dark text-white flex items-center justify-center transition-all duration-200">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zm-12.65 8.98V8.6L15.73 12z"/></svg>
            </a>
            <a href="https://lk.linkedin.com/company/classic-travel-pvt-ltd---expolanka-group" target="_blank" class="w-9 h-9 rounded-full bg-white/10 hover:bg-ct-gold hover:text-ct-navy-dark text-white flex items-center justify-center transition-all duration-200">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          <!-- Expolanka badge -->
          <div class="mt-6 pt-5 border-t border-white/10">
            <p class="text-white/40 text-xs uppercase tracking-wider mb-2">A Member of</p>
            <p class="text-white/70 text-sm font-semibold">Expolanka Holdings PLC</p>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-ct-gold font-bold text-sm uppercase tracking-widest mb-5">Services</h4>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/leisure" class="ft-link">Leisure Travel</NuxtLink></li>
            <li><NuxtLink to="/leisure-destinations" class="ft-link">Destinations</NuxtLink></li>
            <li><NuxtLink to="/leisure-packages" class="ft-link">Packages & Activities</NuxtLink></li>
            <li><NuxtLink to="/leisure-offers" class="ft-link">Offers & Promotions</NuxtLink></li>
            <li><NuxtLink to="/corporate" class="ft-link">Corporate Travel</NuxtLink></li>
            <li><NuxtLink to="/students" class="ft-link">Student Services</NuxtLink></li>
            <li><NuxtLink to="/yuthukama" class="ft-link">Yuthukama</NuxtLink></li>
            <li><NuxtLink to="/sri-lanka" class="ft-link">Sri Lanka Tours</NuxtLink></li>
            <li><NuxtLink to="/wild" class="ft-link">Wild Experiences</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-ct-gold font-bold text-sm uppercase tracking-widest mb-5">Company</h4>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/about-us" class="ft-link">About Us</NuxtLink></li>
            <li><NuxtLink to="/careers" class="ft-link">Careers</NuxtLink></li>
            <li><NuxtLink to="/news" class="ft-link">News & Media</NuxtLink></li>
            <li><NuxtLink to="/contact-us" class="ft-link">Contact Us</NuxtLink></li>
          </ul>

          <h4 class="text-ct-gold font-bold text-sm uppercase tracking-widest mt-8 mb-5">Quick Links</h4>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/leisure-travel" class="ft-link">Leisure Travel</NuxtLink></li>
            <li><NuxtLink to="/leisure-services" class="ft-link">Leisure Services</NuxtLink></li>
            <li><NuxtLink to="/students-services" class="ft-link">Student Resources</NuxtLink></li>
            <li><NuxtLink to="/yuthukama-services" class="ft-link">Yuthukama Services</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-ct-gold font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h4>
          <ul class="space-y-4 text-sm">
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-ct-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span class="text-white/70 leading-relaxed">379/4, Galle Road,<br>Colombo 3, Sri Lanka</span>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-ct-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+94117773300" class="text-white/70 hover:text-ct-gold transition-colors">+94 11 7 77 33 00</a>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-ct-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:info@classictravel.lk" class="text-white/70 hover:text-ct-gold transition-colors">info@classictravel.lk</a>
            </li>
            <li class="flex gap-3">
              <svg class="w-5 h-5 text-ct-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="text-white/70">Open 24 Hours · 365 Days</span>
            </li>
          </ul>

          <!-- Newsletter -->
          <div class="mt-8">
            <h5 class="text-white font-semibold text-sm mb-3">Subscribe to our Newsletter</h5>
            <form @submit.prevent class="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                class="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-ct-gold"
              />
              <button type="submit" class="bg-ct-gold hover:bg-ct-gold-dark text-ct-navy-dark font-bold px-4 py-2 rounded text-sm transition-colors">
                →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>© {{ new Date().getFullYear() }} Classic Travel (Pvt) Ltd. All rights reserved. A Member of Expolanka Holdings PLC.</p>
        <div class="flex items-center gap-4">
          <span class="text-white/30">IATA Accredited</span>
          <span class="text-white/30">·</span>
          <NuxtLink to="/about-us" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
          <span class="text-white/30">·</span>
          <NuxtLink to="/about-us" class="hover:text-white transition-colors">Terms of Use</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ft-link {
  @apply text-white/60 hover:text-ct-gold text-sm transition-colors duration-200;
}
</style>
