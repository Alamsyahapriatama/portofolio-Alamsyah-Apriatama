
<template>
    <section class="pt-2 md:pt-6 py-20">
        <AtomsContainer>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-28">
            <div 
              v-for="layanan in paginatedLayanans"
              :key="layanan.id"
              class="rounded-xl shadow-lg transform transition duration-300 ease-in-out bg-[#F3F3F3] hover:scale-105 p-6 h-full hover:text-black group"
            >
              <div class="flex flex-col items-center text-center h-full">
                <div class="md:mt-[-120px] w-full">
                  <NuxtImg 
                    src="https://ayocerdas.com/wp-content/uploads/2023/03/COBA-GRATIS-02.png"
                    :alt="layanan.title"
                    class="w-full rounded-xl"
                    width="auto"
                    height="80"
                  />
                </div>

                <!-- Konten -->
                <div class="flex flex-col flex-1 h-full mt-2 w-full">
                  <!-- Title -->
                  <h3 class="text-xl font-semibold mb-4 pt-2">Studi ke Jerman</h3>
                  <p class="text-md">Program Bahasa Inggris umum secara komprehensif untuk pemula dewasa menggunakan metode pengajaran visual yang mudah dipelajari.</p>
                  <br>
                  <button 
                    class="mt-auto px-4 py-2 bg-[#9f91e1] text-black rounded-lg hover:bg-opacity-80 transition duration-300"
                    @click="goDetail('reguler')"
                  >
                      Lihat
                  </button>
                </div>
              </div>
            </div>
          </div>


        </AtomsContainer>
    </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
const router = useRouter();

interface Layanan {
    id: string;
    title: string;
    content: string;
    note: string;
    image: string;
    nominal: number;
}

// Pagination
const currentPage = ref(1);
const itemsPerPage = 2;
const layanans = ref<Layanan[]>([]);

// Fetch API
const fetchLayanans = async () => {
    try {
    const response = await fetch('https://api-community-management.lesbahasa/layanan?orderBy=nomor&order=ASC', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-PERUSAHAAN': 'da20774f-0164-405d-bf5a-38b5ec27a92e'
      }
    });
    const data = await response.json();

    if (data && data.data.items && Array.isArray(data.data.items)) {
        layanans.value = data.data.items.map((item: any) => ({
        id: item.id,
        title: item.title,
        content: item.content,
        note: item.note,
        image: `https://api-community-management.lesbahasa/media/${item.image}`, // Pastikan base URL sesuai kebutuhan
        nominal: item.nominal,
        }));
    } else {
        console.error('Format data tidak sesuai:', data);
    }

    } catch (error) {
    console.error('Gagal memuat data layanan:', error);
    }
};


// Panggil API saat mount
onMounted(() => {
    fetchLayanans();
});

const filteredLayanans = computed(() => {
    return layanans.value
});

// Pagination layanan
const paginatedLayanans = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredLayanans.value.slice(start, start + itemsPerPage);
});

const formatRupiah = (value: number): string => {
    if (!value) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0, // Tanpa digit desimal
        maximumFractionDigits: 0  // Tanpa digit desimal
    }).format(value);
};


const goDetail = (slug: string) => {
  router.push(`/kelas/${slug}`);
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
        
<style scoped>
.pricing-table th, .pricing-table td {
  @apply border p-3 text-sm text-left;
}
.pricing-table thead tr{
  background-color: #9f91e1;
  color: white;
}
</style>
