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

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, Building2, ExternalLink } from 'lucide-vue-next'
</script>
