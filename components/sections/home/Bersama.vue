<template>
  <section class="pt-14 md:pt-2 py-12 bg-[#E6E5E5]">
    <AtomsContainer>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 pt-12">
        
        <!-- Kolom 1: YouTube -->
        <div class="w-full h-full">
          <div class="rounded-xl overflow-hidden shadow-lg">
            <iframe
              class="w-full h-64 md:h-80 lg:h-70 rounded-xl"
              :src="homes?.link_youtube"
              title="YouTube video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div>
          <h3 class="px-6 text-black text-3xl font-semibold">{{homes?.link_title }}</h3>
          <div class="pt-4 px-6 text-lg" v-html="homes?.link_description"></div>
        </div>

      </div>

    </AtomsContainer>
  </section>
</template>


<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';

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
