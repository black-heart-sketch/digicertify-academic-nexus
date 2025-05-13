
<template>
  <div class="w-full max-w-md mx-auto border rounded-lg bg-card text-card-foreground shadow">
    <div class="p-6 space-y-1 flex flex-col items-center">
      <Logo class="mb-2" size="lg" />
      <h3 class="text-2xl font-semibold leading-none tracking-tight">Welcome</h3>
      <p class="text-sm text-muted-foreground">
        Enter your details to continue
      </p>
    </div>
    <div class="p-6">
      <div class="w-full">
        <div class="border-b flex">
          <button 
            @click="activeTab = 'login'" 
            class="px-4 py-2 text-center text-sm font-medium flex-1 transition-colors"
            :class="activeTab === 'login' ? 'border-b-2 border-primary' : 'text-muted-foreground'"
          >
            Login
          </button>
          <button 
            @click="activeTab = 'register'" 
            class="px-4 py-2 text-center text-sm font-medium flex-1 transition-colors"
            :class="activeTab === 'register' ? 'border-b-2 border-primary' : 'text-muted-foreground'"
          >
            Register
          </button>
        </div>
          
        <!-- Login Tab -->
        <div v-if="activeTab === 'login'" class="space-y-4 mt-4">
          <form @submit.prevent="handleLoginSubmit" class="space-y-4">
            <div class="space-y-2">
              <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="youremail@example.com" 
                v-model="loginData.email"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                <a 
                  href="#" 
                  class="text-xs text-digicertify-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input 
                id="password" 
                type="password"
                v-model="loginData.password"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
            
            <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
            
            <button 
              type="submit" 
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-digicertify-primary hover:bg-digicertify-primary/90 text-white h-10 px-4 py-2 w-full"
              :disabled="loading"
            >
              {{ loading ? 'Signing in...' : 'Sign In' }}
            </button>
          </form>
        </div>
          
        <!-- Register Tab -->
        <div v-if="activeTab === 'register'" class="space-y-4 mt-4">
          <form @submit.prevent="handleRegisterSubmit" class="space-y-4">
            <div class="space-y-2">
              <label for="name" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
              <input 
                id="name" 
                placeholder="John Doe"
                v-model="registerData.name"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
            <div class="space-y-2">
              <label for="reg-email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
              <input 
                id="reg-email" 
                type="email" 
                placeholder="youremail@example.com"
                v-model="registerData.email"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="reg-password" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                <input 
                  id="reg-password" 
                  type="password"
                  v-model="registerData.password"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
              <div class="space-y-2">
                <label for="confirm-password" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Confirm</label>
                <input 
                  id="confirm-password" 
                  type="password"
                  v-model="registerData.confirmPassword"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
            </div>
            <div class="space-y-2">
              <label for="role" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">I am a</label>
              <select 
                id="role"
                v-model="registerData.role"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="student">Student</option>
                <option value="parent">Parent/Guardian</option>
                <option value="teacher">Teacher</option>
                <option value="admin">School Administrator</option>
              </select>
            </div>
            
            <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
            
            <button 
              type="submit" 
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-digicertify-primary hover:bg-digicertify-primary/90 text-white h-10 px-4 py-2 w-full"
              :disabled="loading"
            >
              {{ loading ? 'Creating account...' : 'Create Account' }}
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="p-6 flex justify-center border-t">
      <p class="text-xs text-gray-500 text-center px-4">
        By continuing, you agree to DigiCertify's Terms of Service and Privacy Policy
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Logo from './Logo.vue'

interface Props {
  defaultTab?: 'login' | 'register'
}

const props = withDefaults(defineProps<Props>(), {
  defaultTab: 'login'
})

const emit = defineEmits(['login', 'register'])

const activeTab = ref(props.defaultTab)
const loginData = ref({ email: '', password: '' })
const registerData = ref({ 
  name: '', 
  email: '', 
  password: '', 
  confirmPassword: '',
  role: 'student' 
})
const loading = ref(false)
const error = ref<string | null>(null)

const handleLoginSubmit = () => {
  error.value = null
  loading.value = true
  
  // Simulate API call
  setTimeout(() => {
    loading.value = false
    emit('login', loginData.value)
  }, 1000)
}

const handleRegisterSubmit = () => {
  error.value = null
  
  if (registerData.value.password !== registerData.value.confirmPassword) {
    error.value = "Passwords don't match"
    return
  }
  
  loading.value = true
  
  // Simulate API call
  setTimeout(() => {
    loading.value = false
    const { confirmPassword, ...data } = registerData.value
    emit('register', data)
  }, 1000)
}
</script>
