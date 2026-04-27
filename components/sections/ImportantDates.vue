<template>
  <section id="dates" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <span class="section-tag">Key Deadlines</span>
        <h2 class="section-heading">Important Dates</h2>
        <p class="section-subtext mx-auto">
          Mark your calendar — plan your submission and registration around these critical deadlines.
        </p>
      </div>

      <!-- Date cards grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(item, i) in dates"
          :key="item.title"
          class="reveal group"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <div
            class="bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col"
            :class="item.status === 'active'
              ? 'border-accent shadow-md shadow-accent/15 ring-1 ring-accent/30'
              : item.status === 'past'
                ? 'border-slate-100 opacity-70'
                : 'border-slate-100'"
          >
            <!-- Card top band with icon -->
            <div
              class="px-5 py-4 flex items-center justify-between"
              :class="item.status === 'active'
                ? 'bg-accent/10'
                : item.status === 'past'
                  ? 'bg-slate-50'
                  : 'bg-primary/6'"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-9 h-9 rounded-xl flex items-center justify-center"
                  :class="item.status === 'active'
                    ? 'bg-accent/25'
                    : item.status === 'past'
                      ? 'bg-slate-200'
                      : 'bg-primary/15'"
                >
                  <component
                    :is="item.icon"
                    :size="16"
                    :class="item.status === 'active'
                      ? 'text-accent-darker'
                      : item.status === 'past'
                        ? 'text-slate-400'
                        : 'text-primary'"
                  />
                </div>
                <span
                  class="text-[10px] font-bold uppercase tracking-widest"
                  :class="item.status === 'active'
                    ? 'text-accent-darker'
                    : item.status === 'past'
                      ? 'text-slate-400'
                      : 'text-primary/70'"
                >
                  {{ item.category }}
                </span>
              </div>

              <!-- Status pill -->
              <span
                class="text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide"
                :class="pillClass(item.status)"
              >
                {{ item.statusLabel }}
              </span>
            </div>

            <!-- Card body -->
            <div class="p-5 flex flex-col flex-1">
              <h3 class="font-display font-bold text-primary-darker text-sm leading-snug">
                {{ item.title }}
              </h3>
              <p class="text-slate-400 text-xs mt-2 leading-relaxed flex-1">
                {{ item.desc }}
              </p>

              <!-- Date -->
              <div
                class="flex items-center gap-2 mt-4 pt-4 border-t"
                :class="item.status === 'active' ? 'border-accent/20' : 'border-slate-100'"
              >
                <CalendarDays
                  :size="14"
                  :class="item.status === 'active' ? 'text-accent-darker' : 'text-primary'"
                />
                <span
                  class="font-bold text-sm"
                  :class="item.status === 'active' ? 'text-accent-darker' : 'text-primary-dark'"
                >
                  {{ item.date }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom note -->
      <p class="text-center text-slate-400 text-xs mt-10 reveal">
        All deadlines are at <span class="font-semibold">23:59 Sri Lanka Standard Time (UTC+5:30)</span>.
        Dates are subject to change — check back regularly.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  CalendarDays, FileText, CheckCircle2, Edit3, CreditCard, Mic,
} from 'lucide-vue-next'

const dates = [
  {
    title: 'Abstract Submission Opens',
    desc: 'Portal opens for optional extended abstract submissions (300 words max). Early feedback available.',
    date: 'January 15, 2026',
    category: 'Submission',
    status: 'past',
    statusLabel: 'Closed',
    icon: Edit3,
  },
  {
    title: 'Full Paper Submission Deadline',
    desc: 'Submit your complete manuscript — maximum 8 pages, IEEE two-column format via the online portal.',
    date: 'March 31, 2026',
    category: 'Submission',
    status: 'active',
    statusLabel: 'Open Now',
    icon: FileText,
  },
  {
    title: 'Acceptance Notification',
    desc: 'Authors notified of review outcomes by the Technical Programme Committee via email.',
    date: 'May 15, 2026',
    category: 'Review',
    status: 'upcoming',
    statusLabel: 'Upcoming',
    icon: CheckCircle2,
  },
  {
    title: 'Camera-Ready Submission',
    desc: 'Final revised paper plus completed IEEE copyright form must be submitted by this date.',
    date: 'June 15, 2026',
    category: 'Submission',
    status: 'upcoming',
    statusLabel: 'Upcoming',
    icon: Edit3,
  },
  {
    title: 'Early Bird Registration Closes',
    desc: 'Last date for discounted registration fees. Save up to LKR 5,000 on delegate passes.',
    date: 'June 30, 2026',
    category: 'Registration',
    status: 'upcoming',
    statusLabel: 'Upcoming',
    icon: CreditCard,
  },
  {
    title: 'Conference Days',
    desc: 'Three days of keynote sessions, technical tracks, workshops, and networking events.',
    date: 'August 5–7, 2026',
    category: 'Conference',
    status: 'conference',
    statusLabel: 'Main Event',
    icon: Mic,
  },
]

function pillClass(status: string) {
  if (status === 'past')       return 'bg-slate-100 text-slate-400'
  if (status === 'active')     return 'bg-accent text-primary-darker'
  if (status === 'conference') return 'bg-primary text-white'
  return 'bg-primary/10 text-primary-dark'
}
</script>
