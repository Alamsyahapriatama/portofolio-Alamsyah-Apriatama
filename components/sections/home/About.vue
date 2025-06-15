<template>
  <section class="pt-2 md:pt-8 py-8">
    <AtomsContainer>
      <div class="lg:h-full w-full">
        <div class="relative">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2"
          >
            <div
              class="bg-blue-100 p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
            >
              <div class="flex items-center gap-2">
                <div class="flex-grow min-w-0 px-4 py-4">
                  <h3
                    class="text-black-800 dark:text-black-200 text-base sm:text-2xl font-semibold text-left break-words"
                  >
                    #1 Profesional
                  </h3>
                  <p class="pt-4">
                    Kami merupakan jasa arsitek terpercaya di Indonesia.​
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
            >
              <div class="flex items-center gap-2">
                <div class="flex-grow min-w-0 px-4 py-4">
                  <h3
                    class="text-black-800 dark:text-black-200 text-base sm:text-2xl font-semibold text-left break-words"
                  >
                    #2 Kreatif
                  </h3>
                  <p class="pt-4">Inovasi dalam setiap desain kami.​</p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
            >
              <div class="flex items-center gap-2">
                <div class="flex-grow min-w-0 px-4 py-4">
                  <h3
                    class="text-black-800 dark:text-black-200 text-base sm:text-2xl font-semibold text-left break-words"
                  >
                    #3 Terpercaya
                  </h3>
                  <p class="pt-4">Komitmen pada kualitas dan kepuasan klien.</p>
                </div>
              </div>
            </div>

            <div
              class="bg-white p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
            >
              <div class="flex items-center gap-2">
                <div class="flex-grow min-w-0 px-4 py-4">
                  <h3
                    class="text-black-800 dark:text-black-200 text-base sm:text-2xl font-semibold text-left break-words"
                  >
                    #4 Berpengalaman
                  </h3>
                  <p class="pt-4">Bertahun-tahun dalam mewujudkan visi Anda.</p>
                </div>
              </div>
            </div>
          </div>
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
