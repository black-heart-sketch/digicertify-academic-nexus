
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Student Performance</h2>
    
    <!-- Student Selection and Term Filter -->
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
        <label class="block text-sm font-medium mb-2">Academic Term:</label>
        <select 
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="current">Spring 2025 (Current)</option>
          <option value="fall2024">Fall 2024</option>
          <option value="spring2024">Spring 2024</option>
        </select>
      </div>
    </div>
    
    <!-- Performance Summary -->
    <div class="mb-8 grid gap-6 md:grid-cols-3">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
        <h3 class="text-lg font-medium mb-2">GPA</h3>
        <div class="text-3xl font-bold text-digicertify-secondary">3.7</div>
        <p class="text-sm text-gray-500">out of 4.0</p>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
        <h3 class="text-lg font-medium mb-2">Class Rank</h3>
        <div class="text-3xl font-bold text-digicertify-secondary">5</div>
        <p class="text-sm text-gray-500">out of 30 students</p>
      </div>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
        <h3 class="text-lg font-medium mb-2">Assignments</h3>
        <div class="text-3xl font-bold text-digicertify-secondary">95%</div>
        <p class="text-sm text-gray-500">completion rate</p>
      </div>
    </div>
    
    <!-- Subject Performance Table -->
    <div class="rounded-lg border shadow-sm overflow-hidden mb-8">
      <div class="p-4 bg-gray-50 border-b">
        <h3 class="font-medium">Subject Performance</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b bg-gray-50">
              <th class="text-left py-3 px-4 font-medium">Subject</th>
              <th class="text-center py-3 px-4 font-medium">Current Grade</th>
              <th class="text-center py-3 px-4 font-medium">Class Average</th>
              <th class="text-center py-3 px-4 font-medium">Trend</th>
              <th class="text-center py-3 px-4 font-medium">Assignments</th>
              <th class="text-left py-3 px-4 font-medium">Teacher Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="py-3 px-4 font-medium">Mathematics</td>
              <td class="py-3 px-4 text-center">A (92%)</td>
              <td class="py-3 px-4 text-center">86%</td>
              <td class="py-3 px-4 text-center text-green-500">↑</td>
              <td class="py-3 px-4 text-center">18/20</td>
              <td class="py-3 px-4 text-sm">Excels at problem-solving and analytical thinking</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-medium">Science</td>
              <td class="py-3 px-4 text-center">A- (90%)</td>
              <td class="py-3 px-4 text-center">82%</td>
              <td class="py-3 px-4 text-center text-green-500">↑</td>
              <td class="py-3 px-4 text-center">15/15</td>
              <td class="py-3 px-4 text-sm">Strong performance in lab work and experiments</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-medium">English</td>
              <td class="py-3 px-4 text-center">B+ (88%)</td>
              <td class="py-3 px-4 text-center">80%</td>
              <td class="py-3 px-4 text-center text-yellow-500">→</td>
              <td class="py-3 px-4 text-center">10/12</td>
              <td class="py-3 px-4 text-sm">Good writing skills, needs to participate more in discussions</td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-medium">History</td>
              <td class="py-3 px-4 text-center">B (85%)</td>
              <td class="py-3 px-4 text-center">78%</td>
              <td class="py-3 px-4 text-center text-green-500">↑</td>
              <td class="py-3 px-4 text-center">14/15</td>
              <td class="py-3 px-4 text-sm">Shows interest in historical contexts and connections</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-medium">Physical Education</td>
              <td class="py-3 px-4 text-center">A (95%)</td>
              <td class="py-3 px-4 text-center">88%</td>
              <td class="py-3 px-4 text-center text-green-500">↑</td>
              <td class="py-3 px-4 text-center">8/8</td>
              <td class="py-3 px-4 text-sm">Excellent teamwork and physical abilities</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Teacher Notes -->
    <div class="rounded-lg border shadow-sm overflow-hidden">
      <div class="p-4 bg-gray-50 border-b">
        <h3 class="font-medium">Recent Teacher Notes</h3>
      </div>
      <div class="p-4 space-y-4">
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="font-medium">Mr. Johnson (Mathematics)</span>
            <span class="text-sm text-gray-500">May 8, 2025</span>
          </div>
          <p class="text-sm">
            John has shown remarkable improvement in calculus. His recent test scores demonstrate a solid understanding of the concepts. 
            I recommend he consider joining the Math Club to further develop his skills.
          </p>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="font-medium">Ms. Garcia (Science)</span>
            <span class="text-sm text-gray-500">May 5, 2025</span>
          </div>
          <p class="text-sm">
            John's science project on renewable energy was outstanding. He demonstrated great initiative and research skills. 
            Please ensure he completes the follow-up assignment by next week.
          </p>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="font-medium">Mrs. Taylor (English)</span>
            <span class="text-sm text-gray-500">April 29, 2025</span>
          </div>
          <p class="text-sm">
            John's essay writing has improved, but he still needs to work on his participation in class discussions. 
            Please encourage him to share his insights more frequently.
          </p>
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
  emit('update:title', { title: 'Student Performance', subtitle: 'Academic progress tracking' })
})
</script>
