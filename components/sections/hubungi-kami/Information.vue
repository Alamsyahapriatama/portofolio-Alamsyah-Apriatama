<template>
    <section class="pt-6 md:pt-14 py-20">
        <AtomsContainer>
            <div class="grid md:grid-cols-1 gap-10 xl:gap-14 relative">
                <div class="md:py-2 lg:py-4 relative">
                    <div class="absolute left-0 top-0 h-full w-full flex justify-end">
                        <span class="flex opacity-20">
                            <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                            <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
                        </span>
                    </div>
                    <div class="relative">
                        <AtomsTitle texte="Hubungi Kami – Glotlink" />
                        <h3 class="text-black-800 dark:text-black-200 font-semibold text-xl pt-4">
                            Digitalisasikan Bisnismu Bersama Glotlink
                        </h3>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                <div 
                    class="shadow-lg transform transition duration-300 ease-in-out hover:scale-105 pt-10 py-10"
                >
                    <div class="flex justify-center">
                        <img 
                            src="/images/icon-whatsapp.svg" 
                            :alt="setting?.phone" 
                            class="w-16 h-16 object-contain"
                        />
                    </div>
                    <h3 class="mt-8 text-black-800 text-center dark:text-black-200 text-lg font-semibold">
                        No. Whatsapp
                    </h3>
                    <h3 class="mt-1 text-black-800 text-center dark:text-black-200 text-lg font-semibold">
                        {{ setting?.phone }}
                    </h3>
                </div>
                <div 
                    class="shadow-lg transform transition duration-300 ease-in-out hover:scale-105 pt-10 py-10"
                >
                    <div class="flex justify-center">
                        <img 
                            src="/images/icon-email.svg" 
                            :alt="setting?.email" 
                            class="w-16 h-16 object-contain"
                        />
                    </div>
                    <h3 class="mt-8 text-black-800 text-center dark:text-black-200 text-lg font-semibold">
                        E-mail
                    </h3>
                    <h3 class="mt-1 text-black-800 text-center dark:text-black-200 text-lg font-semibold">
                        {{ setting?.email }}
                    </h3>
                </div>
                <div 
                    class="shadow-lg transform transition duration-300 ease-in-out hover:scale-105 pt-10 py-10"
                >
                    <div class="flex justify-center">
                        <img 
                            src="/images/icon-jam-operasional.svg" 
                            :alt="setting?.email" 
                            class="w-16 h-16 object-contain"
                        />
                    </div>
                    <h3 class="mt-8 text-black-800 text-center dark:text-black-200 text-lg font-semibold">
                        Jam Operasional
                    </h3>
                    <h3 class="mt-1 text-black-800 text-center dark:text-black-200 text-lg font-semibold">
                        {{ setting?.opening_hours_at + ' - ' + setting?.opening_hours_end }}
                    </h3>
                </div>
            </div>
            <div class="pt-10">
                <div class="flex justify-center pt-5">
                    <div id="map" style="height: 400px; width: 100%"></div>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const setting = ref(null)

onMounted(async () => {
  // Jalankan hanya di browser
  if (process.client) {
    const L = await import('leaflet') // Dynamic import agar tidak diakses saat SSR

    const { data } = await useFetch('https://cms-les.naditechno.id/api/setting')
    setting.value = data.value?.data

    // Gunakan path attributes jika data ada di dalam attributes
    const lat = parseFloat(setting.value?.attributes?.latitude || -6.2)
    const lng = parseFloat(setting.value?.attributes?.longitude || 106.8)
    const nama = setting.value?.attributes?.title || 'Lokasi Kantor'

    const map = L.map('map').setView([lat, lng], 15)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(nama)
      .openPopup()
  }
})
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
