
<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
    <div class="absolute top-4 left-4">
      <router-link to="/" class="text-sm text-gray-600 dark:text-gray-400 hover:text-digicertify-primary dark:hover:text-digicertify-secondary flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-1">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Back to Home
      </router-link>
    </div>
    
    <AuthForm 
      default-tab="register"
      @register="handleRegister"
    />
      
    <div class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>Already have an account? <router-link to="/login" class="text-digicertify-primary dark:text-digicertify-secondary hover:underline">Login here</router-link></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AuthForm from '@/components/AuthForm.vue'

const router = useRouter()

interface RegisterData {
  name: string
  email: string
  password: string
  role: string
}

const handleRegister = (data: RegisterData) => {
  console.log('Register submitted:', data)
  
  // Simulating successful registration
  alert('Registration successful')
  
  // Redirect to dashboard after successful registration
  router.push('/dashboard')
}
</script>
