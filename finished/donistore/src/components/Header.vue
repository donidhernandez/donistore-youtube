<script setup>
import { RouterLink } from 'vue-router'
import ShoppingCartIcon from '@heroicons/vue/24/outline/ShoppingCartIcon'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
</script>

<template>
  <header class="bg-gray-900">
    <nav
      class="mx-auto flex container items-center justify-between p-3 gap-2 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center gap-3">
        <RouterLink to="/">
          <span class="sr-only">Doni Store</span>
          <img class="h-16 w-auto" src="/store-logo.png" alt="" />
        </RouterLink>
        <div class="flex gap-3">
          <RouterLink class="text-sm font-semibold leading-6 text-white" to="/">Inicio</RouterLink>
          <RouterLink class="text-sm font-semibold leading-6 text-white" to="/catalogue"
            >Catálogo</RouterLink
          >
        </div>
      </div>

      <div class="flex gap-3 items-center">
        <button
          class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          aria-label="Cart"
        >
          <ShoppingCartIcon class="mr-2 h-6 w-6 text-white" />
          <span class="absolute inset-0 object-right-top -mr-6" v-if="auth.carts.length > 0">
            <div
              class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-indigo-500 text-white"
            >
              {{ auth.carts.length }}
            </div>
          </span>
        </button>

        <RouterLink v-if="!auth.user" class="text-sm font-semibold leading-6 text-white" to="/login"
          >Iniciar Sesión</RouterLink
        >
        <button class="text-white" v-else @click="auth.logout()">Cerrar Sesión</button>
      </div>
    </nav>
  </header>
</template>
