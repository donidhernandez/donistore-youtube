<script setup>
import { RouterLink } from 'vue-router'
import ShoppingCartIcon from '@heroicons/vue/24/outline/ShoppingCartIcon'
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

      <div class="flex gap-3">
        <ShoppingCartIcon class="mr-2 h-6 w-6 text-white" />
        <RouterLink class="text-sm font-semibold leading-6 text-white" to="/"
          >Iniciar Sesión</RouterLink
        >
        <RouterLink class="text-sm font-semibold leading-6 text-white" to="/catalogue"
          >Registrarme</RouterLink
        >
      </div>
    </nav>
  </header>
</template>
