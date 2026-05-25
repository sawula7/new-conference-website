<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80" alt="Yuthukama" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/82"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Social Responsibility</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Yuthukama</h1>
          <p class="text-white/70 text-lg max-w-2xl">Classic Travel & Value Addition — where every air ticket you purchase makes a meaningful difference to a vulnerable Sri Lankan.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><span class="text-white">Yuthukama</span></nav>
        </div>
      </section>

      <!-- What is Yuthukama -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="ct-section-tag">About Yuthukama</span>
            <h2 class="ct-section-heading ct-gold-line mb-6">Travel with Purpose</h2>
            <p class="text-slate-600 leading-relaxed mb-5">Yuthukama is Classic Travel's unique corporate social responsibility initiative. With this programme, 1% of the Total Air Fare Cost of each Air Ticket purchased through Classic Travel is transferred directly to the President's Fund of Sri Lanka.</p>
            <p class="text-slate-600 leading-relaxed mb-5">The President's Fund uses these contributions to provide basic essentials — food, clothing, medicine, and educational support — to children, women, low-income families, the elderly, and differently-abled individuals across Sri Lanka.</p>
            <p class="text-slate-600 leading-relaxed mb-8">When you book your next flight with Classic Travel, you're not just going somewhere — you're making a difference right here in Sri Lanka. Your journey truly becomes meaningful.</p>
            <NuxtLink to="/yuthukama-services" class="ct-btn-primary">Yuthukama Services</NuxtLink>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80" class="rounded-2xl w-full h-96 object-cover" alt="Helping community"/>
            <div class="absolute -bottom-6 -left-6 bg-ct-gold rounded-2xl p-6 shadow-xl">
              <p class="text-ct-navy-dark font-bold text-3xl">1%</p>
              <p class="text-ct-navy font-semibold text-sm">of every airfare</p>
              <p class="text-ct-navy-dark text-xs mt-1">goes to the President's Fund</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Who Benefits -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Impact</span>
            <h2 class="ct-section-heading ct-gold-line-center">Who Benefits from Yuthukama</h2>
            <p class="ct-section-subtext text-center mx-auto max-w-2xl">Every Sri Lankan family you help when you book a flight through Classic Travel.</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <div v-for="b in beneficiaries" :key="b.label" class="bg-white rounded-xl p-6 text-center border border-slate-100 hover:shadow-lg transition-shadow">
              <div class="w-14 h-14 bg-ct-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-ct-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="b.icon"></svg>
              </div>
              <p class="font-bold text-ct-navy-dark text-sm">{{ b.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Book a Ticket. Change a Life.</h2>
          <p class="text-white/70 mb-8">Every time you fly with Classic Travel, you contribute 1% to making Sri Lanka a better place. Book your next flight today.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/contact-us" class="ct-btn-gold px-8 py-3.5">Book a Flight</NuxtLink>
            <NuxtLink to="/yuthukama-services" class="ct-btn-outline-white px-8 py-3.5">Learn More</NuxtLink>
          </div>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Yuthukama | Classic Travel' })
const beneficiaries = [
  { label: 'Children', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
  { label: 'Women', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>' },
  { label: 'Low-Income Families', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>' },
  { label: 'Elderly Citizens', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
  { label: 'Differently-Abled', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>' },
]
</script>
