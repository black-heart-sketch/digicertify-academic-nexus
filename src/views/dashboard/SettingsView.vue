
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Settings</h2>
    <p class="text-muted-foreground mb-4">Manage your account settings and preferences</p>
    <p class="text-center py-8">Settings view content</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Emit event to update dashboard header title
const emit = defineEmits(['update:title'])
onMounted(() => {
  emit('update:title', { title: 'Settings', subtitle: 'Account Preferences' })
})
</script>
