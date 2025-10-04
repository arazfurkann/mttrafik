<template>
  <footer id="site-footer" class="site-footer footer-v1">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="widget-footer">
            <h5 class="text-white">Ana Sayfa</h5>
            <ul class="list-items">
              <li class="list-item"><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="widget-footer">
            <h5 class="text-white">Hizmetlerimiz</h5>
            <ul class="list-items">
              <li class="list-item"><NuxtLink to="/hizmetlerimiz">Tüm Hizmetler</NuxtLink></li>
              <li class="list-item"><NuxtLink to="/hizmetlerimiz-trafik-konstruksiyonlari">Trafik Konstrüksiyonları</NuxtLink></li>
              <li class="list-item"><NuxtLink to="/hizmetlerimiz-poligon-direkler">Poligon Direkler</NuxtLink></li>
              <li class="list-item"><NuxtLink to="/hizmetlerimiz-omega-direkler">Omega Direkler</NuxtLink></li>
              <li class="list-item"><NuxtLink to="/hizmetlerimiz-serbest-gecis-sistemleri">Serbest Geçiş Sistemleri</NuxtLink></li>
              <li class="list-item"><NuxtLink to="/hizmetlerimiz-vms-vts-konstruksiyonlari">VMS-VTS Konstrüksiyonları</NuxtLink></li>
              <li class="list-item"><NuxtLink to="/hizmetlerimiz-korkuluk-sistemleri">Korkuluk Sistemleri</NuxtLink></li>
              <li class="list-item"><NuxtLink to="/hizmetlerimiz-yangin-merdivenleri">Yangın Merdivenleri</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="widget-footer">
            <h5 class="text-white">Şirket</h5>
            <ul class="list-items">
              <li class="list-item"><NuxtLink to="/hakkimizda">Hakkımızda</NuxtLink></li>
              <li class="list-item"><NuxtLink to="/projelerimiz">Projelerimiz</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="widget-footer">
            <h5 class="text-white">İletişim</h5>
            <ul class="list-items">
              <li class="list-item"><NuxtLink to="/iletisim">İletişim</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-65">
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="footer-logo">
            <img src="/logo.png" alt="MT Trafik Demir Çelik" class="footer-logo-img">
            <div class="footer-logo-text">
              <span class="footer-brand-name">MT Trafik</span>
              <span class="footer-brand-subtitle">Demir Çelik İnş. ve İnş Malz. San. Tic. Ltd. Şti</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-left text-md-right align-self-center">
          <p class="copyright-text">Copyright © {{ currentYear }} MT Trafik Demir Çelik İnş. ve İnş Malz. San. Tic. Ltd. Şti Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* MT Trafik Color Variables */
:root {
  --primary-color: #d37418;
  --secondary-color: #3b484e;
  --primary-hover: #b86315;
  --secondary-hover: #2d363a;
  --primary-light: #e8a85a;
  --secondary-light: #5a6b73;
}

/* Footer Styling */
.site-footer {
  background: var(--secondary-color) !important;
  color: white !important;
  padding: 60px 0 30px 0;
}

.widget-footer h5 {
  color: white !important;
  margin-bottom: 20px;
  font-weight: 600;
}

.list-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  margin-bottom: 8px;
}

.list-item a {
  color: #ccc !important;
  text-decoration: none;
  transition: color 0.3s ease;
}

.list-item a:hover {
  color: var(--primary-color) !important;
}

.copyright-text {
  color: #ccc !important;
  margin: 0;
}

/* Footer Logo Styles */
.footer-logo {
  display: flex;
  align-items: center;
}

.footer-logo-img {
  height: 40px;
  width: auto;
  margin-right: 12px;
  filter: brightness(0) invert(1); /* Makes logo white for dark footer */
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.footer-brand-name {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  font-family: "DM Sans", sans-serif;
}

.footer-brand-subtitle {
  font-size: 12px;
  font-weight: 500;
  color: var(--primary-color);
  font-family: "DM Sans", sans-serif;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-logo {
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .footer-logo-text {
    display: none;
  }
}
</style>
