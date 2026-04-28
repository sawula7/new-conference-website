<template>
  <div>
    <InnerPageHero title="Edit Event" parent="Events" parent-href="/manager/events" />
    <EventForm v-if="event" :event="event" @saved="onSaved" />
    <div v-else class="py-20 text-center text-slate-400">Loading…</div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'manager' })
useHead({ title: 'Edit Event — SLSTL Manager' })

const route = useRoute()
const { data: event } = await useFetch<any>(`/api/manager/events/${route.params.id}`)

async function onSaved() {
  await navigateTo('/manager/events')
}
</script>
