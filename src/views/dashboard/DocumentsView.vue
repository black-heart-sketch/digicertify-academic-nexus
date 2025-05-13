
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Documents</h2>
    <p class="text-muted-foreground mb-4">Manage your uploaded documents</p>
    <p class="text-center py-8">Documents view content</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Emit event to update dashboard header title
const emit = defineEmits(['update:title'])
onMounted(() => {
  emit('update:title', { title: 'Documents', subtitle: 'Your Files & Documents' })
})
</script>
