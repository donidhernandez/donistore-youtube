<template>
  <footer class="bg-gray-800 text-white py-4 px-3 mt-16">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
        <p class="text-xs text-gray-400 md:text-sm">
          Copyright {{ new Date().getFullYear() }} &copy; Todos Los Derechos Reservados
        </p>
      </div>
      <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
        <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
          <li><a href="#" class="text-gray-400 hover:text-white">Contacto</a></li>
          <li class="mx-4">
            <a href="#" class="text-gray-400 hover:text-white">Políticas de Privacidad</a>
          </li>
          <li><a href="#" class="text-gray-400 hover:text-white">Términos de Uso</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
