<template>
  <section class="pt-2 md:pt-6 py-20">
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
              Apa Kata Peserta Kursus Kami?
            </h3>
          </div>
        </div>
      </div>

      <div class="relative pt-8">
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
          <swiper-slide v-for="(item, index) in testimoni" :key="index">
            <div class="flex flex-col items-center">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-32 h-32 object-cover rounded-full shadow-md border-4 border-white mb-4 z-10"
              />
              <div
                class="rounded-xl shadow-lg transform transition duration-300 ease-in-out bg-[#41A8DF] hover:scale-105 px-6 pb-6 pt-16 h-full flex flex-col items-center text-center group relative -mt-16"
              >
                <div class="flex flex-col flex-1 h-full w-full">
                  <h3 class="text-xl font-semibold text-white pt-2">
                    {{ item.name }}
                  </h3>
                  <h3 class="text-lg text-white mb-4">{{ item.job_title }}</h3>
                  <div
                    class="text-md text-white text-justify flex-grow"
                    v-html="item.message"
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
import { ref, onMounted } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const modules = [Autoplay, Pagination, Navigation];

interface Testimonial {
  id: string;
  name: string;
  job_title: string;
  company: string;
  message: string;
  image: string;
}

const testimoni = ref<Testimonial[]>([]);
const url = "https://cms-les.naditechno.id/api/testimonial";

onMounted(async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result && Array.isArray(result.data)) {
      testimoni.value = result.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        job_title: item.job_title,
        company: item.company,
        message: item.message,
        image: `${
          item.media[0]?.original_url || "https://via.placeholder.com/100"
        }`,
      }));
    } else {
      console.error("Format data tidak sesuai:", result);
      testimoni.value = [];
    }
  } catch (error) {
    console.error("Gagal memuat data testimoni:", error);
    testimoni.value = [];
  }
});
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
</style>
