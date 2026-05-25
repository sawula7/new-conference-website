<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1588598198321-9735fd52ee9e?w=1920&q=80" alt="Sri Lanka" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/72"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Pearl of the Indian Ocean</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Discover Sri Lanka</h1>
          <p class="text-white/70 text-lg max-w-2xl">From ancient kingdoms and misty hill country to pristine beaches and incredible wildlife — Sri Lanka has it all.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><span class="text-white">Sri Lanka</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Destinations</span>
            <h2 class="ct-section-heading ct-gold-line-center">Sri Lanka's Finest Destinations</h2>
            <p class="ct-section-subtext text-center mx-auto max-w-2xl">A small island with extraordinary diversity — explore eight UNESCO World Heritage Sites and 1,340km of stunning coastline.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="dest in sriLankaDestinations" :key="dest.name" class="ct-dest-card group cursor-pointer" @click="$router.push('/leisure-destinations')">
              <div class="relative h-64 overflow-hidden rounded-xl">
                <img :src="dest.image" :alt="dest.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div class="ct-dest-card-overlay"></div>
                <div class="absolute bottom-0 left-0 p-5">
                  <h3 class="text-white font-bold text-xl">{{ dest.name }}</h3>
                  <p class="text-white/75 text-sm">{{ dest.tagline }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Experiences</span>
            <h2 class="ct-section-heading ct-gold-line-center">Why Visit Sri Lanka</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="e in experiences" :key="e.title" class="bg-white rounded-xl p-7 text-center border border-slate-100 hover:shadow-lg transition-shadow">
              <div class="text-4xl mb-4">{{ e.emoji }}</div>
              <h3 class="font-bold text-ct-navy-dark mb-3">{{ e.title }}</h3>
              <p class="text-slate-500 text-sm leading-relaxed">{{ e.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-ct-navy">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-white font-bold text-3xl mb-4">Plan Your Sri Lanka Adventure</h2>
          <p class="text-white/70 mb-8">Classic Travel — Sri Lanka's own premier travel company — is the perfect partner for exploring this magical island.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/leisure-packages" class="ct-btn-gold px-8 py-3.5">View Sri Lanka Packages</NuxtLink>
            <NuxtLink to="/contact-us" class="ct-btn-outline-white px-8 py-3.5">Get in Touch</NuxtLink>
          </div>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Sri Lanka Tours | Classic Travel' })
const sriLankaDestinations = [
  { name: 'Sigiriya', tagline: 'UNESCO Lion Rock fortress', image: 'https://images.unsplash.com/photo-1575994532419-5e57c39c95f7?w=600&q=80' },
  { name: 'Kandy', tagline: 'Cultural capital & hill country', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80' },
  { name: 'Galle Fort', tagline: 'Dutch colonial coastal city', image: 'https://images.unsplash.com/photo-1586861256284-9f10b8e3f498?w=600&q=80' },
  { name: 'Ella', tagline: 'Misty hills & Nine Arch Bridge', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=600&q=80' },
  { name: 'Mirissa', tagline: 'Whale watching & beaches', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
  { name: 'Yala National Park', tagline: 'Leopards, elephants & wildlife', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80' },
]
const experiences = [
  { emoji: '🏛️', title: 'Ancient Heritage', desc: '8 UNESCO World Heritage Sites including Sigiriya, Polonnaruwa, and the Sacred City of Anuradhapura.' },
  { emoji: '🌿', title: 'Lush Nature', desc: 'Dense rainforests, spice gardens, tea plantations, and breathtaking mountain landscapes.' },
  { emoji: '🐘', title: 'Wildlife', desc: "One of Asia's best wildlife destinations — leopards, elephants, blue whales, and exotic birdlife." },
  { emoji: '🏖️', title: 'Beaches', desc: '1,340km of golden coastline with beaches to suit every taste — surf, swim, or simply relax.' },
]
</script>
