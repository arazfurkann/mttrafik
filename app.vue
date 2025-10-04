<script setup>
import { RouterView } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";

// Set favicon and versioning
const config = useRuntimeConfig()

useHead({
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", href: "/logo.png" },
    { rel: "apple-touch-icon", href: "/logo.png" },
  ],
  meta: [
    { name: 'version', content: config.public.version },
    { name: 'build-date', content: config.public.buildDate },
    { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
    { 'http-equiv': 'Pragma', content: 'no-cache' },
    { 'http-equiv': 'Expires', content: '0' }
  ]
})
</script>

<template>
  <component :is="$route.meta.layout || MainLayout">
    <NuxtPage />
  </component>
</template>

<style></style>
