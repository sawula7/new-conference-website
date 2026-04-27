<template>
  <div>
    <InnerPageHero
      :title="`Exco Members ${labelMap[slug] ?? slug}`"
      subtitle="Executive committee members serving SLSTL for this term."
      parent="Exco Members"
      parent-href="/exco"
    />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="member in members" :key="member.name" class="card p-6 text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User :size="28" class="text-primary" />
            </div>
            <h3 class="font-display font-bold text-primary-darker">{{ member.name }}</h3>
            <p class="text-accent-darker font-semibold text-xs uppercase tracking-wide mt-0.5">{{ member.role }}</p>
            <p class="text-slate-400 text-xs mt-2">{{ member.org }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { User } from 'lucide-vue-next'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const labelMap: Record<string, string> = {
  '2019-2020': '2019/2020',
  '2018-2019': '2018/2019',
}

useHead({ title: computed(() => `Exco Members ${labelMap[slug.value] ?? slug.value} — SLSTL`) })

const members = [
  { name: 'Prof. [Name]',    role: 'President',          org: 'University of Moratuwa' },
  { name: 'Dr. [Name]',      role: 'Vice President',     org: 'University of Sri Jayewardenepura' },
  { name: 'Mr. [Name]',      role: 'Secretary',          org: 'Sri Lanka Ports Authority' },
  { name: 'Ms. [Name]',      role: 'Treasurer',          org: 'National Transport Commission' },
  { name: 'Dr. [Name]',      role: 'Committee Member',   org: 'University of Kelaniya' },
  { name: 'Mr. [Name]',      role: 'Committee Member',   org: 'Sri Lanka Railways' },
]
</script>
