<template>
  <div class="h-96 text-white text-center grid bg-cover bg-[url('/bg.jpg')]">
    <div class="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>
    <div class="col-start-1 row-start-1 mx-auto my-auto">
      <Transition name="hero-title" appear>
        <h1 class="text-8xl font-bold mt-2">Doni Store</h1>
      </Transition>
      <Transition name="hero-description" appear>
        <p class="text-2xl">Los mejores productos del mercado</p>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.hero-title-enter-active {
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero-title-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.hero-description-enter-active {
  transition: all 0.5s linear 0.5s;
}

.hero-description-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}
</style>
