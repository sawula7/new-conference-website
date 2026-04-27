<template>
  <div>
    <InnerPageHero title="Membership" subtitle="Join the Sri Lanka Society of Transport & Logistics and be part of a vibrant professional community." />
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-3 gap-6 mb-12">
          <NuxtLink v-for="item in links" :key="item.href" :to="item.href" class="card p-7 text-center hover:border-primary/30 group">
            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <component :is="item.icon" :size="24" class="text-primary" />
            </div>
            <h3 class="font-display font-bold text-primary-darker">{{ item.label }}</h3>
            <p class="text-slate-500 text-sm mt-2">{{ item.desc }}</p>
          </NuxtLink>
        </div>
        <div class="card p-8 text-center max-w-2xl mx-auto">
          <h2 class="font-display font-bold text-primary-darker text-2xl mb-3">Why Join SLSTL?</h2>
          <p class="text-slate-500 leading-relaxed">
            Membership gives you access to the latest research, networking events, discounted conference
            registration, the JSALT journal, and a professional community dedicated to advancing
            transport and logistics in Sri Lanka.
          </p>
          <NuxtLink to="/membership/apply" class="btn-primary mt-6 inline-flex">
            Apply for Membership
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BarChart2, UserPlus, Users } from 'lucide-vue-next'
useHead({ title: 'Membership — SLSTL' })

const links = [
  { href: '/membership/levels',   icon: BarChart2, label: 'Membership Levels',  desc: 'Explore categories from student to fellow membership.' },
  { href: '/membership/apply',    icon: UserPlus,  label: 'How to Apply',       desc: 'Step-by-step guide to becoming an SLSTL member.' },
  { href: '/membership/existing', icon: Users,     label: 'Existing Members',   desc: 'Resources and portal for current SLSTL members.' },
]
</script>
