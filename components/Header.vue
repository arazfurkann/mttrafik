<template>
  <header id="site-header" class="site-header sticky-header header-static">
    <!-- Top Bar -->
    <div class="header-topbar style-2">
      <div class="octf-area-wrap">
       
          <div class="row d-flex justify-content-between">
          
            <div class="">
              <ul class="topbar-info align-self-end clearfix">
                <li><a href="tel:+90-538-070-4761"><i class="fas fa-phone-alt"></i> +90-538-070-4761</a></li>
                <li><a href="mailto:info@mttrafik.com.tr"><i class="fas fa-envelope"></i> info@mttrafik.com.tr</a></li>
                <li><a href="https://www.google.com/maps/search/İdealtepe+Mah.+Dik+Sok.+No:13+K:2+Maltepe+İstanbul" target="_blank"><i class="fas fa-map-marker-alt"></i> İdealtepe Mah. Dik Sok. No:13 K:2 Maltepe/İstanbul</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="social-list">
              
              </ul>
            </div>
          </div>
   
      </div>
    </div>

    <!-- Main Header -->
    <div class="octf-main-header">
      <div class="octf-area-wrap">
        <div class="container octf-mainbar-container">
          <div class="octf-mainbar">
            <div class="octf-mainbar-row octf-row">
              <div class="octf-col logo-col">
                <div id="site-logo" class="site-logo">
                  <NuxtLink to="/">
                    <img src="/logo.png" alt="Mttrafik" max-width="145" max-height="145" class="">
                  </NuxtLink>
                </div>
              </div>
              <div class="octf-col menu-col">
                <nav id="site-navigation" class="main-navigation">
                  <ul class="menu">
                    <li :class="{ 'current-menu-item': $route.path === '/' }">
                      <NuxtLink to="/">Ana Sayfa</NuxtLink>
                    </li>
                    <li :class="{ 'current-menu-item': $route.path === '/hakkimizda' }">
                      <NuxtLink to="/hakkimizda">Hakkımızda</NuxtLink>
                    </li>
                    <li class="menu-item-has-children" :class="{ 'current-menu-item': $route.path.startsWith('/hizmetlerimiz') }">
                      <NuxtLink to="/hizmetlerimiz">Hizmetlerimiz</NuxtLink>
                      <ul class="sub-menu">
                        <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-trafik-konstruksiyonlari' }">
                          <NuxtLink to="/hizmetlerimiz-trafik-konstruksiyonlari">Trafik Konstrüksiyonları</NuxtLink>
                        </li>
                        <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-poligon-direkler' }">
                          <NuxtLink to="/hizmetlerimiz-poligon-direkler">Poligon Direkler</NuxtLink>
                        </li>
                        <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-omega-direkler' }">
                          <NuxtLink to="/hizmetlerimiz-omega-direkler">Omega Direkler</NuxtLink>
                        </li>
                        <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-serbest-gecis-sistemleri' }">
                          <NuxtLink to="/hizmetlerimiz-serbest-gecis-sistemleri">Serbest Geçiş Sistemleri</NuxtLink>
                        </li>
                        <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-vms-vts-konstruksiyonlari' }">
                          <NuxtLink to="/hizmetlerimiz-vms-vts-konstruksiyonlari">VMS-VTS Konstrüksiyonları</NuxtLink>
                        </li>
                        <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-korkuluk-sistemleri' }">
                          <NuxtLink to="/hizmetlerimiz-korkuluk-sistemleri">Korkuluk Sistemleri</NuxtLink>
                        </li>
                        <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-yangin-merdivenleri' }">
                          <NuxtLink to="/hizmetlerimiz-yangin-merdivenleri">Yangın Merdivenleri</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li :class="{ 'current-menu-item': $route.path === '/projelerimiz' }">
                      <NuxtLink to="/projelerimiz">Projelerimiz</NuxtLink>
                    </li>
                    <li :class="{ 'current-menu-item': $route.path === '/iletisim' }">
                      <NuxtLink to="/iletisim">İletişim</NuxtLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- Mobile Header -->
     <div class="header_mobile" :class="{ 'active': mobileMenuOpen }">
       <div class="container">
         <div class="mlogo_wrapper clearfix">
           <div class="mobile_logo">
             <NuxtLink to="/">
               <img src="/logo.png" alt="Mttrafik">
             </NuxtLink>
           </div>
           <div id="mmenu_toggle" :class="{ 'active': mobileMenuOpen }">
             <button @click="toggleMobileMenu"></button>
           </div>
         </div>
         <div class="mmenu_wrapper">
           <div class="mobile_nav" :class="{ 'collapse': !mobileMenuOpen }" :style="{ display: mobileMenuOpen ? 'block' : 'none' }">
             <ul id="menu-main-menu" class="mobile_mainmenu">
               <li :class="{ 'current-menu-item': $route.path === '/' }">
                 <NuxtLink to="/" @click="closeMobileMenu">Ana Sayfa</NuxtLink>
               </li>
               <li :class="{ 'current-menu-item': $route.path === '/hakkimizda' }">
                 <NuxtLink to="/hakkimizda" @click="closeMobileMenu">Hakkımızda</NuxtLink>
               </li>
               <li class="menu-item-has-children" :class="{ 'current-menu-item': $route.path.startsWith('/hizmetlerimiz') }">
                 <span class="arrow" :class="{ 'active': servicesMenuOpen }" @click="toggleServicesMenu">
                 </span>
                 <a href="#" @click.prevent="toggleServicesMenu">Hizmetlerimiz</a>
                 <ul class="sub-menu" :class="{ 'show': servicesMenuOpen }">
                   <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz' }">
                     <NuxtLink to="/hizmetlerimiz" @click="closeMobileMenu">Tüm Hizmetler</NuxtLink>
                   </li>
                   <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-trafik-konstruksiyonlari' }">
                     <NuxtLink to="/hizmetlerimiz-trafik-konstruksiyonlari" @click="closeMobileMenu">Trafik Konstrüksiyonları</NuxtLink>
                   </li>
                   <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-poligon-direkler' }">
                     <NuxtLink to="/hizmetlerimiz-poligon-direkler" @click="closeMobileMenu">Poligon Direkler</NuxtLink>
                   </li>
                   <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-omega-direkler' }">
                     <NuxtLink to="/hizmetlerimiz-omega-direkler" @click="closeMobileMenu">Omega Direkler</NuxtLink>
                   </li>
                   <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-serbest-gecis-sistemleri' }">
                     <NuxtLink to="/hizmetlerimiz-serbest-gecis-sistemleri" @click="closeMobileMenu">Serbest Geçiş Sistemleri</NuxtLink>
                   </li>
                   <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-vms-vts-konstruksiyonlari' }">
                     <NuxtLink to="/hizmetlerimiz-vms-vts-konstruksiyonlari" @click="closeMobileMenu">VMS-VTS Konstrüksiyonları</NuxtLink>
                   </li>
                   <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-korkuluk-sistemleri' }">
                     <NuxtLink to="/hizmetlerimiz-korkuluk-sistemleri" @click="closeMobileMenu">Korkuluk Sistemleri</NuxtLink>
                   </li>
                   <li :class="{ 'current-menu-item': $route.path === '/hizmetlerimiz-yangin-merdivenleri' }">
                     <NuxtLink to="/hizmetlerimiz-yangin-merdivenleri" @click="closeMobileMenu">Yangın Merdivenleri</NuxtLink>
                   </li>
                 </ul>
               </li>
               <li :class="{ 'current-menu-item': $route.path === '/projelerimiz' }">
                 <NuxtLink to="/projelerimiz" @click="closeMobileMenu">Projelerimiz</NuxtLink>
               </li>
               <li :class="{ 'current-menu-item': $route.path === '/iletisim' }">
                 <NuxtLink to="/iletisim" @click="closeMobileMenu">İletişim</NuxtLink>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Mobile menu state
const mobileMenuOpen = ref(false)
const servicesMenuOpen = ref(false)

// Mobile menu functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    servicesMenuOpen.value = false
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  servicesMenuOpen.value = false
}

const toggleServicesMenu = () => {
  servicesMenuOpen.value = !servicesMenuOpen.value
}

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  if (mobileMenuOpen.value && !event.target.closest('.header_mobile')) {
    closeMobileMenu()
  }
}

// Add event listener for outside clicks
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
/* MT Trafik Color Variables */
:root {
  --primary-color: #d37418;
  --secondary-color: #3b484e;
  --primary-hover: #b86315;
  --secondary-hover: #2d363a;
  --primary-light: #e8a85a;
  --secondary-light: #5a6b73;
}

/* Header Top Bar Styling */
.header-topbar {
  background: var(--secondary-color) !important;
  color: white !important;
}

.header-topbar .topbar-info a {
  color: white !important;
  transition: color 0.3s ease;
}

.header-topbar .topbar-info a:hover {
  color: var(--primary-color) !important;
}

/* Main Header Styling */
.octf-main-header {
  background: white !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
}

/* Navigation Menu Styling */
.main-navigation .menu > li > a {
  color: var(--secondary-color) !important;
  font-weight: 500 !important;
  transition: color 0.3s ease;
}

.main-navigation .menu > li > a:hover,
.main-navigation .menu > li.current-menu-item > a {
  color: var(--primary-color) !important;
}

/* Global mobile menu styles to override any conflicting CSS */
.mobile_mainmenu .sub-menu {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  background: #f8f9fa !important;
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
  height: 0 !important;
  max-height: 0 !important;
  overflow: hidden !important;
  position: relative !important;
  z-index: 9999 !important;
  transition: all 0.3s ease !important;
}

.mobile_mainmenu .sub-menu.show {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  height: auto !important;
  max-height: 500px !important;
  overflow: visible !important;
}

.mobile_mainmenu .sub-menu li {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  background: #f8f9fa !important;
  margin: 0 !important;
  padding: 0 !important;
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
  position: relative !important;
  z-index: 9999 !important;
}

.mobile_mainmenu .sub-menu a {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  color: #333 !important;
  background: #f8f9fa !important;
  padding: 12px 40px !important;
  font-size: 14px !important;
  text-decoration: none !important;
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
  position: relative !important;
  z-index: 9999 !important;
}
</style>

<style scoped>
/* Desktop Dropdown Menu Styles */
.menu-item-has-children {
  position: relative;
}

.menu-item-has-children:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 250px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 999;
  padding: 10px 0;
  margin-top: 5px;
}

.sub-menu li {
  display: block;
  margin: 0;
}

.sub-menu a {
  display: block;
  padding: 12px 20px;
  color: #333 !important;
  background: white !important;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f0f0f0;
}

.sub-menu a:hover {
  background: white !important;
  color: var(--primary-color) !important;
  padding-left: 25px;
}

.sub-menu li:last-child a {
  border-bottom: none;
}

.sub-menu .current-menu-item a {
  background: white !important;
  color: var(--primary-color) !important;
  font-weight: 600;
}

/* Arrow indicator for dropdown */
.menu-item-has-children > a::after {
  content: '\f107';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-left: 8px;
  font-size: 12px;
  transition: transform 0.3s ease;
}

.menu-item-has-children:hover > a::after {
  transform: rotate(180deg);
}

/* Mobile Menu Styles - Template Compatible */

.mobile_nav.collapse {
  display: none !important;
}

.mobile_nav {
  background: white !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
  position: relative !important;
  z-index: 1000 !important;
}

.mobile_mainmenu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile_mainmenu li {
  position: relative !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  background: white !important;
  border-bottom: 1px solid #eee !important;
}

.mobile_mainmenu li:last-child {
  border-bottom: none !important;
}

.mobile_mainmenu li.menu-item-has-children {
  position: relative;
}



.mobile_mainmenu a {
  display: block !important;
  padding: 15px 20px !important;
  color: #333 !important;
  text-decoration: none !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
  background: white !important;
}

.mobile_mainmenu a:hover {
  background: #f8f9fa !important;
  color: #2377FC !important;
}

/* Force submenu visibility with maximum specificity */
.mobile_mainmenu .sub-menu,
.mobile_mainmenu ul.sub-menu,
ul.mobile_mainmenu .sub-menu {
  background: #f8f9fa !important;
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  height: 0 !important;
  max-height: 0 !important;
  overflow: hidden !important;
  position: relative !important;
  z-index: 9999 !important;
  transition: all 0.3s ease !important;
}

.mobile_mainmenu .sub-menu.show,
.mobile_mainmenu ul.sub-menu.show,
ul.mobile_mainmenu .sub-menu.show {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  height: auto !important;
  max-height: 500px !important;
  overflow: visible !important;
}

.mobile_mainmenu .sub-menu li,
.mobile_mainmenu ul.sub-menu li,
ul.mobile_mainmenu .sub-menu li {
  border-bottom: 1px solid #e0e0e0 !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  background: #f8f9fa !important;
  visibility: visible !important;
  opacity: 1 !important;
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
  position: relative !important;
  z-index: 9999 !important;
}

.mobile_mainmenu .sub-menu li:last-child,
.mobile_mainmenu ul.sub-menu li:last-child,
ul.mobile_mainmenu .sub-menu li:last-child {
  border-bottom: none !important;
}

.mobile_mainmenu .sub-menu a,
.mobile_mainmenu ul.sub-menu a,
ul.mobile_mainmenu .sub-menu a {
  padding: 12px 40px !important;
  font-size: 14px !important;
  color: #333 !important;
  font-weight: 500 !important;
  display: block !important;
  background: #f8f9fa !important;
  text-decoration: none !important;
  visibility: visible !important;
  opacity: 1 !important;
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
  position: relative !important;
  z-index: 9999 !important;
  border: none !important;
}

.mobile_mainmenu .sub-menu a:hover,
.mobile_mainmenu ul.sub-menu a:hover,
ul.mobile_mainmenu .sub-menu a:hover {
  background: #e9ecef !important;
  color: var(--primary-color) !important;
}

.mobile_mainmenu .current-menu-item a {
  color: var(--primary-color);
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .menu-item-has-children:hover .sub-menu {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
  }
}
</style>
