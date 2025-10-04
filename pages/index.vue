<template>
  <div>
    <Head>
      <title>MT Trafik - Modern Trafik Teknolojileri | Trafik Konstrüksiyonları</title>
      <meta name="description" content="MT Trafik, modern trafik teknolojileri alanında uzmanlaşmış bir firmadır. Trafik konstrüksiyonları, poligon direkler, omega direkler, serbest geçiş sistemleri ve yangın merdivenleri konularında profesyonel hizmet sunuyoruz.">
      <meta name="keywords" content="trafik konstrüksiyonları, poligon direkler, omega direkler, serbest geçiş sistemleri, yangın merdivenleri, VMS VTS konstrüksiyonları, korkuluk sistemleri, trafik teknolojileri, MT Trafik">
      <meta name="author" content="MT Trafik">
      <meta name="robots" content="index, follow">
      <meta property="og:title" content="MT Trafik - Modern Trafik Teknolojileri">
      <meta property="og:description" content="Trafik konstrüksiyonları, poligon direkler, omega direkler ve daha fazlası için profesyonel hizmet. 10+ yıl deneyim, 100+ profesyonel mühendis.">
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://mttrafik.com.tr">
      <meta property="og:image" content="/logo.png">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="MT Trafik - Modern Trafik Teknolojileri">
      <meta name="twitter:description" content="Trafik konstrüksiyonları ve modern trafik teknolojileri alanında uzman hizmet.">
      <link rel="canonical" href="https://mttrafik.com.tr">
    </Head>
    <!-- Slider Section -->
   

    <!-- Hero Section -->
    <section class="top">
      <div class="container">
        <div class="space-50 d-none d-md-block"></div>
        <div class="space-60"></div>
        <div class="row">
          <div class="col-lg-6 text-center">
            <img src="/logo-buyuk.png" alt="MT Trafik Logo" class="hero-logo">
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h6>EN İYİ HİZMETLERİ SUNUYORUZ</h6>
            <h2>İşletmenizin potansiyelini büyütmenize yardımcı oluyoruz</h2>
            <div class="space-4"></div>
            <p class="pr-xl-5 mr-xl-4">10 yıldan fazla deneyime sahip 100+ profesyonel mühendisimizle üstün kaliteli ürünler sunuyoruz</p>
            <div class="space-20"></div>
            <div class="space-4"></div>
            <div class="ot-button">
              <NuxtLink to="/hakkimizda" class="octf-btn octf-btn-primary">Detayları Gör</NuxtLink>
            </div>
          </div>
     
        </div>
        <div class="space-50 d-none d-md-block"></div>
        <div class="space-60"></div>
        <hr>
        <div class="space-40"></div>
        
      </div>
    </section>

    <!-- Services Section -->
    <section class="p-t-40 p-b-0 background-grey">
      <div class="container">
        <div class="space-60"></div>
        <div class="space-40 d-none d-md-block"></div>
        <div class="row">
          <div class="col-md-8 mb-4 mb-md-0">
            <div class="ot-heading mb-0">
              <span>HİZMETLERİMİZ</span>
              <h2 class="main-heading">Sunduğumuz hizmetler</h2>
            </div>
          </div>
          <div class="col-md-4 align-self-end">
            <NuxtLink to="/hizmetlerimiz" class="text-link d-flex justify-content-md-end"> 
              <span class="link-text">Tümünü Gör</span>
              <span class="link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 447.243 447.243" xml:space="preserve" class="">
                  <g transform="matrix(-1,1.2246467991473527e-16,-1.224646799147353e-16,-0.9999999999999999,447.24222564697277,447.2415199279784)">
                    <g>
                      <g>
                        <path d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88C449.654,211.494,437.806,195.059,420.361,192.229z" data-original="#000000" class=""></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
        <div class="space-60"></div>
        <div class="row">
          <div class="col-12">
            <Swiper
              :modules="swiperModules"
              :slides-per-view="1"
              :space-between="30"
              :navigation="true"
              :pagination="{ clickable: true }"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }"
              @slideChange="onSlideChange"
              class="services-swiper"
            >
              <SwiperSlide v-for="service in services" :key="service.id">
                <div class="project-item projects-style-3">
                  <div class="projects-box">
                    <div class="projects-thumbnail">
                      <NuxtLink :to="service.link">
                      
                        <img :src="service.image" :alt="service.title" class="img-fluid" loading="lazy">
                        <span class="overlay">
                          <i class="flaticon-right-arrow-1"></i>
                        </span>
                      </NuxtLink>
                    </div>
                    <div class="portfolio-info full-width">
                      <div class="portfolio-info-inner">
                        <h5>
                          <NuxtLink :to="service.link">{{ service.title }}</NuxtLink>
                        </h5>
                        <p class="portfolio-cates">
                         
                        </p>
                        <p class="service-description">{{ service.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="space-60"></div>
        <div class="space-40 d-none d-md-block"></div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-15">
      <div class="overlay"></div>
      <div class="container">
        <div class="space-60"></div>
        <div class="space-60 d-none d-md-block"></div>
        <div class="space-6"></div>
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-8 mb-4 mb-lg-0">
            <div class="cta-dot-1 d-none d-lg-block">
              <img src="/logo.png" alt="MT Trafik Logo">
            </div>
            <div class="cta-detail">
              <h2>İşinizi büyütmeye hazır mısınız?</h2>
              <p>Müşterilerimize ihtiyaç duydukları ürünleri sunmak, satış sonrası hızlı ve güvenli sevkiyatla siparişi tamamlamak kalite anlayışımızdır. Temel ilkemiz iç ve dış piyasadaki müşterilerimizin tam memnuniyetleridir..</p>
            </div>
          </div>
          <div class="offset-xl-2 col-lg-4 text-lg-center">
            <div class="cta-dot-2 d-none d-lg-block">
              <img src="/logo.png" alt="MT Trafik Logo">
            </div>
            <div class="cta-circle-1 d-none d-lg-block">
              <img src="/logo.png" alt="MT Trafik Logo">
            </div>
            <div class="cta-circle-2 d-none d-lg-block">
              <img src="/logo.png" alt="MT Trafik Logo">
            </div>
            <div class="cta-circle-3 d-none d-lg-block">
              <img src="/logo.png" alt="MT Trafik Logo">
            </div>
            <div class="ot-button">
              <NuxtLink to="/iletisim" class="octf-btn octf-btn-primary">İletişime Geç</NuxtLink>
              <div class="space-20"></div>
              <div class="space-4"></div>
              <p>Ücretsiz Danışmanlık. 7/24 Destek</p>
            </div>
          </div>
        </div>
        <div class="space-60"></div>
        <div class="space-60 d-none d-md-block"></div>
        <div class="space-6"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Page meta
useHead({
  title: 'Ana Sayfa - MT Trafik Demir Çelik',
  meta: [
    { name: 'description', content: 'MT Trafik Demir Çelik - Profesyonel trafik hizmetleri ve çözümleri. Trafik danışmanlığı, eğitim hizmetleri ve proje yönetimi.' }
  ]
})

// Swiper configuration
const swiperModules = [Navigation, Pagination, Autoplay];
const currentSlide = ref(0);

// Services data
const services = ref([
  {
    id: 1,
    title: "Yangın Merdivenleri",
    image: "/images/services/thumbs/fc86aed026f0.jpg",
    link: "/hizmetlerimiz-yangin-merdivenleri",
    categories: ["Güvenlik", "Konstrüksiyon"],
    description: "Yangın veya diğer acil durumlarda güvenli tahliye sağlayan merdiven sistemleri"
  },
  {
    id: 2,
    title: "Trafik Konstrüksiyonları",
    image: "/images/pages/thumbs/2efc4920b138c.jpg",
    link: "/hizmetlerimiz-trafik-konstruksiyonlari",
    categories: ["Konstrüksiyon", "Trafik"],
    description: "Başüstü, L, T konstrüksiyonları ve VMS-VTS sistemleri"
  },
  {
    id: 3,
    title: "Poligon Direkler",
    image: "/images/services/thumbs/23501e7f599b0.jpg",
    link: "/hizmetlerimiz-poligon-direkler",
    categories: ["Direk", "İmalat"],
    description: "Bayrak, kamera ve aydınlatma direkleri imalatı"
  },
  {
    id: 4,
    title: "Serbest Geçiş Sistemleri",
    image: "/images/services/thumbs/319e6e6e5dd06.jpg",
    link: "/hizmetlerimiz-serbest-gecis-sistemleri",
    categories: ["Sistem", "Teknoloji"],
    description: "Otoyol, köprü ve tünel geçiş sistemleri"
  },
  {
    id: 5,
    title: "Omega Direkler",
    image: "/images/services/thumbs/c26669569dd7.jpg",
    link: "/hizmetlerimiz-omega-direkler",
    categories: ["Direk", "Galvaniz"],
    description: "Trafik işaret direkleri ve galvaniz kaplama"
  },
  {
    id: 6,
    title: "VMS-VTS Konstrüksiyonları",
    image: "/images/services/thumbs/1ef841d3cb8b1.jpg",
    link: "/hizmetlerimiz-vms-vts-konstruksiyonlari",
    categories: ["Dijital", "LED"],
    description: "Dijital LED ekran taşıyıcı konstrüksiyonları"
  },
  {
    id: 7,
    title: "Korkuluk Sistemleri",
    image: "/images/services/thumbs/2c278805de8cf.jpg",
    link: "/hizmetlerimiz-korkuluk-sistemleri",
    categories: ["Güvenlik", "Korkuluk"],
    description: "Köprü korkulukları ve güvenlik sistemleri"
  },
  {
    id: 8,
    title: "Projelerimiz",
    image: "/images/services/thumbs/1ad947dc5454a.jpg",
    link: "/projelerimiz",
    categories: ["Referans", "Proje"],
    description: "Gerçekleştirdiğimiz başarılı projeler"
  }
]);

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.activeIndex;
};

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

.services-swiper {
  padding: 20px 0 60px 0;
}

.services-swiper :deep(.swiper-button-next),
.services-swiper :deep(.swiper-button-prev) {
  color: var(--primary-color);
  background: rgba(255, 255, 255, 0.9);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.services-swiper :deep(.swiper-button-next:hover),
.services-swiper :deep(.swiper-button-prev:hover) {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.services-swiper :deep(.swiper-button-next:after),
.services-swiper :deep(.swiper-button-prev:after) {
  font-size: 18px;
  font-weight: bold;
}

.services-swiper :deep(.swiper-pagination-bullet) {
  background: var(--primary-color);
  opacity: 0.3;
  width: 12px;
  height: 12px;
  margin: 0 6px;
  transition: all 0.3s ease;
}

.services-swiper :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  transform: scale(1.2);
}

.services-swiper :deep(.swiper-pagination) {
  bottom: 0;
}

.project-item {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.projects-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.projects-thumbnail {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
}

.projects-thumbnail img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.projects-thumbnail:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(211, 116, 24, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.projects-thumbnail:hover .overlay {
  opacity: 1;
}

.overlay i {
  color: white;
  font-size: 24px;
}

.portfolio-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.portfolio-info-inner h5 {
  margin-bottom: 10px;
}

.portfolio-info-inner h5 a {
  color: #0B1E46;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.portfolio-info-inner h5 a:hover {
  color: var(--primary-color);
}

.portfolio-cates {
  margin-bottom: 10px;
}

.portfolio-cates a {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.service-description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

/* Hero Section Styles */
.top {
  background: #f8f9fa;
  position: relative;
}

.top h6 {
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.top h2 {
  color: #0B1E46;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.top h3 {
  color: #0B1E46;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0;
}

.top p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0;
}

.hero-logo {
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.hero-logo:hover {
  transform: scale(1.05);
}

.gallery {
  gap: 30px;
}

.gallery-item {
  flex: 0 0 auto;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.gallery-item:hover {
  opacity: 1;
}

.client-logo {
  max-width: 120px;
  height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.client-logo:hover {
  filter: grayscale(0%);
  transform: scale(1.1);
}

.gallery-item.galaxy .client-logo {
  filter: grayscale(0%);
  opacity: 1;
}

.top hr {
  border-color: #e9ecef;
  margin: 0;
}

/* CTA Section Styles */
.cta-15 {
  position: relative;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  overflow: hidden;
}

.cta-15 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.cta-15 .container {
  position: relative;
  z-index: 2;
}

.cta-detail h2 {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.cta-detail p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0;
}

.cta-dot-1,
.cta-dot-2,
.cta-circle-1,
.cta-circle-2,
.cta-circle-3 {
  position: absolute;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.cta-dot-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.cta-dot-2 {
  top: 30%;
  right: 15%;
  animation-delay: 1s;
}

.cta-circle-1 {
  top: 60%;
  right: 20%;
  animation-delay: 2s;
}

.cta-circle-2 {
  bottom: 20%;
  right: 10%;
  animation-delay: 3s;
}

.cta-circle-3 {
  bottom: 30%;
  left: 15%;
  animation-delay: 4s;
}

.cta-dot-1 img,
.cta-dot-2 img,
.cta-circle-1 img,
.cta-circle-2 img,
.cta-circle-3 img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.octf-btn {
  display: inline-block;
  padding: 15px 30px;
  background: white;
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid white;
}

.octf-btn:hover {
  background: transparent;
  color: white;
  border-color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.ot-button p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services-swiper {
    padding: 10px 0 40px 0;
  }
  
  .projects-thumbnail img {
    height: 200px;
  }
  
  .services-swiper :deep(.swiper-button-next),
  .services-swiper :deep(.swiper-button-prev) {
    width: 40px;
    height: 40px;
  }
  
  .services-swiper :deep(.swiper-button-next:after),
  .services-swiper :deep(.swiper-button-prev:after) {
    font-size: 14px;
  }
  
  .cta-detail h2 {
    font-size: 2rem;
  }
  
  .cta-detail p {
    font-size: 1rem;
  }
  
  .cta-dot-1 img,
  .cta-dot-2 img,
  .cta-circle-1 img,
  .cta-circle-2 img,
  .cta-circle-3 img {
    width: 40px;
    height: 40px;
  }
  
  .top h2 {
    font-size: 2.2rem;
  }
  
  .top h3 {
    font-size: 1.3rem;
  }
  
  .hero-logo {
    max-width: 300px;
  }
  
  .client-logo {
    max-width: 100px;
    height: 50px;
  }
  
  .gallery {
    gap: 20px;
  }
}
</style>
