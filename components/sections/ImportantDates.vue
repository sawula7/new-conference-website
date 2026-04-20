<template>
  <section id="dates" class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="section-tag">Key Deadlines</span>
        <h2 class="section-heading">Important Dates</h2>
        <p class="section-subtext mx-auto">
          Mark your calendar — plan your submission and registration around these critical dates.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical spine -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2"></div>

        <div class="space-y-8">
          <div
            v-for="(item, i) in dates"
            :key="item.title"
            class="relative reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <!-- Dot on spine -->
            <div
              class="absolute left-6 md:left-1/2 -translate-x-1/2 mt-6 w-3.5 h-3.5 rounded-full border-2 border-white z-10 ring-4"
              :class="dotClass(item.status)"
            ></div>

            <!-- Card — alternates sides on md+ -->
            <div
              class="ml-14 md:ml-0 md:w-[calc(50%-2.5rem)]"
              :class="i % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'"
            >
              <div
                class="card p-5 relative"
                :class="item.status === 'active'
                  ? 'border-accent shadow-md shadow-accent/15 ring-1 ring-accent/30'
                  : item.status === 'past' ? 'opacity-55' : ''"
              >
                <!-- Status pill -->
                <span
                  class="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                  :class="pillClass(item.status)"
                >
                  {{ item.statusLabel }}
                </span>

                <h3 class="font-display font-bold text-primary-darker text-sm mt-2">{{ item.title }}</h3>
                <p class="text-slate-400 text-xs mt-1 leading-relaxed">{{ item.desc }}</p>

                <div class="flex items-center gap-1.5 mt-3">
                  <CalendarDays :size="12" class="text-primary" />
                  <span class="font-semibold text-primary text-sm">{{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'

const dates = [
  {
    title: 'Abstract Submission Opens',
    desc: 'Portal opens for optional abstract submissions (300 words max)',
    date: 'January 15, 2026',
    status: 'past',
    statusLabel: 'Open',
  },
  {
    title: 'Full Paper Submission Deadline',
    desc: 'Submit your complete manuscript — maximum 8 pages, IEEE two-column format',
    date: 'March 31, 2026',
    status: 'active',
    statusLabel: 'Upcoming',
  },
  {
    title: 'Acceptance Notification',
    desc: 'Authors notified of review outcomes by the technical programme committee',
    date: 'May 15, 2026',
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
  {
    title: 'Camera-Ready Submission',
    desc: 'Final revised paper plus completed IEEE copyright form',
    date: 'June 15, 2026',
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
  {
    title: 'Early Bird Registration Closes',
    desc: 'Last date for discounted registration — save up to LKR 5,000',
    date: 'June 30, 2026',
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
  {
    title: 'Conference Days',
    desc: 'Three days of keynotes, technical sessions, workshops, and networking',
    date: 'August 5–7, 2026',
    status: 'upcoming',
    statusLabel: 'Conference',
  },
]

function dotClass(status: string) {
  if (status === 'past')   return 'bg-slate-300 ring-slate-100'
  if (status === 'active') return 'bg-accent ring-accent/20'
  return 'bg-primary ring-primary/15'
}

function pillClass(status: string) {
  if (status === 'past')   return 'bg-slate-100 text-slate-400'
  if (status === 'active') return 'bg-accent/20 text-accent-darker'
  if (status === 'upcoming' ) return 'bg-primary/10 text-primary-dark'
  return 'bg-green-100 text-green-700'
}
</script>
