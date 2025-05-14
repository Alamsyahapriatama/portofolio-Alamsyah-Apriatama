<template>
    <section class="mt-[-500px] md:mt-[-140px]">
      <AtomsContainer>
        <div class="grid md:grid-cols-2 gap-10 xl:gap-14 relative">
          <div class="flex md:h-full">
            <div
              class="w-full md:h-full rounded-3xl shadow-lg shadow-box-shadow"
            >
              <img
                src="https://static.wixstatic.com/media/ae8f36_59949fab16034d89b61829fddc06d13f~mv2.png/v1/crop/x_112,y_193,w_1787,h_1541/fill/w_786,h_679,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hand-drawn-people-speaking-different-languages.png"
                alt="Glotlink"
                class="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div class="md:py-2 lg:py-2 relative">
            <div class="absolute right-0 top-0 h-full w-full flex justify-end">
              <span class="flex opacity-20">
                <span
                  class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"
                ></span>
                <span
                  class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
                ></span>
              </span>
            </div>
            <div class="relative md:pt-28">
              <AtomsTitle texte="Kursus 12 Bahasa Asing" id="about"/>
              <p class="pt-4 text-black-700 dark:text-black-300 text-sm md:text-base">
                Memasuki era kecerdasaan buatan (AI), belajar bahasa asing semakin dibutuhkan, guna memenangkan persaingan global. GLOTLINK Languages berkomitmen untuk membantu Kelancaran Koneksi dan Karir Anda.
              </p>
              <p class="pt-4 text-black-700 dark:text-black-300 text-sm md:text-base">
                Selain itu, kami beroperasi di bawah badan hukum PT dengan nama GLOTLINK, yang memberikan Anda kepastian bahwa kami adalah perusahaan yang terpercaya dan memiliki legalitas yang sah. Dengan fondasi hukum yang kuat, kami siap mendukung setiap kebutuhan digital bisnis Anda dengan integritas dan profesionalisme.
              </p>
            </div>
          </div>
        </div>
      </AtomsContainer>
    </section>
    <section class="pt-4 md:pt-4 py-8">
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
                  <h3 class="text-center text-black text-3xl font-semibold">Ekspansi Kamu Keluar Negeri Dimulai Dari Sekarang</h3>
                  <p class="pt-2 text-center">
                    GLOTLINK Languages berdiri sejak tahun 2007, merupakan lembaga kursus 12 bahasa asing yang meliputi Inggris, Mandarin Bejing (Simplified Characters), Mandarin Taiwan (Traditional Characters), Jepang, Korea, Jerman, Perancis, Rusia, Belanda, Italia, Spanyol, Arab dan Bahasa Indonesia Untuk Penutur Asing (BIPA). Berlokasi di Jakarta, Bogor, dan Bandung. 
                    Selain itu, kami juga mendukung program persiapan studi maupun kerja Jerman dan Jepang seperti programS1/S2, summer course, Au-pair, Ausbildung, kursus bahasa singkat 3 bulan.
                  </p>
                </div>
            </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 md:gap-6 pt-2">
          <div 
            v-for="(artikel, index) in artikelPosts" 
            :key="index" 
            class="shadow-lg transform transition duration-300 ease-in-out hover:scale-105 py-2"
          >
            <!-- ICON CENTERED -->
            <div class="flex justify-center items-center text-black text-2xl mx-auto px-4 mb-2">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="18 59 164 82" viewBox="18 59 164 82" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Kelas Inggris">
                    <g>
                        <path fill="#04247B" d="M168.774 132.832L163.595 141h-49.951l-12.773-10.655L86.356 141H36.403l3.57-9.125H18v-18.231L26.874 100 18 86.356V68.125l19.983 2.857L36.403 59h49.953L100 70.318 113.644 59h49.951l-.418 7.67L182 68.125v18.231l-15.838 12.773L182 113.644v18.231l-13.226.957z" data-color="1"></path>
                        <path fill="#FFFFFF" d="M182 131.875l-36.422-18.231H182v-5.443L169.893 100 182 91.799v-5.443h-36.422L182 68.125V59h-.086l-10.902 2.696L169.665 59h-6.07l-49.951 25.003V59h-5.443l-7.579 5.307L91.799 59h-5.443v25.003L36.403 59H18.086l6.549 6.551-6.606-.464L18 68.125l36.422 18.231H18v5.443L28.863 100 18 108.201v5.443h36.422L18 131.875V141h.01l5.926-1.399 7.663-3.038L30.257 141h6.146l49.953-25.003V141h5.443l7.206-8.292 9.196 8.292h5.443v-25.003L163.595 141h18.244l-4.733-6.427 4.84.377.054-3.075z" data-color="2"></path>
                        <path fill="#CE152A" d="M18 65.087l42.492 21.269h12.247L18.086 59H18v6.087z" data-color="3"></path>
                        <path fill="#CE152A" d="M127.184 113.644L181.839 141H182v-6.049l-42.567-21.307h-12.249z" data-color="3"></path>
                        <path fill="#CE152A" d="M115.013 86.356h12.248L181.914 59h-12.249l-54.652 27.356z" data-color="3"></path>
                        <path fill="#CE152A" d="M84.912 113.644H72.663L18.01 141h12.247l54.655-27.356z" data-color="3"></path>
                        <path fill="#CE152A" d="M182 91.799h-73.799V59H91.799v32.799H18v16.402h73.799V141h16.402v-32.799H182V91.799z" data-color="3"></path>
                    </g>
                </svg>
            </div>

            <h3 class="text-black-800 text-center dark:text-black-200 text-lg font-semibold">
              Inggris
            </h3>
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
          title: 'Tim profesional dan berpengalaman',
        },
        { 
          id: 2,
          image: '/images/platform.webp', 
          title: 'Teknologi terbaru & pendekatan agile',  
        },
        { 
          id: 3,
          image: '/images/business-people.webp', 
          title: 'Fokus pada kebutuhan dan tujuan bisnis Anda', 
        },
        { 
          id: 4,
          image: '/images/maintenance.webp', 
          title: 'After-sales support dan pemeliharaan sistem',
        },
        { 
          id: 4,
          image: '/images/maintenance.webp', 
          title: 'After-sales support dan pemeliharaan sistem',
        },
        { 
          id: 4,
          image: '/images/maintenance.webp', 
          title: 'After-sales support dan pemeliharaan sistem',
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
