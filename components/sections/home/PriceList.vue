<template>
  <section class="pt-2 md:pt-2 py-8">
    <AtomsContainer>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
        <div class="md:py-2 lg:py-4 relative">
          <div class="absolute left-0 top-0 h-full w-full flex justify-end">
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
            <h3 class="text-center text-black text-3xl font-semibold">
              Biaya Jasa Archimax Architect
            </h3>
            <p class="text-center text-gray-600 mt-2">
              Pilihan paket desain arsitektur profesional sesuai kebutuhan Anda.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:h-full w-full mt-8">
        <div class="relative">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2"
          >
            <div
              class="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between border-2 border-[#3253A4]"
            >
              <div class="text-center mb-6">
                <h3 class="text-black text-2xl font-bold mb-2">
                  Paket Eksterior
                </h3>
                <p class="text-[#3253A4] text-4xl font-extrabold">
                  Rp50.000<span class="text-lg font-medium">/m²</span>
                </p>
              </div>
              <div class="flex-grow">
                <p class="text-black-800 text-lg font-semibold mb-3">
                  Termasuk:
                </p>
                <ul class="text-black-600 text-md list-disc pl-5 space-y-2">
                  <li>Konsultasi Paket Eksterior</li>
                  <li>Denah 2D</li>
                  <li>Visualisasi 3D Render (Eksterior)</li>
                  <li>Rencana tampak depan 3D</li>
                  <li>Tampak 2D</li>
                  <li>Gambar Detail Arsitektur (Eksterior)</li>
                  <li>Rencana Pondasi</li>
                  <li>Detail Penulangan Sloof, Balok, dan Kolom</li>
                  <li>Keyplan Kusen (Eksterior)</li>
                  <li>Gambar Kerja Detail Fasad</li>
                  <li>Detail Kusen, Plafon, Atap Instalasi Titik Lampu</li>
                  <li>Gambar Teknis MEP (Eksterior)</li>
                </ul>
              </div>
              <div class="mt-8 text-center">
                <button
                  @click="openContactModal('Paket Eksterior')"
                  class="py-3 px-6 bg-[#3253A4] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition duration-300 w-full"
                >
                  Pesan Paket Ini
                </button>
              </div>
            </div>

            <div
              class="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between border-2 border-gray-300"
            >
              <div class="text-center mb-6">
                <h3 class="text-black text-2xl font-bold mb-2">
                  Paket Interior
                </h3>
                <p class="text-gray-700 text-4xl font-extrabold">
                  Rp60.000<span class="text-lg font-medium">/m²</span>
                </p>
              </div>
              <div class="flex-grow">
                <p class="text-black-800 text-lg font-semibold mb-3">
                  Termasuk:
                </p>
                <ul class="text-black-600 text-md list-disc pl-5 space-y-2">
                  <li>Konsultasi Paket Interior</li>
                  <li>Visualisasi 3D Render Interior (seluruh ruangan)</li>
                  <li>Detailing Interior</li>
                  <li>Gambar Teknis Interior</li>
                  <li>Konsep Rencana Furniture</li>
                  <li>Denah dan Detail Pola Lantai</li>
                  <li>Detail Kamar Mandi dan Toilet</li>
                  <li>
                    Detail Kusen, Plafon, Atap Instalasi Titik Lampu (Interior)
                  </li>
                  <li>Gambar Teknis MEP (Interior)</li>
                </ul>
              </div>
              <div class="mt-8 text-center">
                <button
                  @click="openContactModal('Paket Interior')"
                  class="py-3 px-6 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition duration-300 w-full"
                >
                  Pesan Paket Ini
                </button>
              </div>
            </div>

            <div
              class="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between border-2 border-green-500"
            >
              <div class="text-center mb-6">
                <h3 class="text-black text-2xl font-bold mb-2">
                  Paket Lengkap
                </h3>
                <p class="text-green-600 text-4xl font-extrabold">
                  Rp95.000<span class="text-lg font-medium">/m²</span>
                </p>
                <p class="text-sm text-gray-500 mt-1">(Eksterior & Interior)</p>
              </div>
              <div class="flex-grow">
                <p class="text-black-800 text-lg font-semibold mb-3">
                  Termasuk Semua dari Paket Eksterior & Interior, plus:
                </p>
                <ul class="text-black-600 text-md list-disc pl-5 space-y-2">
                  <li>**Diskon Khusus**</li>
                  <li>Perencanaan Struktur RAB (Eksterior & Interior)</li>
                  <li>Detail Sumur Resapan, Septic Tank, dan Bak Kontrol</li>
                  <li>Rencana Air Bersih dan Air Kotor</li>
                  <li>Full Support Project Documentation</li>
                  <li>Revisi Tanpa Batas* (S&K berlaku)</li>
                </ul>
              </div>
              <div class="mt-8 text-center">
                <button
                  @click="openContactModal('Paket Lengkap')"
                  class="py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition duration-300 w-full"
                >
                  Pesan Paket Ini
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-lg shadow-xl p-6 m-4 max-w-sm w-full">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-black">
            Pesan {{ selectedPackageName }}
          </h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700 text-3xl"
          >
            &times;
          </button>
        </div>
        <p class="text-black-700 mb-4">
          Tertarik dengan **{{ selectedPackageName }}**? Hubungi kami untuk
          konsultasi lebih lanjut!
        </p>
        <a
          :href="`https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(
            selectedPackageName
          )}%20yang%20Anda%20tawarkan.`"
          target="_blank"
          class="block py-3 px-6 bg-green-500 text-white font-semibold text-center rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Hubungi Via WhatsApp
        </a>
        <p class="text-center text-sm text-gray-500 mt-2">
          atau hubungi kami di: **info@archimax.id**
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
// Removed Swiper imports as it's no longer a slider
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Pagination, Navigation } from "swiper/modules";

// Removed Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// Interface for program/package (simplified as we're using static data)
interface Package {
  id: string; // Not strictly needed for static, but good practice
  name: string;
  price: string;
  features: string[]; // List of features
  colorClass: string; // Tailwind class for styling
}

// Data state for modal
const showModal = ref(false);
const selectedPackageName = ref<string>(""); // To store the name of the selected package

// Function to open the contact modal
const openContactModal = (packageName: string) => {
  selectedPackageName.value = packageName;
  showModal.value = true;
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

// Function to close the contact modal
const closeModal = () => {
  showModal.value = false;
  selectedPackageName.value = "";
  document.body.style.overflow = ""; // Restore scrolling
};

// No need for fetchPrograms, pagination, or limitWords as data is static
// No need for onMounted if no API calls
</script>

<style>
/* Global styles for fade-in image (kept in case you reuse them elsewhere) */
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

<style scoped>
/* Scoped styles (kept, though pricing-table might not be used now) */
.pricing-table th,
.pricing-table td {
  @apply border p-3 text-sm text-left;
}

.pricing-table thead tr {
  background-color: #9f91e1;
  color: white;
}
</style>
