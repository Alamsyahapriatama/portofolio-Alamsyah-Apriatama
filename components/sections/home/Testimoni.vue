
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
                      <h3 class="text-center text-black text-3xl font-semibold">Apa kata peserta kursus kami?</h3>
                    </div>
                </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-28">
            <div 
                v-for="(artikel, index) in artikelPosts" 
              :key="index"
              class="rounded-xl shadow-lg transform transition duration-300 ease-in-out bg-[#F3F3F3] hover:scale-105 p-6 h-full hover:text-black group"
            >
              <div class="flex flex-col items-center text-center h-full">
                <div class="mt-[-120px] w-full">
                    <NuxtImg 
                        :src="artikel.image"
                        :alt="artikel.title"
                        class="w-48 h-48 object-cover rounded-full mx-auto"
                        width="auto"
                        height="80"
                    />
                </div>

                <!-- Konten -->
                <div class="flex flex-col flex-1 h-full mt-2 w-full">
                  <!-- Title -->
                  <h3 class="text-xl font-semibold mb-4 pt-2">{{ artikel.title }}</h3>
                  <h3 class="text-lg">{{ artikel.work }}</h3>
                  <p class="text-md">{{ artikel.description }}</p>
                </div>
              </div>
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
          image: 'https://static.wixstatic.com/media/2e8bbb_3fb31439298f4f16bf44d7c4f83cf134~mv2.jpg/v1/fill/w_203,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-591216789.jpg/images/professional-services.webp', 
          title: 'Justin',
          work: 'Zittau Görlitz University of Applied Sciences',
          description: '“Saya untuk bisa studi ke Jerman memperlukan persiapan yang banyak. GLOTLINK Languages telah membantu saya dalam banyak hal sampai akhirnya saya bisa berangkat untuk studi ke Jerman. Terimakasih untuk GLOTLINK Languages.”',
        },
        { 
          id: 2,
          image: 'https://static.wixstatic.com/media/2e8bbb_3fb31439298f4f16bf44d7c4f83cf134~mv2.jpg/v1/fill/w_203,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-591216789.jpg/images/professional-services.webp', 
          title: 'Justin',
          work: 'Zittau Görlitz University of Applied Sciences',
          description: '“Saya untuk bisa studi ke Jerman memperlukan persiapan yang banyak. GLOTLINK Languages telah membantu saya dalam banyak hal sampai akhirnya saya bisa berangkat untuk studi ke Jerman. Terimakasih untuk GLOTLINK Languages.”',
        },
        { 
          id: 3,
          image: 'https://static.wixstatic.com/media/2e8bbb_3fb31439298f4f16bf44d7c4f83cf134~mv2.jpg/v1/fill/w_203,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-591216789.jpg/images/professional-services.webp', 
          title: 'Justin',
          work: 'Zittau Görlitz University of Applied Sciences',
          description: '“Saya untuk bisa studi ke Jerman memperlukan persiapan yang banyak. GLOTLINK Languages telah membantu saya dalam banyak hal sampai akhirnya saya bisa berangkat untuk studi ke Jerman. Terimakasih untuk GLOTLINK Languages.”',
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
