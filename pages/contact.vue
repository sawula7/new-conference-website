<template>
  <div>
    <InnerPageHero title="Contact Us" subtitle="Get in touch with the SLSTL secretariat." parent="Home" parent-href="/" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-10">
          <!-- Info -->
          <div>
            <span class="section-tag">Get in Touch</span>
            <h2 class="section-heading">Contact Information</h2>
            <div class="space-y-5 mt-8">
              <div v-for="item in contactInfo" :key="item.label" class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <component :is="item.icon" :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-semibold text-slate-700 text-sm">{{ item.label }}</p>
                  <p class="text-slate-500 text-sm mt-0.5">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Form -->
          <div class="card p-8">
            <h3 class="font-display font-bold text-primary-darker text-lg mb-6">Send a Message</h3>
            <form class="space-y-4" @submit.prevent>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" placeholder="Your name" class="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" placeholder="you@example.com" class="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <input type="text" placeholder="How can we help?" class="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows="4" placeholder="Your message..." class="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"></textarea>
              </div>
              <button type="submit" class="btn-primary w-full justify-center">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Mail, Phone, Clock } from 'lucide-vue-next'
useHead({ title: 'Contact Us — SLSTL' })

const contactInfo = [
  { icon: MapPin, label: 'Address',       value: 'Sri Lanka Society of Transport & Logistics, Colombo, Sri Lanka' },
  { icon: Mail,   label: 'Email',         value: 'info@slstl.lk' },
  { icon: Phone,  label: 'Phone',         value: '+94 11 000 0000' },
  { icon: Clock,  label: 'Office Hours',  value: 'Monday – Friday, 9:00 AM – 5:00 PM (SLST)' },
]
</script>
