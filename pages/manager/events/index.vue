<template>
  <div>
    <InnerPageHero title="Events" parent="Manager" parent-href="/manager" />

    <section class="py-10 bg-slate-50 min-h-screen">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">

        <div class="flex justify-end">
          <NuxtLink to="/manager/events/create" class="btn-primary text-sm py-2.5 px-5">
            + Create Event
          </NuxtLink>
        </div>

        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
            <h3 class="font-display font-bold text-primary-darker">All Events</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-slate-50 text-left">
                  <th class="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Title</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Registrations</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-if="!events || events.length === 0">
                  <td colspan="5" class="px-5 py-10 text-center text-slate-400">No events yet. Create your first event.</td>
                </tr>
                <tr v-for="ev in events" :key="ev.id" class="hover:bg-slate-50 transition-colors">
                  <td class="px-5 py-3">
                    <p class="font-medium text-slate-700">{{ ev.title }}</p>
                    <p class="text-xs text-slate-400">{{ ev.category }}</p>
                  </td>
                  <td class="px-4 py-3 text-slate-600">
                    {{ ev.event_date ? new Date(ev.event_date).toLocaleDateString() : '—' }}
                  </td>
                  <td class="px-4 py-3">
                    <span class="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full"
                          :class="{
                            'bg-emerald-100 text-emerald-700': ev.status === 'published',
                            'bg-amber-100 text-amber-700':    ev.status === 'draft',
                            'bg-red-100 text-red-600':        ev.status === 'cancelled',
                          }">
                      {{ ev.status }}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-slate-600">{{ ev.registration_count }}</td>
                  <td class="px-4 py-3 flex gap-3">
                    <NuxtLink :to="`/manager/events/${ev.id}`"
                              class="text-xs text-primary font-semibold hover:underline">Edit</NuxtLink>
                    <button class="text-xs text-red-400 hover:text-red-600 font-semibold transition-colors"
                            @click="deleteEvent(ev.id, ev.title)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'manager' })
useHead({ title: 'Events — SLSTL Manager' })

const { data: events, refresh } = await useFetch<any[]>('/api/manager/events')

async function deleteEvent(id: number, title: string) {
  if (!confirm(`Delete "${title}"? This will also remove all registrations.`)) return
  await $fetch(`/api/manager/events/${id}`, { method: 'DELETE' })
  refresh()
}
</script>
