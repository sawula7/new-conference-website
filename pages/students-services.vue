<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80" alt="Student Resources" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/80"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Resources & Support</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Student Services & Resources</h1>
          <p class="text-white/70 text-lg max-w-2xl">Everything you need to navigate your overseas study journey — from pre-departure to returning home.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><NuxtLink to="/students" class="hover:text-ct-gold">Students</NuxtLink><span>/</span><span class="text-white">Resources</span></nav>
        </div>
      </section>
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Student Resources</span>
            <h2 class="ct-section-heading ct-gold-line-center">How We Help Students</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="r in resources" :key="r.title" class="bg-slate-50 rounded-xl p-7 border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 class="font-bold text-ct-navy-dark text-lg mb-3">{{ r.title }}</h3>
              <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ r.desc }}</p>
              <NuxtLink to="/contact-us" class="text-ct-gold font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Learn More <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <section class="py-16 bg-ct-gold">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-ct-navy-dark font-bold text-3xl mb-4">Need Student Travel Support?</h2>
          <p class="text-ct-navy mb-8">Talk to our student services specialists — we're here to help you navigate the world.</p>
          <NuxtLink to="/contact-us" class="ct-btn-primary px-10 py-4">Contact Student Services</NuxtLink>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Student Services & Resources | Classic Travel' })
const resources = [
  { title: 'Student Air Fare Guide', desc: 'Everything you need to know about booking the best student fares — when to book, flexible tickets, and airline policies.' },
  { title: 'Visa Application Support', desc: 'Country-specific visa guides for the UK, Australia, Canada, USA, Germany, France, and 50+ other popular study destinations.' },
  { title: 'Pre-Departure Checklist', desc: 'A comprehensive checklist to make sure you have everything sorted before you fly — documents, insurance, banking, and more.' },
  { title: 'Overseas Living Tips', desc: 'Practical tips from students who have been there — accommodation, budgeting, transportation, and cultural adjustment.' },
  { title: 'Home Travel During Holidays', desc: 'Guidance on booking cost-effective return trips home during semester breaks and holidays.' },
  { title: 'Emergency Travel Support', desc: '24/7 emergency helpline for students who need urgent travel assistance while studying overseas.' },
]
</script>
