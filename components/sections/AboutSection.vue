<template>
  <section id="about" class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Visual card -->
        <div class="reveal order-2 lg:order-1">
          <div class="relative max-w-lg mx-auto">
            <div class="aspect-square bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl overflow-hidden flex items-center justify-center relative">
              <div class="absolute inset-0 grid-pattern opacity-40 [filter:invert(1)]"></div>
              <!-- Central content -->
              <div class="relative z-10 text-center p-10">
                <div class="font-display font-black text-7xl text-primary leading-none tracking-tighter">
                  R4TLI
                </div>
                <div class="text-primary-dark font-bold text-lg mt-1">2026</div>
                <div class="w-16 h-1 bg-accent mx-auto my-5 rounded-full"></div>
                <p class="text-primary-dark font-medium text-sm leading-relaxed">
                  12th International Research Conference<br>for Transport &amp; Logistics Industry
                </p>
                <!-- Mini stats -->
                <div class="grid grid-cols-2 gap-3 mt-8">
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <div class="font-display font-black text-2xl text-primary-darker">300+</div>
                    <div class="text-xs text-slate-400 mt-0.5">Research Papers</div>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <div class="font-display font-black text-2xl text-primary-darker">45+</div>
                    <div class="text-xs text-slate-400 mt-0.5">Countries</div>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-sm">
                    <div class="font-display font-black text-2xl text-primary-darker">600+</div>
                    <div class="text-xs text-slate-400 mt-0.5">Attendees</div>
                  </div>
                  <div class="bg-accent/10 rounded-xl p-4">
                    <div class="font-display font-black text-2xl text-accent-darker">12th</div>
                    <div class="text-xs text-slate-400 mt-0.5">Annual Edition</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Decorative blobs -->
            <div class="absolute -top-5 -right-5 w-28 h-28 bg-accent/25 rounded-full blur-2xl pointer-events-none"></div>
            <div class="absolute -bottom-5 -left-5 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>

        <!-- Right: Text content -->
        <div class="reveal reveal-delay-2 order-1 lg:order-2">
          <span class="section-tag">About the Conference</span>
          <h2 class="section-heading">
            Advancing Transport &amp; Logistics Research Across Asia
          </h2>
          <p class="section-subtext">
            The R4TLI International Conference is Sri Lanka's premier academic forum
            for transport and logistics professionals, researchers, and policymakers.
          </p>
          <p class="text-slate-500 mt-4 leading-relaxed text-sm">
            Organised by the <strong class="text-primary-dark">Sri Lanka Society of Transport &amp; Logistics (SLSTL)</strong>,
            the conference brings together leading minds to present cutting-edge research, exchange knowledge,
            and forge lasting collaborations that advance the transport and logistics sector across
            South and Southeast Asia.
          </p>

          <!-- Highlights grid -->
          <div class="grid sm:grid-cols-2 gap-4 mt-8">
            <div
              v-for="h in highlights"
              :key="h.title"
              class="flex items-start gap-3"
            >
              <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <component :is="h.icon" :size="16" class="text-primary" />
              </div>
              <div>
                <p class="font-semibold text-slate-700 text-sm">{{ h.title }}</p>
                <p class="text-slate-400 text-xs mt-0.5">{{ h.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-wrap items-center gap-4 mt-10">
            <a href="#cfp" class="btn-primary" @click.prevent="scrollTo('#cfp')">
              <FileText :size="16" />
              Call for Papers
            </a>
            <a
              href="https://slstl.lk"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
            >
              About SLSTL
              <ExternalLink :size="13" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Globe, Users, Award, BookOpen, FileText, ExternalLink } from 'lucide-vue-next'

const highlights = [
  { icon: Globe,     title: 'International Reach',    desc: 'Participants from 45+ countries worldwide' },
  { icon: BookOpen,  title: 'Peer-Reviewed',           desc: 'Rigorous double-blind review process' },
  { icon: Award,     title: 'Best Paper Awards',       desc: 'Recognising outstanding research contributions' },
  { icon: Users,     title: 'Industry + Academia',     desc: 'Bridging research and real-world practice' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
