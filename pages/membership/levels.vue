<template>
  <div>
    <InnerPageHero title="Membership Levels & Criteria" subtitle="Choose the membership category that fits your career stage and background." parent="Membership" parent-href="/membership" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="level in levels" :key="level.name" class="card p-7" :class="level.featured ? 'border-accent ring-1 ring-accent/30 shadow-md shadow-accent/10' : ''">
            <div class="flex items-start justify-between mb-4">
              <div>
                <span v-if="level.featured" class="inline-block bg-accent text-primary-darker text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide mb-2">Most Popular</span>
                <h3 class="font-display font-bold text-primary-darker text-xl">{{ level.name }}</h3>
              </div>
              <div class="text-right">
                <p class="font-display font-black text-2xl text-primary">{{ level.fee }}</p>
                <p class="text-slate-400 text-xs">per year</p>
              </div>
            </div>
            <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ level.desc }}</p>
            <ul class="space-y-2">
              <li v-for="c in level.criteria" :key="c" class="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle :size="15" class="text-primary mt-0.5 flex-shrink-0" />
                {{ c }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'
useHead({ title: 'Membership Levels — SLSTL' })

const levels = [
  { name: 'Student Member',      fee: 'LKR 1,000',  featured: false, desc: 'For full-time undergraduate and postgraduate students enrolled in an accredited institution.', criteria: ['Enrolled in a transport/logistics or related degree', 'Valid student ID required', 'Access to JSALT journal', 'Discounted conference fees'] },
  { name: 'Associate Member',    fee: 'LKR 3,000',  featured: false, desc: 'For professionals with up to 5 years of experience in transport or logistics.', criteria: ['Degree or diploma in relevant field OR 3+ years experience', 'Professional development resources', 'Networking events access', 'Voting rights at AGM'] },
  { name: 'Full Member',         fee: 'LKR 5,000',  featured: true,  desc: 'For established professionals and academics with significant contributions to the field.', criteria: ['5+ years professional experience', 'Can use MSLSTL designation', 'Eligible for committee positions', 'Full journal access and discounts'] },
  { name: 'Fellow',              fee: 'LKR 8,000',  featured: false, desc: 'Awarded to distinguished individuals with exceptional contributions to transport and logistics.', criteria: ['15+ years distinguished contribution', 'Nominated and elected by existing Fellows', 'FSLSTL designation', 'Advisory board eligibility'] },
  { name: 'Corporate Member',    fee: 'LKR 25,000', featured: false, desc: 'For organisations wishing to partner with SLSTL and support the transport and logistics community.', criteria: ['Up to 5 individual memberships included', 'Logo on SLSTL website', 'Sponsorship priority', 'Conference exhibition discounts'] },
  { name: 'Honorary Member',     fee: 'Gratis',     featured: false, desc: 'Conferred on individuals of exceptional distinction, at the discretion of the Executive Committee.', criteria: ['Awarded by Executive Committee vote', 'No fee required', 'All Full Member benefits', 'Recognised at Annual General Meeting'] },
]
</script>
