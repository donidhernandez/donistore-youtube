import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

const API_URL = import.meta.env.VITE_API_URL

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    carts: JSON.parse(localStorage.getItem('carts')) || [],
    token: JSON.parse(localStorage.getItem('token')) || null
  }),
  actions: {
    async login(username, password) {
      const userResponse = await axios.get(`${API_URL}/users/1`)
      const tokenResponse = await axios.post(`${API_URL}/auth/login`, { username, password })
      const cartsResponse = await axios.get(`${API_URL}/carts/user/1`)

      this.user = userResponse.data
      this.token = tokenResponse.data.token
      this.carts = cartsResponse.data

      localStorage.setItem('user', JSON.stringify(this.user))
      localStorage.setItem('token', JSON.stringify(this.token))
      localStorage.setItem('carts', JSON.stringify(this.carts))

      router.back()
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('carts')
      router.back()
    }
  }
})
