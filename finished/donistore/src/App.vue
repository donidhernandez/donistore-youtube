<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import 'animate.css'
</script>

<template>
  <Header />

  <RouterView v-slot="{ Component, route }">
    <Transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>

  <Footer />
</template>
