<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1499591934245-40b55745b905?w=1920&q=80" alt="Leisure Travel" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/80"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Holiday Planning</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Leisure Travel</h1>
          <p class="text-white/70 text-lg max-w-2xl">Your ultimate guide to travelling the world. We make every holiday seamless, memorable, and uniquely yours.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><NuxtLink to="/leisure" class="hover:text-ct-gold">Leisure</NuxtLink><span>/</span><span class="text-white">Leisure Travel</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="ct-section-tag">What We Do</span>
            <h2 class="ct-section-heading ct-gold-line mb-6">Crafting Extraordinary Holidays</h2>
            <p class="text-slate-600 leading-relaxed mb-5">At Classic Travel, our leisure travel team is made up of passionate, experienced travel curators who understand that every holiday is unique. We take time to understand your preferences, interests, and budget to design the perfect itinerary.</p>
            <p class="text-slate-600 leading-relaxed mb-5">Whether you're dreaming of a romantic beach escape, a family adventure, a cultural immersion, or an adrenaline-packed expedition, we have the expertise and global connections to make it happen.</p>
            <p class="text-slate-600 leading-relaxed mb-8">From the moment you enquire to the day you return home, our team is with you every step of the way — ensuring a completely hassle-free experience.</p>
            <NuxtLink to="/contact-us" class="ct-btn-primary">Plan My Holiday</NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" class="rounded-xl w-full h-48 object-cover" alt="Beach"/>
            <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80" class="rounded-xl w-full h-48 object-cover mt-8" alt="Travel"/>
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80" class="rounded-xl w-full h-48 object-cover -mt-8" alt="Tour"/>
            <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80" class="rounded-xl w-full h-48 object-cover" alt="Asia"/>
          </div>
        </div>
      </section>

      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Travel Types</span>
            <h2 class="ct-section-heading ct-gold-line-center">Every Kind of Holiday</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div v-for="t in types" :key="t.label" class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-slate-100 group cursor-pointer">
              <div class="w-12 h-12 bg-ct-navy/5 group-hover:bg-ct-gold/15 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <svg class="w-6 h-6 text-ct-navy group-hover:text-ct-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="t.icon"></svg>
              </div>
              <h4 class="font-bold text-ct-navy-dark text-sm">{{ t.label }}</h4>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Ready to Escape?</h2>
          <p class="text-white/70 mb-8">Speak to our leisure travel advisors and start planning your dream holiday today.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/leisure-packages" class="ct-btn-gold px-8 py-3.5">View Packages</NuxtLink>
            <NuxtLink to="/contact-us" class="ct-btn-outline-white px-8 py-3.5">Talk to Us</NuxtLink>
          </div>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Leisure Travel | Classic Travel' })
const types = [
  { label: 'Beach Holidays', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>' },
  { label: 'Honeymoon', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>' },
  { label: 'Family Tours', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>' },
  { label: 'Adventure', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
  { label: 'Cultural Tours', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>' },
  { label: 'Cruise Holidays', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>' },
  { label: 'Safari & Wildlife', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>' },
  { label: 'City Breaks', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>' },
]
</script>
