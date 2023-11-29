<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  rate: {
    type: Number,
    required: true,
    default: 0
  }
})
</script>

<template>
  <div class="mx-auto flex gap-1 items-center">
    <button v-for="star in 5" :key="`rating-${star}`" class="focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        :class="[
          '-mx-1 h-7 w-7 text-gray-300 transition duration-75',
          {
            'text-yellow-500': rate >= star
          }
        ]"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </button>
  </div>
</template>
