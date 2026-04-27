<template>
  <div>
    <InnerPageHero title="Existing Members" subtitle="Resources, renewal information, and the member directory for current SLSTL members." parent="Membership" parent-href="/membership" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-2 gap-6 mb-10">
          <div v-for="r in resources" :key="r.title" class="card p-7">
            <div class="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <component :is="r.icon" :size="22" class="text-primary" />
            </div>
            <h3 class="font-display font-bold text-primary-darker">{{ r.title }}</h3>
            <p class="text-slate-500 text-sm mt-2 leading-relaxed">{{ r.desc }}</p>
            <button class="btn-outline-primary text-sm py-2 px-4 mt-4">{{ r.action }}</button>
          </div>
        </div>
        <div class="card p-8 text-center">
          <p class="text-slate-500">Having trouble accessing member resources? <NuxtLink to="/contact" class="text-primary font-semibold hover:underline">Contact the secretariat</NuxtLink>.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RefreshCw, BookOpen, Calendar, Award } from 'lucide-vue-next'
useHead({ title: 'Existing Members — SLSTL' })

const resources = [
  { icon: RefreshCw, title: 'Renew Membership',       desc: 'Renew your SLSTL membership for the current year. Renewals are due by 31 January each year.',        action: 'Renew Now' },
  { icon: BookOpen,  title: 'JSALT Journal Access',   desc: 'Access all issues of the Journal of the SLSTL (JSALT) as part of your membership benefits.',          action: 'Access Journal' },
  { icon: Calendar,  title: 'Member Events',          desc: 'View exclusive member-only events, workshops, and networking sessions organised by SLSTL.',            action: 'View Events' },
  { icon: Award,     title: 'Membership Certificate', desc: 'Download or request a printed copy of your SLSTL membership certificate for the current year.',       action: 'Download Certificate' },
]
</script>
