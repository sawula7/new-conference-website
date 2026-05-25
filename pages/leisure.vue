<template>
  <div>
      <section class="relative pt-36 pb-20 overflow-hidden">
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" alt="Leisure" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-ct-navy/75"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Travel & Holidays</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Leisure Travel</h1>
          <p class="text-white/70 text-lg max-w-2xl">Our team of experts is specialised to curate your leisure travel needs — crafting the holiday experience you truly deserve.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6">
            <NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span>
            <span class="text-white">Leisure</span>
          </nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Leisure Services</span>
            <h2 class="ct-section-heading ct-gold-line-center">Everything You Need for the Perfect Holiday</h2>
            <p class="ct-section-subtext text-center mx-auto max-w-2xl">From romantic getaways to family adventures, our leisure travel experts take care of every detail.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="item in leisureLinks" :key="item.title" class="group">
              <NuxtLink :to="item.link" class="ct-card block p-0 overflow-hidden">
                <div class="relative h-48 overflow-hidden">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-ct-navy/30 group-hover:bg-ct-navy/10 transition-colors"></div>
                </div>
                <div class="p-6">
                  <h3 class="text-ct-navy-dark font-bold text-lg mb-2 group-hover:text-ct-navy transition-colors">{{ item.title }}</h3>
                  <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ item.desc }}</p>
                  <span class="text-ct-gold font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Explore <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-ct-gold">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-ct-navy-dark font-bold text-3xl mb-4">Plan Your Dream Holiday Today</h2>
          <p class="text-ct-navy mb-8">Speak to one of our leisure travel specialists and let us create an unforgettable journey for you.</p>
          <NuxtLink to="/contact-us" class="ct-btn-primary px-10 py-4">Contact a Travel Specialist</NuxtLink>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Leisure Travel | Classic Travel' })
const leisureLinks = [
  { title: 'Destinations', desc: 'Explore our handpicked destinations around the world — from tropical paradises to cultural capitals.', link: '/leisure-destinations', image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80' },
  { title: 'Packages & Activities', desc: 'Browse curated tour packages including accommodation, transfers, and guided experiences.', link: '/leisure-packages', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80' },
  { title: 'Offers & Promotions', desc: 'Exclusive deals and limited-time promotions on our most popular destinations and packages.', link: '/leisure-offers', image: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=600&q=80' },
  { title: 'Leisure Travel', desc: 'Tailored leisure travel planning with flight bookings, hotel reservations, and complete itineraries.', link: '/leisure-travel', image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?w=600&q=80' },
  { title: 'Leisure Services', desc: 'Comprehensive support services including visa assistance, travel insurance, and 24/7 helpline.', link: '/leisure-services', image: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=600&q=80' },
  { title: 'Sri Lanka Tours', desc: 'Discover the wonders of Sri Lanka — wildlife, beaches, heritage, and authentic culture.', link: '/sri-lanka', image: 'https://images.unsplash.com/photo-1588598198321-9735fd52ee9e?w=600&q=80' },
]
</script>
