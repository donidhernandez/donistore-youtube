<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const productRes = await axios.get(`${API_URL}/products/${route.params.id}`)
  product.value = productRes.data
})
</script>

<template>
  <div class="bg-white min-h-screen py-8 flex items-center" v-if="product">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4 h-full items-center">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
              alt="Product Image"
            />
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-full px-2">
              <button
                class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-5xl font-bold text-gray-900 mb-2">{{ product.title }}</h2>

          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-black mr-1">Precio:</span>
              <span class="text-black">${{ product.price }}</span>
            </div>
            <div>
              <span class="font-bold text-black mr-1">Categoría:</span>
              <span class="text-gray-600">{{ product.category }}</span>
            </div>
          </div>

          <div>
            <span class="font-bold text-gray-700">Descripción:</span>
            <p class="text-gray-600 text-sm mt-2">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
