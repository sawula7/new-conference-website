<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1920&q=80" alt="Wild" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/75"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Safari & Nature</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Wild Experiences</h1>
          <p class="text-white/70 text-lg max-w-2xl">Safari adventures, wildlife encounters, and nature immersions in some of Asia's most spectacular wilderness areas.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><span class="text-white">Wild</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="ct-section-tag">About Wild</span>
            <h2 class="ct-section-heading ct-gold-line mb-6">Bringing Sri Lanka's Wild Side to the World</h2>
            <p class="text-slate-600 leading-relaxed mb-5">Sri Lanka is home to some of the most extraordinary wildlife encounters on the planet. From the highest concentration of leopards in Asia at Yala National Park to the world's largest gathering of Asian elephants at Minneriya, the island's wild experiences are truly world-class.</p>
            <p class="text-slate-600 leading-relaxed mb-8">Our Wild team specialises in crafting wildlife-focused itineraries that combine exciting safari experiences with comfortable accommodation and expert naturalist guides — putting you right at the heart of nature.</p>
            <NuxtLink to="/contact-us" class="ct-btn-primary">Plan a Wildlife Safari</NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&q=80" class="rounded-xl w-full h-52 object-cover" alt="Wildlife"/>
            <img src="https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&q=80" class="rounded-xl w-full h-52 object-cover mt-8" alt="Elephant"/>
            <img src="https://images.unsplash.com/photo-1534759926524-bf69fed3cf14?w=400&q=80" class="rounded-xl w-full h-52 object-cover -mt-4" alt="Safari"/>
            <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80" class="rounded-xl w-full h-52 object-cover" alt="Nature"/>
          </div>
        </div>
      </section>

      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Safari Parks</span>
            <h2 class="ct-section-heading ct-gold-line-center">Wildlife Experiences We Offer</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="p in parks" :key="p.name" class="ct-card overflow-hidden group">
              <div class="relative h-56 overflow-hidden">
                <img :src="p.image" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div class="ct-dest-card-overlay"></div>
                <div class="absolute bottom-0 left-0 p-5">
                  <h3 class="text-white font-bold text-xl">{{ p.name }}</h3>
                  <p class="text-white/70 text-sm">{{ p.highlight }}</p>
                </div>
              </div>
              <div class="p-5">
                <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ p.desc }}</p>
                <NuxtLink to="/contact-us" class="text-ct-gold font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Plan Safari <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Ready for Your Wild Adventure?</h2>
          <p class="text-white/70 mb-8">Our wildlife specialists will craft the perfect safari itinerary tailored to your interests and travel dates.</p>
          <NuxtLink to="/contact-us" class="ct-btn-gold px-10 py-4">Plan My Safari</NuxtLink>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Wild Experiences | Classic Travel' })
const parks = [
  { name: 'Yala National Park', highlight: 'Highest leopard density in Asia', desc: 'Sri Lanka\'s most visited national park, famous for its large concentration of leopards, elephants, and diverse birdlife.', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80' },
  { name: 'Minneriya National Park', highlight: 'The Gathering of Elephants', desc: 'Witness the spectacular annual elephant gathering — one of the largest congregation of Asian elephants in the world.', image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600&q=80' },
  { name: 'Udawalawe National Park', highlight: 'Sri Lankan Elephant Safari', desc: 'The best place to see Sri Lankan elephants in their natural habitat — a must for any wildlife enthusiast.', image: 'https://images.unsplash.com/photo-1534759926524-bf69fed3cf14?w=600&q=80' },
  { name: 'Wilpattu National Park', highlight: 'Leopards & Sloth Bears', desc: "Sri Lanka's largest national park with mysterious natural lakes (villus) and abundant wildlife including rare sloth bears.", image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80' },
  { name: 'Mirissa Whale Watching', highlight: 'Blue Whales & Sperm Whales', desc: 'Sri Lanka is one of the best places on Earth to see blue whales — the largest animals to have ever lived.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
  { name: 'Sinharaja Forest Reserve', highlight: 'UNESCO Rainforest', desc: 'Sri Lanka\'s last viable area of primary tropical rainforest — a biodiversity hotspot with endemic birds and wildlife.', image: 'https://images.unsplash.com/photo-1588598198321-9735fd52ee9e?w=600&q=80' },
]
</script>
