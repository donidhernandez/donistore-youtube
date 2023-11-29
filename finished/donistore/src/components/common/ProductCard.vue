<script setup>
import ShoppingCartIcon from '@heroicons/vue/24/outline/ShoppingCartIcon'
import MagnifyingGlassIcon from '@heroicons/vue/24/outline/MagnifyingGlassIcon'
import StarRating from './StarRating.vue'
import { RouterLink } from 'vue-router'

const { product } = defineProps(['product'])
const { title, id, image, price, rating } = product
</script>

<template>
  <div
    class="relative m-10 flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
  >
    <RouterLink
      :to="`/product/${id}`"
      class="relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl"
    >
      <img class="object-cover" :src="image" :alt="title" />
    </RouterLink>
    <div class="mt-4 px-5 pb-5">
      <RouterLink :to="`/product/${id}`">
        <h5 class="text-xl tracking-tight text-slate-900">{{ title }}</h5>
      </RouterLink>
      <div class="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span class="text-3xl font-bold text-slate-900">${{ price }}</span>
        </p>
        <div class="flex items-center">
          <StarRating :rate="rating.rate" />
          <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{
            rating.rate
          }}</span>
        </div>
      </div>

      <div class="flex flex-col gap-2 lg:flex-row justify-between">
        <RouterLink
          :to="`/product/${id}`"
          class="flex items-center justify-center rounded-md bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <MagnifyingGlassIcon class="mr-2 h-6 w-6" />
          Ver Detalles</RouterLink
        >
        <button
          class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <ShoppingCartIcon class="mr-2 h-6 w-6" />
          Añadir al carro
        </button>
      </div>
    </div>
  </div>
</template>
