<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from '../stores/auth'

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(6)
})
async function onSubmit(values) {
  const authStore = useAuthStore()
  const { username, password } = values

  try {
    return await authStore.login(username, password)
  } catch (error) {
    return setErrors({ apiError: error })
  }
}
</script>

<template>
  <div class="flex min-h-screen flex-col justify-center px-6 overflow-hidden lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Inicia sesión con tu cuenta
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form @submit="onSubmit" class="space-y-6" :validation-schema="schema">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Usuario</label
          >
          <div class="mt-2">
            <Field
              name="username"
              type="text"
              aria-autocomplete="none"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="email" class="text-red-500 mt-2" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Contraseña</label
            >
          </div>
          <div class="mt-2">
            <Field
              name="password"
              type="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="password" class="text-red-500 mt-2" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Iniciar sesión
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
