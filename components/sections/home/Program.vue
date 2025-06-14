<template>
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
            <h3 class="text-center text-black text-3xl font-semibold">Rekomendasi Program</h3>
          </div>
        </div>
      </div>
      <div class="lg:h-full w-full">
        <div class="relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
            <div v-for="program in paginatedPrograms" :key="program.id" class="bg-white p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between">
              <div>
                <img :src="program.image" :alt="program.name" class="object-cover rounded-xl w-full h-40 opacity-0 animate-fade-in transition duration-500 ease-in-out" />
                <h3 class="mt-4 text-black-800 dark:text-black-200 text-lg font-semibold">
                  {{ program.name }}
                </h3>
                <div class="program-content text-black-600 dark:text-black-300 text-md leading-relaxed pt-4" v-html="limitWords(program.description, 16)"></div>
              </div>
              <br />
              <NuxtLink :to="`/program/english?id=${ program.id }`" class="py-2 border-[#9f91e1] bg-[#3253A4] text-white font-semibold text-center rounded-lg transition duration-300" style="margin-top: 10px"> Lihat selengkapnya </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
<script setup lang="ts">
  import {
    useRoute,
    useRouter
  } from 'vue-router';
  import {
    ref,
    onMounted
  } from 'vue';
  interface Program {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    estimated_time: string;
  }
  // Pagination
  const currentPage = ref(1);
  const itemsPerPage = 9;
  const programs = ref < Program[] > ([]);
  // ✅ Helper function untuk limit kata
  const limitWords = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };
  // Fetch API
  const fetchPrograms = async () => {
    try {
      const response = await fetch("https://cms-les.naditechno.id/api/program/list/1?limit=3", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data && data.data && Array.isArray(data.data)) {
        programs.value = data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          estimated_time: item.estimated_time,
          description: item.description,
          image: `${item.media[0].original_url}`, // Pastikan base URL sesuai kebutuhan
        }));
      } else {
        console.error("Format data tidak sesuai:", data);
      }
    } catch (error) {
      console.error("Gagal memuat data program:", error);
    }
  };
  const filteredPrograms = computed(() => {
    return programs.value;
  });
  // Pagination logika
  const totalPages = computed(() => Math.ceil(filteredPrograms.value.length / itemsPerPage));
  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
  };
  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };
  // Pagination program
  const paginatedPrograms = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredPrograms.value.slice(start, start + itemsPerPage);
  });
  // Ambil ID dari route dan fetch data saat component mount
  onMounted(() => {
    fetchPrograms();
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
<style scoped>
  .pricing-table th,
  .pricing-table td {
    @apply border p-3 text-sm text-left;
  }

  .pricing-table thead tr {
    background-color: #9f91e1;
    color: white;
  }
</style>