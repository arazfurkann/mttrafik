<template>
  <div>
    <Head>
      <title>Projelerimiz - MT Trafik | Tamamlanan Trafik Projeleri</title>
      <meta name="description" content="MT Trafik projelerimizi inceleyin. Trafik konstrüksiyonları, poligon direkler, omega direkler, serbest geçiş sistemleri ve yangın merdivenleri alanında tamamladığımız başarılı projeler.">
      <meta name="keywords" content="MT Trafik projeleri, tamamlanan trafik projeleri, trafik konstrüksiyon projeleri, poligon direk projeleri, omega direk projeleri, yangın merdiveni projeleri, başarılı projeler">
      <meta name="author" content="MT Trafik">
      <meta name="robots" content="index, follow">
      <meta property="og:title" content="Projelerimiz - MT Trafik">
      <meta property="og:description" content="Trafik teknolojileri alanında tamamladığımız başarılı projeler. Kaliteli çözümler, güvenilir hizmet.">
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://mttrafik.com.tr/projelerimiz">
      <meta property="og:image" content="/logo.png">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Projelerimiz - MT Trafik">
      <meta name="twitter:description" content="Trafik teknolojileri alanında başarılı projelerimizi keşfedin.">
      <link rel="canonical" href="https://mttrafik.com.tr/projelerimiz">
    </Head>

    <!-- Page Header -->
    <PageHeader page-title="PROJELERİMİZ" />

    <!-- Projects Gallery Section -->
    <section class="projects-gallery">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title text-center mb-5">Proje Galerimiz</h2>
            <p class="text-center mb-5">Gerçekleştirdiğimiz projelerden örnekler</p>
          </div>
        </div>
        
        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in projectImages" 
            :key="index"
            class="gallery-item"
            @click="openLightbox(index)"
          >
            <div class="gallery-image-wrapper">
              <img 
                :src="image.src" 
                :alt="image.alt"
                class="gallery-image"
                loading="lazy"
              />
              <div class="gallery-overlay">
                <div class="gallery-overlay-content">
                  <i class="fas fa-search-plus"></i>
                  <span>Büyüt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-modal" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <i class="fas fa-times"></i>
        </button>
        <button class="lightbox-prev" @click="previousImage" v-if="currentImageIndex > 0">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="lightbox-next" @click="nextImage" v-if="currentImageIndex < projectImages.length - 1">
          <i class="fas fa-chevron-right"></i>
        </button>
        <img 
          :src="projectImages[currentImageIndex].src" 
          :alt="projectImages[currentImageIndex].alt"
          class="lightbox-image"
        />
        <div class="lightbox-counter">
          {{ currentImageIndex + 1 }} / {{ projectImages.length }}
        </div>
      </div>
    </div>

    <!-- Projects Content -->
  

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="stat-item text-center">
              <div class="stat-number">50+</div>
              <div class="stat-label">Tamamlanan Proje</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="stat-item text-center">
              <div class="stat-number">100+</div>
              <div class="stat-label">Mutlu Müşteri</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="stat-item text-center">
              <div class="stat-number">15+</div>
              <div class="stat-label">Yıl Deneyim</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="stat-item text-center">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Destek Hizmeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Projeniz İçin Bizimle İletişime Geçin</h2>
            <p>Uzman ekibimizle projelerinizi hayata geçirelim.</p>
            <NuxtLink to="/iletisim" class="btn btn-primary">İletişime Geç</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Gallery state
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Project images from OurProjects folder
const projectImages = ref([
  { src: '/images/OurProjects/IMG-20250912-WA0012.jpg', alt: 'Proje 1' },
  { src: '/images/OurProjects/IMG-20250912-WA0013.jpg', alt: 'Proje 2' },
  { src: '/images/OurProjects/IMG-20250912-WA0014.jpg', alt: 'Proje 3' },
  { src: '/images/OurProjects/IMG-20250912-WA0015.jpg', alt: 'Proje 4' },
  { src: '/images/OurProjects/IMG-20250912-WA0016.jpg', alt: 'Proje 5' },
  { src: '/images/OurProjects/IMG-20250912-WA0017.jpg', alt: 'Proje 6' },
  { src: '/images/OurProjects/IMG-20250912-WA0018.jpg', alt: 'Proje 7' },
  { src: '/images/OurProjects/IMG-20250912-WA0019.jpg', alt: 'Proje 8' },
  { src: '/images/OurProjects/IMG-20250912-WA0020.jpg', alt: 'Proje 9' },
  { src: '/images/OurProjects/IMG-20250912-WA0021.jpg', alt: 'Proje 10' },
  { src: '/images/OurProjects/IMG-20250912-WA0022.jpg', alt: 'Proje 11' },
  { src: '/images/OurProjects/IMG-20250912-WA0023.jpg', alt: 'Proje 12' },
  { src: '/images/OurProjects/IMG-20250912-WA0024.jpg', alt: 'Proje 13' },
  { src: '/images/OurProjects/IMG-20250912-WA0025.jpg', alt: 'Proje 14' },
  { src: '/images/OurProjects/IMG-20250912-WA0026.jpg', alt: 'Proje 15' },
  { src: '/images/OurProjects/IMG-20250912-WA0027.jpg', alt: 'Proje 16' },
  { src: '/images/OurProjects/IMG-20250914-WA0005.jpg', alt: 'Proje 17' },
  { src: '/images/OurProjects/IMG-20250914-WA0008.jpg', alt: 'Proje 18' },
  { src: '/images/OurProjects/IMG-20250914-WA0009.jpg', alt: 'Proje 19' },
  { src: '/images/OurProjects/IMG-20250914-WA0010.jpg', alt: 'Proje 20' },
  { src: '/images/OurProjects/IMG-20250914-WA0011.jpg', alt: 'Proje 21' },
  { src: '/images/OurProjects/WhatsApp%20Görsel%202025-09-14%20saat%2015.16.02_e00c6876.jpg', alt: 'Proje 22' }
])

// Gallery functions
const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (currentImageIndex.value < projectImages.value.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (!lightboxOpen.value) return
  
  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      previousImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})

useHead({
  title: 'Projelerimiz - MT Trafik Demir Çelik',
  meta: [
    { name: 'description', content: 'MT Trafik Demir Çelik projeleri: Trafik güvenlik projeleri, akıllı trafik sistemleri, eğitim merkezleri ve danışmanlık hizmetleri.' }
  ]
})
</script>

<style scoped>

/* Gallery Styles */

.projects-gallery {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}

.gallery-item {
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.gallery-image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay-content {
  text-align: center;
  color: white;
}

.gallery-overlay-content i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.gallery-overlay-content span {
  font-size: 1rem;
  font-weight: 500;
}

/* Lightbox Styles */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.lightbox-prev {
  left: -70px;
}

.lightbox-next {
  right: -70px;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-counter {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  
  .gallery-image-wrapper {
    height: 200px;
  }
  
  .lightbox-prev {
    left: 10px;
  }
  
  .lightbox-next {
    right: 10px;
  }
  
  .lightbox-close {
    top: 10px;
    right: 10px;
  }
  
  .lightbox-counter {
    bottom: 10px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

/* Project Cards Enhancement */
.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

.project-content p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-category {
  background: #007bff;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-year {
  color: #6c757d;
  font-weight: 500;
}


</style>
