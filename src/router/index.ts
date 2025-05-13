
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import DashboardHome from '../views/dashboard/DashboardHome.vue'
import RecordsCurrentView from '../views/dashboard/RecordsCurrentView.vue'
import RecordsHistoryView from '../views/dashboard/RecordsHistoryView.vue'
import RecordsCertificatesView from '../views/dashboard/RecordsCertificatesView.vue'
import ProfileView from '../views/dashboard/ProfileView.vue'
import DocumentsView from '../views/dashboard/DocumentsView.vue'
import SettingsView from '../views/dashboard/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardHome
        },
        {
          path: 'records/current',
          name: 'records-current',
          component: RecordsCurrentView
        },
        {
          path: 'records/history',
          name: 'records-history',
          component: RecordsHistoryView
        },
        {
          path: 'records/certificates',
          name: 'records-certificates',
          component: RecordsCertificatesView
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView
        },
        {
          path: 'documents',
          name: 'documents',
          component: DocumentsView
        },
        {
          path: 'settings',
          name: 'settings',
          component: SettingsView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
