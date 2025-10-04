<script setup>
// Layout meta
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

// Versioning for cache busting
const config = useRuntimeConfig()

useHead({
  bodyAttrs: {
    class: 'home page-template-default page page-id-2 wp-custom-logo wp-embed-responsive theme-octf woocommerce-no-js woocommerce-support'
  },
  meta: [
    { name: 'version', content: config.public.version },
    { name: 'build-date', content: config.public.buildDate }
  ]
})
</script>
<template>
  <div id="page" class="site">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <div id="content" class="site-content">
      <slot />
    </div>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>


