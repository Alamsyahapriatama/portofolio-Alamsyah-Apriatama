<script setup lang="ts">
import { ref } from "vue";

// Contoh data hardcode untuk konten di atas video.
// Anda bisa mengintegrasikan ini dengan data dari API Anda jika struktur memungkinkan.
const heroContent = ref({
  id: "1",
  videoBackground: "/slider.mp4", // Path ke file video Anda
  title: "Bimbingan Belajar Terpercaya untuk Setiap Jenjang Pendidikan.",
  description:
    "Bantu putra-putri Anda meraih nilai terbaik dan masuk sekolah impian bersama tutor ahli kami",
  buttonText: "Lihat Program Kami",
  buttonLink: "/kontak",
});

// Jika Anda tetap ingin mengambil data dari API, pastikan API mengembalikan
// path video, serta judul, deskripsi, dan link.
// Anda bisa menyesuaikan properti di `heroContent` di atas agar cocok
// dengan respons API, lalu gunakan `heroContent.value = result.data`
// seperti yang sudah ada, tetapi dengan properti tambahan.

// Contoh integrasi dengan API (disesuaikan dengan kebutuhan konten)
// onMounted(async () => {
//   try {
//     const response = await fetch("https://cms-les.naditechno.id/api/hero-section", { // Ganti dengan endpoint API yang sesuai
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const result = await response.json();
//     if (result && result.data) {
//       heroContent.value = {
//         id: result.data.id,
//         videoBackground: result.data.video_url || '/slider.mp4', // Asumsi API memiliki video_url
//         title: result.data.title || 'Judul Default',
//         description: result.data.description || 'Deskripsi default untuk hero section.',
//         buttonText: result.data.button_text || 'Pelajari Lebih Lanjut',
//         buttonLink: result.data.button_link || '/',
//       };
//     } else {
//       console.error("Format data tidak sesuai:", result);
//     }
//   } catch (error) {
//     console.error("Gagal mengambil data hero section:", error);
//   }
// });
</script>

<template>
  <section class="relative w-full min-h-screen h-screen overflow-hidden">
    <video
      :src="heroContent.videoBackground"
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    ></video>

    <div
      class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-6 md:p-12"
    >
      <div
        class="max-w-5xl text-white flex flex-col items-center animate-fade-in-up"
      >
        <h2 class="text-3xl md:text-7xl font-extrabold leading-tight mb-8">
          {{ heroContent.title }}
        </h2>
        <p class="text-lg md:text-5xl text-gray-200 mb-8">
          {{ heroContent.description }}
        </p>
        <NuxtLink
          :to="heroContent.buttonLink"
          class="inline-block px-8 py-3 bg-[#3253A4] text-gray-300 font-semibold rounded-full shadow-lg hover:bg-primary-600 transition duration-300 transform hover:scale-105 animate-fade-in-up delay-200 text-lg md:text-2xl"
        >
          {{ heroContent.buttonText }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Basic animations for a modern feel */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

/* Custom colors if not defined in tailwind.config.js */
/* Example:
.text-primary-400 { color: #FFD700; }
.bg-primary-500 { background-color: #41A8DF; }
.bg-primary-600 { background-color: #FFA000; }
*/
</style>
