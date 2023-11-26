import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        enterClass: '',
        leaveClass: ''
      }
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: () => import('../views/CatalogueView.vue'),
      meta: {
        enterClass: 'animate__animated animate__fadeInDown',
        leaveClass: 'animate__animated animate__fadeOutUp'
      }
    }
  ]
})

export default router
