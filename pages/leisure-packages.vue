<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80" alt="Packages" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/78"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Tours & Holidays</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Packages & Activities</h1>
          <p class="text-white/70 text-lg max-w-2xl">Explore our curated range of holiday packages, tour itineraries, and activity experiences worldwide.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><NuxtLink to="/leisure" class="hover:text-ct-gold">Leisure</NuxtLink><span>/</span><span class="text-white">Packages</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Our Packages</span>
            <h2 class="ct-section-heading ct-gold-line-center">Featured Tour Packages</h2>
            <p class="ct-section-subtext text-center mx-auto max-w-2xl">Each package is carefully crafted to deliver unforgettable experiences. All-inclusive options available.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="pkg in packages" :key="pkg.title" class="ct-card group overflow-hidden">
              <div class="relative h-56 overflow-hidden">
                <img :src="pkg.image" :alt="pkg.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div class="absolute top-3 left-3 flex gap-2">
                  <span class="bg-ct-gold text-ct-navy-dark text-xs font-bold px-2 py-1 rounded">{{ pkg.days }}</span>
                  <span v-if="pkg.popular" class="bg-ct-navy text-white text-xs font-bold px-2 py-1 rounded">Popular</span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-ct-navy-dark text-lg mb-2">{{ pkg.title }}</h3>
                <p class="text-slate-500 text-sm mb-4 leading-relaxed">{{ pkg.desc }}</p>
                <div class="flex flex-wrap gap-2 mb-5">
                  <span v-for="inc in pkg.includes" :key="inc" class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded flex items-center gap-1">
                    <svg class="w-3 h-3 text-ct-gold" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    {{ inc }}
                  </span>
                </div>
                <div class="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div><span class="text-slate-400 text-xs">From</span><p class="text-ct-navy-dark font-bold text-xl">{{ pkg.price }}</p></div>
                  <NuxtLink to="/contact-us" class="ct-btn-gold text-sm py-2 px-5">Enquire</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Looking for a Custom Package?</h2>
          <p class="text-white/70 mb-8">Our specialists will craft a bespoke itinerary tailored to your exact preferences, budget, and travel dates.</p>
          <NuxtLink to="/contact-us" class="ct-btn-gold px-10 py-4">Request a Custom Package</NuxtLink>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Packages & Activities | Classic Travel' })
const packages = [
  { title: 'Kerala Tour Package', desc: "Explore God's Own Country — backwaters, hill stations, Ayurveda centres, and beautiful beaches over 5 magical days.", days: '5D/4N', popular: true, price: 'USD 499', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', includes: ['Flights', 'Hotel', 'Transfers', 'Guide'] },
  { title: 'Kashmir Splendors', desc: 'Experience the breathtaking Dal Lake, Mughal Gardens, and snow-clad Himalayan peaks in the Valley of Paradise.', days: '6D/5N', popular: false, price: 'USD 699', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80', includes: ['Flights', 'Houseboat', 'Transfers', 'Meals'] },
  { title: 'China Discovery 2025', desc: 'Visit the Great Wall, Terracotta Warriors, Forbidden City, and experience the modern marvel of Shanghai.', days: '8D/7N', popular: true, price: 'USD 899', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80', includes: ['Flights', 'Hotel', 'Transfers', 'Guide', 'Visa'] },
  { title: 'Maldives Escape', desc: 'Luxury overwater bungalow, snorkelling in pristine reefs, and the most romantic sunsets on Earth.', days: '5D/4N', popular: true, price: 'USD 1,299', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80', includes: ['Flights', 'Resort', 'Seaplane', 'Breakfast'] },
  { title: 'Bali Bliss', desc: 'Rice terraces, ancient temples, traditional arts, and the serene beaches of Seminyak and Nusa Dua.', days: '7D/6N', popular: false, price: 'USD 749', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', includes: ['Flights', 'Villa', 'Transfers', 'Breakfast'] },
  { title: 'Dubai Dream', desc: 'Burj Khalifa, desert safari, luxury shopping malls, and the world\'s most spectacular skyline views.', days: '5D/4N', popular: false, price: 'USD 849', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80', includes: ['Flights', 'Hotel', 'Safari', 'City Tour'] },
]
</script>
