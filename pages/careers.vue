<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" alt="Careers" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/80"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Join Our Team</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Careers & Services</h1>
          <p class="text-white/70 text-lg max-w-2xl">Be part of Sri Lanka's leading travel company. We're always looking for passionate, talented people to join our team.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><span class="text-white">Careers</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="ct-section-tag">Why Classic Travel</span>
            <h2 class="ct-section-heading ct-gold-line mb-6">Work for an Award-Winning Travel Company</h2>
            <p class="text-slate-600 leading-relaxed mb-5">Classic Travel is a Great Place to Work® certified organisation and a proud member of the Expolanka Group. We believe that our people are our greatest asset — and we invest in their growth, wellbeing, and professional development.</p>
            <p class="text-slate-600 leading-relaxed mb-8">Join a team of passionate travel experts, enjoy industry perks, and build a rewarding career at one of Sri Lanka's most respected companies.</p>
            <NuxtLink to="/contact-us" class="ct-btn-primary">Send Your CV</NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="p in perks" :key="p.title" class="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
              <div class="text-2xl mb-3">{{ p.emoji }}</div>
              <h4 class="font-bold text-ct-navy-dark mb-1 text-sm">{{ p.title }}</h4>
              <p class="text-slate-500 text-xs leading-relaxed">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Open Positions</span>
            <h2 class="ct-section-heading ct-gold-line-center">Current Vacancies</h2>
          </div>
          <div class="space-y-4">
            <div v-for="job in jobs" :key="job.title" class="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <h3 class="font-bold text-ct-navy-dark text-lg">{{ job.title }}</h3>
                  <span class="bg-ct-gold/15 text-ct-gold-dark text-xs font-bold px-2 py-1 rounded">{{ job.type }}</span>
                </div>
                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>{{ job.location }}</span>
                  <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>{{ job.dept }}</span>
                </div>
              </div>
              <NuxtLink to="/contact-us" class="ct-btn-gold whitespace-nowrap text-sm py-2.5 px-6 flex-shrink-0">Apply Now</NuxtLink>
            </div>
          </div>
          <div class="mt-10 bg-ct-navy/5 border border-ct-navy/10 rounded-xl p-8 text-center">
            <h3 class="font-bold text-ct-navy-dark text-lg mb-2">Don't See the Right Role?</h3>
            <p class="text-slate-500 text-sm mb-5">We're always interested in hearing from talented individuals. Send us your CV and we'll be in touch when the right opportunity arises.</p>
            <NuxtLink to="/contact-us" class="ct-btn-outline text-sm">Send a Speculative CV</NuxtLink>
          </div>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Careers | Classic Travel' })
const perks = [
  { emoji: '✈️', title: 'Travel Benefits', desc: 'Enjoy exclusive travel discounts and familiarisation trips.' },
  { emoji: '📈', title: 'Career Growth', desc: 'Clear career progression paths and leadership development.' },
  { emoji: '🏥', title: 'Health Coverage', desc: 'Comprehensive medical and wellness benefits for you and family.' },
  { emoji: '🎓', title: 'Training & Development', desc: 'Continuous learning, IATA courses, and industry certifications.' },
  { emoji: '🌐', title: 'Global Network', desc: 'Work within the Expolanka Group\'s 17-country global network.' },
  { emoji: '🏆', title: 'Award-Winning Culture', desc: 'Great Place to Work® certified company with a positive culture.' },
]
const jobs = [
  { title: 'Senior Leisure Travel Consultant', dept: 'Leisure', location: 'Colombo 3', type: 'Full-time' },
  { title: 'Corporate Account Manager', dept: 'Corporate', location: 'Colombo 3', type: 'Full-time' },
  { title: 'Digital Marketing Executive', dept: 'Marketing', location: 'Colombo 3', type: 'Full-time' },
  { title: 'Student Services Advisor', dept: 'Student Services', location: 'Colombo 3', type: 'Full-time' },
  { title: 'Travel Operations Coordinator', dept: 'Operations', location: 'Colombo 3', type: 'Full-time' },
]
</script>
