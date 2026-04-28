<template>
  <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
    <div class="bg-primary/5 border-b border-slate-100 px-6 py-4">
      <h3 class="font-display font-bold text-primary-darker">{{ title }}</h3>
    </div>
    <div class="p-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
