<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80" alt="News" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/80"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">Latest Updates</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">News & Media</h1>
          <p class="text-white/70 text-lg max-w-2xl">Stay up-to-date with the latest news, promotions, travel tips, and updates from Classic Travel.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><span class="text-white">News</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row gap-12">
            <!-- Main News -->
            <div class="flex-1">
              <div class="text-center md:text-left mb-10">
                <span class="ct-section-tag">Latest News</span>
                <h2 class="ct-section-heading ct-gold-line">Travel News & Updates</h2>
              </div>
              <div class="space-y-8">
                <div v-for="article in news" :key="article.title" class="flex flex-col md:flex-row gap-6 pb-8 border-b border-slate-100 group">
                  <div class="w-full md:w-56 h-40 overflow-hidden rounded-xl flex-shrink-0">
                    <img :src="article.image" :alt="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                  <div>
                    <span class="inline-block bg-ct-gold/15 text-ct-gold-dark text-xs font-bold px-2 py-1 rounded mb-2">{{ article.category }}</span>
                    <h3 class="font-bold text-ct-navy-dark text-xl mb-2 group-hover:text-ct-navy transition-colors">{{ article.title }}</h3>
                    <p class="text-slate-500 text-sm leading-relaxed mb-3">{{ article.excerpt }}</p>
                    <div class="flex items-center gap-4 text-xs text-slate-400">
                      <span>{{ article.date }}</span>
                      <span>·</span>
                      <span>{{ article.readTime }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="w-full md:w-72 space-y-8">
              <div class="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h4 class="font-bold text-ct-navy-dark mb-4">Subscribe to Newsletter</h4>
                <p class="text-slate-500 text-sm mb-4">Get travel news and exclusive deals delivered to your inbox.</p>
                <form @submit.prevent class="space-y-3">
                  <input type="email" placeholder="Your email" class="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white"/>
                  <button type="submit" class="w-full ct-btn-primary py-2.5 justify-center text-sm">Subscribe</button>
                </form>
              </div>

              <div class="bg-ct-navy rounded-xl p-6">
                <h4 class="font-bold text-white mb-4">Quick Links</h4>
                <ul class="space-y-2">
                  <li><NuxtLink to="/leisure-offers" class="text-white/70 hover:text-ct-gold text-sm transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Current Offers</NuxtLink></li>
                  <li><NuxtLink to="/leisure-packages" class="text-white/70 hover:text-ct-gold text-sm transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Tour Packages</NuxtLink></li>
                  <li><NuxtLink to="/leisure-destinations" class="text-white/70 hover:text-ct-gold text-sm transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Destinations</NuxtLink></li>
                  <li><NuxtLink to="/yuthukama" class="text-white/70 hover:text-ct-gold text-sm transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Yuthukama</NuxtLink></li>
                  <li><NuxtLink to="/contact-us" class="text-white/70 hover:text-ct-gold text-sm transition-colors flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>Contact Us</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'News & Media | Classic Travel' })
const news = [
  { title: 'Classic Travel Wins Best Emerging Agent at MSC Cruises Award Ceremony', excerpt: 'Classic Travel has been awarded the prestigious Best Emerging Agent award at the MSC Cruises Trade Event & Award Ceremony, held on board the luxurious MSC VIRTUOSA cruise ship.', category: 'Awards', date: 'March 15, 2025', readTime: '3 min read', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=80' },
  { title: 'New Direct Flights to London: What It Means for Sri Lankan Travellers', excerpt: 'The latest airline schedule changes bring exciting new options for travellers from Colombo to the UK and Europe. Classic Travel breaks down what you need to know.', category: 'Travel Tips', date: 'February 28, 2025', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=500&q=80' },
  { title: 'Yuthukama Surpasses LKR 10 Million in Contributions to President\'s Fund', excerpt: 'Classic Travel\'s Yuthukama programme has crossed a major milestone, with total contributions to the President\'s Fund of Sri Lanka exceeding LKR 10 million.', category: 'Yuthukama', date: 'January 20, 2025', readTime: '3 min read', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&q=80' },
  { title: 'Top 5 Sri Lanka Experiences You Must Try in 2025', excerpt: 'From whale watching in Mirissa to the elephant gathering at Minneriya, our travel experts share the top five unmissable Sri Lanka experiences for 2025.', category: 'Travel Guide', date: 'January 5, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1588598198321-9735fd52ee9e?w=500&q=80' },
]
</script>
