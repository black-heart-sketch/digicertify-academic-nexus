
<template>
  <div class="fixed top-0 right-0 z-50 p-4 space-y-2 w-full max-w-md">
    <div 
      v-for="toast in toasts" 
      :key="toast.id"
      class="bg-white border rounded-md shadow-lg p-4 flex items-start transition-all duration-300 transform translate-y-0"
      :class="[
        toast.type === 'success' && 'border-green-400 bg-green-50',
        toast.type === 'error' && 'border-red-400 bg-red-50',
        toast.type === 'warning' && 'border-yellow-400 bg-yellow-50',
        toast.type === 'info' && 'border-blue-400 bg-blue-50'
      ]"
    >
      <div class="flex-grow mr-2">
        <h5 class="font-medium">{{ toast.title }}</h5>
        <p v-if="toast.description" class="text-sm text-gray-600">{{ toast.description }}</p>
      </div>
      <button 
        @click="removeToast(toast.id)" 
        class="text-gray-400 hover:text-gray-600"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/hooks/use-toast';

const { toasts, removeToast } = useToast();
</script>
