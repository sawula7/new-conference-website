<template>
  <div>
    <InnerPageHero title="Create Event" parent="Events" parent-href="/manager/events" />
    <EventForm @saved="onSaved" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'manager' })
useHead({ title: 'Create Event — SLSTL Manager' })

async function onSaved() {
  await navigateTo('/manager/events')
}
</script>
