import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BuilderView from '@/views/BuilderView.vue'
import TestBuilderView from '@/views/TestBuilderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/builder',
      name: 'builder',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BuilderView
    },
    {
      path: '/experimental',
      name: 'exp',
      component: TestBuilderView
    }
  ]
})

export default router
