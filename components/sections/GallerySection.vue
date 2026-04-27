<template>
  <section id="gallery" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <span class="section-tag">Moments &amp; Memories</span>
        <h2 class="section-heading">Conference Gallery</h2>
        <p class="section-subtext mx-auto">
          A glimpse into the vibrant atmosphere of past R4TLI conferences — the sessions, the people, and the connections.
        </p>
      </div>

      <!-- Photo grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <div
          v-for="(photo, i) in photos"
          :key="photo.id"
          class="relative overflow-hidden rounded-xl cursor-pointer group reveal"
          :class="[
            photo.wide ? 'col-span-2' : '',
            photo.tall ? 'row-span-2' : '',
            `reveal-delay-${(i % 4) + 1}`,
          ]"
        >
          <!-- Placeholder gradient tile simulating a photo -->
          <div
            class="w-full aspect-video"
            :class="photo.wide ? 'md:aspect-[2.1/1]' : 'aspect-video'"
          >
            <div
              class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              :style="{ background: photo.gradient }"
            ></div>

            <!-- Subtle noise texture overlay -->
            <div class="absolute inset-0 opacity-20 mix-blend-overlay"
              style="background-image: url(data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%20opacity%3D%221%22/%3E%3C/svg%3E)">
            </div>

            <!-- Decorative pattern overlay -->
            <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px); background-size: 24px 24px;"></div>

            <!-- Content in center -->
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="font-display font-black text-white/30 text-4xl md:text-5xl tracking-tight leading-none">
                {{ photo.year }}
              </span>
              <span class="text-white/20 text-xs font-bold uppercase tracking-widest mt-1">R4TLI</span>
            </div>

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
              <p class="text-white font-bold text-sm leading-tight">R4TLI {{ photo.year }}</p>
              <p class="text-white/70 text-xs mt-0.5">{{ photo.caption }}</p>
              <div class="flex items-center gap-1 mt-2 text-accent text-xs font-semibold">
                <ImageIcon :size="11" />
                {{ photo.count }} photos
              </div>
            </div>

            <!-- Edition badge on corner -->
            <div class="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white/80 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
              {{ photo.edition }}th Ed.
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 reveal">
        <a
          href="#editions"
          class="btn-outline-primary text-sm"
          @click.prevent="scrollTo('#editions')"
        >
          <BookOpen :size="15" />
          View All Previous Editions
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ImageIcon, BookOpen } from 'lucide-vue-next'

const photos = [
  {
    id: 1,
    year: '2024',
    edition: 10,
    caption: 'Colombo, Sri Lanka · 85 papers',
    count: 42,
    wide: true,
    tall: false,
    gradient: 'linear-gradient(135deg, #0a3d52 0%, #1786a5 60%, #1a96ba 100%)',
  },
  {
    id: 2,
    year: '2023',
    edition: 9,
    caption: 'Colombo, Sri Lanka · 78 papers',
    count: 38,
    wide: false,
    tall: false,
    gradient: 'linear-gradient(135deg, #0d5f7e 0%, #259cc0 100%)',
  },
  {
    id: 3,
    year: '2021',
    edition: 8,
    caption: 'Virtual Conference · 92 papers',
    count: 31,
    wide: false,
    tall: false,
    gradient: 'linear-gradient(135deg, #137089 0%, #4ab5d4 100%)',
  },
  {
    id: 4,
    year: '2020',
    edition: 7,
    caption: 'Colombo, Sri Lanka · 67 papers',
    count: 29,
    wide: false,
    tall: false,
    gradient: 'linear-gradient(135deg, #0f5a70 0%, #1786a5 100%)',
  },
  {
    id: 5,
    year: '2019',
    edition: 6,
    caption: 'Colombo, Sri Lanka · 72 papers',
    count: 35,
    wide: false,
    tall: false,
    gradient: 'linear-gradient(135deg, #a07a0c 0%, #f0c040 100%)',
  },
  {
    id: 6,
    year: '2018',
    edition: 5,
    caption: 'Colombo, Sri Lanka · 61 papers',
    count: 27,
    wide: false,
    tall: false,
    gradient: 'linear-gradient(135deg, #c49a10 0%, #d4a520 60%, #f4d83c 100%)',
  },
  {
    id: 7,
    year: '2017',
    edition: 4,
    caption: 'Colombo, Sri Lanka · 55 papers',
    count: 24,
    wide: false,
    tall: false,
    gradient: 'linear-gradient(135deg, #0a3d52 0%, #0d5f7e 50%, #1786a5 100%)',
  },
  {
    id: 8,
    year: '2016',
    edition: 3,
    caption: 'Colombo, Sri Lanka · 48 papers',
    count: 21,
    wide: false,
    tall: false,
    gradient: 'linear-gradient(135deg, #a87d15 0%, #f0c040 100%)',
  },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
