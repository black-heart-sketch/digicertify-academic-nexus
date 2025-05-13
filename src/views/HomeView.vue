
<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-digicertify-primary/90 via-digicertify-primary to-digicertify-dark text-white">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-6">Secure Academic Records for the Digital Age</h1>
        <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          DigiCertify helps schools, students and employers verify educational credentials instantly
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/register">
            <button class="bg-white text-digicertify-primary hover:bg-gray-100 transition-colors rounded-md px-6 py-3 font-medium">
              Get Started
            </button>
          </router-link>
          <router-link to="/about">
            <button class="bg-transparent border border-white text-white hover:bg-white/10 transition-colors rounded-md px-6 py-3 font-medium">
              Learn More
            </button>
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose DigiCertify</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="w-12 h-12 rounded-full bg-digicertify-light flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-digicertify-primary">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Secure Verification</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Blockchain-based technology ensures records cannot be tampered with or forged.
            </p>
          </div>
          
          <div class="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="w-12 h-12 rounded-full bg-digicertify-light flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-digicertify-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Data Privacy</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Students control who can access their records with secure sharing options.
            </p>
          </div>
          
          <div class="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="w-12 h-12 rounded-full bg-digicertify-light flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-digicertify-primary">
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Digital Certificates</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Issue and verify digital certificates with a single click, eliminating paper waste.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <Logo />
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Securing academic records for the future
            </p>
          </div>
          <div class="flex gap-8">
            <div>
              <h4 class="font-semibold mb-3">Product</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="text-gray-600 hover:text-digicertify-primary dark:text-gray-400">Features</a></li>
                <li><a href="#" class="text-gray-600 hover:text-digicertify-primary dark:text-gray-400">Pricing</a></li>
                <li><a href="#" class="text-gray-600 hover:text-digicertify-primary dark:text-gray-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-3">Company</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="text-gray-600 hover:text-digicertify-primary dark:text-gray-400">About</a></li>
                <li><a href="#" class="text-gray-600 hover:text-digicertify-primary dark:text-gray-400">Careers</a></li>
                <li><a href="#" class="text-gray-600 hover:text-digicertify-primary dark:text-gray-400">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2023 DigiCertify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Logo from '@/components/Logo.vue'
</script>
