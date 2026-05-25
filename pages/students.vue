<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80" alt="Students" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/80"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Global Student Platform</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Student Services</h1>
          <p class="text-white/70 text-lg max-w-2xl">A dedicated platform helping foreign students communicate, share tips and hacks about living overseas, and navigate the world of international travel.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><span class="text-white">Student Services</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="ct-section-tag">For Students</span>
            <h2 class="ct-section-heading ct-gold-line mb-6">Your Global Student Travel Partner</h2>
            <p class="text-slate-600 leading-relaxed mb-5">Classic Travel's Student Services platform is designed specifically for Sri Lankan students studying abroad and international students in Sri Lanka. We understand the unique travel needs, budget constraints, and challenges that students face when living and studying overseas.</p>
            <p class="text-slate-600 leading-relaxed mb-8">From student air fares to accommodation assistance, visa guidance to airport pickups — we're with you throughout your academic journey abroad.</p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/students-services" class="ct-btn-primary">Student Resources</NuxtLink>
              <NuxtLink to="/contact-us" class="ct-btn-outline">Get Help</NuxtLink>
            </div>
          </div>
          <div class="space-y-4">
            <div v-for="b in benefits" :key="b.title" class="flex gap-4 items-start bg-slate-50 rounded-xl p-5 border border-slate-100">
              <div class="w-10 h-10 bg-ct-navy rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="b.icon"></svg>
              </div>
              <div>
                <h4 class="font-bold text-ct-navy-dark mb-1">{{ b.title }}</h4>
                <p class="text-slate-500 text-sm">{{ b.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Studying Abroad? We're Here to Help</h2>
          <p class="text-white/70 mb-8">Contact our student services team for personalised travel assistance and advice.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/students-services" class="ct-btn-gold px-8 py-3.5">Student Resources</NuxtLink>
            <NuxtLink to="/contact-us" class="ct-btn-outline-white px-8 py-3.5">Contact Us</NuxtLink>
          </div>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Student Services | Classic Travel' })
const benefits = [
  { title: 'Student Air Fares', desc: 'Exclusive discounted airfares for students — flexible dates, open jaws, and round trips.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>' },
  { title: 'Visa Assistance', desc: 'Step-by-step guidance for student visas to the UK, Australia, Canada, USA, and more.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>' },
  { title: 'Accommodation Help', desc: 'Assistance finding student-friendly accommodation near universities and colleges abroad.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>' },
  { title: 'Travel Tips & Community', desc: 'Connect with fellow Sri Lankan students abroad and share tips, hacks, and experiences.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>' },
]
</script>
