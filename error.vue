<script setup>
// Error page meta
useHead({
  title: 'Sayfa Bulunamadı - MT Trafik | 404 Hatası',
  meta: [
    { name: 'description', content: 'Aradığınız sayfa bulunamadı. MT Trafik ana sayfasına dönmek için tıklayın.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Search functionality
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    navigateTo(`/?search=${encodeURIComponent(searchQuery.value)}`)
  }
}
</script>

<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content text-center">
        <!-- 404 Image -->
        <div class="error-image">
          <img src="/404-error.png" alt="404 Hatası" class="img-fluid">
        </div>
        
        <!-- Error Title -->
        <h1 class="error-title">Üzgünüz! Sayfa Bulunamadı!</h1>
        
        <!-- Error Description -->
        <p class="error-description">
          Aradığınız sayfa mevcut değil. Lütfen ana sayfaya dönün veya arama yapın.
        </p>
        
        <!-- Search Form -->
        <div class="search-section">
          <form @submit.prevent="handleSearch" class="search-form">
            <div class="input-group">
              <input 
                type="text" 
                v-model="searchQuery"
                class="form-control" 
                placeholder="Arama yapın..."
                required
              >
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        
        <!-- Navigation Buttons -->
        <div class="navigation-buttons">
          <NuxtLink to="/" class="btn btn-primary btn-lg">
            <i class="fas fa-home"></i> Ana Sayfaya Dön
          </NuxtLink>
          <NuxtLink to="/hizmetlerimiz" class="btn btn-success btn-lg">
            <i class="fas fa-cogs"></i> Hizmetlerimiz
          </NuxtLink>
          <NuxtLink to="/iletisim" class="btn btn-outline-primary btn-lg">
            <i class="fas fa-envelope"></i> İletişim
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #f8f9fa;
  padding: 60px 0;
}

.error-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.error-image {
  margin-bottom: 30px;
}

.error-image img {
  max-width: 200px;
  height: auto;
}

.error-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
}

.error-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

.search-section {
  margin: 30px 0;
}

.search-form .input-group {
  max-width: 400px;
  margin: 0 auto;
}

.search-form .form-control {
  border-radius: 25px 0 0 25px;
  border-right: none;
  padding: 12px 20px;
  font-size: 16px;
}

.search-form .btn {
  border-radius: 0 25px 25px 0;
  padding: 12px 20px;
  background: #2377FC;
  border-color: #2377FC;
}

.search-form .btn:hover {
  background: #1a5bb8;
  border-color: #1a5bb8;
}

.navigation-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
}

.navigation-buttons .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  min-width: 180px;
  justify-content: center;
}

.btn-primary {
  background: #2377FC;
  border-color: #2377FC;
  color: white;
}

.btn-primary:hover {
  background: #1a5bb8;
  border-color: #1a5bb8;
  color: white;
}

.btn-success {
  background: #28a745;
  border-color: #28a745;
  color: white;
}

.btn-success:hover {
  background: #218838;
  border-color: #218838;
  color: white;
}

.btn-outline-primary {
  background: transparent;
  color: #2377FC;
  border: 2px solid #2377FC;
}

.btn-outline-primary:hover {
  background: #2377FC;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .error-title {
    font-size: 2rem;
  }
  
  .navigation-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .navigation-buttons .btn {
    width: 100%;
    max-width: 250px;
  }
  
  .search-form .input-group {
    margin: 0 15px;
  }
}
</style>