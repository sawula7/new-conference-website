<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=1920&q=80" alt="Services" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/80"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Travel Support</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Leisure Services</h1>
          <p class="text-white/70 text-lg max-w-2xl">Comprehensive support services to make your travel experience seamless — from visa assistance to 24/7 helpline.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><NuxtLink to="/leisure" class="hover:text-ct-gold">Leisure</NuxtLink><span>/</span><span class="text-white">Services</span></nav>
        </div>
      </section>
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">What We Provide</span>
            <h2 class="ct-section-heading ct-gold-line-center">Our Leisure Services</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="s in services" :key="s.title" class="bg-white border border-slate-100 rounded-xl p-7 hover:shadow-lg transition-shadow group">
              <div class="w-12 h-12 bg-ct-navy/5 group-hover:bg-ct-gold/15 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <svg class="w-6 h-6 text-ct-navy group-hover:text-ct-gold-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="s.icon"></svg>
              </div>
              <h3 class="font-bold text-ct-navy-dark text-lg mb-3">{{ s.title }}</h3>
              <p class="text-slate-500 text-sm leading-relaxed">{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-16 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Need Travel Assistance?</h2>
          <p class="text-white/70 mb-8">Our team is available 24 hours, 365 days to help with any travel query.</p>
          <NuxtLink to="/contact-us" class="ct-btn-gold px-10 py-4">Contact Us Now</NuxtLink>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Leisure Services | Classic Travel' })
const services = [
  { title: 'Flight Bookings', desc: 'Access to all major airlines worldwide with competitive fares and flexible booking options for all cabin classes.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>' },
  { title: 'Hotel Reservations', desc: 'Handpicked hotels, resorts, and boutique properties at the best rates — from budget to ultra-luxury.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>' },
  { title: 'Visa Assistance', desc: 'Expert guidance and support for visa applications to destinations worldwide — tourist, transit, and multi-entry visas.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>' },
  { title: 'Travel Insurance', desc: 'Comprehensive travel insurance covering medical emergencies, trip cancellation, baggage loss, and more.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>' },
  { title: 'Airport Transfers', desc: 'Reliable, comfortable airport transfers at your destination — private cars, minibuses, and luxury vehicles.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>' },
  { title: '24/7 Support', desc: 'Our dedicated helpline is available around the clock — before, during, and after your trip — for any assistance.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>' },
]
</script>
