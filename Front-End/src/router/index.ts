import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/analytics',
      name: 'Analytics',
      component: () => import('../views/AnalyticsView.vue')
    },
    {
      path: '/add',
      name: 'Add New Item',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/inventory',
      name: 'View All Inventory',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GridView.vue')
    },
    {
      path: '/',
      redirect: '/analytics'
    }
  ]
})

export default router
