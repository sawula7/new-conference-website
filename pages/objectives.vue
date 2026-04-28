<template>
  <div>
    <InnerPageHero title="Our Objectives" subtitle="The core goals that guide SLSTL's work and mission." parent="Home" parent-href="/" />

    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <p class="text-slate-500 text-sm mb-8">The objectives of the Society shall be as follows:</p>

        <div class="grid lg:grid-cols-2 gap-x-12 gap-y-4">
          <ul class="space-y-4">
            <li v-for="obj in leftObjectives" :key="obj"
                class="flex items-start gap-3 text-slate-600 text-sm leading-relaxed text-justify">
              <span class="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
              <span>{{ obj }}</span>
            </li>
          </ul>
          <ul class="space-y-4">
            <li v-for="obj in rightObjectives" :key="obj"
                class="flex items-start gap-3 text-slate-600 text-sm leading-relaxed text-justify">
              <span class="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
              <span>{{ obj }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Our Objectives — SLSTL' })

const leftObjectives = [
  'To provide and maintain an active network of professionals engaged in transport and logistics for the promotion of continuing professional development that would contribute towards the progress of the transport & logistics industry in Sri Lanka;',
  'To promote, develop, provide, certify or accredit professional and educational study programs for members and non-members already engaged in or expecting to enter the transport & logistics industry in Sri Lanka;',
  'To encourage the financing, conduct, presentation, publication and other forms of dissemination of research, innovation, and development in transport & logistics;',
  'To establish linkages with other domestic, regional and international bodies with similar objectives;',
  'To hold conferences and meetings for the presentation and discussion of professional affairs, the reading of papers and the delivery of lectures for the benefit of members and non-members;',
  'To consider all public questions, issues and other related matters connected with transport & logistics industry in Sri Lanka and to advise and communicate with the relevant stakeholders including public authorities, regulators, providers and with individuals;',
  'To endeavor to provide a professional opinion on legislative and other measures affecting the transport & logistics industry in Sri Lanka;',
  'To collect and circulate statistics and other information relating to transport & logistics industry;',
  'To serve as a specialized body for the transport & logistics Industry for consultation by national, statutory and legislative bodies on issues of national significance;',
]

const rightObjectives = [
  'To exercise professional supervision over the members of the Society, to safeguard their interests and welfare, to further their advancement, and to promote whatsoever that may lead to the improvement of the status of transport & logistics professionals in general and the members of the Society in particular;',
  'To create a social forum for members and to provide members with information on career updates and job opportunities within and outside Sri Lanka;',
  'To establish utilizing its own resources or through external funding, Scholarships and/or Fellowships to help those who intend to follow careers in the transport & logistics industry;',
  'To prepare and maintain a register of professional practitioners engaged in transport & logistics;',
  'To accredit professionals and institutions engaged in the teaching, research, and practice of transport & logistics in Sri Lanka and to seek recognition of such accreditation from other international bodies;',
  'To grant the use of abbreviated designations for different professional categories of members and accredited institutions;',
  'To borrow or raise funds for the purposes of the Society and for that purpose or for securing funds for the performance or discharge of any obligation or liability of the Society or for any other purpose to create, execute, grant, or issue any mortgages, bonds or obligations of the Society and to pay off and re-borrow the funds secured thereby or any part or parts thereof;',
  'To purchase, dispose of, lease or deal with in any manner movable or immovable property for the Society;',
]
</script>
