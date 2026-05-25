<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80" alt="Yuthukama Services" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/80"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Travel with Meaning</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Yuthukama Dedicated Travel Services</h1>
          <p class="text-white/70 text-lg max-w-2xl">Premium travel services with a heart — every booking contributes to the wellbeing of vulnerable Sri Lankans.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><NuxtLink to="/yuthukama" class="hover:text-ct-gold">Yuthukama</NuxtLink><span>/</span><span class="text-white">Services</span></nav>
        </div>
      </section>
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Yuthukama Services</span>
            <h2 class="ct-section-heading ct-gold-line-center">Services Under Yuthukama</h2>
            <p class="ct-section-subtext text-center mx-auto max-w-2xl">All standard Classic Travel services — with the added benefit of contributing 1% to the President's Fund of Sri Lanka.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="s in services" :key="s.title" class="bg-slate-50 rounded-xl p-7 border border-slate-100 hover:shadow-lg transition-shadow">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-ct-navy rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="s.icon"></svg></div>
                <h3 class="font-bold text-ct-navy-dark">{{ s.title }}</h3>
              </div>
              <p class="text-slate-500 text-sm leading-relaxed">{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-16 bg-ct-gold">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-ct-navy-dark font-bold text-3xl mb-4">Every Journey Counts</h2>
          <p class="text-ct-navy mb-8">When you book through Classic Travel, you automatically participate in the Yuthukama programme. No extra cost — just a better world.</p>
          <NuxtLink to="/contact-us" class="ct-btn-primary px-10 py-4">Start Your Journey</NuxtLink>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Yuthukama Services | Classic Travel' })
const services = [
  { title: 'Air Ticket Bookings', desc: '1% of the total airfare from every ticket booked through Classic Travel is transferred to the President\'s Fund.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>' },
  { title: 'Holiday Packages', desc: 'All leisure holiday packages include the Yuthukama contribution — your dream holiday helps build a better Sri Lanka.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945"/>' },
  { title: 'Corporate Travel', desc: 'Corporate accounts enrolled in the Yuthukama programme contribute collectively, multiplying the social impact.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>' },
  { title: 'Student Travel', desc: 'Student air fare bookings under the Yuthukama programme ensure that even budget travellers give back.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>' },
  { title: 'Hotel Bookings', desc: 'Selected hotel bookings through the Yuthukama platform also qualify for social contribution.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/>' },
  { title: 'Group Travel', desc: 'Group bookings amplify the impact — the more you travel together, the more you give back collectively.', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2"/>' },
]
</script>
