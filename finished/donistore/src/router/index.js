import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: () => import('../views/Catalogue.vue'),
      meta: {
        enterClass: 'animate__animated animate__fadeInDown',
        leaveClass: 'animate__animated animate__fadeOutUp'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight'
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/Product.vue'),
      meta: {
        enterClass: '',
        leaveClass: ''
      }
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/', '/catalogue', '/login']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
