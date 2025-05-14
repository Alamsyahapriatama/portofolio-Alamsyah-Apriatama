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

// const blogs = [
//   { image: '/images/slide-2.jpeg', title: 'John Doe' },
//   { image: '/images/slide-2.jpeg', title: 'Jane Smith'},
//   // { image: '/images/slide-3.jpeg', title: 'Mike Johnson' },
// ];

const url = 'https://cms-les.naditechno.id/api/slider';
  
const response = await fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
});

const result = await response.json();
console.log(result.data);
if (result && Array.isArray(result.data)) {
  slider.value = result.data.map((item: any) => ({
    id: item.id,
    image: item.media[0].original_url,
  }));
} else {
  console.error('Format data tidak sesuai:', result);
}
</script>
<template>
  <section class="relative w-full min-h-screen">
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
  </section>
</template>


