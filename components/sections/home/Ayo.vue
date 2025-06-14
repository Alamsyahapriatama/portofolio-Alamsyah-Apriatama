<template>
    <section class="pt-14 md:pt-2 py-12 bg-[#E6E5E5]">
      <AtomsContainer>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 pt-12">
            <div class="flex items-center justify-center md:justify-start md:px-6">
              <h3 class="text-black mb-4 text-xl md:text-3xl font-semibold text-left">
                {{ homes?.information_title }}
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
                    <SwiperSlide class="relative w-full h-full">
                      <img :src="homes?.information_images[0]" :alt="homes?.information_title" class="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide class="relative w-full h-full">
                      <img :src="homes?.information_images[1]" :alt="homes?.information_title" class="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide class="relative w-full h-full">
                      <img :src="homes?.information_images[2]" :alt="homes?.information_title" class="w-full h-full object-cover" />
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

    import { getHome } from "@/composables/utils";
  
    const homes = ref<any>(null);
    
    onMounted(async () => {
      homes.value = await getHome();
    });
</script>