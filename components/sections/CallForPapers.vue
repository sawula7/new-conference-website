<template>
  <section id="cfp" class="py-24 bg-primary-darker relative overflow-hidden">
    <!-- Decorative bg elements -->
    <div class="absolute inset-0 grid-pattern opacity-25 pointer-events-none"></div>
    <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 -left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Main CFP -->
        <div class="reveal">
          <span class="inline-block text-sm font-bold text-accent uppercase tracking-[0.15em] mb-4">
            Call for Papers
          </span>
          <h2 class="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            Submit Your Research<br>to R4TLI 2026
          </h2>
          <p class="text-white/65 mt-4 leading-relaxed text-sm">
            We invite original, unpublished research contributions across all areas of transport
            and logistics. Accepted papers will be published in the conference proceedings and
            submitted for indexing in <strong class="text-white/80">Scopus / IEEE Xplore</strong>.
          </p>

          <!-- Submission types -->
          <div class="space-y-3 mt-8">
            <div
              v-for="type in submissionTypes"
              :key="type.name"
              class="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div class="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <component :is="type.icon" :size="18" class="text-accent" />
              </div>
              <div>
                <p class="font-semibold text-white text-sm">{{ type.name }}</p>
                <p class="text-white/50 text-xs mt-0.5">{{ type.desc }}</p>
              </div>
            </div>
          </div>

          <!-- CTA buttons -->
          <div class="flex flex-wrap gap-4 mt-8">
            <a href="#" class="btn-accent">
              <ExternalLink :size="16" />
              Submit via EasyChair
            </a>
            <a href="#" class="btn-outline-white">
              <Download :size="16" />
              Download CFP (PDF)
            </a>
          </div>
        </div>

        <!-- Right: Guidelines card -->
        <div class="reveal reveal-delay-2">
          <div class="bg-white/5 border border-white/12 rounded-2xl p-7">
            <h3 class="font-display font-bold text-white text-lg mb-6 flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <FileText :size="16" class="text-accent" />
              </div>
              Submission Guidelines
            </h3>

            <div class="space-y-5">
              <div v-for="g in guidelines" :key="g.title">
                <div class="flex items-center gap-2 mb-1">
                  <component :is="g.icon" :size="13" class="text-accent flex-shrink-0" />
                  <span class="font-semibold text-white/85 text-sm">{{ g.title }}</span>
                </div>
                <p class="text-white/50 text-xs pl-5 leading-relaxed">{{ g.detail }}</p>
              </div>
            </div>

            <!-- Deadline highlight -->
            <div class="border-t border-white/10 mt-7 pt-6">
              <p class="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">
                Submission Deadline
              </p>
              <p class="font-display font-black text-3xl text-white">March 31, 2026</p>
              <p class="text-white/40 text-xs mt-1">11:59 PM Sri Lanka Standard Time (GMT+5:30)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, File, BookOpen, AlignLeft, Globe, Award, Users, ExternalLink, Download } from 'lucide-vue-next'

const submissionTypes = [
  {
    icon: FileText,
    name: 'Full Paper',
    desc: '6–8 pages in IEEE two-column format. Complete research with methodology, results, and conclusion.',
  },
  {
    icon: File,
    name: 'Extended Abstract',
    desc: '2–3 pages. Work-in-progress or preliminary research findings suitable for poster presentation.',
  },
  {
    icon: BookOpen,
    name: 'Review Paper',
    desc: '6–8 pages. Comprehensive literature review covering a specific topic in transport/logistics.',
  },
]

const guidelines = [
  { icon: AlignLeft, title: 'Template',        detail: 'IEEE two-column conference template — LaTeX preferred, Word accepted' },
  { icon: FileText,  title: 'Page Limit',      detail: 'Maximum 8 pages including references, figures, and tables' },
  { icon: Users,     title: 'Review Process',  detail: 'Double-blind peer review by minimum two independent reviewers' },
  { icon: Globe,     title: 'Language',        detail: 'English only — all text, figures, and captions must be in English' },
  { icon: Award,     title: 'Publication',     detail: 'Accepted papers submitted for Scopus and IEEE Xplore indexing' },
]
</script>
