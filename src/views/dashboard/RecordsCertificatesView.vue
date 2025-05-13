
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Certificates</h2>
    <p class="text-muted-foreground mb-4">Manage and share your digital certificates</p>
    <p class="text-center py-8">Certificates view content</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Emit event to update dashboard header title
const emit = defineEmits(['update:title'])
onMounted(() => {
  emit('update:title', { title: 'Certificates', subtitle: 'Your Digital Credentials' })
})
</script>
