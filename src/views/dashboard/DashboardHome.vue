
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Welcome to your Dashboard</h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-muted-foreground">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <path d="M14 2H10a2 2 0 0 0-2 2v2h8V4a2 2 0 0 0-2-2Z"></path>
            <path d="M12 11h4"></path>
            <path d="M12 16h4"></path>
            <path d="M8 11h.01"></path>
            <path d="M8 16h.01"></path>
          </svg>
          <h3 class="font-semibold">Recent Records</h3>
        </div>
        <div class="mt-3">
          <span class="text-2xl font-bold">12</span>
          <span class="text-xs text-muted-foreground ml-1">records</span>
        </div>
        <p class="text-xs text-muted-foreground mt-2">3 new records since last login</p>
      </div>
      
      <!-- Add more dashboard cards -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Emit event to update dashboard header title
const emit = defineEmits(['update:title'])
onMounted(() => {
  emit('update:title', { title: 'Dashboard', subtitle: 'Welcome back, John' })
})
</script>
