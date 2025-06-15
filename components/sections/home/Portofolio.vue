<template>
  <section class="pt-2 md:pt-2 py-8">
    <AtomsContainer>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
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
              Portfolio
            </h3>
            <p class="text-center text-gray-600 mt-2">
              Jelajahi berbagai layanan arsitektur profesional kami.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:h-full w-full mt-8">
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '1024': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }"
            :pagination="{ clickable: true }"
            :navigation="{
              nextEl: '.swiper-button-next-custom', // Reference custom next button
              prevEl: '.swiper-button-prev-custom', // Reference custom prev button
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="program in programs" :key="program.id">
              <div
                @click="openModal(program)"
                class="bg-white p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between cursor-pointer h-full"
              >
                <div>
                  <img
                    :src="program.image"
                    :alt="program.name"
                    class="object-cover rounded-xl w-full h-4/5 opacity-0 animate-fade-in transition duration-500 ease-in-out"
                    @load="
                      (e) => (e.target as HTMLElement).style.opacity = '1'
                    "
                  />
                  <h3
                    class="mt-4 text-black-800 dark:text-black-200 text-lg font-semibold"
                  >
                    {{ program.name }}
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <div
            class="swiper-button-prev-custom absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full cursor-pointer shadow-md hover:bg-gray-300 transition-colors hidden md:flex items-center justify-center"
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
            class="swiper-button-next-custom absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full cursor-pointer shadow-md hover:bg-gray-300 transition-colors hidden md:flex items-center justify-center"
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
      </div>
    </AtomsContainer>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="closeModal"
    >
      <div
        class="bg-white rounded-lg shadow-xl p-6 m-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-black">
            {{ selectedProgram?.name }}
          </h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700 text-3xl"
          >
            &times;
          </button>
        </div>
        <img
          v-if="selectedProgram?.image"
          :src="selectedProgram.image"
          :alt="selectedProgram?.name"
          class="object-cover rounded-lg w-full h-4/5 mb-4"
        />
        <div
          class="text-black-700 text-md leading-relaxed"
          v-html="selectedProgram?.description"
        ></div>
        <div class="mt-4 text-sm text-gray-800">
          <p v-if="selectedProgram?.price">
            **Harga:** {{ selectedProgram.price }}
          </p>
          <p v-if="selectedProgram?.estimated_time">
            **Estimasi Waktu:** {{ selectedProgram.estimated_time }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Keep this for general styles, but we're overriding specifics

interface Program {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  estimated_time?: string;
}

const programs = ref<Program[]>([]);
const showModal = ref(false);
const selectedProgram = ref<Program | null>(null);

const modules = [Pagination, Navigation];

// Helper function to limit words (although not used in the current card display)
const limitWords = (text: string, maxWords: number) => {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

const fetchPrograms = async () => {
  try {
    const response = await fetch(
      "https://cms-les.naditechno.id/api/program/list/1?limit=6",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data && data.data && Array.isArray(data.data)) {
      programs.value = data.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        estimated_time: item.estimated_time,
        description: item.description,
        image: item.media[0]?.original_url || "",
      }));
    } else {
      console.error("Format data tidak sesuai:", data);
    }
  } catch (error) {
    console.error("Gagal memuat data program:", error);
  }
};

const openModal = (program: Program) => {
  selectedProgram.value = program;
  showModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  showModal.value = false;
  selectedProgram.value = null;
  document.body.style.overflow = "";
};

onMounted(() => {
  fetchPrograms();
});
</script>

<style>
/* Global styles for fade-in image */
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

/* Swiper pagination active dot color */
.swiper-pagination-bullet-active {
  background-color: #3253a4 !important; /* Custom color for active pagination dot */
}
</style>

<style scoped>
/* Scoped styles (if any, as per your original code) */
.pricing-table th,
.pricing-table td {
  @apply border p-3 text-sm text-left;
}

.pricing-table thead tr {
  background-color: #9f91e1;
  color: white;
}

/* Ensure the parent of swiper is relative for absolute positioning of arrows */
.lg\:h-full.w-full.mt-8 > .relative {
  position: relative;
}
</style>
