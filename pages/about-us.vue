<template>
  <div>
      <!-- Hero -->
      <section class="relative pt-36 pb-20 overflow-hidden">
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80" alt="About Us" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-ct-navy/80"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Who We Are</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">About Classic Travel</h1>
          <p class="text-white/70 text-lg max-w-2xl">Sri Lanka's most trusted travel partner since 1994 — IATA accredited, award-winning, and open 24/7.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6">
            <NuxtLink to="/" class="hover:text-ct-gold transition-colors">Home</NuxtLink>
            <span>/</span>
            <span class="text-white">About Us</span>
          </nav>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="ct-section-tag">Our Story</span>
            <h2 class="ct-section-heading ct-gold-line mb-6">Crafting Journeys Since 1994</h2>
            <p class="text-slate-600 leading-relaxed mb-4">Classic Travel (Pvt) Ltd., incorporated in 1994, is an IATA accredited travel agent based in Sri Lanka and a proud member of the prestigious Expolanka Group of Companies. We specialise in providing a total travel solution to both the corporate and leisure markets.</p>
            <p class="text-slate-600 leading-relaxed mb-4">Classic Travel is the only travel agent in Sri Lanka to be open 24 hours, 365 days of the year for any customer queries relating to flight information, purchasing of air tickets, booking of hotels or to discuss any future holiday travel itineraries.</p>
            <p class="text-slate-600 leading-relaxed mb-8">As a member of the Expolanka Group — operating across 45+ offices in 17 countries — we bring a global network to every journey we plan for our valued clients.</p>
            <NuxtLink to="/contact-us" class="ct-btn-primary">Get in Touch</NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-ct-navy rounded-xl p-8 text-center">
              <p class="text-ct-gold font-bold text-4xl mb-2">30+</p>
              <p class="text-white font-semibold">Years of Excellence</p>
            </div>
            <div class="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
              <p class="text-ct-navy font-bold text-4xl mb-2">200+</p>
              <p class="text-slate-600 font-semibold">Account Advisors</p>
            </div>
            <div class="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
              <p class="text-ct-navy font-bold text-4xl mb-2">35+</p>
              <p class="text-slate-600 font-semibold">Industry Awards</p>
            </div>
            <div class="bg-ct-gold rounded-xl p-8 text-center">
              <p class="text-ct-navy-dark font-bold text-4xl mb-2">50+</p>
              <p class="text-ct-navy-dark font-semibold">Global Partners</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision Cards -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Our Purpose</span>
            <h2 class="ct-section-heading ct-gold-line-center">Mission & Vision</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-ct-navy rounded-2xl p-10">
              <div class="w-12 h-12 bg-ct-gold/20 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-ct-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h3 class="text-ct-gold font-bold text-xl mb-4">Our Vision</h3>
              <p class="text-white/80 leading-relaxed">To be recognised as The Customer Service Provider Par Excellence in the travel arena, delivering journeys that exceed expectations at every step.</p>
            </div>
            <div class="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
              <div class="w-12 h-12 bg-ct-navy/10 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-ct-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 class="text-ct-navy-dark font-bold text-xl mb-4">Our Mission</h3>
              <p class="text-slate-600 leading-relaxed">To venture beyond our clients' expectations by providing innovative and value-added services, being the most professional and efficient travel facilitator, whilst being an ethical and socially responsible corporate citizen.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Awards -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Recognition</span>
            <h2 class="ct-section-heading ct-gold-line-center">Awards & Achievements</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="a in awards" :key="a.title" class="bg-slate-50 rounded-xl p-7 border border-slate-100 hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-ct-gold/15 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-ct-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </div>
              <h4 class="text-ct-navy-dark font-bold mb-2">{{ a.title }}</h4>
              <p class="text-slate-500 text-sm">{{ a.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Ready to Start Your Journey?</h2>
          <p class="text-white/70 mb-8">Contact our expert travel advisors today and let us craft your perfect trip.</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink to="/contact-us" class="ct-btn-gold px-8 py-3.5">Get in Touch</NuxtLink>
            <NuxtLink to="/leisure-packages" class="ct-btn-outline-white px-8 py-3.5">View Packages</NuxtLink>
          </div>
        </div>
      </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'About Us | Classic Travel' })

const awards = [
  { title: 'Best Emerging Agent — MSC Cruises', desc: 'Awarded at the MSC Cruises Trade Event & Award Ceremony held aboard the MSC VIRTUOSA cruise ship.' },
  { title: 'Great Place to Work® Certified', desc: 'Recognised by Great Place to Work® Sri Lanka for our outstanding workplace culture and employee experience.' },
  { title: 'IATA Accredited Travel Agent', desc: 'Fully accredited by the International Air Transport Association — a mark of global airline industry trust.' },
  { title: 'Top Corporate Travel Manager', desc: 'Consistently ranked as Sri Lanka\'s top-rated Travel Management Company for corporate solutions.' },
  { title: 'Expolanka Group Excellence Award', desc: 'Multiple internal excellence awards within the Expolanka Group for outstanding service delivery.' },
  { title: 'Customer Service Excellence', desc: '30+ years of consistent customer satisfaction and loyalty — a testament to our commitment to quality.' },
]
</script>
