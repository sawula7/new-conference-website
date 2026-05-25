<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80" alt="Corporate" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/80"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Business Travel</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Corporate Travel Solutions</h1>
          <p class="text-white/70 text-lg max-w-2xl">Sri Lanka's top-rated Travel Management Company — developing durable corporate travel programmes with sophisticated technology and efficient budgets.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><span class="text-white">Corporate</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="ct-section-tag">Corporate Travel</span>
            <h2 class="ct-section-heading ct-gold-line mb-6">Your Complete Corporate Travel Partner</h2>
            <p class="text-slate-600 leading-relaxed mb-5">As Sri Lanka's top-rated Travel Management Company, Classic Travel develops durable corporate travel programmes offering sophisticated technology alongside efficient travel budgets. With over 200 dedicated account advisors, we manage the travel needs of leading corporations across Sri Lanka and beyond.</p>
            <p class="text-slate-600 leading-relaxed mb-8">Our corporate solutions are designed to maximise travel efficiency, reduce costs, ensure duty of care, and provide seamless experiences for every business traveller — from executives to entire teams.</p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/contact-us" class="ct-btn-primary">Request a Consultation</NuxtLink>
              <NuxtLink to="/leisure-packages" class="ct-btn-outline">View Travel Solutions</NuxtLink>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in corpStats" :key="stat.label" class="bg-slate-50 border border-slate-100 rounded-xl p-7 text-center">
              <p class="text-ct-navy font-bold text-4xl mb-2">{{ stat.value }}</p>
              <p class="text-slate-600 font-semibold text-sm">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">What We Offer</span>
            <h2 class="ct-section-heading ct-gold-line-center">Corporate Travel Services</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="s in corpServices" :key="s.title" class="bg-white rounded-xl p-7 border border-slate-100 hover:shadow-lg transition-shadow group">
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
          <h2 class="text-white font-bold text-3xl mb-4">Ready to Optimise Your Corporate Travel?</h2>
          <p class="text-white/70 mb-8">Contact our corporate travel team for a tailored consultation and proposal.</p>
          <NuxtLink to="/contact-us" class="ct-btn-gold px-10 py-4">Get in Touch</NuxtLink>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Corporate Travel Solutions | Classic Travel' })
const corpStats = [
  { value: '200+', label: 'Account Advisors' },
  { value: '30+', label: 'Years Experience' },
  { value: '35+', label: 'Industry Awards' },
  { value: '24/7', label: 'Support Available' },
]
const corpServices = [
  { title: 'Travel Policy Management', desc: 'We help design, implement, and manage effective corporate travel policies that control costs while maintaining traveller comfort.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>' },
  { title: 'Dedicated Account Management', desc: 'Each corporate client has a dedicated account advisor who manages all travel arrangements with personal attention.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>' },
  { title: 'Flight & Hotel Bookings', desc: 'Preferred rates with leading airlines and hotel chains globally — maximising value and comfort for business travellers.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>' },
  { title: 'Expense Reporting & Analytics', desc: 'Detailed travel spend analytics and reporting tools to help finance teams track, reconcile, and optimise budgets.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>' },
  { title: 'Duty of Care', desc: 'Real-time traveller tracking and emergency support to ensure the safety and wellbeing of every business traveller.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>' },
  { title: 'MICE & Group Travel', desc: 'End-to-end management of meetings, incentives, conferences, and exhibitions — making every event a success.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>' },
]
</script>
