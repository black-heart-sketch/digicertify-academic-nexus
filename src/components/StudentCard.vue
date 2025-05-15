
<template>
  <div 
    class="overflow-hidden transition-all hover:shadow-md cursor-pointer border rounded-lg bg-card text-card-foreground shadow-sm"
    :class="className"
    @click="$emit('select')"
  >
    <div class="p-4 pb-0 flex flex-row items-center gap-4">
      <div class="h-12 w-12 border-2 border-digicertify-primary rounded-full relative inline-flex items-center justify-center overflow-hidden">
        <img v-if="avatarUrl" :src="avatarUrl" :alt="name" class="h-full w-full object-cover" />
        <div v-else class="bg-digicertify-primary text-white flex items-center justify-center h-full w-full">{{ initials }}</div>
      </div>
      <div>
        <h3 class="font-semibold text-base text-gray-900 dark:text-gray-100">{{ name }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">ID: {{ id }}</p>
      </div>
    </div>
    <div class="p-4">
      <div class="flex flex-col gap-1">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-400">Level:</span>
          <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">{{ level }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-400">School:</span>
          <span class="text-sm">{{ school }}</span>
        </div>
        <div v-if="avgGrade !== undefined" class="flex items-center justify-between mt-1">
          <span class="text-sm text-gray-500 dark:text-gray-400">Average:</span>
          <span :class="['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', getGradeColor(avgGrade)]">{{ avgGrade }}/100</span>
        </div>
      </div>
    </div>
    <div class="p-4 pt-0 flex justify-end">
      <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-digicertify-primary hover:bg-digicertify-primary/90 text-white">View Records</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'StudentCard',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    school: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: ''
    },
    avgGrade: {
      type: Number,
      default: undefined
    }
  },
  emits: ['select'],
  setup(props) {
    const initials = computed(() => {
      return props.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
    });

    const getGradeColor = (grade) => {
      if (!grade) return 'bg-gray-200 text-gray-700'
      if (grade >= 80) return 'bg-green-100 text-green-800'
      if (grade >= 60) return 'bg-blue-100 text-blue-800'
      if (grade >= 50) return 'bg-yellow-100 text-yellow-800'
      return 'bg-red-100 text-red-800'
    };

    return {
      initials,
      getGradeColor
    };
  }
}
</script>
