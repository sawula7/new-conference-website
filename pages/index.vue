<template>
  <div>
      <!-- ── HERO ── -->
      <section class="relative min-h-screen flex items-center overflow-hidden">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588598198321-9735fd52ee9e?w=1920&q=85"
            alt="Sri Lanka"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0" style="background:linear-gradient(to right,rgba(4,14,28,0.90) 0%,rgba(4,14,28,0.55) 55%,rgba(4,14,28,0.20) 100%)"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 w-full pt-32 pb-20">
          <div class="max-w-2xl">
            <span class="inline-block text-ct-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Sri Lanka's Premier Travel Company</span>
            <h1 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Your Journey<br><span class="text-ct-gold">Made Unique</span><br>Like Ours
            </h1>
            <p class="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              IATA accredited, open 24 hours · 365 days. We take every step of the journey with you, ensuring a truly hassle-free experience.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/leisure-packages" class="ct-btn-gold text-base px-8 py-3.5">Explore Packages</NuxtLink>
              <NuxtLink to="/contact-us" class="ct-btn-outline-white text-base px-8 py-3.5">Get in Touch</NuxtLink>
            </div>
          </div>
        </div>
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span class="text-xs uppercase tracking-widest">Scroll</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </div>
      </section>

      <!-- ── STATS ── -->
      <section class="bg-ct-gold">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-ct-navy/20">
            <div v-for="s in stats" :key="s.label" class="py-8 px-6 text-center">
              <div class="text-ct-navy-dark font-bold text-3xl md:text-4xl font-display">{{ s.value }}</div>
              <div class="text-ct-navy text-sm font-semibold mt-1 uppercase tracking-wide">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SERVICES ── -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">What We Offer</span>
            <h2 class="ct-section-heading ct-gold-line-center">Our Services</h2>
            <p class="ct-section-subtext mx-auto text-center max-w-2xl">From leisure getaways to corporate travel management, we curate exceptional journeys tailored to your every need.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NuxtLink v-for="sv in services" :key="sv.title" :to="sv.link" class="group relative overflow-hidden rounded-xl cursor-pointer block">
              <div class="relative h-72 overflow-hidden">
                <img :src="sv.image" :alt="sv.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0" :style="`background:linear-gradient(to top,${sv.color}ee 0%,${sv.color}55 50%,transparent 100%)`"></div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-white font-bold text-xl mb-1">{{ sv.title }}</h3>
                <p class="text-white/75 text-sm line-clamp-2">{{ sv.desc }}</p>
                <span class="inline-flex items-center gap-1 text-ct-gold text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                  Learn More <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- ── DESTINATIONS ── -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span class="ct-section-tag">Where To Go</span>
              <h2 class="ct-section-heading ct-gold-line">Popular Destinations</h2>
            </div>
            <NuxtLink to="/leisure-destinations" class="ct-btn-outline text-sm self-start">View All Destinations</NuxtLink>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="md:col-span-2 md:row-span-2 ct-dest-card group cursor-pointer" @click="$router.push('/leisure-destinations')">
              <div class="relative h-72 md:h-full min-h-[300px]">
                <img src="https://images.unsplash.com/photo-1575994532419-5e57c39c95f7?w=800&q=80" alt="Sigiriya" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="ct-dest-card-overlay"></div>
                <div class="absolute bottom-0 left-0 p-6">
                  <span class="text-ct-gold text-xs font-bold uppercase tracking-widest">Sri Lanka</span>
                  <h3 class="text-white font-bold text-2xl mt-1">Sigiriya</h3>
                  <p class="text-white/70 text-sm mt-1">The Lion Rock — UNESCO World Heritage</p>
                </div>
              </div>
            </div>
            <div v-for="d in destinations" :key="d.name" class="ct-dest-card group cursor-pointer" @click="$router.push('/leisure-destinations')">
              <div class="relative h-48">
                <img :src="d.image" :alt="d.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="ct-dest-card-overlay"></div>
                <div class="absolute bottom-0 left-0 p-4">
                  <span class="text-ct-gold text-xs font-bold uppercase tracking-widest">{{ d.country }}</span>
                  <h3 class="text-white font-bold text-lg">{{ d.name }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── FEATURED OFFERS ── -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span class="ct-section-tag">Latest Deals</span>
              <h2 class="ct-section-heading ct-gold-line">Featured Offers</h2>
            </div>
            <NuxtLink to="/leisure-offers" class="ct-btn-outline text-sm self-start">View All Offers</NuxtLink>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="o in offers" :key="o.title" class="ct-card group">
              <div class="relative h-52 overflow-hidden">
                <img :src="o.image" :alt="o.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                <div class="absolute top-3 left-3">
                  <span class="bg-ct-gold text-ct-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{{ o.badge }}</span>
                </div>
              </div>
              <div class="p-5">
                <h3 class="font-bold text-ct-navy-dark text-lg mb-2">{{ o.title }}</h3>
                <p class="text-slate-500 text-sm mb-4 line-clamp-2">{{ o.desc }}</p>
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-slate-400 text-xs">From</span>
                    <p class="text-ct-navy-dark font-bold text-xl">{{ o.price }}</p>
                  </div>
                  <NuxtLink to="/leisure-offers" class="ct-btn-gold text-sm py-2 px-4">View Deal</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── ABOUT BANNER ── -->
      <section class="relative py-24 overflow-hidden">
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="Travel" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-ct-navy/85"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span class="ct-section-tag">About Classic Travel</span>
              <h2 class="text-white font-bold text-3xl md:text-4xl leading-tight mb-6 ct-gold-line">Sri Lanka's Most Trusted Travel Partner Since 1994</h2>
              <p class="text-white/70 text-base leading-relaxed mb-4">Classic Travel (Pvt) Ltd., incorporated in 1994, is an IATA accredited travel agent and a proud member of the prestigious Expolanka Group of Companies. We specialise in providing total travel solutions to both corporate and leisure markets.</p>
              <p class="text-white/70 text-base leading-relaxed mb-8">We are the only travel agent in Sri Lanka open 24 hours, 365 days — ready for any query relating to flights, hotels, or future holiday itineraries.</p>
              <NuxtLink to="/about-us" class="ct-btn-gold">Learn More About Us</NuxtLink>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="h in highlights" :key="h.title" class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
                <h4 class="text-ct-gold font-bold text-2xl mb-1">{{ h.value }}</h4>
                <p class="text-white font-semibold text-sm mb-1">{{ h.title }}</p>
                <p class="text-white/60 text-xs">{{ h.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── YUTHUKAMA ── -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="bg-gradient-to-br from-ct-navy to-ct-navy-light rounded-2xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div class="p-10 md:p-14">
                <span class="inline-block bg-ct-gold text-ct-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Social Responsibility</span>
                <h2 class="text-white font-bold text-3xl md:text-4xl leading-tight mb-5">Yuthukama — Travel with Purpose</h2>
                <p class="text-white/75 text-base leading-relaxed mb-4">With every air ticket purchased through Classic Travel, 1% of the total airfare is transferred to the President's Fund of Sri Lanka.</p>
                <p class="text-white/75 text-base leading-relaxed mb-8">These funds provide basic essentials to children, women, low-income families, the elderly, and differently-abled individuals across Sri Lanka.</p>
                <NuxtLink to="/yuthukama" class="ct-btn-gold">Learn About Yuthukama</NuxtLink>
              </div>
              <div class="relative min-h-[300px]">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="Yuthukama" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-ct-navy/30"></div>
                <div class="absolute bottom-8 left-8 right-8 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl p-5">
                  <p class="text-2xl font-bold text-ct-gold mb-1">1% of Every Ticket</p>
                  <p class="text-white/80 text-sm">Goes directly to the President's Fund of Sri Lanka to help the most vulnerable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── WHY US ── -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Why Classic Travel</span>
            <h2 class="ct-section-heading ct-gold-line-center">The Classic Difference</h2>
            <p class="ct-section-subtext mx-auto text-center max-w-xl">We go beyond just booking travel — we craft experiences, build relationships, and deliver memories that last a lifetime.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="w in whyUs" :key="w.title" class="bg-white rounded-xl p-7 text-center hover:shadow-lg transition-shadow border border-slate-100 group">
              <div class="w-14 h-14 bg-ct-navy/5 group-hover:bg-ct-gold/10 rounded-xl flex items-center justify-center mx-auto mb-5 transition-colors">
                <svg class="w-7 h-7 text-ct-navy group-hover:text-ct-gold-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="w.iconPath"></svg>
              </div>
              <h3 class="text-ct-navy-dark font-bold text-base mb-3">{{ w.title }}</h3>
              <p class="text-slate-500 text-sm leading-relaxed">{{ w.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── CORPORATE CTA ── -->
      <section class="py-16 bg-ct-navy-dark">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 class="text-white font-bold text-2xl md:text-3xl mb-2">Looking for Corporate Travel Solutions?</h2>
            <p class="text-white/60">Top-rated Travel Management Company in Sri Lanka with 200+ account advisors and 35+ awards.</p>
          </div>
          <div class="flex gap-4 flex-shrink-0">
            <NuxtLink to="/corporate" class="ct-btn-gold px-8 py-3.5 whitespace-nowrap">Corporate Solutions</NuxtLink>
            <NuxtLink to="/contact-us" class="ct-btn-outline-white px-8 py-3.5 whitespace-nowrap">Contact Us</NuxtLink>
          </div>
        </div>
      </section>

      <!-- ── TESTIMONIALS ── -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-14">
            <span class="ct-section-tag">Client Stories</span>
            <h2 class="ct-section-heading ct-gold-line-center">What Our Clients Say</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="r in testimonials" :key="r.name" class="bg-slate-50 rounded-xl p-7">
              <div class="text-ct-gold text-4xl leading-none mb-4 font-serif">"</div>
              <p class="text-slate-600 text-sm leading-relaxed mb-6 italic">{{ r.text }}</p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-ct-navy rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{{ r.name[0] }}</div>
                <div>
                  <p class="font-bold text-ct-navy-dark text-sm">{{ r.name }}</p>
                  <p class="text-slate-400 text-xs">{{ r.location }}</p>
                </div>
                <div class="ml-auto flex gap-0.5">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4 text-ct-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── NEWSLETTER ── -->
      <section class="py-16 bg-ct-gold">
        <div class="max-w-2xl mx-auto px-4 text-center">
          <h2 class="text-ct-navy-dark font-bold text-3xl mb-3">Get Exclusive Travel Deals</h2>
          <p class="text-ct-navy text-base mb-8">Subscribe to our newsletter for the latest offers, travel tips, and destination guides.</p>
          <form @submit.prevent class="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email address" class="flex-1 px-5 py-3.5 rounded text-ct-navy-dark placeholder-ct-navy/50 focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white" />
            <button type="submit" class="bg-ct-navy hover:bg-ct-navy-light text-white font-bold px-8 py-3.5 rounded transition-colors whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Classic Travel | Your Journey Made Unique Like Ours' })

const stats = [
  { value: '30+', label: 'Years of Excellence' },
  { value: '200+', label: 'Account Advisors' },
  { value: '35+', label: 'Industry Awards' },
  { value: '50+', label: 'Global Partners' },
]

const services = [
  { title: 'Leisure Travel', desc: 'Curated holiday packages for individuals, couples, and families — crafted with expertise and care.', link: '/leisure', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', color: '#0b2d59' },
  { title: 'Sri Lanka Tours', desc: 'Discover the pearl of the Indian Ocean — beaches, culture, wildlife, and ancient kingdoms await.', link: '/sri-lanka', image: 'https://images.unsplash.com/photo-1588598198321-9735fd52ee9e?w=600&q=80', color: '#1a4a0a' },
  { title: 'Wild Experiences', desc: "Safari adventures and wildlife encounters in some of Asia's most spectacular natural reserves.", link: '/wild', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80', color: '#2d1a0b' },
  { title: 'Corporate Travel', desc: 'Comprehensive travel management solutions for businesses — efficient, cost-effective, and professional.', link: '/corporate', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80', color: '#1a1a3a' },
  { title: 'Student Services', desc: 'A global student platform to help students navigate overseas living, travel, and academic journeys.', link: '/students', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', color: '#0a2a3a' },
  { title: 'Yuthukama', desc: "1% of every airfare goes to the President's Fund of Sri Lanka. Travel with a purpose.", link: '/yuthukama', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', color: '#3a1a0a' },
]

const destinations = [
  { name: 'Kandy', country: 'Sri Lanka', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&q=80' },
  { name: 'Maldives', country: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80' },
  { name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80' },
  { name: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80' },
  { name: 'Thailand', country: 'Thailand', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80' },
  { name: 'Switzerland', country: 'Europe', image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80' },
]

const offers = [
  { title: 'Kerala Tour Package', desc: "Explore the backwaters, hills, and beaches of God's Own Country on a perfect 5-day journey.", price: 'USD 499', badge: 'Popular', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80' },
  { title: 'Embrace the Splendors of Kashmir', desc: 'Experience the breathtaking landscapes and culture of the Valley of Paradise.', price: 'USD 699', badge: 'New', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80' },
  { title: 'China Tour Package 2025', desc: 'Discover the Great Wall, Forbidden City, and the vibrant modern cities of China.', price: 'USD 899', badge: 'Featured', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80' },
]

const highlights = [
  { value: '30+', title: 'Years of Excellence', desc: 'IATA accredited since 1994' },
  { value: '200+', title: 'Account Advisors', desc: 'Dedicated travel experts' },
  { value: '35+', title: 'Industry Awards', desc: 'Recognised excellence' },
  { value: '24/7', title: 'Always Open', desc: '365 days, every query' },
]

const whyUs = [
  { title: 'Expert Advisors', desc: 'Our team of 200+ experienced advisors are dedicated to crafting the perfect journey.', iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>' },
  { title: 'Best Price Guarantee', desc: "We work with the world's leading airlines and hotels to secure the very best rates.", iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
  { title: 'Hassle-Free Travel', desc: 'We handle every detail — visas, transfers, accommodation — so you travel with peace of mind.', iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>' },
  { title: '24/7 Support', desc: 'The only travel agency in Sri Lanka available around the clock, every single day of the year.', iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>' },
]

const testimonials = [
  { name: 'Amantha P.', location: 'Colombo, Sri Lanka', text: 'Classic Travel planned our honeymoon to the Maldives perfectly. Every detail was taken care of, from flights to resort transfers. Absolutely flawless!' },
  { name: 'Rajith F.', location: 'Kandy, Sri Lanka', text: "I've been using Classic Travel for all my corporate trips for the past 5 years. Their service is unmatched — always professional, always reliable." },
  { name: 'Priya M.', location: 'Galle, Sri Lanka', text: 'The Yuthukama initiative is what made me a loyal customer. Knowing that my ticket purchase helps vulnerable Sri Lankans means so much. Thank you!' },
]
</script>
