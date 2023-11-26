<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import gsap from 'gsap'

import ProductCard from '../common/ProductCard.vue'

const API_URL = import.meta.env.VITE_BASE_URL

const categories = ref([])
const categoryProducts = ref([])
const selectedCategory = ref('')

onMounted(async () => {
  const categoriesRes = await axios.get(`${API_URL}/products/categories`)
  categories.value = categoriesRes.data
  selectedCategory.value = categories.value[0]
})

watch(
  selectedCategory,
  async () => {
    const products = await axios.get(`${API_URL}/products/category/${selectedCategory.value}`)
    categoryProducts.value = products.data
  },
  { immediate: true }
)

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.transform = 'scale(0)'
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    transform: 'scale(1)',
    delay: el.dataset.index * 0.2,
    onComplete: done
  })
}
</script>

<template>
  <section class="max-w-8xl mx-auto min-h-screen flex flex-col items-center">
    <div class="flex flex-col mb-16">
      <h2 class="text-5xl text-center font-black">Nuestras categorías principales</h2>
    </div>

    <section class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <button
        @click="selectedCategory = category"
        v-for="category in categories"
        :class="selectedCategory === category ? 'bg-yellow-500' : 'bg-indigo-500 '"
        class="max-w-sm border flex items-center justify-center capitalize text-white p-5 rounded-lg"
      >
        <h3 class="text-xl font-semibold">{{ category }}</h3>
      </button>
    </section>

    <section class="w-full flex flex-wrap">
      <TransitionGroup appear @before-enter="onBeforeEnter" @enter="onEnter">
        <ProductCard
          :product="product"
          v-for="(product, index) in categoryProducts"
          :key="product.id"
          :data-index="index"
        />
      </TransitionGroup>
    </section>
  </section>
</template>
