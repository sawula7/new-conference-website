<template>
  <div>
      <section class="relative pt-36 pb-20">
        <div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80" alt="Contact" class="w-full h-full object-cover"/><div class="absolute inset-0 bg-ct-navy/82"></div></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4">
          <p class="text-ct-gold text-sm font-bold uppercase tracking-widest mb-3">We're Here 24/7</p>
          <h1 class="text-white font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p class="text-white/70 text-lg max-w-2xl">Get in touch with our travel experts — we're always here to help plan your perfect journey.</p>
          <nav class="flex items-center gap-2 text-sm text-white/50 mt-6"><NuxtLink to="/" class="hover:text-ct-gold">Home</NuxtLink><span>/</span><span class="text-white">Contact Us</span></nav>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <!-- Contact Info -->
            <div class="lg:col-span-2 space-y-8">
              <div>
                <span class="ct-section-tag">Get in Touch</span>
                <h2 class="ct-section-heading ct-gold-line mb-4">We'd Love to Hear From You</h2>
                <p class="text-slate-600 leading-relaxed">Whether you want to plan a holiday, enquire about a package, or need urgent travel assistance, our team is ready to help — 24 hours a day, 365 days a year.</p>
              </div>

              <div class="space-y-5">
                <div class="flex gap-4 items-start">
                  <div class="w-11 h-11 bg-ct-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-ct-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-ct-navy-dark mb-1">Head Office</h4>
                    <p class="text-slate-500 text-sm leading-relaxed">379/4, Galle Road,<br>Colombo 3, Sri Lanka</p>
                  </div>
                </div>
                <div class="flex gap-4 items-start">
                  <div class="w-11 h-11 bg-ct-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-ct-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-ct-navy-dark mb-1">Phone</h4>
                    <a href="tel:+94117773300" class="text-ct-navy hover:text-ct-gold transition-colors text-sm font-medium">+94 11 7 77 33 00</a>
                  </div>
                </div>
                <div class="flex gap-4 items-start">
                  <div class="w-11 h-11 bg-ct-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-ct-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-ct-navy-dark mb-1">Email</h4>
                    <a href="mailto:info@classictravel.lk" class="text-ct-navy hover:text-ct-gold transition-colors text-sm font-medium">info@classictravel.lk</a>
                  </div>
                </div>
                <div class="flex gap-4 items-start">
                  <div class="w-11 h-11 bg-ct-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-ct-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-ct-navy-dark mb-1">Business Hours</h4>
                    <p class="text-slate-500 text-sm">Open 24 Hours · 365 Days a Year</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="lg:col-span-3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 class="font-bold text-ct-navy-dark text-2xl mb-6">Send Us a Message</h3>
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                    <input v-model="form.firstName" type="text" required placeholder="John" class="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white"/>
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                    <input v-model="form.lastName" type="text" required placeholder="Doe" class="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white"/>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input v-model="form.email" type="email" required placeholder="john@example.com" class="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white"/>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input v-model="form.phone" type="tel" placeholder="+94 77 000 0000" class="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white"/>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Enquiry Type *</label>
                  <select v-model="form.type" required class="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white">
                    <option value="">Select a category</option>
                    <option>Leisure Travel</option>
                    <option>Corporate Travel</option>
                    <option>Student Services</option>
                    <option>Sri Lanka Tours</option>
                    <option>Wild & Safari</option>
                    <option>Yuthukama</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Your Message *</label>
                  <textarea v-model="form.message" required rows="5" placeholder="Tell us about your travel plans, preferred dates, destinations, and any special requirements..." class="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-ct-navy bg-white resize-none"></textarea>
                </div>
                <div v-if="submitted" class="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 text-sm font-medium">
                  ✓ Thank you! Your message has been sent. Our team will get back to you within 24 hours.
                </div>
                <button type="submit" class="w-full ct-btn-primary py-4 justify-center text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Map placeholder -->
      <section class="h-72 bg-slate-200 relative overflow-hidden">
        <div class="absolute inset-0 bg-slate-300 flex items-center justify-center">
          <div class="text-center">
            <svg class="w-12 h-12 text-ct-navy mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <p class="text-ct-navy font-bold text-lg">379/4, Galle Road, Colombo 3</p>
            <a href="https://maps.google.com/?q=379/4+Galle+Road+Colombo+3+Sri+Lanka" target="_blank" class="text-ct-navy underline text-sm mt-1 inline-block">Open in Google Maps</a>
          </div>
        </div>
      </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: 'classic' })
useHead({ title: 'Contact Us | Classic Travel' })
const form = reactive({ firstName: '', lastName: '', email: '', phone: '', type: '', message: '' })
const submitted = ref(false)
function handleSubmit() { submitted.value = true; setTimeout(() => { submitted.value = false; Object.assign(form, { firstName: '', lastName: '', email: '', phone: '', type: '', message: '' }) }, 5000) }
</script>
