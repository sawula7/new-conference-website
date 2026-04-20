<template>
  <section class="bg-primary-darker py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div ref="container" class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x md:divide-white/10">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="text-center px-4"
        >
          <div class="font-display font-black text-4xl md:text-5xl text-white">
            {{ displayValues[i] }}<span class="text-accent">{{ stat.suffix }}</span>
          </div>
          <div class="text-primary-300 text-xs font-bold uppercase tracking-widest mt-2">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: 300, suffix: '+',  label: 'Papers Submitted' },
  { value: 45,  suffix: '+',  label: 'Countries Represented' },
  { value: 12,  suffix: 'th', label: 'Annual Edition' },
  { value: 600, suffix: '+',  label: 'Total Attendees' },
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
