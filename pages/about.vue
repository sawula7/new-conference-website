<template>
  <div>
    <InnerPageHero
      title="Who We Are"
      subtitle="The Sri Lanka Society of Transport & Logistics — shaping the future of transport and logistics research and practice."
      parent="Home"
      parent-href="/"
    />

    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-14 items-start">
          <!-- Text -->
          <div>
            <span class="section-tag">About SLSTL</span>
            <h2 class="section-heading">Sri Lanka Society of Transport &amp; Logistics</h2>
            <p class="section-subtext">
              SLSTL is the foremost professional body dedicated to advancing transport and logistics
              knowledge, research, and practice in Sri Lanka and the wider South Asian region.
            </p>
            <p class="text-slate-500 mt-4 leading-relaxed">
              Founded with a vision to bridge the gap between academic research and industry practice,
              SLSTL brings together academics, practitioners, policymakers, and students to foster
              collaboration and innovation in the transport and logistics sector.
            </p>
            <p class="text-slate-500 mt-4 leading-relaxed">
              Through its flagship annual conference R4TLI, the Journal JSALT, professional development
              events, and its growing membership network, SLSTL plays a pivotal role in shaping
              transport and logistics policy and practice across South Asia.
            </p>

            <div class="grid sm:grid-cols-2 gap-4 mt-8">
              <div v-for="stat in stats" :key="stat.label" class="card p-5">
                <div class="font-display font-black text-3xl text-primary">{{ stat.value }}</div>
                <div class="text-slate-500 text-sm mt-1">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Cards -->
          <div class="space-y-4">
            <div v-for="item in pillars" :key="item.title" class="card p-6 flex gap-4">
              <div class="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <component :is="item.icon" :size="20" class="text-primary" />
              </div>
              <div>
                <h3 class="font-display font-bold text-primary-darker">{{ item.title }}</h3>
                <p class="text-slate-500 text-sm mt-1 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Globe, BookOpen, Users, Award } from 'lucide-vue-next'

useHead({ title: 'Who We Are — SLSTL' })

const stats = [
  { value: '600+', label: 'Members Nationwide' },
  { value: '12+',  label: 'Years of Excellence' },
  { value: '45+',  label: 'Partner Institutions' },
  { value: '300+', label: 'Research Papers Published' },
]

const pillars = [
  { icon: BookOpen, title: 'Research & Knowledge',    desc: 'Promoting cutting-edge research in transport planning, logistics management, supply chain, and sustainable mobility.' },
  { icon: Users,    title: 'Professional Network',     desc: 'Connecting academics, industry leaders, and government officials across Sri Lanka and South Asia.' },
  { icon: Globe,    title: 'International Presence',   desc: 'Collaborating with global institutions to bring world-class expertise and best practices to Sri Lanka.' },
  { icon: Award,    title: 'Excellence & Recognition', desc: 'Recognising outstanding contributions through awards, fellowships, and the prestigious R4TLI Best Paper Award.' },
]
</script>
