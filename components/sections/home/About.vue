<template>
    <section class="py-8">
      <AtomsContainer>
        <div class="grid md:grid-cols-2 gap-10 xl:gap-14 relative">
          <div class="flex md:h-full">
            <div
              class="w-full md:h-full rounded-3xl shadow-lg shadow-box-shadow"
            >
              <img
                src="/images/img-about.webp"
                alt="Belajar Asik"
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
            <div class="relative">
              <AtomsTitle :texte="setting?.title" id="about"/>
              <div class="pt-4 text-black-700 dark:text-black-300 text-lg md:text-lg" v-html="setting?.about_us"></div>
            </div>
          </div>
        </div>
      </AtomsContainer>
    </section>
    <section class="pt-2 md:pt-2 py-8">
    <AtomsContainer>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
        <div class="md:py-2 lg:py-4 relative">
          <div class="absolute left-0 top-0 h-full w-full flex justify-end">
            <span class="flex opacity-20">
              <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
              <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
          </div>
          <div class="relative">
            <h3 class="text-center text-black text-3xl font-semibold">Di Les Belajar, kami memberikan materi pembelajaran yang lengkap</h3>
          </div>
        </div>
      </div>
      <div class="lg:h-full w-full">
        <div class="relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
            <div class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div class="flex items-center gap-2"> 
                <div class="flex-shrink-0">
                  <img 
                    src="/images/icon/matematika.png" 
                    alt="Matematika" 
                    class="object-cover rounded-lg w-16 h-16 sm:w-12 sm:h-12 opacity-0 animate-fade-in transition duration-500 ease-in-out" 
                    />
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-black-800 dark:text-black-200 text-base sm:text-md font-semibold text-left break-words">
                    Matematika
                  </h3>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div class="flex items-center gap-2"> 
                <div class="flex-shrink-0">
                  <img 
                    src="/images/icon/english.png" 
                    alt="Inggris" 
                    class="object-cover rounded-lg w-16 h-16 sm:w-12 sm:h-12 opacity-0 animate-fade-in transition duration-500 ease-in-out" 
                    />
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-black-800 dark:text-black-200 text-base sm:text-md font-semibold text-left break-words">
                    Bahasa Inggris
                  </h3>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div class="flex items-center gap-2"> 
                <div class="flex-shrink-0">
                  <img 
                    src="/images/icon/indonesia.png" 
                    alt="Indonesia" 
                    class="object-cover rounded-lg w-16 h-16 sm:w-12 sm:h-12 opacity-0 animate-fade-in transition duration-500 ease-in-out" 
                    />
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-black-800 dark:text-black-200 text-base sm:text-md font-semibold text-left break-words">
                    Indonesia
                  </h3>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div class="flex items-center gap-2"> 
                <div class="flex-shrink-0">
                  <img 
                    src="/images/icon/ipa.png" 
                    alt="Ilmu Pengetahuan Alam" 
                    class="object-cover rounded-lg w-16 h-16 sm:w-12 sm:h-12 opacity-0 animate-fade-in transition duration-500 ease-in-out" 
                    />
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-black-800 dark:text-black-200 text-base sm:text-md font-semibold text-left break-words">
                    Ilmu Pengetahuan Alam
                  </h3>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div class="flex items-center gap-2"> 
                <div class="flex-shrink-0">
                  <img 
                    src="/images/icon/geography.png" 
                    alt="Ilmu Pengetahuan Sosial" 
                    class="object-cover rounded-lg w-16 h-16 sm:w-12 sm:h-12 opacity-0 animate-fade-in transition duration-500 ease-in-out" 
                    />
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-black-800 dark:text-black-200 text-base sm:text-md font-semibold text-left break-words">
                    Ilmu Pengetahuan Sosial
                  </h3>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div class="flex items-center gap-2"> 
                <div class="flex-shrink-0">
                  <img 
                    src="/images/icon/fisika.png" 
                    alt="Fisika" 
                    class="object-cover rounded-lg w-16 h-16 sm:w-12 sm:h-12 opacity-0 animate-fade-in transition duration-500 ease-in-out" 
                    />
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-black-800 dark:text-black-200 text-base sm:text-md font-semibold text-left break-words">
                    Fisika
                  </h3>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div class="flex items-center gap-2"> 
                <div class="flex-shrink-0">
                  <img 
                    src="/images/icon/geography.png" 
                    alt="Geografi" 
                    class="object-cover rounded-lg w-16 h-16 sm:w-12 sm:h-12 opacity-0 animate-fade-in transition duration-500 ease-in-out" 
                    />
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-black-800 dark:text-black-200 text-base sm:text-md font-semibold text-left break-words">
                    Geografi
                  </h3>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div class="flex items-center gap-2"> 
                <div class="flex-shrink-0">
                  <img 
                    src="/images/icon/economic.png" 
                    alt="Ekonomi" 
                    class="object-cover rounded-lg w-16 h-16 sm:w-12 sm:h-12 opacity-0 animate-fade-in transition duration-500 ease-in-out" 
                    />
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-black-800 dark:text-black-200 text-base sm:text-md font-semibold text-left break-words">
                    Ekonomi
                  </h3>
                </div>
              </div>
            </div>

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
                  <h3 class="text-center text-black text-3xl font-semibold">Raih Sekolah & Kampus Impianmu, Mulai dari Sekarang!</h3>
                  <div class="pt-2 text-center text-black-700 dark:text-black-300 text-lg md:text-lg" v-html="setting?.description"></div>
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
  
  
<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { getSetting } from "@/composables/utils";
  
  const setting = ref<any>(null);
  
  onMounted(async () => {
    setting.value = await getSetting();
  });

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
