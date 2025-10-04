<template>
  <section id="page-title" class="text-light">
    <div class="container">
      <div class="breadcrumb">
        <ul>
          <li><NuxtLink to="/" title="Ana Sayfa">Ana Sayfa</NuxtLink></li>
          <li v-for="(item, index) in breadcrumbItems" :key="index">
            <NuxtLink v-if="item.link" :to="item.link" :title="item.title">{{ item.title }}</NuxtLink>
            <span v-else>{{ item.title }}</span>
          </li>
        </ul>
      </div>
      <div class="page-title">
        <h1>{{ pageTitle }}</h1>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props
const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  },
  breadcrumbItems: {
    type: Array,
    default: () => []
  }
})

// Default breadcrumb items based on route
const route = useRoute()
const breadcrumbItems = computed(() => {
  if (props.breadcrumbItems.length > 0) {
    return props.breadcrumbItems
  }
  
  // Auto-generate breadcrumb based on route
  const items = []
  const pathSegments = route.path.split('/').filter(segment => segment)
  
  if (pathSegments.length > 0) {
    // Add services breadcrumb for service pages
    if (pathSegments[0].startsWith('hizmetlerimiz')) {
      items.push({
        title: 'Hizmetlerimiz',
        link: '/hizmetlerimiz'
      })
    }
    
    // Add current page
    const currentPage = pathSegments[pathSegments.length - 1]
    const pageTitle = getPageTitle(currentPage)
    items.push({
      title: pageTitle,
      link: null
    })
  }
  
  return items
})

// Function to get page title from route
function getPageTitle(routeName) {
  const titles = {
    'hakkimizda': 'Hakkımızda',
    'hizmetlerimiz': 'Hizmetlerimiz',
    'hizmetlerimiz-trafik-konstruksiyonlari': 'Trafik Konstrüksiyonları',
    'hizmetlerimiz-poligon-direkler': 'Poligon Direkler',
    'hizmetlerimiz-omega-direkler': 'Omega Direkler',
    'hizmetlerimiz-serbest-gecis-sistemleri': 'Serbest Geçiş Sistemleri',
    'hizmetlerimiz-vms-vts-konstruksiyonlari': 'VMS-VTS Konstrüksiyonları',
    'hizmetlerimiz-korkuluk-sistemleri': 'Korkuluk Sistemleri',
    'hizmetlerimiz-yangin-merdivenleri': 'Yangın Merdivenleri',
    'projelerimiz': 'Projelerimiz',
    'iletisim': 'İletişim'
  }
  
  return titles[routeName] || routeName
}
</script>

<style scoped>
/* Page header styles are now in global CSS */
</style>
