<script setup lang="ts">
import { ref, computed } from "vue";

// Menggunakan useCookie untuk mendapatkan dan mengatur bahasa
// Nuxt 3 secara otomatis membuat ini reaktif dan tidak memerlukan .value di template
const currentLanguage = useCookie<"id" | "en">("currentLanguage", {
  default: () => "id",
});

// Menghitung properti teks berdasarkan bahasa yang dipilih
// Mengakses currentLanguage secara langsung tanpa .value di sini
const say = computed(() => {
  if (currentLanguage.value === "id") {
    return 'Hai, Saya';
  } else {
    return 'Hello, I\'m';
  }
});

const description = computed(() => {
  if (currentLanguage.value === "id") {
    return 'Pengembang Fullstack dengan 3 tahun pengalaman dalam membangun situs web, aplikasi web, dan aplikasi seluler. Saya suka membuat sesuatu yang berdampak sosial dan menciptakan produk bermanfaat yang menghubungkan orang.';
  } else {
    return 'Fullstack Developer with 3 years of experience in building websites, web applications, and mobile applications.                             I love making something socially impactful and creating helpful products that connect people.';
  }
});
</script>

<template>
  <section class="bg-[#F2F4F5] w-full text-gray-800">
    <div
      class="hidden md:flex flex-col lg:flex-row items-center justify-center p-6 md:p-10 lg:p-16 gap-10 min-h-[800px]"
    >
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3 p-4 opacity-0 animate-fade-in-up"
        style="animation-delay: 0.2s;"
      >
        <span class="text-xl md:text-2xl font-medium text-gray-700">{{ say }}</span>
        <h1
          class="text-5xl md:text-7xl font-extrabold text-[#0E2B4E] mt-2 mb-4 leading-tight"
        >
          Tama
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-xl lg:max-w-none">
          {{ description }}
        </p>
      </div>

      <div
        class="relative flex items-end justify-center w-full lg:w-1/3 h-auto overflow-hidden p-4 opacity-0 animate-slide-in-bottom"
        style="animation-delay: 0.5s;"
      >
        <img
          src="/hero-tama.jpeg"
          alt="Tama's Profile Photo"
          class="object-cover object-bottom h-full w-full rounded-lg"
        />
      </div>

      <div
        class="hidden lg:grid grid-cols-2 grid-rows-3 gap-6 p-4 w-full lg:w-1/3 opacity-0 animate-fade-in-up"
        style="animation-delay: 0.8s;"
      >
        <div
          class="col-span-1 row-span-1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-3 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/icon/responsive.gif"
            alt="Website"
            class="w-full h-auto rounded-md mt-[-15px] object-cover"
          />
          <p class="text-sm font-semibold text-gray-700">Website</p>
        </div>

        <div class="col-span-1 row-span-1"></div>

        <div
          class="col-start-2 row-start-2 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-3 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/icon/applications.gif"
            alt="Web & Mobile Apps"
            class="w-full h-auto rounded-md mt-[-15px] object-cover"
          />
          <p class="text-sm font-semibold text-gray-700">Web & Mobile Apps</p>
        </div>

        <div class="col-span-1 row-start-2"></div>

        <div
          class="col-span-1 row-span-1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-3 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/icon/brain.gif"
            alt="AI Agent"
          />
          <p class="text-sm font-semibold text-gray-700">AI Agent</p>
        </div>
      </div>
    </div>

    <div class="md:hidden w-full pt-16 pb-8">
      <div class="p-4 text-center">
        <span class="text-xl font-medium text-gray-700">{{ say }}</span>
        <h1 class="text-5xl font-extrabold text-[#0E2B4E] mt-2 mb-4 leading-tight">Tama</h1>
        <p class="text-lg text-gray-600 px-4">
          {{ description }}
        </p>
      </div>
      <div class="relative w-full overflow-hidden mt-8">
        <img class="w-full h-auto" src="/hero-tama.jpeg" alt="Alamsyah Apriatama">
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Keyframes for animations */
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

@keyframes slide-in-bottom {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation classes */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-in-bottom {
  animation: slide-in-bottom 1s ease-out forwards;
}

/* Ensure elements start hidden before animation */
.opacity-0 {
  opacity: 0;
}
</style>