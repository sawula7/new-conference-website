<template>
  <section id="venue" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="section-tag">Location</span>
        <h2 class="section-heading">Conference Venue</h2>
        <p class="section-subtext mx-auto">
          R4TLI 2026 will be held in Colombo, Sri Lanka — a vibrant hub connecting South and Southeast Asia.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Map placeholder -->
        <div class="reveal">
          <div class="aspect-[4/3] bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl overflow-hidden relative">
            <!-- Stylised map grid -->
            <div
              class="absolute inset-0 opacity-30"
              style="background-image: linear-gradient(rgba(23,134,165,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(23,134,165,0.3) 1px, transparent 1px); background-size: 30px 30px;"
            ></div>
            <!-- Roads simulation -->
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-8">
              <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <MapPin :size="32" class="text-primary" />
              </div>
              <div>
                <p class="font-display font-bold text-primary-darker text-lg">Colombo, Sri Lanka</p>
                <p class="text-slate-500 text-sm mt-1">Exact venue to be announced shortly</p>
                <p class="text-slate-400 text-xs mt-2">
                  The venue will be a premier conference facility in the Colombo city centre
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Colombo,Sri+Lanka"
                target="_blank"
                rel="noopener"
                class="btn-primary text-sm py-2 px-4"
              >
                <MapPin :size="14" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <!-- Venue details -->
        <div class="reveal reveal-delay-2 space-y-5">
          <!-- Venue card -->
          <div class="card p-5">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building2 :size="18" class="text-primary" />
              </div>
              <div>
                <h3 class="font-display font-bold text-primary-darker">Conference Venue</h3>
                <p class="text-slate-500 text-sm mt-1">To be announced — follow SLSTL for updates</p>
                <p class="text-slate-400 text-xs mt-1">Colombo, Western Province, Sri Lanka</p>
                <a
                  href="https://slstl.lk"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1 text-primary text-xs font-medium hover:underline mt-2"
                >
                  Check slstl.lk for announcements
                  <ExternalLink :size="11" />
                </a>
              </div>
            </div>
          </div>

          <!-- Getting there -->
          <div class="card p-5">
            <h3 class="font-display font-semibold text-primary-darker text-sm mb-4 flex items-center gap-2">
              <Navigation :size="15" class="text-primary" />
              Getting There
            </h3>
            <div class="space-y-3">
              <div
                v-for="t in transport"
                :key="t.label"
                class="flex items-start gap-3"
              >
                <div class="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                  <component :is="t.icon" :size="13" class="text-slate-400" />
                </div>
                <div>
                  <p class="font-semibold text-sm text-slate-700">{{ t.label }}</p>
                  <p class="text-slate-400 text-xs mt-0.5">{{ t.detail }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Hotels -->
          <div class="card p-5">
            <h3 class="font-display font-semibold text-primary-darker text-sm mb-4 flex items-center gap-2">
              <Hotel :size="15" class="text-primary" />
              Nearby Hotels
            </h3>
            <div class="space-y-2.5">
              <div
                v-for="hotel in hotels"
                :key="hotel.name"
                class="flex items-center justify-between"
              >
                <div class="flex items-center gap-2">
                  <span class="text-sm text-slate-700 font-medium">{{ hotel.name }}</span>
                  <span class="text-accent text-xs">{{ '★'.repeat(hotel.stars) }}</span>
                </div>
                <span class="text-slate-400 text-xs">{{ hotel.distance }}</span>
              </div>
            </div>
            <p class="text-xs text-slate-400 mt-3 border-t border-slate-100 pt-3">
              * Negotiated conference rates available — contact organisers
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, Building2, Navigation, Hotel, Plane, Bus, Car, ExternalLink } from 'lucide-vue-next'

const transport = [
  {
    icon: Plane,
    label: 'From Bandaranaike International Airport (BIA)',
    detail: 'Approximately 40–60 min drive to Colombo city centre',
  },
  {
    icon: Bus,
    label: 'Public Transport',
    detail: 'SLTB and private bus services connect to the Colombo centre',
  },
  {
    icon: Car,
    label: 'Taxi / Ride-hailing',
    detail: 'PickMe and Uber available throughout Colombo 24/7',
  },
]

const hotels = [
  { name: 'Cinnamon Grand Colombo', stars: 5, distance: '~2.5 km' },
  { name: 'Galadari Hotel',          stars: 5, distance: '~3.0 km' },
  { name: 'Ramada Colombo',          stars: 4, distance: '~1.5 km' },
  { name: 'Hotel Janaki',            stars: 3, distance: '~1.2 km' },
  { name: 'Colombo City Hotel',      stars: 3, distance: '~0.8 km' },
]
</script>
