<template>
    <section class="pt-2 md:pt-8 py-20">
        <AtomsContainer>
          <div class="lg:h-full w-full">
            <div class="relative">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 pt-8">
                <div 
                  v-for="paket in paketHarga"
                  :key="paket.title"
                  class="p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col"
                >
                  <img 
                    :src="paket.image" 
                    :alt="paket.title" 
                    class="object-cover rounded-xl w-5/5 mx-auto opacity-0 animate-fade-in transition duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
    
        </AtomsContainer>
    </section>
    </template>
    
    
    <script setup lang="ts">
            const paketHarga = [
                {
                image: '/images/united-kingdom.png',
                title: 'English',
                },
                {
                image: '/images/south-korea.png',
                title: 'Korea',
                },
                {
                image: '/images/japan.png',
                title: 'Japan',
                },
                {
                image: '/images/united-arab-emirates.png',
                title: 'Arab',
                },
                {
                image: '/images/germany.png',
                title: 'Arab',
                },
            ];
    </script>