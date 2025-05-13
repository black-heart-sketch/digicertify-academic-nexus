
<template>
  <nav class="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0">
            <Logo />
          </router-link>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <router-link to="/" class="text-gray-700 dark:text-gray-200 hover:text-digicertify-primary dark:hover:text-digicertify-secondary px-3 py-2 text-sm font-medium">Home</router-link>
          <router-link to="/about" class="text-gray-700 dark:text-gray-200 hover:text-digicertify-primary dark:hover:text-digicertify-secondary px-3 py-2 text-sm font-medium">About</router-link>
          <router-link to="/features" class="text-gray-700 dark:text-gray-200 hover:text-digicertify-primary dark:hover:text-digicertify-secondary px-3 py-2 text-sm font-medium">Features</router-link>
          <router-link to="/contact" class="text-gray-700 dark:text-gray-200 hover:text-digicertify-primary dark:hover:text-digicertify-secondary px-3 py-2 text-sm font-medium">Contact</router-link>
          <router-link to="/login">
            <button class="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ml-4 px-4 py-2">Login</button>
          </router-link>
          <router-link to="/register">
            <button class="bg-digicertify-primary hover:bg-digicertify-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-white py-2 px-4">Register</button>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link to="/" @click="mobileMenuOpen = false" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Home</router-link>
        <router-link to="/about" @click="mobileMenuOpen = false" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">About</router-link>
        <router-link to="/features" @click="mobileMenuOpen = false" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Features</router-link>
        <router-link to="/contact" @click="mobileMenuOpen = false" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Contact</router-link>
        <div class="flex flex-col gap-2 mt-3 px-3">
          <router-link to="/login" @click="mobileMenuOpen = false">
            <button class="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background w-full px-4 py-2">Login</button>
          </router-link>
          <router-link to="/register" @click="mobileMenuOpen = false">
            <button class="bg-digicertify-primary hover:bg-digicertify-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-white w-full py-2 px-4">Register</button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Logo from './Logo.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
