
<template>
  <div class="min-h-screen flex">
    <DashboardSidebar class="w-64 hidden md:flex" />
    <div v-if="showMobileMenu" class="fixed inset-0 z-50 bg-black/50" @click="closeMobileMenu"></div>
    <DashboardSidebar v-if="showMobileMenu" class="fixed inset-y-0 left-0 z-50 w-64 animate-in slide-in-from-left" />
    <div class="flex-1 flex flex-col">
      <DashboardHeader :title="pageTitle" :subtitle="pageSubtitle" @menuToggle="toggleMobileMenu" />
      <main class="flex-1 p-4">
        <router-view v-slot="{ Component }">
          <component :is="Component" @update:title="updateTitle" />
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'

const showMobileMenu = ref(false)
const pageTitle = ref('Dashboard')
const pageSubtitle = ref('')

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

const updateTitle = (data: { title: string; subtitle?: string }) => {
  pageTitle.value = data.title
  pageSubtitle.value = data.subtitle || ''
}

// Close mobile menu when window resizes to desktop
const handleResize = () => {
  if (window.innerWidth >= 768) {
    showMobileMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
