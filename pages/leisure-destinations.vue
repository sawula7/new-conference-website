<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80" alt="Destinations" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/78"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Explore the World</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Destinations & Tour Locations</h1>
          <p class="text-white/70 text-lg max-w-2xl">From tropical islands to ancient kingdoms, discover the destinations we craft exceptional journeys to.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><NuxtLink to="/leisure" class="hover:text-ct-gold">Leisure</NuxtLink><span>/</span><span class="text-white">Destinations</span></nav>
        </div>
      </section>

      <!-- Filters -->
      <section class="py-8 bg-white border-b border-slate-100 sticky top-16 z-30">
        <div class="max-w-7xl mx-auto px-4 flex flex-wrap gap-3">
          <button v-for="cat in categories" :key="cat" @click="active=cat" :class="['px-5 py-2 rounded-full text-sm font-semibold transition-colors', active===cat ? 'bg-ct-navy text-white' : 'bg-slate-100 text-slate-600 hover:bg-ct-navy/10']">{{ cat }}</button>
        </div>
      </section>

      <section class="py-16 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="dest in filteredDests" :key="dest.name" class="ct-dest-card group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div class="relative h-56 overflow-hidden">
                <img :src="dest.image" :alt="dest.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div class="ct-dest-card-overlay"></div>
                <div class="absolute top-3 right-3"><span class="bg-ct-gold text-ct-navy-dark text-xs font-bold px-2 py-1 rounded">{{ dest.category }}</span></div>
                <div class="absolute bottom-0 left-0 p-4"><h3 class="text-white font-bold text-lg">{{ dest.name }}</h3><p class="text-white/70 text-sm">{{ dest.country }}</p></div>
              </div>
              <div class="p-4"><p class="text-slate-500 text-sm line-clamp-2">{{ dest.desc }}</p><NuxtLink to="/contact-us" class="mt-3 text-ct-navy font-semibold text-sm flex items-center gap-1 hover:text-ct-gold transition-colors">Enquire Now <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></NuxtLink></div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Can't Find Your Dream Destination?</h2>
          <p class="text-white/70 mb-8">Our travel specialists can arrange journeys to virtually any destination in the world. Just ask!</p>
          <NuxtLink to="/contact-us" class="ct-btn-gold px-10 py-4">Talk to a Specialist</NuxtLink>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Destinations & Tour Locations | Classic Travel' })
const categories = ['All', 'Sri Lanka', 'Asia', 'Middle East', 'Europe', 'Maldives']
const active = ref('All')
const destinations = [
  { name: 'Sigiriya', country: 'Sri Lanka', category: 'Sri Lanka', desc: 'The iconic Lion Rock fortress — a UNESCO World Heritage Site rising 200m above the surrounding plains.', image: 'https://images.unsplash.com/photo-1575994532419-5e57c39c95f7?w=500&q=80' },
  { name: 'Kandy', country: 'Sri Lanka', category: 'Sri Lanka', desc: 'The cultural capital of Sri Lanka, home to the Sacred Temple of the Tooth Relic and beautiful botanical gardens.', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=500&q=80' },
  { name: 'Galle', country: 'Sri Lanka', category: 'Sri Lanka', desc: 'A historic walled city on the southwest coast, blending Portuguese, Dutch, and British colonial heritage.', image: 'https://images.unsplash.com/photo-1586861256284-9f10b8e3f498?w=500&q=80' },
  { name: 'Ella', country: 'Sri Lanka', category: 'Sri Lanka', desc: 'A small town in the misty hills of Sri Lanka, famous for the Nine Arch Bridge and stunning tea country views.', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=500&q=80' },
  { name: 'Maldives', country: 'Maldives', category: 'Maldives', desc: 'Pristine overwater bungalows, crystal-clear lagoons, and some of the world\'s finest coral reefs.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&q=80' },
  { name: 'Bali', country: 'Indonesia', category: 'Asia', desc: 'The Island of the Gods — terraced rice fields, ancient temples, vibrant culture, and beautiful beaches.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80' },
  { name: 'Dubai', country: 'UAE', category: 'Middle East', desc: 'A dazzling city of superlatives — the world\'s tallest building, luxury shopping, and desert adventures.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80' },
  { name: 'Thailand', country: 'Thailand', category: 'Asia', desc: 'From the bustling streets of Bangkok to the tranquil beaches of Koh Samui — a destination for all.', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=80' },
  { name: 'Switzerland', country: 'Switzerland', category: 'Europe', desc: 'Snow-capped Alps, pristine lakes, charming villages, and world-class winter sports.', image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&q=80' },
  { name: 'Kerala', country: 'India', category: 'Asia', desc: "God's Own Country — backwaters, hill stations, Ayurveda, and lush tropical beauty.", image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=80' },
  { name: 'Kashmir', country: 'India', category: 'Asia', desc: 'The Valley of Paradise — snow-capped peaks, Dal Lake, and breathtaking Himalayan landscapes.', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=500&q=80' },
  { name: 'Singapore', country: 'Singapore', category: 'Asia', desc: 'A city-state of contrasts — futuristic architecture, lush gardens, and incredible multicultural cuisine.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&q=80' },
]
const filteredDests = computed(() => active.value === 'All' ? destinations : destinations.filter(d => d.category === active.value))
</script>
