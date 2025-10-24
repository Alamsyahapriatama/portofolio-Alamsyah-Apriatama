<template>
  <section class="pt-2 md:pt-20 py-8 bg-gray-100" id="certificates">
    <AtomsContainer>
      <div class="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div class="md:py-2 lg:py-4 relative">
          <div class="absolute left-0 top-0 h-full w-full flex justify-end z-0">
            <span class="flex opacity-20">
              <span class="w-16 h-32 rounded-l-full flex bg-blue-500 blur-2xl"></span>
              <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
          </div>
          <div class="relative z-10 text-center">
            <h3 class="text-black text-3xl font-semibold">
              {{ sectionHeader.title[currentLanguage] }}
            </h3>
            <p class="text-gray-600 mt-2">
              {{ sectionHeader.description[currentLanguage] }}
            </p>
          </div>
        </div>
      </div>

      <div class="lg:h-full w-full mt-8 relative z-10">
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :breakpoints="{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="cert in certificates" :key="cert.id">
            <div class="bg-white p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 border-2 border-gray-200">
              <img :src="cert.image" :alt="cert.name[currentLanguage]" class="w-full h-auto rounded-lg" />
              <div class="mt-4 text-center">
                <h4 class="text-md font-semibold text-gray-800">
                  {{ cert.name[currentLanguage] }}
                </h4>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </AtomsContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Assuming currentLanguage is provided globally via Nuxt's useState/useCookie
const currentLanguage = useState<"id" | "en">("currentLanguage");

// Interface for certificate data
interface Certificate {
  id: string;
  name: { id: string; en: string };
  image: string;
}

// Data for certificates
const certificates: Certificate[] = [
  {
    id: "1",
    name: {
      id: "Sertifikat Web Development",
      en: "Web Development Certificate",
    },
    image: "/Getting to Know Model Studio.jpg",
  },

  // {
  //   id: "2",
  //   name: {
  //     id: "Sertifikat MicroController",
  //     en: "Microcontroller Certificate",
  //   },
  //   image: "/bnsp-microController.JPEG",
  // },
  {
    id: "2",
    name: {
      id: "Sertifikat Backend Development",
      en: "Backend Development Certificate",
    },
    image: "/Model Studio Fundamentals.png",
  },
  {
    id: "3",
    name: {
      id: "Sertifikat Mobile App Development",
      en: "Mobile App Development Certificate",
    },
    image: "/Get Started with Deepseek on Alibaba Cloud (PAI EAS).png",
  },
  {
    id: "4",
    name: {
      id: "Sertifikat AI/ML",
      en: "AI/ML Certificate",
    },
    image: "/Sertifikat_Alamsyah Apriatama BP_Alibaba Cloud - Clouder Certification.jpg",
  },
];


// Modules for Swiper
const modules = [Pagination, Navigation, Autoplay];

// Section Header (Multi-language)
const sectionHeader = {
  title: {
    id: "Sertifikat & Pencapaian Saya",
    en: "My Certificates & Achievements",
  },
  description: {
    id: "Berikut adalah beberapa sertifikat dan pencapaian yang saya raih selama perjalanan karir saya.",
    en: "Here are some of the certificates and achievements I've earned throughout my career journey.",
  },
};
</script>

<style>
/* Global Swiper Styles */
.mySwiper .swiper-pagination-bullet {
  background-color: #9f91e1;
  opacity: 0.6;
}

.mySwiper .swiper-pagination-bullet-active {
  background-color: #3253A4;
  opacity: 1;
}

.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  color: #3253A4;
}
</style>