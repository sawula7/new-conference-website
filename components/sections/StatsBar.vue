<template>
  <section class="bg-primary-darker py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div ref="container" class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="relative text-center px-6 py-2 group"
          :class="i < stats.length - 1 ? 'md:border-r md:border-white/10' : ''"
        >
          <!-- Icon -->
          <div class="flex justify-center mb-3">
            <div class="w-11 h-11 bg-white/8 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <component :is="stat.icon" :size="20" class="text-accent" />
            </div>
          </div>
          <!-- Number -->
          <div class="font-display font-black text-4xl md:text-5xl text-white leading-none">
            {{ displayValues[i] }}<span class="text-accent">{{ stat.suffix }}</span>
          </div>
          <!-- Label -->
          <div class="text-primary-300 text-xs font-bold uppercase tracking-widest mt-2">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, Globe, BookMarked, Users } from 'lucide-vue-next'

const stats = [
  { value: 300, suffix: '+',  label: 'Papers Submitted', icon: FileText   },
  { value: 12,  suffix: 'th', label: 'Annual Edition',   icon: BookMarked },
  { value: 600, suffix: '+',  label: 'Total Attendees',  icon: Users      },
]

const displayValues = ref(stats.map(() => 0))
const container = ref<HTMLElement | null>(null)
let animated = false

function animateCounters() {
  if (animated) return
  animated = true
  stats.forEach((stat, i) => {
    const duration = 1800
    const start = performance.now()
    function step(now: number) {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      displayValues.value[i] = Math.round(stat.value * eased)
      if (p < 1) requestAnimationFrame(step)
    }
    setTimeout(() => requestAnimationFrame(step), i * 120)
  })
}

onMounted(() => {
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      animateCounters()
      obs.disconnect()
    }
  }, { threshold: 0.4 })

  if (container.value) obs.observe(container.value)
})
</script>
