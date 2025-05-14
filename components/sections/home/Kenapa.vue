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
                  <h3 class="text-center text-black text-3xl font-semibold">Kenapa harus belajar di GLOTLINK Languages?</h3>
                </div>
            </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 pt-2 mt-[-80px] md:mt-[-100px]">
          <div 
            v-for="(artikel, index) in artikelPosts" 
            :key="index" 
            class="shadow-lg transform transition bg-[#f8f9fa] duration-300 ease-in-out hover:scale-105 py-10"
          >
            <!-- ICON CENTERED -->
            <div class="flex justify-center items-center text-black text-2xl mx-auto">
              <NuxtImg 
                :src="artikel.image"
                alt="artikel.title"
                class="w-2/5"
              />
            </div>

            <h3 class="mt-4 text-black-800 text-center dark:text-black-200 text-lg font-semibold">
              {{ artikel.title }}
            </h3>
            <p class="pt-4 px-8">Didirikan lebih dari 17 tahun yang lalu sejak 2007, sehingga lebih berpengalaman dan terpercaya.</p>
          </div>
        </div>

      </AtomsContainer>
    </section>
  </template>
  

  <script>
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      
      const artikelPosts = [
        { 
          id: 1,
          image: '/images/professional-services.webp', 
          title: 'Experienced Institution',
        },
        { 
          id: 2,
          image: '/images/platform.webp', 
          title: 'Academic Support',  
        },
        { 
          id: 3,
          image: '/images/business-people.webp', 
          title: 'Small Class', 
        },
        { 
          id: 4,
          image: '/images/maintenance.webp', 
          title: 'Certified Teacher',
        },
        { 
          id: 5,
          image: '/images/maintenance.webp', 
          title: 'Online Academic System',
        },
        { 
          id: 6,
          image: '/images/maintenance.webp', 
          title: 'Qualified Coursebook',
        },
      ];
  
      const goToBlog = (id) => {
        // Ganti dengan navigasi ke halaman artikel detail
        router.push(`/artikel/${id}`);
        
      };
  
      return { artikelPosts, goToBlog };
    },
  };
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
