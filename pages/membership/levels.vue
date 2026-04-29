<template>
  <div>
    <InnerPageHero title="Membership Levels & Criteria" subtitle="The membership of the Society shall comprise six categories." parent="Membership" parent-href="/membership" />

    <section class="py-16 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">

        <!-- Membership Categories -->
        <div>
          <h2 class="font-display font-black text-2xl text-primary-darker mb-2">The Membership of the Society Shall Comprise with Six (6) Categories as Listed Below;</h2>
          <div class="w-16 h-1 bg-accent rounded-full mb-8"></div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="cat in categories" :key="cat.name" class="card p-6 flex gap-4">
              <div class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <component :is="cat.icon" :size="18" class="text-primary" />
              </div>
              <div>
                <h3 class="font-display font-bold text-primary-darker text-base mb-1">{{ cat.name }}</h3>
                <p class="text-slate-500 text-sm leading-relaxed">{{ cat.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Membership Criteria Table -->
        <div>
          <h2 class="font-display font-black text-2xl text-primary-darker mb-2">Membership Criteria</h2>
          <div class="w-16 h-1 bg-accent rounded-full mb-3"></div>
          <p class="text-slate-500 text-sm mb-6">The qualification for membership will be as follows. <em>Table 1: Membership Eligibility Criteria</em></p>

          <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-primary text-white">
                  <th class="text-left px-5 py-3.5 font-display font-bold w-36">Membership</th>
                  <th class="text-left px-5 py-3.5 font-display font-bold">Academic Qualification</th>
                  <th class="text-left px-5 py-3.5 font-display font-bold">Professional Experience</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white">
                <tr v-for="row in criteriaRows" :key="row.type" class="align-top hover:bg-slate-50 transition-colors">
                  <td class="px-5 py-4 font-display font-bold text-primary-darker whitespace-nowrap">{{ row.type }}</td>
                  <td class="px-5 py-4 text-slate-600 leading-relaxed">
                    <span v-html="row.academic"></span>
                  </td>
                  <td class="px-5 py-4 text-slate-600 leading-relaxed">
                    <span v-html="row.experience"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Notes -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <h2 class="font-display font-black text-xl text-primary-darker mb-6">Notes to be Read with Membership Criteria:</h2>
          <ol class="space-y-4 text-sm text-slate-600 leading-relaxed list-none">
            <li v-for="(note, i) in notes" :key="i" class="flex gap-3">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5">{{ i + 1 }}</span>
              <span>{{ note }}</span>
            </li>
          </ol>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { GraduationCap, Users, Award, Star, Heart, Crown } from 'lucide-vue-next'
useHead({ title: 'Membership Levels & Criteria — SLSTL' })

const categories = [
  {
    name: 'Graduate Student Membership',
    icon: GraduationCap,
    desc: 'For students enrolled in postgraduate studies leading to a qualification in transport and logistics with a research component.',
  },
  {
    name: 'Associate Membership',
    icon: Users,
    desc: 'For persons who have relevant qualifications and are engaged in the profession of transport and logistics.',
  },
  {
    name: 'Regular Membership',
    icon: Award,
    desc: 'For persons who have obtained relevant post-graduate qualifications and have demonstrated professional leadership in the practice of transport and logistics.',
  },
  {
    name: 'Fellow',
    icon: Star,
    desc: 'For persons who have excelled as regular members for a stipulated period and are professionally recognized as being eminent within the transport & logistics industry in Sri Lanka.',
  },
  {
    name: 'Life Membership',
    icon: Heart,
    desc: 'For any person who has achieved Regular or Fellow memberships and having functioned as an active member for a stipulated period, may be deemed by the Board worthy of the distinction of being admitted as a life member of the Society.',
  },
  {
    name: 'Honorary Membership',
    icon: Crown,
    desc: 'For a graduate who may be deemed by the Board worthy of the distinction of being an honorary member of the Society and likely to promote the objectives of the Society and invited by the Board to become an honorary member.',
  },
]

const criteriaRows = [
  {
    type: 'Student Member',
    academic: 'A person who is engaged in formal postgraduate studies with a research component in transport and logistics <em>(Refer to Note a)</em>',
    experience: 'Nil',
  },
  {
    type: 'Associate Member',
    academic: 'A graduate (SLQF L9) or higher who has obtained postgraduate qualifications in transport and logistics at SLQF L9 or higher',
    experience: 'Nil',
  },
  {
    type: 'Regular Member',
    academic: 'A person who has obtained academic or professional qualifications in transport and logistics <em>(Refer to Notes 2 and 3)</em>',
    experience: 'Having at least three years of professional leadership in the practice of transport and logistics and is judged to have achieved professional leadership within the transport & logistics industry <em>(Refer to Note 4)</em>',
  },
  {
    type: 'Fellow',
    academic: 'A graduate (SLQF 5 or higher) who has obtained recognized postgraduate qualifications in transport and logistics at SLQF L9 or higher',
    experience: 'Having at least fifteen years of experience in T&L; having excelled as a <strong>Regular Member</strong> for at least six years and having functioned as an active member including committee member and office bearer for at least three years and is judged to have achieved professional esteem within the transport & logistics sector <em>(Refer to Note 4)</em>',
  },
  {
    type: 'Life Member',
    academic: 'A graduate (SLQF 5 or higher) who has obtained recognized postgraduate qualifications in transport and logistics at SLQF L9 or higher',
    experience: 'After at least twenty years of being a <strong>Regular Member or a Fellow Member</strong> and having functioned as an active member including being a committee member and office bearer for at least three years, retired and as may be judged by the Board to be considered worthy of the distinction of being a life member of the Society.',
  },
  {
    type: 'Honorary Member',
    academic: 'A degree or full professional qualification (at SLQF L9 or higher in transport or logistics or in a relevant field)',
    experience: 'A person who is not a member of the Society is deemed by the Board to be likely to promote the objectives of the Society and is <strong>invited</strong> by the Board to be an honorary member having so assessed after a well-received public address to the members.',
  },
]

const notes = [
  'Transport & Logistics will be interpreted as referring to any or more of the areas of aviation, public transport, land transport, freight transport, maritime transport, warehousing and supply chain management. Support areas of Information and Communication Technology, Economics, Engineering, Physical Sciences, Management, Mathematics may also be considered as applicable on as the case may be.',
  'An academic qualification constitutes a three-year degree (SLQF L9) or higher from a recognized university from a field within the areas of transport and logistics.',
  'A recognized professional qualification in transport & logistics obtained through an examined course of studies equivalent to a 3-year degree or SLQF L9 or above.',
  'The demonstration of professional leadership should be based on a (i) written report on leadership experiences and contributions, (ii) a presentation on a key knowledge area and (iii) viva voce interview conducted by a panel appointed for such examination.',
  'The demonstration of professional esteem should be based on a (i) written report on the professional achievements, (ii) two letters of reference from supervisors, (iii) a presentation followed by a discussion on a research finding or innovation implemented in practice and (iii) viva voce interview conducted by a panel appointed for such examination.',
  'For the first five years after this rule comes into the operation, the period of experience in each membership category may be waived off in consideration to the equitable level of membership held in other recognized professional bodies if the path by which such membership was obtained satisfies the eligibility for Regular Membership of the Society as given above.',
]
</script>
