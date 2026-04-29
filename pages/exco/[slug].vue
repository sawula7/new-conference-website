<template>
  <div>
    <InnerPageHero
      :title="`Exco Members ${labelMap[slug] ?? slug}`"
      subtitle="Executive committee members serving SLSTL for this term."
      parent="Exco Members"
      parent-href="/exco"
    />
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div v-if="members.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="member in members"
            :key="member.name"
            class="card p-6 text-center flex flex-col items-center"
          >
            <!-- Avatar with position number for officers -->
            <div
              class="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              :class="isOfficer(member.role) ? 'bg-primary text-white' : 'bg-primary/10 text-primary'"
            >
              <User :size="26" />
            </div>
            <h3 class="font-display font-bold text-primary-darker text-sm leading-snug">{{ member.name }}</h3>
            <span
              class="mt-1.5 inline-block text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
              :class="isOfficer(member.role)
                ? 'bg-primary/10 text-primary-darker'
                : 'bg-slate-100 text-slate-500'"
            >{{ member.role }}</span>
          </div>
        </div>
        <div v-else class="text-center py-16 text-slate-400">
          <p>No member data available for this term.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { User } from 'lucide-vue-next'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const labelMap: Record<string, string> = {
  '2019-2020': '2019/2020',
  '2018-2019': '2018/2019',
}

useHead({ title: computed(() => `Exco Members ${labelMap[slug.value] ?? slug.value} — SLSTL`) })

const excoData: Record<string, { name: string; role: string }[]> = {
  '2019-2020': [
    { name: 'Prof. Amal S. Kumarage',        role: 'President' },
    { name: 'Dr. T. L. Gunaruwan',           role: 'Vice President / Editor' },
    { name: 'Dr. T. Sivakumar',              role: 'Vice President / Conference' },
    { name: 'Dr. Lalith Edirisinghe',        role: 'Vice President / Events' },
    { name: 'Dr. Pradeepa Jayaratne',        role: 'Secretary' },
    { name: 'Eng. Nishal Samarasekera',      role: 'Treasurer' },
    { name: 'Dr. Niranga Amarasekera',       role: 'Assistant Secretary' },
    { name: 'Mr. Dhanushka Perera',          role: 'Assistant Treasurer' },
    { name: 'Mrs. Namalie Siyambalapitiya',  role: 'Committee Member' },
    { name: 'Ms. Uthpalee Hewage',           role: 'Committee Member' },
  ],
  '2018-2019': [
    { name: 'Dr. T. Sivakumar',              role: 'President' },
    { name: 'Prof. T. L. Gunaruwan',         role: 'Vice President / Editor' },
    { name: 'Dr. Pradeepa Jayaratne',        role: 'Vice President / Conference' },
    { name: 'Prof. Lalith Edirisinghe',      role: 'Vice President / Events' },
    { name: 'Mr. Dhanushka Perera',          role: 'Secretary' },
    { name: 'Dr. Niles Perera',              role: 'Treasurer' },
    { name: 'Ms. Bhagya Jeewanthi',          role: 'Assistant Secretary' },
    { name: 'Dr. Tissa Liyanage',            role: 'Committee Member' },
    { name: 'Dr. Amila B. Jayasinghe',       role: 'Committee Member' },
    { name: 'Eng. Janaka Weerawardena',      role: 'Committee Member' },
    { name: 'Mrs. Namalie Siyambalapitiya',  role: 'Committee Member' },
    { name: 'Ms. Uthpalee Hewage',           role: 'Committee Member' },
  ],
}

const members = computed(() => excoData[slug.value] ?? [])

function isOfficer(role: string) {
  return !role.toLowerCase().includes('committee member')
}
</script>
