<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=1920&q=80" alt="Offers" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/78"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Exclusive Deals</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Offers & Promotions</h1>
          <p class="text-white/70 text-lg max-w-2xl">Don't miss our limited-time travel deals and exclusive promotions. Book now and save big on your next adventure.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><NuxtLink to="/leisure" class="hover:text-ct-gold">Leisure</NuxtLink><span>/</span><span class="text-white">Offers</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Current Promotions</span>
            <h2 class="ct-section-heading ct-gold-line-center">Exclusive Travel Offers</h2>
            <p class="ct-section-subtext text-center mx-auto max-w-2xl">All offers are subject to availability and terms. Contact our advisors for details and booking.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="offer in offers" :key="offer.title" class="ct-card group overflow-hidden relative">
              <div class="relative h-52 overflow-hidden">
                <img :src="offer.image" :alt="offer.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div class="absolute top-3 left-3"><span class="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">{{ offer.discount }}</span></div>
                <div class="absolute top-3 right-3"><span class="bg-ct-gold text-ct-navy-dark text-xs font-bold px-2 py-1 rounded">{{ offer.category }}</span></div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-ct-navy-dark text-lg mb-1">{{ offer.title }}</h3>
                <p class="text-slate-500 text-sm mb-4 leading-relaxed">{{ offer.desc }}</p>
                <div class="flex items-center gap-3 mb-4">
                  <span class="text-slate-400 line-through text-sm">{{ offer.was }}</span>
                  <span class="text-ct-navy font-bold text-2xl">{{ offer.price }}</span>
                </div>
                <div class="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span class="text-xs text-red-500 font-semibold">Valid until: {{ offer.valid }}</span>
                  <NuxtLink to="/contact-us" class="ct-btn-gold text-sm py-2 px-5">Book Now</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-ct-gold">
        <div class="max-w-2xl mx-auto px-4 text-center">
          <h2 class="text-ct-navy-dark font-bold text-3xl mb-3">Get Notified of New Offers</h2>
          <p class="text-ct-navy mb-8">Subscribe and be the first to receive exclusive deals and promotions.</p>
          <form @submit.prevent class="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Your email address" class="flex-1 px-5 py-3.5 rounded text-ct-navy-dark focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white"/>
            <button type="submit" class="bg-ct-navy text-white font-bold px-8 py-3.5 rounded whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Offers & Promotions | Classic Travel' })
const offers = [
  { title: 'Kerala Tour Package', desc: "5 days in God's Own Country — backwaters, Ayurveda, hill stations, and beaches.", category: 'Asia', discount: '15% OFF', was: 'USD 589', price: 'USD 499', valid: '31 Aug 2025', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80' },
  { title: 'Embrace the Splendors of Kashmir', desc: 'Discover the magical Valley of Paradise — Dal Lake, Mughal Gardens, and mountain vistas.', category: 'Asia', discount: '10% OFF', was: 'USD 779', price: 'USD 699', valid: '30 Sep 2025', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80' },
  { title: 'China Tour Package 2025', desc: 'Great Wall, Forbidden City, Shanghai skyline — discover ancient and modern China.', category: 'Asia', discount: '12% OFF', was: 'USD 1,022', price: 'USD 899', valid: '31 Oct 2025', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80' },
  { title: 'Maldives Luxury Escape', desc: 'Overwater villa, house reef snorkelling, and the most stunning sunsets in the Indian Ocean.', category: 'Maldives', discount: '20% OFF', was: 'USD 1,624', price: 'USD 1,299', valid: '31 Jul 2025', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80' },
  { title: 'Dubai & Abu Dhabi Special', desc: 'The ultimate UAE experience — Burj Khalifa, Sheikh Zayed Mosque, and desert safari.', category: 'Middle East', discount: '18% OFF', was: 'USD 1,035', price: 'USD 849', valid: '31 Aug 2025', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
  { title: 'Bali Honeymoon Package', desc: 'A romantic Balinese retreat with private villa, couples spa, and curated temple visits.', category: 'Asia', discount: '10% OFF', was: 'USD 832', price: 'USD 749', valid: '30 Sep 2025', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80' },
]
</script>
