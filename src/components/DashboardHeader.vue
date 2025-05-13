
<template>
  <div class="border-b bg-white dark:bg-gray-900 sticky top-0 z-30">
    <div class="flex h-16 items-center px-4 gap-4">
      <button
        class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-0 md:hidden"
        @click="$emit('menuToggle')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path d="M4 6h16"></path>
          <path d="M4 12h16"></path>
          <path d="M4 18h16"></path>
        </svg>
        <span class="sr-only">Toggle Menu</span>
      </button>
      
      <div class="flex-1 flex flex-col">
        <h1 class="text-lg font-semibold">{{ title }}</h1>
        <p v-if="subtitle" class="text-sm text-gray-500 dark:text-gray-400">{{ subtitle }}</p>
      </div>
      
      <div v-if="showSearch" class="hidden md:flex items-center gap-2 w-1/3">
        <input
          type="search"
          placeholder="Search..."
          class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      
      <div class="flex items-center gap-4">
        <!-- Notifications dropdown -->
        <div class="relative">
          <button 
            class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-0 relative"
            @click="isNotificationsOpen = !isNotificationsOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <span class="sr-only">Notifications</span>
            <span class="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-digicertify-primary text-white text-xs">
              3
            </span>
          </button>
          
          <div v-if="isNotificationsOpen" class="absolute right-0 top-full mt-1 w-80 rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50">
            <div class="flex items-center justify-between p-2 pb-0">
              <h3 class="font-medium">Notifications</h3>
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-8 text-xs">Mark all as read</button>
            </div>
            <div class="h-px my-1 bg-border"></div>
            <div class="max-h-80 overflow-y-auto">
              <div class="cursor-pointer flex flex-col items-start p-3 gap-1">
                <div class="flex items-center gap-2 text-sm font-medium">
                  <div class="h-2 w-2 rounded-full bg-blue-500"></div>
                  New term report card available
                </div>
                <p class="text-xs text-gray-500 pl-4">Your First Term report card is now available for viewing</p>
                <p class="text-xs text-gray-400 pl-4">2 hours ago</p>
              </div>
              <div class="cursor-pointer flex flex-col items-start p-3 gap-1">
                <div class="flex items-center gap-2 text-sm font-medium">
                  <div class="h-2 w-2 rounded-full bg-blue-500"></div>
                  Document verification complete
                </div>
                <p class="text-xs text-gray-500 pl-4">Your birth certificate has been verified successfully</p>
                <p class="text-xs text-gray-400 pl-4">1 day ago</p>
              </div>
              <div class="cursor-pointer flex flex-col items-start p-3 gap-1">
                <div class="flex items-center gap-2 text-sm font-medium">
                  System maintenance
                </div>
                <p class="text-xs text-gray-500 pl-4">The system will be unavailable on Saturday from 2AM to 5AM</p>
                <p class="text-xs text-gray-400 pl-4">2 days ago</p>
              </div>
            </div>
            <div class="h-px my-1 bg-border"></div>
            <div class="cursor-pointer py-2 text-center text-sm font-medium text-digicertify-primary">
              View all notifications
            </div>
          </div>
        </div>
        
        <!-- User profile dropdown -->
        <div class="relative">
          <button 
            class="inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-0"
            @click="isUserMenuOpen = !isUserMenuOpen"
            aria-label="Profile options"
          >
            <div class="h-8 w-8 rounded-full relative inline-flex items-center justify-center overflow-hidden">
              <div class="bg-digicertify-primary text-white flex items-center justify-center h-full w-full">JD</div>
            </div>
          </button>
          
          <div v-if="isUserMenuOpen" class="absolute right-0 top-full mt-1 w-56 rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50">
            <div class="flex items-center justify-start gap-2 p-2">
              <div class="flex flex-col space-y-1 leading-none">
                <p class="font-medium">John Doe</p>
                <p class="text-sm text-gray-500">john.doe@example.com</p>
              </div>
            </div>
            <div class="h-px my-1 bg-border"></div>
            <div class="cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">Profile</div>
            <div class="cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">Settings</div>
            <div class="cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">Help & Support</div>
            <div class="h-px my-1 bg-border"></div>
            <div class="cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">Log out</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  subtitle?: string
  showSearch?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showSearch: true
})

const emit = defineEmits(['menuToggle'])

const isNotificationsOpen = ref(false)
const isUserMenuOpen = ref(false)
</script>
