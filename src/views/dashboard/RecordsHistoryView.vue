
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Records History</h2>
    <p class="text-muted-foreground mb-4">View and explore your past academic records</p>
    <p class="text-center py-8">Historical records view content</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Emit event to update dashboard header title
const emit = defineEmits(['update:title'])
onMounted(() => {
  emit('update:title', { title: 'Records History', subtitle: 'Past Academic Performance' })
})
</script>
