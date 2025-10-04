<template>
  <div>
    <Head>
      <title>İletişim - MT Trafik | Trafik Teknolojileri İletişim Bilgileri</title>
      <meta name="description" content="MT Trafik ile iletişime geçin. Trafik konstrüksiyonları, poligon direkler, omega direkler ve diğer hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin. Profesyonel danışmanlık hizmeti.">
      <meta name="keywords" content="MT Trafik iletişim, trafik teknolojileri iletişim, trafik konstrüksiyonları danışmanlık, poligon direk bilgi, omega direk danışmanlık, yangın merdiveni bilgi, profesyonel danışmanlık">
      <meta name="author" content="MT Trafik">
      <meta name="robots" content="index, follow">
      <meta property="og:title" content="İletişim - MT Trafik">
      <meta property="og:description" content="Trafik teknolojileri alanında profesyonel danışmanlık için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmaya hazır.">
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://mttrafik.com.tr/iletisim">
      <meta property="og:image" content="/logo.png">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="İletişim - MT Trafik">
      <meta name="twitter:description" content="Trafik teknolojileri alanında profesyonel danışmanlık için iletişime geçin.">
      <link rel="canonical" href="https://mttrafik.com.tr/iletisim">
    </Head>

    <!-- Page Header -->
    <PageHeader page-title="İLETİŞİM" />

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="contact-form">
              <h2>Bize Mesaj Gönderin</h2>
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" v-model="form.name" placeholder="Adınız Soyadınız" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="email" v-model="form.email" placeholder="E-posta Adresiniz" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="tel" v-model="form.phone" placeholder="Telefon Numaranız">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <select v-model="form.subject" required>
                        <option value="">Konu Seçiniz</option>
                        <option value="trafik-danismanligi">Trafik Danışmanlığı</option>
                        <option value="egitim-hizmetleri">Eğitim Hizmetleri</option>
                        <option value="proje-yonetimi">Proje Yönetimi</option>
                        <option value="genel">Genel Bilgi</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <textarea v-model="form.message" placeholder="Mesajınız" rows="5" required></textarea>
                </div>
                <button type="submit" class="octf-btn">Mesaj Gönder</button>
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-info">
              <h2>İletişim Bilgileri</h2>
              

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h4>Telefon</h4>
                  <p><a href="tel:+90-212-555-0123">+90 212 555 01 23</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h4>E-posta</h4>
                  <p><a href="mailto:info@mttrafik.com">info@mttrafik.com</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                  <h4>Adres</h4>
                  <p>İdealtepe Mah. Dik Sok. No:13 K:2 Maltepe/İstanbul</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-details">
                  <h4>Çalışma Saatleri</h4>
                  <p>Pazartesi - Cuma: 09:00 - 18:00<br>Cumartesi: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Maps Section -->
    <section class="map-section">
      <div class="no-padding">
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.706527995692!2d29.122403484467057!3d40.94409864954175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6900036aaab%3A0xd5561b6d5a95f1e9!2s%C4%B0dealtepe%2C%20Dik%20Sk.%20No%3A13%20K%3A2%2C%2034841%20Maltepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1759089451302!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>

   
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  try {
    // Form submission logic will be implemented here
    console.log('Form submitted:', form.value)
    alert('Mesajınız başarıyla gönderildi!')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
  }
}

useHead({
  title: 'İletişim - MT Trafik Demir Çelik',
  meta: [
    { name: 'description', content: 'MT Trafik Demir Çelik ile iletişime geçin. Adres, telefon, e-posta bilgileri ve iletişim formu.' }
  ]
})
</script>

<style scoped>
/* Contact Details Styling */
.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
}

.contact-icon {
  margin-right: 15px;
  margin-top: 5px;
  flex-shrink: 0;
}

.contact-icon i {
  font-size: 18px;
  color: var(--primary-color, #d37418);
}

.contact-details h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.contact-details p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}

.contact-details a {
  color: var(--primary-color, #d37418);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: var(--primary-hover, #b86315);
  text-decoration: underline;
}

/* Contact Form Styling */
.contact-form {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.contact-form h2 {
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
  font-weight: 600;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color, #d37418);
  box-shadow: 0 0 0 2px rgba(211, 116, 24, 0.1);
}

.octf-btn {
  background: var(--primary-color, #d37418);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.octf-btn:hover {
  background: var(--primary-hover, #b86315);
}

/* Contact Info Section */
.contact-info h2 {
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
  font-weight: 600;
}

/* Google Maps Section */
.map-section {
  margin-top: 60px;
}

.no-padding {
  padding: 0;
}

.map {
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.map iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: none !important;
  -webkit-filter: none !important;
}

/* Ensure map displays in full color */
.map {
  background: #f0f0f0;
}

.map iframe {
  background: transparent;
}
</style>
