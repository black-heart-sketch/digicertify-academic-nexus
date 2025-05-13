
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Student Attendance</h2>
    
    <!-- Student Selection and Time Period Filter -->
    <div class="mb-8 flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-1/3">
        <label class="block text-sm font-medium mb-2">Select Student:</label>
        <select 
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="john">John Smith - Grade 10</option>
          <option value="emma">Emma Smith - Grade 8</option>
        </select>
      </div>
      <div class="w-full md:w-1/3">
        <label class="block text-sm font-medium mb-2">Time Period:</label>
        <select 
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="thisYear">This Academic Year</option>
        </select>
      </div>
    </div>
    
    <!-- Attendance Summary -->
    <div class="mb-8 grid gap-6 md:grid-cols-4">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
        <h3 class="text-lg font-medium mb-2">Present</h3>
        <div class="text-3xl font-bold text-green-500">92%</div>
        <p class="text-sm text-gray-500">36 days</p>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
        <h3 class="text-lg font-medium mb-2">Absent</h3>
        <div class="text-3xl font-bold text-red-500">3</div>
        <p class="text-sm text-gray-500">days</p>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
        <h3 class="text-lg font-medium mb-2">Late</h3>
        <div class="text-3xl font-bold text-amber-500">2</div>
        <p class="text-sm text-gray-500">days</p>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
        <h3 class="text-lg font-medium mb-2">School Events</h3>
        <div class="text-3xl font-bold text-blue-500">1</div>
        <p class="text-sm text-gray-500">day</p>
      </div>
    </div>
    
    <!-- Attendance Calendar View -->
    <div class="rounded-lg border shadow-sm overflow-hidden mb-8">
      <div class="p-4 bg-gray-50 border-b flex justify-between items-center">
        <h3 class="font-medium">May 2025</h3>
        <div class="flex gap-2">
          <button class="p-1 rounded hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button class="p-1 rounded hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="p-4">
        <!-- Weekday Headers -->
        <div class="grid grid-cols-7 mb-2">
          <div class="text-center text-sm font-medium text-gray-500">Sun</div>
          <div class="text-center text-sm font-medium text-gray-500">Mon</div>
          <div class="text-center text-sm font-medium text-gray-500">Tue</div>
          <div class="text-center text-sm font-medium text-gray-500">Wed</div>
          <div class="text-center text-sm font-medium text-gray-500">Thu</div>
          <div class="text-center text-sm font-medium text-gray-500">Fri</div>
          <div class="text-center text-sm font-medium text-gray-500">Sat</div>
        </div>
        
        <!-- Calendar Grid -->
        <div class="grid grid-cols-7 gap-1">
          <!-- Previous Month Days (Grayed out) -->
          <div class="h-14 p-1 text-center text-gray-400">28</div>
          <div class="h-14 p-1 text-center text-gray-400">29</div>
          <div class="h-14 p-1 text-center text-gray-400">30</div>
          
          <!-- Current Month Days -->
          <!-- Week 1 -->
          <div class="h-14 p-1 text-center border rounded">1
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded">2
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded">3
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center bg-gray-100">4</div>
          
          <!-- Week 2 -->
          <div class="h-14 p-1 text-center bg-gray-100">5</div>
          <div class="h-14 p-1 text-center border rounded">6
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded">7
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded">8
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-amber-500" title="Late"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded">9
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded">10
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center bg-gray-100">11</div>
          
          <!-- More weeks... -->
          <div class="h-14 p-1 text-center bg-gray-100">12</div>
          <div class="h-14 p-1 text-center border rounded">13
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-red-500" title="Absent"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded">14
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded bg-gray-50 text-sm">15
            <div class="mt-1 text-xs text-blue-500 font-medium leading-none">PT Conf</div>
          </div>
          <div class="h-14 p-1 text-center border rounded">16
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center border rounded">17
            <div class="mt-1 h-2 w-2 mx-auto rounded-full bg-green-500" title="Present"></div>
          </div>
          <div class="h-14 p-1 text-center bg-gray-100">18</div>
        </div>
      </div>
      <div class="p-4 border-t bg-gray-50">
        <div class="flex items-center justify-start gap-4 text-sm">
          <div class="flex items-center gap-1">
            <div class="h-3 w-3 rounded-full bg-green-500"></div>
            <span>Present</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="h-3 w-3 rounded-full bg-red-500"></div>
            <span>Absent</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="h-3 w-3 rounded-full bg-amber-500"></div>
            <span>Late</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="h-3 w-3 rounded-full bg-blue-500"></div>
            <span>School Event</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Attendance Details Table -->
    <div class="rounded-lg border shadow-sm overflow-hidden">
      <div class="p-4 bg-gray-50 border-b">
        <h3 class="font-medium">Attendance Log</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b bg-gray-50">
              <th class="text-left py-3 px-4 font-medium">Date</th>
              <th class="text-left py-3 px-4 font-medium">Status</th>
              <th class="text-left py-3 px-4 font-medium">Subject/Period</th>
              <th class="text-left py-3 px-4 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="py-3 px-4">May 15, 2025</td>
              <td class="py-3 px-4">
                <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">School Event</span>
              </td>
              <td class="py-3 px-4">All Day</td>
              <td class="py-3 px-4 text-sm">Parent-Teacher Conference Day</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4">May 13, 2025</td>
              <td class="py-3 px-4">
                <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">Absent</span>
              </td>
              <td class="py-3 px-4">All Day</td>
              <td class="py-3 px-4 text-sm">Doctor's appointment (excused)</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4">May 8, 2025</td>
              <td class="py-3 px-4">
                <span class="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">Late</span>
              </td>
              <td class="py-3 px-4">First Period (Mathematics)</td>
              <td class="py-3 px-4 text-sm">Arrived 15 minutes late due to traffic</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Emit event to update dashboard header title
const emit = defineEmits(['update:title'])
onMounted(() => {
  emit('update:title', { title: 'Student Attendance', subtitle: 'Tracking attendance records' })
})
</script>
