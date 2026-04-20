<template>
  <section id="register" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="section-tag">Join the Conference</span>
        <h2 class="section-heading">Registration</h2>
        <p class="section-subtext mx-auto">
          Secure your place at R4TLI 2026. Early bird rates available until <strong>June 30, 2026</strong>.
        </p>
      </div>

      <!-- Pricing grid -->
      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          v-for="(plan, i) in plans"
          :key="plan.name"
          class="reveal flex flex-col"
          :class="`reveal-delay-${i + 1}`"
        >
          <div
            class="card flex flex-col flex-1 p-7 relative overflow-hidden"
            :class="plan.featured ? 'border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/20' : ''"
          >
            <!-- Popular badge -->
            <div v-if="plan.featured" class="absolute top-0 right-0">
              <div class="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                Most Popular
              </div>
            </div>

            <!-- Plan name -->
            <div class="mb-5">
              <h3 class="font-display font-bold text-lg text-primary-darker">{{ plan.name }}</h3>
              <p class="text-slate-400 text-xs mt-1">{{ plan.desc }}</p>
            </div>

            <!-- Price -->
            <div class="mb-6">
              <div class="flex items-end gap-1">
                <span class="text-xs font-bold text-slate-300 mb-1.5">LKR</span>
                <span class="font-display font-black text-4xl text-primary-darker">{{ plan.priceLKR }}</span>
              </div>
              <p class="text-slate-400 text-sm mt-0.5">or USD {{ plan.priceUSD }}</p>
              <div
                v-if="plan.earlyBirdNote"
                class="mt-2.5 text-xs text-emerald-700 font-semibold bg-emerald-50 rounded-lg px-3 py-1.5 inline-flex items-center gap-1"
              >
                <Zap :size="11" />
                {{ plan.earlyBirdNote }}
              </div>
            </div>

            <!-- Feature list -->
            <ul class="space-y-2.5 mb-8 flex-1">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start gap-2 text-sm text-slate-600"
              >
                <CheckCircle2 :size="15" class="text-primary flex-shrink-0 mt-0.5" />
                {{ feature }}
              </li>
            </ul>

            <!-- CTA -->
            <a
              href="#"
              :class="plan.featured ? 'btn-primary justify-center' : 'btn-outline-primary justify-center'"
              class="text-sm"
            >
              Register Now
              <ArrowRight :size="14" />
            </a>
          </div>
        </div>
      </div>

      <!-- Student note -->
      <div class="text-center mt-8 reveal">
        <p class="text-slate-500 text-sm">
          Student rate:
          <strong class="text-primary-dark">LKR 8,000 / USD 25</strong>
          — valid student ID required at registration.
          <a href="#" class="text-primary hover:underline ml-2 font-medium">Contact us for group rates →</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle2, ArrowRight, Zap } from 'lucide-vue-next'

const plans = [
  {
    name: 'Early Bird',
    desc: 'For registrations before June 30, 2026',
    priceLKR: '18,000',
    priceUSD: '60',
    earlyBirdNote: 'Save LKR 5,000 vs regular',
    featured: false,
    features: [
      'Full 3-day conference access',
      'Printed conference kit & proceedings',
      'Lunch & refreshments all 3 days',
      'All technical sessions & keynotes',
      'Certificate of participation',
    ],
  },
  {
    name: 'Regular',
    desc: 'Standard full-access registration',
    priceLKR: '23,000',
    priceUSD: '75',
    earlyBirdNote: null,
    featured: true,
    features: [
      'Full 3-day conference access',
      'Printed conference kit & proceedings',
      'Lunch & refreshments all 3 days',
      'All technical sessions & keynotes',
      'Certificate of participation',
      'Gala dinner — Day 1',
      'Cultural evening — Day 2',
    ],
  },
  {
    name: 'International / Online',
    desc: 'For international & virtual attendees',
    priceLKR: '—',
    priceUSD: '150',
    earlyBirdNote: null,
    featured: false,
    features: [
      'Live-stream access to all sessions',
      'Digital conference proceedings (PDF)',
      'Virtual networking sessions',
      'Recorded session access (30 days)',
      'E-certificate of participation',
    ],
  },
]
</script>
