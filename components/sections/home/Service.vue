<template>
  <section class="pt-2 md:pt-2 py-20" id="service">
    <AtomsContainer>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 pt-8">
        <div class="md:py-2 lg:py-4 relative">
          <div class="absolute left-0 top-0 h-full w-full flex justify-end">
            <span class="flex opacity-20">
              <span
                class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"
              ></span>
              <span
                class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
              ></span>
            </span>
          </div>
          <div class="relative">
            <h3 class="text-center text-black text-3xl font-semibold">
              {{ sectionTitle[currentLanguage] }}
            </h3>
            <p class="text-center text-black">
              {{ sectionDescription[currentLanguage] }}
            </p>
          </div>
        </div>
      </div>

      <div class="relative">
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.swiper-button-next-custom-testi',
            prevEl: '.swiper-button-prev-custom-testi',
          }"
          :modules="modules"
          class="mySwiperTesti"
        >
          <swiper-slide v-for="(item, index) in service" :key="item.id">
            <div class="flex flex-col items-center py-4">
              <img
                :src="item.image"
                :alt="item.name[currentLanguage]"
                class="w-48 h-48 object-cover rounded-xl mb-4 z-10"
              />
              <div
                class="rounded-xl shadow-lg transform border border-[#F2F4F5] transition duration-300 ease-in-out bg-white hover:scale-105 px-6 pb-6 pt-16 h-full flex flex-col items-center text-center group relative -mt-28"
              >
                <div class="flex flex-col flex-1 h-full w-full">
                  <h3 class="text-xl font-semibold text-black pt-8">
                    {{ item.name[currentLanguage] }}
                  </h3>
                  <div
                    class="text-md text-black text-center flex-grow pt-4"
                    v-html="item.description[currentLanguage]"
                  ></div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div
          class="swiper-button-prev-custom-testi absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full cursor-pointer shadow-md hover:bg-gray-300 transition-colors hidden md:flex items-center justify-center"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </div>
        <div
          class="swiper-button-next-custom-testi absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full cursor-pointer shadow-md hover:bg-gray-300 transition-colors hidden md:flex items-center justify-center"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ref, onMounted, onUnmounted, computed } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Assuming currentLanguage is provided globally via Nuxt's useState/useCookie
const currentLanguage = useState<"id" | "en">("currentLanguage");

// Section Title and Description (Multi-language)
const sectionTitle = {
  id: "Layanan Pengembangan Aplikasi Khusus Perusahaan",
  en: "Custom Application Development Services for Companies",
};

const sectionDescription = {
  id: "Solusi perangkat lunak yang disesuaikan untuk membantu perusahaan Anda mencapai efisiensi dan inovasi.",
  en: "Custom software solutions tailored to help your company achieve efficiency and innovation.",
};

// Swiper Modules
const modules = [Autoplay, Pagination, Navigation];

// Service Card Data (Multi-language)
interface ServiceItem {
  id: string;
  name: { id: string; en: string };
  description: { id: string; en: string };
  image: string;
}

const service = ref<ServiceItem[]>([
  {
    id: "1",
    name: {
      id: "Situs Web Perusahaan",
      en: "Corporate Website",
    },
    description: {
      id: "Saya membangun situs web profesional yang merefleksikan identitas merek Anda, dengan fokus pada pengalaman pengguna yang intuitif dan desain yang menarik.",
      en: "I build professional websites that reflect your brand identity, focusing on intuitive user experience and engaging design.",
    },
    image: "/icon/laptop.gif",
  },
  {
    id: "2",
    name: {
      id: "Sistem Manajemen Kepegawaian (HRIS)",
      en: "Human Resources Information System (HRIS)",
    },
    description: {
      id: "Solusi HRIS yang disesuaikan untuk mengelola data karyawan, absensi, cuti, dan penggajian secara efisien dan terintegrasi.",
      en: "A customized HRIS solution to efficiently and seamlessly manage employee data, attendance, leave, and payroll.",
    },
    image: "/icon/medical.gif",
  },
  {
    id: "3",
    name: {
      id: "Aplikasi E-commerce & Toko Online",
      en: "E-commerce & Online Store Application",
    },
    description: {
      id: "Mengembangkan platform e-commerce yang lengkap dan aman, membantu Anda menjangkau pelanggan lebih luas dengan fitur manajemen produk dan pembayaran yang terintegrasi.",
      en: "Developing a complete and secure e-commerce platform, helping you reach a wider customer base with integrated product management and payment features.",
    },
    image: "/icon/artificial-intelligence.gif",
  },
]);
</script>

<style>
/* Global styles for fade-in (if still used) */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

/* Custom Swiper Styles */
.mySwiperTesti .swiper-pagination-bullet-active {
  background-color: #3253a4 !important;
}

/* Adjusting Swiper navigation button positions */
.swiper-button-next-custom-testi,
.swiper-button-prev-custom-testi {
  /* Ensure they are visible on screens where they are absolutely positioned outside */
}
.relative.pt-8 {
  position: relative;
}

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
    transform: translateY(100px); /* Start from 100px below its final position */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation classes */
.animate-fade-in-up-delay-0 {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-in-bottom {
  animation: slide-in-bottom 1s ease-out forwards;
  animation-delay: 0.5s; /* Delay for middle image */
}

/* Ensure elements start hidden before animation */
.opacity-0 {
  opacity: 0;
}
</style>