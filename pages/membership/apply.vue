<template>
  <div>
    <InnerPageHero title="How to Apply" subtitle="Follow these steps to become an SLSTL member." parent="Membership" parent-href="/membership" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="space-y-5 mb-12">
          <div v-for="(step, i) in steps" :key="i" class="card p-6 flex gap-5">
            <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 text-white font-display font-black text-sm">{{ i + 1 }}</div>
            <div>
              <h3 class="font-display font-bold text-primary-darker">{{ step.title }}</h3>
              <p class="text-slate-500 text-sm mt-1 leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
        <div class="card p-8 text-center">
          <h2 class="font-display font-bold text-primary-darker text-xl mb-3">Ready to Apply?</h2>
          <p class="text-slate-500 text-sm mb-6">Download the application form or apply online. For queries, contact the SLSTL secretariat.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn-primary"><Download :size="15" /> Download Application Form</button>
            <NuxtLink to="/contact" class="btn-outline-primary">Contact Secretariat</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Download } from 'lucide-vue-next'
useHead({ title: 'How to Apply — SLSTL Membership' })

const steps = [
  { title: 'Choose Your Membership Level',   desc: 'Review the membership categories and select the one that best matches your qualifications and career stage.' },
  { title: 'Prepare Your Documents',         desc: 'Gather your CV, academic certificates, professional references, and a recent passport-sized photograph.' },
  { title: 'Complete the Application Form',  desc: 'Fill in the SLSTL Membership Application Form (available for download below) accurately and completely.' },
  { title: 'Pay the Membership Fee',         desc: 'Submit the applicable annual membership fee via bank transfer or online payment to the SLSTL account.' },
  { title: 'Submit Your Application',        desc: 'Email the completed form and payment confirmation to the SLSTL secretariat at info@slstl.lk.' },
  { title: 'Await Approval',                 desc: 'The Executive Committee reviews applications at regular intervals. You will be notified of the outcome within 4 weeks.' },
]
</script>
