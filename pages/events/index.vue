<template>
  <div>
    <InnerPageHero
      title="Events"
      subtitle="Conferences, workshops, forums and webinars organised by SLSTL"
    />

    <section class="py-14 bg-slate-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">

        <!-- Filter tabs -->
        <div class="flex items-center gap-3 mb-10 overflow-x-auto pb-2">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            class="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold border transition-colors"
            :class="activeTab === tab.value
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-slate-500 border-slate-200 hover:border-primary hover:text-primary'"
            @click="activeTab = tab.value"
          >
            {{ tab.label }}
            <span
              class="ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full"
              :class="activeTab === tab.value ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'"
            >{{ tab.count }}</span>
          </button>
        </div>

        <!-- Events grid -->
        <div v-if="filtered.length" class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="ev in filtered"
            :key="ev.slug"
            :to="`/events/${ev.slug}`"
            class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100
                   hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <!-- Gradient banner -->
            <div class="relative h-44 flex-shrink-0" :style="{ background: ev.gradient }">
              <!-- Badges -->
              <div class="absolute top-3 left-3 flex flex-col gap-1.5">
                <span
                  v-if="ev.badge === 'going-fast'"
                  class="inline-flex items-center gap-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow"
                >
                  <Zap :size="9" /> Going Fast
                </span>
                <span
                  v-else-if="ev.badge === 'sales-end-soon'"
                  class="inline-flex items-center gap-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow"
                >
                  <Clock :size="9" /> Sales End Soon
                </span>
              </div>

              <!-- Status pill top-right -->
              <div class="absolute top-3 right-3">
                <span
                  class="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full backdrop-blur-sm"
                  :class="ev.status === 'upcoming'
                    ? 'bg-white/20 text-white'
                    : 'bg-black/20 text-white/70'"
                >
                  {{ ev.status === 'upcoming' ? 'Upcoming' : 'Past' }}
                </span>
              </div>

              <!-- Category + date ribbon at bottom of banner -->
              <div class="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center justify-between"
                   style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent)">
                <span class="text-[11px] font-semibold text-white/80 uppercase tracking-wide">{{ ev.category }}</span>
                <span class="text-[11px] font-semibold text-white/80">{{ ev.dateDisplay }}</span>
              </div>
            </div>

            <!-- Card body -->
            <div class="flex flex-col flex-1 p-5">
              <h3 class="font-display font-bold text-primary-darker text-base leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {{ ev.shortTitle }}
              </h3>

              <div class="flex flex-col gap-1.5 text-sm text-slate-500 mb-4">
                <div class="flex items-start gap-2">
                  <MapPin :size="13" class="mt-0.5 text-primary/50 flex-shrink-0" />
                  <span class="line-clamp-1">{{ ev.venue }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <AlarmClock :size="13" class="text-primary/50 flex-shrink-0" />
                  <span>{{ ev.time }}{{ ev.endTime ? ` – ${ev.endTime}` : '' }}</span>
                </div>
              </div>

              <div class="flex-1" />

              <!-- Price footer -->
              <div class="border-t border-slate-100 pt-3 mt-1 flex items-center justify-between">
                <div>
                  <template v-if="minPrice(ev) === 0 && maxPrice(ev) === 0">
                    <span class="text-sm font-bold text-emerald-600">Free</span>
                  </template>
                  <template v-else-if="minPrice(ev) === 0">
                    <span class="text-sm font-bold text-emerald-600">Free</span>
                    <span class="text-xs text-slate-400 ml-1">+ paid options</span>
                  </template>
                  <template v-else>
                    <span class="text-xs text-slate-400">From </span>
                    <span class="text-sm font-bold text-primary-darker">{{ ev.currency }} {{ minPrice(ev).toLocaleString() }}</span>
                  </template>
                </div>
                <span class="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  {{ ev.status === 'upcoming' ? 'Register' : 'View Details' }}
                  <ArrowRight :size="13" />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty state -->
        <div v-else class="text-center py-24 text-slate-400">
          <CalendarX :size="48" class="mx-auto mb-4 opacity-30" />
          <p class="text-lg font-medium">No events in this category yet.</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Zap, Clock, MapPin, AlarmClock, ArrowRight, CalendarX } from 'lucide-vue-next'
import { events, type SLSTLEvent } from '~/data/events'

useHead({ title: 'Events — SLSTL' })

const activeTab = ref<'all' | 'upcoming' | 'past'>('all')

const tabs = computed(() => [
  { value: 'all',      label: 'All Events', count: events.length },
  { value: 'upcoming', label: 'Upcoming',   count: events.filter(e => e.status === 'upcoming').length },
  { value: 'past',     label: 'Past',       count: events.filter(e => e.status === 'past').length },
])

const filtered = computed<SLSTLEvent[]>(() => {
  if (activeTab.value === 'all') return events
  return events.filter(e => e.status === activeTab.value)
})

function minPrice(ev: SLSTLEvent) {
  return Math.min(...ev.tickets.map(t => t.price))
}
function maxPrice(ev: SLSTLEvent) {
  return Math.max(...ev.tickets.map(t => t.price))
}
</script>
