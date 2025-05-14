<template>
    <section class="pt-14 md:pt-14 py-20">
      <AtomsContainer>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 pt-8">
              <div class="md:py-2 lg:py-4 relative min-h-[180px]">
                <div class="absolute left-0 top-0 h-full w-full flex justify-end">
                <span class="flex opacity-20">
                    <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                    <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
                </span>
                </div>
                <div class="relative">
                  <h3 class="text-center text-black text-3xl font-semibold">Institusi Pendidikan yang telah bekerjasama dengan kami</h3>
                </div>
            </div>
        </div>
        <div class="rounded-xl overflow-hidden shadow-lg mt-[-80px]">
            <Swiper
                :modules="[Autoplay, Pagination, Navigation]"
                :slides-per-view="5"
                :slides-per-group="5"
                :loop="true"
                :autoplay="{ delay: 3000 }"
                :pagination="{ clickable: true }"
                class="w-full h-full"
                >
                <SwiperSlide
                    v-for="(slide, i) in slider"
                    :key="i"
                    class="relative w-full h-full"
                >
                    <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover px-8 py-8" />
                </SwiperSlide>
            </Swiper>

        </div>

      </AtomsContainer>
    </section>
  </template>
  

  <script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const slider = ref([]);

const url = 'https://cms.fnalawoffice.com/api/sliders';
  
const response = await fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': 'eyJpdiI6IjkzUFYyTWdid2ZNYXFBVEg0VTFZR0E9PSIsInZhbHVlIjoiZ0dyZzkxOGVOUjIxK1dhci9vbm9YV2p2d2dEY2hDUVpUVkRsZ1pZa2ZOUzlRZVFkaGJ0VjF5ektnSTBkazJRRWp6c0J3a3pBZ3R5eE5UWHlRYll6OXIzeEpEcVdKdTFDOXYxMW5Fb00vdmxjTjRFM3Q5aVNHclppRlh6OXl4dFUiLCJtYWMiOiJiNDIxYWIxZDk1NzM4MmIwMDU5NDI3MGE2NzAyNzYxYjIzYjQzZDQ1ODhiZDg1NjBkNTgxMzg4Njg1ZWU3ODkzIiwidGFnIjoiIn0='
  }
});

const result = await response.json();

if (result && Array.isArray(result.data)) {
  slider.value = result.data.map((item: any) => ({
    id: item.id,
    image: `https://cms.fnalawoffice.com${item.media[0].original_url}`,
  }));
} else {
  console.error('Format data tidak sesuai:', result);
}
</script>