<template>
    <section class="pt-14 md:pt-2 py-20 bg-[#E6E5E5]">
      <AtomsContainer>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 pt-12">
            <div class="flex items-center justify-center md:justify-start md:px-6">
              <h3 class="text-black mb-4 text-xl md:text-3xl font-semibold text-left">
                  Ayo bergabung program belajar kami dengan 3 langkah mudah
              </h3>
            </div>

          <!-- Kolom 1: YouTube -->
          <div class="w-full h-full">
            <div class="rounded-xl overflow-hidden shadow-lg">
                <Swiper
                    :modules="[Autoplay, Pagination, Navigation]"
                    :slides-per-view="1"
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
                        <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
          </div>
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