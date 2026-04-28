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
          <button v-for="tab in tabs" :key="tab.value"
            class="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold border transition-colors"
            :class="activeTab === tab.value
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-slate-500 border-slate-200 hover:border-primary hover:text-primary'"
            @click="activeTab = tab.value">
            {{ tab.label }}
            <span class="ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full"
                  :class="activeTab === tab.value ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'">
              {{ tab.count }}
            </span>
          </button>
        </div>

        <!-- Events grid -->
        <div v-if="filtered.length" class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink v-for="ev in filtered" :key="ev.slug" :to="`/events/${ev.slug}`"
            class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100
                   hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div class="relative h-44 flex-shrink-0" :style="{ background: categoryGradient(ev.category) }">
              <div class="absolute top-3 right-3">
                <span class="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full backdrop-blur-sm"
                      :class="isUpcoming(ev) ? 'bg-white/20 text-white' : 'bg-black/20 text-white/70'">
                  {{ isUpcoming(ev) ? 'Upcoming' : 'Past' }}
                </span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center justify-between"
                   style="background:linear-gradient(to top,rgba(0,0,0,.55),transparent)">
                <span class="text-[11px] font-semibold text-white/80 uppercase tracking-wide">{{ ev.category }}</span>
                <span class="text-[11px] font-semibold text-white/80">{{ fmtDate(ev.event_date) }}</span>
              </div>
            </div>

            <div class="flex flex-col flex-1 p-5">
              <h3 class="font-display font-bold text-primary-darker text-base leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {{ ev.title }}
              </h3>
              <p v-if="ev.short_description" class="text-xs text-slate-400 line-clamp-2 mb-3">{{ ev.short_description }}</p>

              <div class="flex flex-col gap-1.5 text-sm text-slate-500 mb-4">
                <div class="flex items-start gap-2">
                  <MapPin :size="13" class="mt-0.5 text-primary/50 flex-shrink-0" />
                  <span class="line-clamp-1">{{ ev.venue || ev.platform || 'TBA' }}</span>
                </div>
                <div v-if="ev.time_start" class="flex items-center gap-2">
                  <AlarmClock :size="13" class="text-primary/50 flex-shrink-0" />
                  <span>{{ ev.time_start }}{{ ev.time_end ? ` – ${ev.time_end}` : '' }}</span>
                </div>
              </div>

              <div class="flex-1" />

              <div class="border-t border-slate-100 pt-3 mt-1 flex items-center justify-between">
                <div>
                  <span v-if="ev.is_free" class="text-sm font-bold text-emerald-600">Free</span>
                  <template v-else>
                    <span class="text-xs text-slate-400">From </span>
                    <span class="text-sm font-bold text-primary-darker">LKR {{ minFee(ev).toLocaleString() }}</span>
                  </template>
                </div>
                <span class="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  {{ isUpcoming(ev) ? 'Register' : 'View Details' }}
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
import { MapPin, AlarmClock, ArrowRight, CalendarX } from 'lucide-vue-next'
useHead({ title: 'Events — SLSTL' })

const { data: events } = await useFetch<any[]>('/api/events')

const activeTab = ref<'all' | 'upcoming' | 'past'>('all')

const GRADIENTS: Record<string, string> = {
  webinar:    'linear-gradient(135deg,#1e3a5f,#2563eb)',
  workshop:   'linear-gradient(135deg,#065f46,#059669)',
  conference: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
  seminar:    'linear-gradient(135deg,#b45309,#d97706)',
  other:      'linear-gradient(135deg,#1e3a5f,#0e7490)',
}

function categoryGradient(cat: string) {
  return GRADIENTS[cat] ?? GRADIENTS.other
}

function isUpcoming(ev: any) {
  if (!ev.event_date) return true
  return new Date(ev.event_date) >= new Date(new Date().toDateString())
}

function fmtDate(d: string | null) {
  if (!d) return 'TBA'
  return new Date(d).toLocaleDateString('en-LK', { day: 'numeric', month: 'short', year: 'numeric' })
}

function minFee(ev: any) {
  const fees = [ev.general_fee, ev.member_fee, ev.student_fee].map(Number).filter(f => f > 0)
  return fees.length ? Math.min(...fees) : 0
}

const all      = computed(() => events.value ?? [])
const upcoming = computed(() => all.value.filter(isUpcoming))
const past     = computed(() => all.value.filter(e => !isUpcoming(e)))

const tabs = computed(() => [
  { value: 'all',      label: 'All Events', count: all.value.length },
  { value: 'upcoming', label: 'Upcoming',   count: upcoming.value.length },
  { value: 'past',     label: 'Past',       count: past.value.length },
])

const filtered = computed(() => {
  if (activeTab.value === 'upcoming') return upcoming.value
  if (activeTab.value === 'past')     return past.value
  return all.value
})
</script>
