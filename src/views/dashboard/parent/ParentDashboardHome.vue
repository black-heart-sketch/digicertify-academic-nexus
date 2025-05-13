
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Welcome to Parent Dashboard</h2>
    
    <!-- Student Selection Dropdown -->
    <div class="mb-8">
      <label class="block text-sm font-medium mb-2">Select Student:</label>
      <select 
        class="w-full md:w-64 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <option value="john">John Smith - Grade 10</option>
        <option value="emma">Emma Smith - Grade 8</option>
      </select>
    </div>
    
    <!-- Dashboard Cards -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Academic Performance Card -->
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div class="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-digicertify-secondary">
            <path d="m22 7-1.5-1.6a6.5 6.5 0 0 0-5-2.4H11"></path>
            <path d="M16 22h5a1 1 0 0 0 1-1V11H6v10a1 1 0 0 0 1 1h2"></path>
            <path d="M8.5 11V7c0-.3.2-.5.5-.5h3"></path>
            <path d="M14 16a3 3 0 1 1-6 0v-5h6v5Z"></path>
            <path d="M15.5 11V7c0-.3-.2-.5-.5-.5h-3"></path>
          </svg>
          <h3 class="font-semibold">Academic Performance</h3>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-sm">GPA:</span>
            <span class="font-medium">3.7/4.0</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm">Class Rank:</span>
            <span class="font-medium">5 of 30</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm">Assignments Completed:</span>
            <span class="font-medium">95%</span>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t">
          <router-link to="/parent-dashboard/performance" class="text-digicertify-secondary text-sm font-medium hover:underline">View detailed performance</router-link>
        </div>
      </div>
      
      <!-- Attendance Card -->
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div class="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-digicertify-secondary">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          <h3 class="font-semibold">Attendance</h3>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-sm">Present:</span>
            <span class="font-medium">92%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm">Absent:</span>
            <span class="font-medium">3 days</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm">Late:</span>
            <span class="font-medium">2 days</span>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t">
          <router-link to="/parent-dashboard/attendance" class="text-digicertify-secondary text-sm font-medium hover:underline">View attendance details</router-link>
        </div>
      </div>
      
      <!-- Upcoming Events Card -->
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div class="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-digicertify-secondary">
            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5"></path>
            <path d="M16 2v4"></path>
            <path d="M8 2v4"></path>
            <path d="M3 10h18"></path>
            <path d="M18 14v4"></path>
            <path d="M18 18h4"></path>
            <path d="M18 22v-4"></path>
            <path d="M18 18h-4"></path>
          </svg>
          <h3 class="font-semibold">Upcoming Events</h3>
        </div>
        <div class="space-y-3">
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-medium">Parent-Teacher Conference</span>
              <span class="text-xs text-gray-500">May 15</span>
            </div>
            <p class="text-xs text-gray-500">Individual meetings with subject teachers</p>
          </div>
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-medium">Science Fair</span>
              <span class="text-xs text-gray-500">May 20</span>
            </div>
            <p class="text-xs text-gray-500">Annual school science exhibition</p>
          </div>
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-medium">End of Term Exam</span>
              <span class="text-xs text-gray-500">Jun 5-12</span>
            </div>
            <p class="text-xs text-gray-500">Final exams for the spring term</p>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t">
          <router-link to="/parent-dashboard/communication" class="text-digicertify-secondary text-sm font-medium hover:underline">View all events</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Emit event to update dashboard header title
const emit = defineEmits(['update:title'])
onMounted(() => {
  emit('update:title', { title: 'Parent Dashboard', subtitle: 'Welcome Maria' })
})
</script>
