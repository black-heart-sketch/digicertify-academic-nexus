
<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Communication Center</h2>
    
    <!-- Messages and Announcements Section -->
    <div class="grid gap-6 md:grid-cols-5">
      <!-- Messages List -->
      <div class="md:col-span-2 rounded-lg border shadow-sm overflow-hidden">
        <div class="p-4 bg-gray-50 border-b flex justify-between items-center">
          <h3 class="font-medium">Messages</h3>
          <button class="text-xs bg-digicertify-secondary text-white px-2 py-1 rounded">
            New Message
          </button>
        </div>
        <div class="divide-y">
          <div class="p-4 cursor-pointer hover:bg-gray-50 flex items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium flex-shrink-0">
              JA
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex justify-between items-start">
                <h4 class="font-medium text-sm truncate">Ms. Adams (Math)</h4>
                <span class="text-xs text-gray-500">3h ago</span>
              </div>
              <p class="text-sm text-gray-700 truncate">Reminder about the upcoming math competition registration</p>
              <span class="inline-block mt-1 bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded">New</span>
            </div>
          </div>
          <div class="p-4 cursor-pointer hover:bg-gray-50 flex items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium flex-shrink-0">
              RJ
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex justify-between items-start">
                <h4 class="font-medium text-sm truncate">Mr. Johnson (Principal)</h4>
                <span class="text-xs text-gray-500">1d ago</span>
              </div>
              <p class="text-sm text-gray-700 truncate">Updates regarding the school event next week</p>
            </div>
          </div>
          <div class="p-4 cursor-pointer hover:bg-gray-50 flex items-start gap-3">
            <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium flex-shrink-0">
              SG
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex justify-between items-start">
                <h4 class="font-medium text-sm truncate">Ms. Garcia (Science)</h4>
                <span class="text-xs text-gray-500">2d ago</span>
              </div>
              <p class="text-sm text-gray-700 truncate">Science project feedback and suggestions for improvement</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Message Content -->
      <div class="md:col-span-3 rounded-lg border shadow-sm overflow-hidden">
        <div class="p-4 bg-gray-50 border-b">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
              JA
            </div>
            <div>
              <h3 class="font-medium">Ms. Adams (Mathematics)</h3>
              <p class="text-xs text-gray-500">May 13, 2025 • 3:45 PM</p>
            </div>
          </div>
        </div>
        <div class="p-4 h-[300px] overflow-y-auto">
          <h4 class="font-medium mb-2">Reminder: Math Competition Registration</h4>
          <div class="text-sm space-y-3">
            <p>Dear Parent,</p>
            <p>
              I wanted to remind you that the registration for the Annual Regional Mathematics Competition 
              closes this Friday, May 16. Based on John's performance in class and previous competitions,
              I strongly recommend that he participates this year.
            </p>
            <p>
              The competition will be held on June 5th at Central High School. There's a $15 registration fee,
              which can be paid through the school's online payment system or by check.
            </p>
            <p>
              Please let me know if John would like to participate so I can include him in our school team.
              He has shown exceptional skills in algebra and problem-solving that would be valuable for the competition.
            </p>
            <p>
              If you have any questions or need more information, please don't hesitate to reach out.
            </p>
            <p>Best regards,<br>Jessica Adams<br>Mathematics Department</p>
          </div>
        </div>
        <div class="p-4 border-t bg-gray-50">
          <div class="flex gap-2">
            <input 
              type="text" 
              placeholder="Type your reply..." 
              class="flex-grow rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <button class="bg-digicertify-secondary text-white px-4 py-2 rounded-md text-sm font-medium">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- School Announcements -->
    <h3 class="text-lg font-bold mt-8 mb-4">School Announcements</h3>
    <div class="space-y-4">
      <div class="rounded-lg border shadow-sm overflow-hidden">
        <div class="p-4 bg-gray-50 border-b flex justify-between items-center">
          <h4 class="font-medium">End of Year Events Schedule</h4>
          <span class="text-xs text-gray-500">Posted May 10, 2025</span>
        </div>
        <div class="p-4">
          <p class="text-sm">
            The school administration has published the schedule for end-of-year events including 
            the graduation ceremony, awards night, and summer program registration. Please check the 
            attached document for details and important dates.
          </p>
          <div class="mt-4 flex items-center gap-2 text-sm text-digicertify-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <span class="hover:underline cursor-pointer">events_schedule_2025.pdf</span>
          </div>
        </div>
      </div>
      
      <div class="rounded-lg border shadow-sm overflow-hidden">
        <div class="p-4 bg-gray-50 border-b flex justify-between items-center">
          <h4 class="font-medium">Summer School Registration Now Open</h4>
          <span class="text-xs text-gray-500">Posted May 5, 2025</span>
        </div>
        <div class="p-4">
          <p class="text-sm">
            Registration for summer school and enrichment programs is now open. Courses include math, science, 
            language arts, sports, and arts programs. Early registration discounts are available until May 20.
            Please contact the school office for more information or to register your child.
          </p>
          <div class="mt-3 flex gap-2">
            <button class="text-xs bg-digicertify-secondary text-white px-2 py-1 rounded">
              Register Now
            </button>
            <button class="text-xs border border-gray-300 px-2 py-1 rounded">
              View Courses
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Calendar Events -->
    <h3 class="text-lg font-bold mt-8 mb-4">Upcoming Events</h3>
    <div class="rounded-lg border shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b bg-gray-50">
              <th class="text-left py-3 px-4 font-medium">Event</th>
              <th class="text-left py-3 px-4 font-medium">Date</th>
              <th class="text-left py-3 px-4 font-medium">Time</th>
              <th class="text-left py-3 px-4 font-medium">Location</th>
              <th class="text-left py-3 px-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="py-3 px-4 font-medium">Parent-Teacher Conference</td>
              <td class="py-3 px-4">May 15, 2025</td>
              <td class="py-3 px-4">1:00 PM - 4:00 PM</td>
              <td class="py-3 px-4">Main Building, Floor 2</td>
              <td class="py-3 px-4">
                <button class="text-xs bg-digicertify-secondary text-white px-2 py-1 rounded">
                  Add to Calendar
                </button>
              </td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-medium">Science Fair</td>
              <td class="py-3 px-4">May 20, 2025</td>
              <td class="py-3 px-4">9:00 AM - 3:00 PM</td>
              <td class="py-3 px-4">School Gymnasium</td>
              <td class="py-3 px-4">
                <button class="text-xs bg-digicertify-secondary text-white px-2 py-1 rounded">
                  Add to Calendar
                </button>
              </td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-medium">End of Term Exams</td>
              <td class="py-3 px-4">Jun 5-12, 2025</td>
              <td class="py-3 px-4">8:00 AM - 2:00 PM</td>
              <td class="py-3 px-4">Various Classrooms</td>
              <td class="py-3 px-4">
                <button class="text-xs bg-digicertify-secondary text-white px-2 py-1 rounded">
                  View Schedule
                </button>
              </td>
            </tr>
            <tr class="border-b">
              <td class="py-3 px-4 font-medium">Awards Ceremony</td>
              <td class="py-3 px-4">Jun 18, 2025</td>
              <td class="py-3 px-4">6:00 PM - 8:00 PM</td>
              <td class="py-3 px-4">School Auditorium</td>
              <td class="py-3 px-4">
                <button class="text-xs bg-digicertify-secondary text-white px-2 py-1 rounded">
                  Add to Calendar
                </button>
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-medium">End of School Year</td>
              <td class="py-3 px-4">Jun 20, 2025</td>
              <td class="py-3 px-4">Early Dismissal 12:00 PM</td>
              <td class="py-3 px-4">All Campus</td>
              <td class="py-3 px-4">
                <button class="text-xs bg-digicertify-secondary text-white px-2 py-1 rounded">
                  More Info
                </button>
              </td>
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
  emit('update:title', { title: 'Communication Center', subtitle: 'Messages, announcements, and events' })
})
</script>
