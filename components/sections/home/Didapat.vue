<template>
  <section class="pt-14 md:pt-14 py-20">
    <AtomsContainer>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 pt-8">
        <div class="md:py-2 lg:py-4 relative min-h-[180px]">
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
              Apa yang akan Anda dapatkan.
            </h3>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 pt-2 mt-[-80px] md:mt-[-100px]"
      >
        <div
          class="shadow-lg transform transition bg-white duration-300 ease-in-out hover:scale-105 py-10 border-4 border-gray-300 rounded-xl"
        >
          <div
            class="flex justify-center items-center text-black text-2xl mx-auto"
          >
            <NuxtImg
              :src="homes?.why[0].image"
              :alt="homes?.why[0].title"
              class="w-2/5"
            />
          </div>

          <h3 class="mt-4 text-black text-center text-xl font-semibold">
            {{ homes?.why[0].title }}
          </h3>
          <div
            class="pt-4 px-8 text-lg md:text-lg text-black text-center"
            v-html="homes?.why[0].description"
          ></div>
        </div>

        <div
          class="shadow-lg transform transition bg-white duration-300 ease-in-out hover:scale-105 py-10 border-4 border-gray-300 rounded-xl"
        >
          <div
            class="flex justify-center items-center text-black text-2xl mx-auto"
          >
            <NuxtImg
              :src="homes?.why[1].image"
              :alt="homes?.why[1].title"
              class="w-2/5"
            />
          </div>

          <h3 class="mt-4 text-black text-center text-xl font-semibold">
            {{ homes?.why[1].title }}
          </h3>
          <div
            class="pt-4 px-8 text-lg md:text-lg text-black text-center"
            v-html="homes?.why[1].description"
          ></div>
        </div>

        <div
          class="shadow-lg transform transition bg-white duration-300 ease-in-out hover:scale-105 py-10 border-4 border-gray-300 rounded-xl"
        >
          <div
            class="flex justify-center items-center text-black text-2xl mx-auto"
          >
            <NuxtImg
              :src="homes?.why[2].image"
              :alt="homes?.why[2].title"
              class="w-2/5"
            />
          </div>

          <h3 class="mt-4 text-black text-center text-xl font-semibold">
            {{ homes?.why[2].title }}
          </h3>
          <div
            class="pt-4 px-8 text-lg md:text-lg text-black text-center"
            v-html="homes?.why[2].description"
          ></div>
        </div>

        <div
          class="shadow-lg transform transition bg-white duration-300 ease-in-out hover:scale-105 py-10 border-4 border-gray-300 rounded-xl"
        >
          <div
            class="flex justify-center items-center text-black text-2xl mx-auto"
          >
            <NuxtImg
              :src="homes?.why[3].image"
              :alt="homes?.why[3].title"
              class="w-2/5"
            />
          </div>

          <h3 class="mt-4 text-black text-center text-xl font-semibold">
            {{ homes?.why[3].title }}
          </h3>
          <div
            class="pt-4 px-8 text-lg md:text-lg text-black text-center"
            v-html="homes?.why[3].description"
          ></div>
        </div>

        <div
          class="shadow-lg transform transition bg-white duration-300 ease-in-out hover:scale-105 py-10 border-4 border-gray-300 rounded-xl"
        >
          <div
            class="flex justify-center items-center text-black text-2xl mx-auto"
          >
            <NuxtImg
              :src="homes?.why[4].image"
              :alt="homes?.why[4].title"
              class="w-2/5"
            />
          </div>

          <h3 class="mt-4 text-black text-center text-xl font-semibold">
            {{ homes?.why[4].title }}
          </h3>
          <div
            class="pt-4 px-8 text-lg md:text-lg text-black text-center"
            v-html="homes?.why[4].description"
          ></div>
        </div>

        <div
          class="shadow-lg transform transition bg-white duration-300 ease-in-out hover:scale-105 py-10 border-4 border-gray-300 rounded-xl"
        >
          <div
            class="flex justify-center items-center text-black text-2xl mx-auto"
          >
            <NuxtImg
              :src="homes?.why[5].image"
              :alt="homes?.why[5].title"
              class="w-2/5"
            />
          </div>

          <h3 class="mt-4 text-black text-center text-xl font-semibold">
            {{ homes?.why[5].title }}
          </h3>
          <div
            class="pt-4 px-8 text-lg md:text-lg text-black text-center"
            v-html="homes?.why[5].description"
          ></div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"; // Keep these if they are used elsewhere in the component or its children
import { ref, onMounted } from "vue";

import { getHome } from "@/composables/utils";

const homes = ref<any>(null);

onMounted(async () => {
  homes.value = await getHome();
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
