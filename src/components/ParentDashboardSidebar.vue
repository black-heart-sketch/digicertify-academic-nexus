
<template>
  <div class="flex flex-col h-full bg-white dark:bg-gray-900 border-r" :class="className">
    <div class="p-4 border-b">
      <Logo />
    </div>
    <nav class="flex-1 overflow-auto py-4">
      <SidebarSection :items="sidebarItems" />
    </nav>
    <div class="p-4 border-t">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-full bg-digicertify-secondary flex items-center justify-center text-white font-semibold">
            M
          </div>
          <div>
            <p class="text-sm font-medium">Maria Smith</p>
            <p class="text-xs text-gray-500">Parent</p>
          </div>
        </div>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-5 h-5">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" x2="9" y1="12" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Logo from './Logo.vue'
import { cn } from '@/lib/utils'

interface SidebarItem {
  title: string
  href: string
  icon: any
  children?: SidebarItem[]
}

interface Props {
  className?: string
}

const props = defineProps<Props>()
const router = useRouter()
const route = useRoute()

const expanded = ref<string | null>(null)

const toggleExpand = (title: string) => {
  expanded.value = expanded.value === title ? null : title
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Overview',
    href: '/parent-dashboard',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-5 h-5">
        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
      </svg>
    ),
  },
  {
    title: 'Student Progress',
    href: '/parent-dashboard/progress',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    children: [
      {
        title: 'Performance',
        href: '/parent-dashboard/performance',
        icon: <span class="w-1.5 h-1.5 rounded-full bg-current"></span>,
      },
      {
        title: 'Attendance',
        href: '/parent-dashboard/attendance',
        icon: <span class="w-1.5 h-1.5 rounded-full bg-current"></span>,
      },
    ],
  },
  {
    title: 'Communication',
    href: '/parent-dashboard/communication',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-5 h-5">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
      </svg>
    ),
  },
  {
    title: 'Profile',
    href: '/parent-dashboard/profile',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-5 h-5">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    title: 'Settings',
    href: '/parent-dashboard/settings',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-5 h-5">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
]
</script>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { useRoute } from 'vue-router'
import { cn } from '@/lib/utils'

export default defineComponent({
  name: 'SidebarSection',
  props: {
    items: {
      type: Array,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const route = useRoute()
    const expanded = ref<string | null>(null)

    const toggleExpand = (title: string) => {
      expanded.value = expanded.value === title ? null : title
    }

    return () => {
      return h('div', { class: cn('space-y-1 px-2', props.className) }, 
        props.items.map((item: any, index: number) => {
          const isActive = route.path === item.href || route.path.startsWith(item.href + '/')
          const hasChildren = item.children && item.children.length > 0
          const isExpanded = expanded.value === item.title

          if (hasChildren) {
            return h('div', { key: index }, [
              h('button', {
                onClick: () => toggleExpand(item.title),
                class: cn(
                  'flex items-center justify-between w-full px-3 py-2 text-sm rounded-md',
                  isActive ? 'bg-digicertify-light dark:bg-gray-800 text-digicertify-secondary dark:text-white font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                )
              }, [
                h('div', { class: 'flex items-center gap-3' }, [
                  h('div', {}, [item.icon]),
                  h('span', {}, item.title)
                ]),
                h('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  class: `w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`
                }, [
                  h('path', { d: 'm6 9 6 6 6-6' })
                ])
              ]),
              hasChildren && isExpanded && h('div', { class: 'pl-8 mt-1 space-y-1' },
                item.children?.map((child: any, childIndex: number) => {
                  const isChildActive = route.path === child.href
                  
                  return h('router-link', {
                    key: childIndex,
                    to: child.href,
                    class: cn(
                      'flex items-center gap-3 px-3 py-2 text-sm rounded-md',
                      isChildActive ? 'bg-digicertify-light/50 dark:bg-gray-800/50 text-digicertify-secondary dark:text-white font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    )
                  }, [
                    h('span', {}, [child.icon]),
                    h('span', {}, child.title)
                  ])
                })
              )
            ])
          }

          return h('router-link', {
            key: index,
            to: item.href,
            class: cn(
              'flex items-center gap-3 px-3 py-2 text-sm rounded-md',
              isActive ? 'bg-digicertify-light dark:bg-gray-800 text-digicertify-secondary dark:text-white font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            )
          }, [
            h('div', {}, [item.icon]),
            h('span', {}, item.title)
          ])
        })
      )
    }
  }
})
</script>
