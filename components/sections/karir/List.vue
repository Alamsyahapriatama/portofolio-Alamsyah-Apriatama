<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
const router = useRouter();

interface Karir {
  id: string;
  title: string;
  content: string;
  image: string;
  slug: string;
}

// Pagination
const currentPage = ref(1);
const itemsPerPage = 9;
const blogs = ref<Karir[]>([]);

// ✅ Helper function untuk limit kata
const limitWords = (text: string, maxWords: number) => {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
};

// Fetch API
const fetchKarirs = async () => {
  try {
    const response = await fetch('https://api-community-management.glotlink/blog?limit=4', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-PERUSAHAAN': 'da20774f-0164-405d-bf5a-38b5ec27a92e' // Ganti sesuai kebutuhan
      }
    });
    const data = await response.json();

    if (data && data.data.items && Array.isArray(data.data.items)) {
      blogs.value = data.data.items.map((item: any) => ({
        id: item.id,
        title: item.title,
        content: item.content,
        slug: item.slug,
        image: `https://api-community-management.glotlink/media/${item.image}`, // Pastikan base URL sesuai kebutuhan
      }));
    } else {
      console.error('Format data tidak sesuai:', data);
    }

  } catch (error) {
    console.error('Gagal memuat data blog:', error);
  }
};


// Panggil API saat mount
onMounted(() => {
  fetchKarirs();
});

const filteredKarirs = computed(() => {
  return blogs.value
});

// Pagination logika
const totalPages = computed(() => Math.ceil(filteredKarirs.value.length / itemsPerPage));
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++; };
const prevPage = () => { if (currentPage.value > 1) currentPage.value--; };

// Pagination blog
const paginatedKarirs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredKarirs.value.slice(start, start + itemsPerPage);
});


// Fungsi Navigasi
const goToKarir = (slug: string) => {
  router.push(`/karir/${slug}`);
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


<template>
  <section class="py-20" id="profile">
    <AtomsContainer>
      <!-- FILTER & EVENT LIST -->
      <div class="">
        <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <!-- Judul Event -->
            <h3 class="text-black-800 dark:text-black font-bold text-3xl">Karir</h3>
        </div>


        <!-- Event List -->
        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div 
              v-for="blog in paginatedKarirs"
              :key="blog.id"
              class="bg-white p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
          >
              <div>
                  <img 
                      :src="blog.image" 
                      :alt="blog.title" 
                      class="object-cover rounded-xl w-full h-40 opacity-0 animate-fade-in transition duration-500 ease-in-out"
                  />
                  <h3 class="mt-4 text-black-800 dark:text-black-200 text-lg font-semibold">
                      {{ blog.title }}
                  </h3>
                  <div
                    class="blog-content text-black-600 dark:text-black-300 text-md leading-relaxed pt-4"
                    v-html="limitWords(blog.content, 16)"
                  ></div>
              </div>
              <br>
              <button 
                  class="mt-auto px-4 py-2 bg-[#9f91e1] text-black rounded-lg hover:bg-opacity-80 transition duration-300"
                  @click="goToKarir(blog.slug)"
              >
                  Lihat Selengkapnya
              </button>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-6 flex justify-center gap-4">
          <button 
            @click="prevPage" 
            :disabled="currentPage === 1" 
            class="px-4 py-2 bg-black-300 dark:bg-black-700 text-black-800 dark:text-black rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages" 
            class="px-4 py-2 bg-black-300 dark:bg-black-700 text-black-800 dark:text-black rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
