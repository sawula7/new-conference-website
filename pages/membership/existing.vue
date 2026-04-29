<template>
  <div>
    <InnerPageHero
      title="Existing Members"
      subtitle="Directory of SLSTL members listed with their membership category and EAST membership ID."
      parent="Membership"
      parent-href="/membership"
    />

    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

        <!-- Search & filter -->
        <div class="flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <Search :size="15" class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              v-model="search"
              type="text"
              placeholder="Search by name or membership ID…"
              class="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition bg-white"
            />
          </div>
          <select v-model="categoryFilter"
                  class="text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary/60 bg-white text-slate-600">
            <option value="">All Categories</option>
            <option v-for="cat in categories" :key="cat">{{ cat }}</option>
          </select>
        </div>

        <!-- Member count -->
        <p class="text-slate-400 text-sm">Showing {{ filtered.length }} of {{ members.length }} members</p>

        <!-- Table -->
        <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-primary text-white">
                <th class="text-left px-5 py-3.5 font-display font-bold">SLSTL Membership ID</th>
                <th class="text-left px-5 py-3.5 font-display font-bold">Membership Category</th>
                <th class="text-left px-5 py-3.5 font-display font-bold">EAST Membership ID</th>
                <th class="text-left px-5 py-3.5 font-display font-bold">Name</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 bg-white">
              <tr v-for="m in filtered" :key="m.id"
                  class="hover:bg-slate-50 transition-colors">
                <td class="px-5 py-3 font-mono text-xs text-primary-darker font-semibold">{{ m.id }}</td>
                <td class="px-5 py-3">
                  <span class="inline-block text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                        :class="categoryClass(m.category)">
                    {{ m.category }}
                  </span>
                </td>
                <td class="px-5 py-3 font-mono text-xs text-slate-500">{{ m.eastId }}</td>
                <td class="px-5 py-3 font-medium text-slate-700">{{ m.name }}</td>
              </tr>
              <tr v-if="filtered.length === 0">
                <td colspan="4" class="px-5 py-10 text-center text-slate-400">No members match your search.</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'
useHead({ title: 'Existing Members — SLSTL' })

const search = ref('')
const categoryFilter = ref('')

const members = [
  { id: 'SLSTL-001', category: 'Regular Member', eastId: 'LK-14-19-0001', name: 'Prof Amal S Kumarage' },
  { id: 'SLSTL-002', category: 'Regular Member', eastId: 'LK-14-19-0002', name: 'Dr T Sivakumar' },
  { id: 'SLSTL-003', category: 'Regular Member', eastId: 'LK-14-19-0003', name: 'Dr T U Liyanage' },
  { id: 'SLSTL-004', category: 'Regular Member', eastId: 'LK-14-19-0004', name: 'Dr R Artibuwel' },
  { id: 'SLSTL-005', category: 'Regular Member', eastId: 'LK-14-19-0005', name: 'Eng U S S Dharmapriya' },
  { id: 'SLSTL-006', category: 'Regular Member', eastId: 'LK-14-19-0006', name: 'Eng N A Samarasekera' },
  { id: 'SLSTL-007', category: 'Regular Member', eastId: 'LK-14-19-0007', name: 'Dr H R Pasindu' },
  { id: 'SLSTL-008', category: 'Regular Member', eastId: 'LK-14-19-0008', name: 'Eng P T R S Sugathpadasa' },
  { id: 'SLSTL-009', category: 'Regular Member', eastId: 'LK-14-19-0009', name: 'Dr I M S Sathiyaprasad' },
  { id: 'SLSTL-010', category: 'Regular Member', eastId: 'LK-14-19-0010', name: 'Eng S N Bentotage' },
  { id: 'SLSTL-011', category: 'Regular Member', eastId: 'LK-14-19-0011', name: 'Dr T L Gunaruwan' },
  { id: 'SLSTL-012', category: 'Regular Member', eastId: 'LK-14-19-0012', name: 'Ms L D C S Layangani' },
  { id: 'SLSTL-013', category: 'Regular Member', eastId: 'LK-14-19-0013', name: 'Eng W J Weerawardena' },
  { id: 'SLSTL-014', category: 'Regular Member', eastId: 'LK-14-19-0014', name: 'Dr M D R P Jayaratne' },
  { id: 'SLSTL-015', category: 'Regular Member', eastId: 'LK-14-19-0015', name: 'Dr L C I Sigera' },
  { id: 'SLSTL-016', category: 'Regular Member', eastId: 'LK-14-19-0016', name: 'Dr A B Jayasinghe' },
  { id: 'SLSTL-017', category: 'Regular Member', eastId: 'LK-14-19-0017', name: 'Dr P Samaranayake' },
  { id: 'SLSTL-018', category: 'Regular Member', eastId: 'LK-14-19-0018', name: 'Dr E J Styger' },
  { id: 'SLSTL-019', category: 'Regular Member', eastId: 'LK-14-19-0019', name: 'Mr J A Q R Jayalath' },
  { id: 'SLSTL-020', category: 'Regular Member', eastId: 'LK-14-19-0020', name: 'Dr E K D L P Edirisinghe' },
  { id: 'SLSTL-021', category: 'Regular Member', eastId: 'LK-14-19-0021', name: 'Mr R N P Fernando' },
  { id: 'SLSTL-022', category: 'Regular Member', eastId: 'LK-14-19-0022', name: 'Dr S Kiridena' },
  { id: 'SLSTL-023', category: 'Regular Member', eastId: 'LK-14-19-0023', name: 'Prof S C Wirasinghe' },
  { id: 'SLSTL-024', category: 'Regular Member', eastId: 'LK-14-19-0024', name: 'Ms Thivya P Amalan' },
  { id: 'SLSTL-025', category: 'Regular Member', eastId: 'LK-14-19-0025', name: 'Dr A G T Sugathapala' },
  { id: 'SLSTL-026', category: 'Regular Member', eastId: 'LK-14-19-0026', name: 'Dr T M Rongasau' },
  { id: 'SLSTL-027', category: 'Regular Member', eastId: 'LK-14-19-0027', name: 'Dr G N Samarasekara' },
  { id: 'SLSTL-028', category: 'Regular Member', eastId: 'LK-14-19-0028', name: 'Dr N Amarasinghe' },
  { id: 'SLSTL-029', category: 'Regular Member', eastId: 'LK-14-19-0029', name: 'Mr Siganesh Lokanathan' },
  { id: 'SLSTL-030', category: 'Regular Member', eastId: 'LK-14-19-0030', name: 'Dr Y M M S Dandara' },
  { id: 'SLSTL-031', category: 'Regular Member', eastId: 'LK-14-19-0031', name: 'Dr V V Adikariwardage' },
  { id: 'SLSTL-032', category: 'Regular Member', eastId: 'LK-14-19-0032', name: 'Dr Jagath Munasinghe' },
  { id: 'SLSTL-033', category: 'Regular Member', eastId: 'LK-14-19-0033', name: 'Mr Alan Siriwardena' },
  { id: 'SLSTL-034', category: 'Regular Member', eastId: 'LK-14-19-0034', name: 'Prof Selvarajah Suventhiran' },
  { id: 'SLSTL-035', category: 'Regular Member', eastId: 'LK-14-19-0035', name: 'Dr Ravindra Hiriwasarambuge' },
  { id: 'SLSTL-036', category: 'Regular Member', eastId: 'LK-14-19-0036', name: 'Dr D S Jayawera' },
  { id: 'SLSTL-037', category: 'Regular Member', eastId: 'LK-14-19-0037', name: 'Dr S J Widanapathirana' },
  { id: 'SLSTL-038', category: 'Regular Member', eastId: 'LK-14-19-0038', name: 'Prof N L Jayakody' },
  { id: 'SLSTL-039', category: 'Regular Member', eastId: 'LK-14-19-0039', name: 'Capt Asin Fernando' },
  { id: 'SLSTL-040', category: 'Regular Member', eastId: 'LK-14-19-0040', name: 'Dr Darshi Prashilema' },
  { id: 'SLSTL-041', category: 'Regular Member', eastId: 'LK-14-19-0041', name: 'Ms R M S S Sanjeevani' },
  { id: 'SLSTL-042', category: 'Regular Member', eastId: 'LK-14-19-0042', name: 'Dr A G J Edirisinghe' },
  { id: 'SLSTL-043', category: 'Regular Member', eastId: 'LK-14-19-0043', name: 'Ms Thibna Nipusu Lankathisare' },
  { id: 'SLSTL-044', category: 'Regular Member', eastId: 'LK-14-19-0044', name: 'Ms Sathani Pramod Liyanage' },
  { id: 'SLSTL-045', category: 'Regular Member', eastId: 'LK-14-19-0045', name: 'Mr Thisara Nipusu Lankathisare' },
  { id: 'SLSTL-046', category: 'Regular Member', eastId: 'LK-14-19-0046', name: 'Mr M A P Chanuka P Perera' },
  { id: 'SLSTL-047', category: 'Regular Member', eastId: 'LK-14-19-0047', name: 'Mrs Namale Siyambalapitiya' },
  { id: 'SLSTL-048', category: 'Regular Member', eastId: 'LK-14-19-0048', name: 'Ms Kaushalya Herath' },
  { id: 'SLSTL-049', category: 'Regular Member', eastId: 'LK-14-19-0049', name: 'Ms P Amith Prasanna Piyathanshana' },
  { id: 'SLSTL-050', category: 'Regular Member', eastId: 'LK-14-19-0050', name: 'Eng Buddike Hidabhasani Gahangama' },
  { id: 'SLSTL-051', category: 'Regular Member', eastId: 'LK-14-19-0051', name: 'Mr Hasan Hedge Lothan Thiange Bandara Jinostoss' },
  { id: 'SLSTL-052', category: 'Regular Member', eastId: 'LK-14-19-0052', name: 'Mrs Naga Kamkamge Bragya Jinavanthi' },
  { id: 'SLSTL-053', category: 'Regular Member', eastId: 'LK-14-19-0053', name: 'Miss Sarayahani Hewage Uthpaloc' },
  { id: 'SLSTL-054', category: 'Regular Member', eastId: 'LK-14-19-0054', name: 'Mr Hottige Nilas Ponsa' },
  { id: 'SLSTL-055', category: 'Regular Member', eastId: 'LK-14-19-0055', name: 'Ms Kaustano Chathumi Ayanthi' },
  { id: 'SLSTL-056', category: 'Regular Member', eastId: 'LK-14-19-0056', name: 'Ms Janaka Shuddhika Janendra De Silva' },
  { id: 'SLSTL-057', category: 'Regular Member', eastId: 'LK-14-19-0057', name: 'Ms Nidhandrve Jirgatheriuian' },
  { id: 'SLSTL-058', category: 'Regular Member', eastId: 'LK-14-19-0058', name: 'Mr H R D T Kirunaratna' },
  { id: 'SLSTL-059', category: 'Regular Member', eastId: 'LK-14-19-0059', name: 'Mr M A K Sandariwan' },
  { id: 'SLSTL-060', category: 'Regular Member', eastId: 'LK-14-19-0060', name: 'Ms C T Chanthanalatame' },
]

const categories = [...new Set(members.map(m => m.category))]

const filtered = computed(() => {
  const q = search.value.toLowerCase()
  return members.filter(m => {
    const matchesSearch = !q || m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q)
    const matchesCat = !categoryFilter.value || m.category === categoryFilter.value
    return matchesSearch && matchesCat
  })
})

function categoryClass(cat: string) {
  const map: Record<string, string> = {
    'Regular Member':  'bg-primary/10 text-primary-darker',
    'Associate Member':'bg-blue-100 text-blue-700',
    'Student Member':  'bg-emerald-100 text-emerald-700',
    'Fellow':          'bg-accent/15 text-accent-darker',
    'Life Member':     'bg-purple-100 text-purple-700',
    'Honorary Member': 'bg-slate-100 text-slate-600',
  }
  return map[cat] ?? 'bg-slate-100 text-slate-600'
}
</script>
