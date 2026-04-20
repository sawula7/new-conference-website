<template>
  <section id="schedule" class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-12 reveal">
        <span class="section-tag">Conference Program</span>
        <h2 class="section-heading">Conference Schedule</h2>
        <p class="section-subtext mx-auto">
          Three days of keynotes, technical sessions, workshops, and networking.
        </p>
      </div>

      <!-- Day tabs -->
      <div class="flex gap-2 justify-center mb-10 flex-wrap reveal">
        <button
          v-for="(day, i) in days"
          :key="day.label"
          :class="[
            'px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 min-w-[100px]',
            activeDay === i
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
          ]"
          @click="activeDay = i"
        >
          <div>{{ day.label }}</div>
          <div class="text-xs font-normal opacity-70 mt-0.5">{{ day.date }}</div>
        </button>
      </div>

      <!-- Schedule items -->
      <div class="reveal">
        <Transition name="tab-fade" mode="out-in">
          <div :key="activeDay" class="space-y-2.5">
            <div
              v-for="item in days[activeDay].items"
              :key="item.time"
              class="flex gap-4 p-4 rounded-xl border transition-colors"
              :class="rowClass(item.type)"
            >
              <!-- Time -->
              <div class="flex-shrink-0 w-16 text-right pt-0.5">
                <span
                  class="font-mono font-semibold text-sm"
                  :class="item.type === 'break' ? 'text-slate-300' : 'text-primary'"
                >
                  {{ item.time }}
                </span>
              </div>

              <!-- Dot + line -->
              <div class="flex flex-col items-center pt-1 flex-shrink-0">
                <div class="w-2 h-2 rounded-full flex-shrink-0" :class="dotClass(item.type)"></div>
                <div class="w-px flex-1 bg-slate-100 mt-1"></div>
              </div>

              <!-- Content -->
              <div class="flex-1 pb-1 min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span
                    class="font-semibold text-sm"
                    :class="item.type === 'break' ? 'text-slate-400' : 'text-primary-darker'"
                  >
                    {{ item.title }}
                  </span>
                  <span
                    v-if="item.badge"
                    class="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
                    :class="badgeClass(item.type)"
                  >
                    {{ item.badge }}
                  </span>
                </div>
                <p v-if="item.detail" class="text-xs text-slate-400 mt-0.5 leading-snug">{{ item.detail }}</p>

                <!-- Parallel tracks -->
                <div v-if="item.tracks" class="grid sm:grid-cols-2 gap-2 mt-2.5">
                  <div
                    v-for="track in item.tracks"
                    :key="track.name"
                    class="bg-white border border-slate-100 rounded-lg px-3 py-2"
                  >
                    <div class="text-xs font-bold text-primary uppercase tracking-wide">{{ track.name }}</div>
                    <div class="text-[10px] text-slate-400 mt-0.5">{{ track.room }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <p class="text-center text-xs text-slate-400 mt-8">
        Full detailed programme will be published following acceptance notifications.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeDay = ref(0)

type TrackItem = { name: string; room: string }
type ScheduleItem = {
  time: string
  title: string
  type: string
  badge?: string
  detail?: string
  tracks?: TrackItem[]
}

const days: { label: string; date: string; items: ScheduleItem[] }[] = [
  {
    label: 'Day 1',
    date: 'Aug 5, 2026',
    items: [
      { time: '08:00', title: 'Registration & Welcome Refreshments', type: 'break' },
      { time: '09:00', title: 'Opening Ceremony', type: 'plenary', badge: 'Plenary', detail: 'Welcome address · Chief Guest speech · SLSTL President remarks' },
      { time: '10:00', title: 'Keynote Address I', type: 'keynote', badge: 'Keynote', detail: 'Prof. A. Placeholder — Digital Twins in Urban Transport Planning' },
      { time: '11:00', title: 'Coffee Break & Exhibition', type: 'break' },
      { time: '11:30', title: 'Technical Sessions — Block A', type: 'session', badge: 'Parallel', tracks: [
        { name: 'Track 1: Digital Logistics', room: 'Hall A' },
        { name: 'Track 2: Sustainable Transport', room: 'Hall B' },
      ]},
      { time: '13:00', title: 'Lunch Break & Networking', type: 'break' },
      { time: '14:00', title: 'Keynote Address II', type: 'keynote', badge: 'Keynote', detail: 'Dr. B. Placeholder — AI-Driven Supply Chain Resilience' },
      { time: '15:00', title: 'Technical Sessions — Block B', type: 'session', badge: 'Parallel', tracks: [
        { name: 'Track 3: Maritime Logistics', room: 'Hall A' },
        { name: 'Track 4: Urban Mobility', room: 'Hall B' },
      ]},
      { time: '17:30', title: 'Day 1 Closing & Gala Dinner', type: 'social', badge: 'Evening' },
    ],
  },
  {
    label: 'Day 2',
    date: 'Aug 6, 2026',
    items: [
      { time: '08:30', title: 'Morning Refreshments', type: 'break' },
      { time: '09:00', title: 'Keynote Address III', type: 'keynote', badge: 'Keynote', detail: 'Prof. C. Placeholder — Green Shipping and Decarbonisation' },
      { time: '10:00', title: 'Panel Discussion: Industry Insights', type: 'plenary', badge: 'Panel', detail: 'Industry leaders on challenges, disruption, and opportunity' },
      { time: '11:00', title: 'Coffee Break', type: 'break' },
      { time: '11:30', title: 'Technical Sessions — Block C', type: 'session', badge: 'Parallel', tracks: [
        { name: 'Track 5: Supply Chain', room: 'Hall A' },
        { name: 'Track 6: Aviation & Air Cargo', room: 'Hall B' },
      ]},
      { time: '13:00', title: 'Lunch Break', type: 'break' },
      { time: '14:00', title: 'Workshop: Transport Data Analytics', type: 'workshop', badge: 'Workshop', detail: 'Hands-on session with industry datasets and analytical tools' },
      { time: '16:00', title: 'Poster Session & Exhibition', type: 'social', badge: 'Exhibition' },
      { time: '18:00', title: 'Cultural Evening', type: 'social', badge: 'Evening' },
    ],
  },
  {
    label: 'Day 3',
    date: 'Aug 7, 2026',
    items: [
      { time: '08:30', title: 'Morning Refreshments', type: 'break' },
      { time: '09:00', title: 'Keynote Address IV', type: 'keynote', badge: 'Keynote', detail: 'Prof. F. Placeholder — Sustainable Urban Mobility Transitions' },
      { time: '10:00', title: 'Technical Sessions — Block D', type: 'session', badge: 'Parallel', tracks: [
        { name: 'Track 7: Policy & Economics', room: 'Hall A' },
        { name: 'Track 8: Emerging Technologies', room: 'Hall B' },
      ]},
      { time: '11:30', title: 'Coffee Break', type: 'break' },
      { time: '12:00', title: 'Best Paper Awards Ceremony', type: 'plenary', badge: 'Award', detail: 'Recognising outstanding contributions across all tracks' },
      { time: '13:00', title: 'Lunch Break', type: 'break' },
      { time: '14:00', title: 'Closing Panel: Future of Transport in Asia', type: 'plenary', badge: 'Closing Panel' },
      { time: '15:30', title: 'Closing Ceremony & R4TLI 2027 Announcement', type: 'plenary', badge: 'Closing' },
      { time: '16:00', title: 'Conference Ends', type: 'break' },
    ],
  },
]

function rowClass(type: string) {
  if (type === 'break')    return 'bg-slate-50/60 border-slate-50'
  if (type === 'keynote')  return 'bg-accent/5 border-accent/20'
  if (type === 'plenary')  return 'bg-primary/5 border-primary/10'
  if (type === 'workshop') return 'bg-purple-50 border-purple-100'
  if (type === 'social')   return 'bg-green-50/60 border-green-100'
  return 'bg-white border-slate-100'
}

function dotClass(type: string) {
  if (type === 'break')    return 'bg-slate-200'
  if (type === 'keynote')  return 'bg-accent'
  if (type === 'plenary')  return 'bg-primary'
  if (type === 'workshop') return 'bg-purple-400'
  if (type === 'social')   return 'bg-green-400'
  return 'bg-primary/40'
}

function badgeClass(type: string) {
  if (type === 'keynote')  return 'bg-accent/20 text-accent-darker'
  if (type === 'plenary')  return 'bg-primary/15 text-primary-dark'
  if (type === 'workshop') return 'bg-purple-100 text-purple-700'
  if (type === 'social')   return 'bg-green-100 text-green-700'
  return 'bg-slate-100 text-slate-500'
}
</script>
