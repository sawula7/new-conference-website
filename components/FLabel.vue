<template>
  <label class="block text-sm font-semibold text-slate-600 mb-1.5">
    <slot /><span v-if="required" class="text-red-500 ml-0.5">*</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{ required?: boolean }>()
</script>
