<template>
  <div>
    <InnerPageHero title="Our Objectives" subtitle="The core goals that guide SLSTL's work and mission." parent="Home" parent-href="/" />
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <span class="section-tag">Strategic Goals</span>
        <h2 class="section-heading mb-10">What We Aim to Achieve</h2>
        <div class="space-y-4">
          <div v-for="(obj, i) in objectives" :key="i" class="card p-6 flex gap-5 items-start">
            <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 text-white font-display font-black text-sm">
              {{ String(i + 1).padStart(2, '0') }}
            </div>
            <div>
              <h3 class="font-display font-bold text-primary-darker">{{ obj.title }}</h3>
              <p class="text-slate-500 text-sm mt-1 leading-relaxed">{{ obj.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Our Objectives — SLSTL' })

const objectives = [
  { title: 'Advance Transport & Logistics Research',        desc: 'Foster and disseminate high-quality academic and applied research that addresses real challenges in transport and logistics across Sri Lanka and South Asia.' },
  { title: 'Bridge Academia and Industry',                  desc: 'Create meaningful platforms for knowledge exchange between researchers, practitioners, and policymakers to translate research into practice.' },
  { title: 'Develop Professional Competence',              desc: 'Provide continuing education, workshops, and professional development opportunities to enhance the skills of transport and logistics professionals.' },
  { title: 'Influence Policy and Practice',                 desc: 'Engage with government and regulatory bodies to inform transport policy, infrastructure planning, and logistics frameworks with evidence-based research.' },
  { title: 'Build International Partnerships',             desc: 'Establish and strengthen collaborations with international academic and professional organisations to enhance the global profile of Sri Lankan research.' },
  { title: 'Promote Sustainable Mobility',                 desc: 'Advocate for sustainable, inclusive, and technologically advanced transport and logistics solutions that support economic development and environmental goals.' },
  { title: 'Recognise Excellence',                         desc: 'Celebrate and reward outstanding research and professional contributions through awards, fellowships, and recognition programmes.' },
]
</script>
