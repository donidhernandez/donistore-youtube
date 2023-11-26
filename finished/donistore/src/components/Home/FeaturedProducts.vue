<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import axios from 'axios'
const API_URL = import.meta.env.VITE_BASE_URL

import ProductCard from '../common/ProductCard.vue'

const products = ref([])

onMounted(async () => {
  const productsRes = await axios.get(`${API_URL}/products?limit=8`)
  products.value = productsRes.data
})

function onBeforeEnter(el) {
  el.style.opacity = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    transform: 'translate(12px, 10%)',
    delay: el.dataset.index * 0.3,
    onComplete: done
  })
}
</script>

<template>
  <section class="lg:max-w-8xl mx-auto min-h-screen py-32 flex flex-col items-center">
    <div class="flex flex-col mb-10">
      <h2 class="text-5xl text-center font-black">Nuestros productos más vendidos</h2>
      <p class="text-lg">
        Explora nuestra selección de productos más vendidos. Calidad y estilo que te encantarán.
        ¡Haz tu compra ahora!
      </p>
    </div>

    <section class="w-full flex flex-wrap justify-center lg:justify-start">
      <TransitionGroup @before-enter="onBeforeEnter" @enter="onEnter">
        <ProductCard
          :product="product"
          v-for="(product, index) in products"
          :key="product.id"
          :data-index="index"
        />
      </TransitionGroup>
    </section>
  </section>
</template>
