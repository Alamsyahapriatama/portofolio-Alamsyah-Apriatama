
<template>
    <section class="pt-2 md:pt-6 py-20">
        <AtomsContainer>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8" style="margin-top: -20px;">
            <div 
                v-for="layanan in paginatedLayanans"
                :key="layanan.id"
                class="shadow-lg transform transition duration-300 ease-in-out hover:scale-105 p-6 h-full hover:bg-[#9f91e1] hover:text-white group"
            >
              <div class="flex flex-col items-center text-center h-full">
                <!-- ICON dalam lingkaran -->
                <div class="flex items-center justify-center w-28 h-28 rounded-full bg-[#9f91e1] group-hover:bg-white text-white text-2xl mb-4">
                  <img :src="layanan.image" alt="layanan.title" class="w-3/5">
                </div>

                <!-- Konten -->
                <div class="flex flex-col flex-1 h-full">
                  <!-- Title dan content -->
                  <div>
                    <h3 class="text-black-800 dark:text-black-200 text-2xl font-semibold group-hover:text-white transition">
                      {{ layanan.title }}
                    </h3>
                    <p class="mt-2 text-black-600 dark:text-black-300 text-md group-hover:text-white transition">
                      {{ layanan.content }}
                    </p>
                    <p class="mt-2 pt-6 text-black-600 dark:text-black-300 text-md group-hover:text-white transition">
                      {{ layanan.note }}
                    </p>
                  </div>
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
const itemsPerPage = 9;
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
