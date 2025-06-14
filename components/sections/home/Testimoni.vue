
<template>
    <section class="pt-2 md:pt-6 py-20">
        <AtomsContainer>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 pt-8">
                <div class="md:py-2 lg:py-4 relative">
                    <div class="absolute left-0 top-0 h-full w-full flex justify-end">
                    <span class="flex opacity-20">
                        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                        <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
                    </span>
                    </div>
                    <div class="relative">
                      <h3 class="text-center text-black text-3xl font-semibold">Apa Kata Peserta Kursus Kami?</h3>
                    </div>
                </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div 
                v-for="(testimoni, index) in testimoni" 
              :key="index"
              class="rounded-xl shadow-lg transform transition duration-300 ease-in-out bg-[#41A8DF] hover:scale-105 p-6 h-full hover:text-black group"
            >
              <div class="flex flex-col items-center text-center h-full">
                
                <!-- Konten -->
                <div class="flex flex-col flex-1 h-full mt-2 w-full">
                  <!-- Title -->
                  <h3 class="text-xl font-semibold pt-2">{{ testimoni?.name }}</h3>
                  <h3 class="text-lg mb-4">{{ testimoni?.job_title }}</h3>
                  <div class="text-md text-justify" v-html="testimoni?.message"></div>
                </div>
              </div>
            </div>
          </div>


        </AtomsContainer>
    </section>
</template>


<script setup lang="ts">
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue'
  import {
    Autoplay,
    Pagination,
    Navigation
  } from 'swiper/modules'
  import {
    useRoute,
    useRouter
  } from 'vue-router';
  import {
    ref,
    onMounted
  } from 'vue';
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/autoplay'
  const testimoni = ref([]);
  const url = 'https://cms-les.naditechno.id/api/testimonial';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const result = await response.json();
  if (result && Array.isArray(result.data)) {
    testimoni.value = result.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      job_title: item.job_title,
      company: item.company,
      message: item.message,
      image: `${item.media[0].original_url}`,
    }));
  } else {
    console.error('Format data tidak sesuai:', result);
  }
</script>

<style>
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
</style>
