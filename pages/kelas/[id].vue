<template>
    <section class="h-[300px] bg-[#3253A4] bg-cover bg-center">
      <AtomsContainer class="h-full">
        <!-- Judul -->
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 h-full">
          <div class="relative min-h-[180px] h-full flex items-center justify-center">
            <div class="absolute left-0 top-0 h-full w-full flex justify-end">
              <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
              </span>
            </div>
            <div class="relative mt-[105px]">
              <h3 class="text-center text-white text-5xl font-semibold">Kelas Offline 🧑‍🎓</h3>
              <h3 class="text-center text-white text-2xl mt-2">Dari Canggung ke Cas-Cis-Cus, Bareng Les Belajar!</h3>
            </div>
          </div>
        </div>
      </AtomsContainer>
    </section>
    <section class="relative w-full py-8">
      <AtomsContainer class-name="relative">
        <div
          aria-hidden="true"
          class="absolute inset-y-0 w-44 left-0 hidden dark:flex"
        >
          <div
            class="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20"
          ></div>
        </div>
        <div
          class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"
        >
          <div class="lg:py-6">
            <div class="text-center lg:text-left">
              <h1
                class="text-gray-800 pt-12 dark:text-black font-bold text-3xl md:text-5xl lg:text-5xl"
              >
                Nikmati lah kemudahan belajar
                <span
                  class="text-transparent text-[#3253A4] bg-clip-text bg-[#9f91e1]"
                  >Kelas Offline</span
                >
              </h1>
              <p class="text-2xl pt-8">Kelas ini dirancang khusus untuk membantu kamu meningkatkan kemampuan berbahasa Inggris secara bertahap, dengan metode yang menyenangkan dan mudah dipahami</p>
            </div>
          </div>
          <div class="lg:h-full hidden md:flex">
            <div
              class="flex w-full h-96 min-h-[28rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative"
            >
              <div
                class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-primary to-pink-300 dark:from-[#570cac] dark:to-primary blur-2xl"
              ></div>
              <div class="absolute w-5/5 h-full z-10 p-1 -translate-y-1/2 top-1/2 right-3 rounded-3xl shadow-lg shadow-box-shadow">
                <img
                  src="/images/hero-kelas.webp"
                  alt="Belajar Asik"
                  width="auto"
                  height="auto"
                  loading="lazy"
                  class="w-full h-full rounded-2xl object-cover"
                />
              </div>
  
            </div>
          </div>
        </div>
      </AtomsContainer>
    </section>

    <section class="pt-2 md:pt-2 py-8">
      <AtomsContainer>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 pt-8">
              <div class="md:py-2 lg:py-4 relative min-h-[180px]">
                <div class="absolute left-0 top-0 h-full w-full flex justify-end">
                    <span class="flex opacity-20">
                        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                        <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
                    </span>
                </div>
                <div class="relative">
                  <h3 class="text-center text-black text-3xl font-semibold">Keuntungan Kelas Offline</h3>
                </div>
            </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 pt-2 mt-[-80px] md:mt-[-100px]">
          <div 
            v-for="(artikel, index) in artikelPosts" 
            :key="index" 
            class="shadow-lg transform transition bg-[#f8f9fa] duration-300 ease-in-out hover:scale-105 py-10"
          >
            <!-- ICON CENTERED -->
            <div class="flex justify-center items-center text-black text-2xl mx-auto">
              <NuxtImg 
                :src="artikel.image"
                alt="artikel.title"
                class="w-2/5"
              />
            </div>

            <h3 class="mt-4 text-black-800 text-center dark:text-black-200 text-lg font-semibold">
              {{ artikel.title }}
            </h3>
            <p class="pt-4 px-8">Didirikan lebih dari 17 tahun yang lalu sejak 2007, sehingga lebih berpengalaman dan terpercaya.</p>
          </div>
        </div>

      </AtomsContainer>
    </section>
    
    
      <section class="pt-2 md:pt-2 py-20">
        <AtomsContainer>
          <div class="lg:h-full w-full">
            <div class="relative">
              <h2 class="text-center text-black text-3xl font-semibold">Biaya Kursus Kelas Offline</h2>
              <h3 class="text-black-800 text-center dark:text-black-200 font-semibold text-xl">
                Solusi Ujian Online Terjangkau untuk Semua Skala 🚀
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                <div 
                  v-for="paket in paketHarga"
                  :key="paket.title"
                  class="p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col"
                >
                  <img 
                    :src="paket.image" 
                    :alt="paket.title" 
                    class="object-cover rounded-xl w-full mx-auto opacity-0 animate-fade-in transition duration-500 ease-in-out"
                  />
  
                  <h3
                    class="mt-4 bg-white text-black text-2xl font-semibold text-center rounded-xl shadow-md border border-gray-300 p-4"
                  >
                    {{ paket.title }}
                  </h3>

                  <div class="mt-4 grid grid-cols-2 gap-x-4 text-black-600 dark:text-black-300 text-base  rounded-xl shadow-md border border-gray-300 p-4">
                    <div class="font-medium">Deskripsi</div>
                    <div class="text-right">{{ paket.description }}</div>

                    <div class="font-medium pt-2">Harga</div>
                    <div class="pt-2 text-black-800 dark:text-black-100 font-bold text-right">{{ paket.price }}</div>

                    <div class="pt-2 font-medium">Info Harga</div>
                    <div class="pt-2 text-black-800 dark:text-black-100 text-right">{{ paket.priceInfo }}</div>
                </div>
                </div>
              </div>
            </div>
          </div>
  
        </AtomsContainer>
    </section>
      
    <a
      href="https://wa.me/6287877131161"
      target="_blank"
      class="fixed bottom-8 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
    >
      <img src="/images/icon-whatsapp.svg" alt="WhatsApp" class="w-6 h-6" />
    </a>
  </template>
    
  <script setup lang="ts">
  useHead({
    title: "Belajar Asik - Jasa Pembuatan Website Murah",
    htmlAttrs: {
      lang: "id",
    },
    meta: [
      {
        name: "description",
        content: "Digitalisasikan bisnismu bersama Belajar Asik Kami menyediakan solusi digital seperti website, aplikasi, dan strategi pemasaran online.",
      },
      {
        name: "keywords",
        content: "naditechno, digitalisasi bisnis, jasa website, jasa aplikasi, web development, software house, digital marketing, e commerce shop, web online shop, web mobile, web cbt online, cbt online, kost murah, aplikasi kost murah, aplikasi siakad, aplikasi siakad murah, web siakad, website sekolah",
      },
      { name: "robots", content: "index, follow" },
  
      // Open Graph
      { property: "og:title", content: "Belajar Asik - Jasa Pembuatan Website Murah" },
      { property: "og:description", content: "Digitalisasikan bisnismu bersama Belajar Asik Solusi digital untuk era modern." },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:url", content: "https://lesbahasa" },
      { property: "og:type", content: "website" },
  
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Belajar Asik - Jasa Pembuatan Website Murah" },
      { name: "twitter:description", content: "Solusi digital untuk bisnismu dari Belajar Asik" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/logo-logo-lesbahasa.png" },
      { rel: "canonical", href: "https://lesbahasa" },
    ],
  });
  
  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  const router = useRouter();
  
  interface Blog {
    id: string;
    title: string;
    content: string;
    image: string;
    slug: string;
  }
  
  // Pagination
  let itemsPerPage = 9;
  const blogs = ref<Blog[]>([]);
  // Fetch API
  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://api-community-management.lesbahasa/galeri', {
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
          image: '/images/kelas-offline.webp',
          // image: `https://api-community-management.lesbahasa/media/${item.image}`, // Pastikan base URL sesuai kebutuhan
        }));
      } else {
        console.error('Format data tidak sesuai:', data);
      }
  
    } catch (error) {
      console.error('Gagal memuat data blog:', error);
    }
  };
  
  
  // Interface Testimoni
  interface Testimoni {
    id: string;
    title: string;
    content: string;
    image: string;
  }
  
  // Data Testimoni
  const testimonis = ref<Testimoni[]>([]);
  
  // Fetch Testimoni dari API
  const fetchTestimonis = async () => {
    try {
      const response = await fetch('https://api-community-management.lesbahasa/testimoni', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-PERUSAHAAN': 'da20774f-0164-405d-bf5a-38b5ec27a92e' // Ganti sesuai kebutuhan
        }
      });
      const data = await response.json();
  
      if (data && data.data.items && Array.isArray(data.data.items)) {
        testimonis.value = data.data.items.map((item: any) => ({
          id: item.id,
          title: item.title,
          content: item.content,
          image: '/images/kelas-offline.webp',
        }));
      } else {
        console.error('Format data tidak sesuai:', data);
      }
    } catch (error) {
      console.error('Gagal memuat data testimoni:', error);
    }
  };
  
  // Pagination Testimoni
  const paginatedTestimonis = computed(() => {
    const start = (1 - 1) * 6;
    return testimonis.value.slice(start, start + itemsPerPage);
  });
  
  // Panggil API saat mount
  onMounted(() => {
    fetchBlogs();
    fetchTestimonis();
    fetchLayanans();
  });

  // Pagination
const currentPage = ref(1);
interface Layanan {
    id: string;
    title: string;
    content: string;
    note: string;
    image: string;
    nominal: number;
}

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


const filteredLayanans = computed(() => {
    return layanans.value
});

// Pagination layanan
const paginatedLayanans = computed(() => {
    const start = (currentPage.value - 1) * 2;
    return filteredLayanans.value.slice(start, start + 2);
});
  
  const paketHarga = [
    {
      image: '/images/kelas-offline.webp',
      title: 'SILVER',
      description: 'Total 32 sesi',
      price: 'Rp 4.640.000',
      priceInfo: 'Rp 145.000 / sesi',
    },
    {
      image: '/images/kelas-offline.webp',
      title: 'GOLD',
      description: 'Total 32 sesi',
      price: 'Rp 4.640.000',
      priceInfo: 'Rp 145.000 / sesi',
    },
    {
      image: '/images/kelas-offline.webp',
      title: 'PLATINUM',
      description: 'Total 32 sesi',
      price: 'Rp 4.640.000',
      priceInfo: 'Rp 145.000 / sesi',
    },
  ];
  
  const teamMembers = [
    { image: '/images/cbt-1.jpg', name: 'Landing Page'},
    { image: '/images/cbt-2.jpg', name: 'Landing Page'},
    { image: '/images/cbt-3.jpg', name: 'Landing Page'},
    { image: '/images/cbt-4.jpg', name: 'Login Admin atau Peserta'},
    { image: '/images/cbt-5.jpg', name: 'Dashboard Admin'},
    { image: '/images/cbt-6.jpg', name: 'Tambah Kategori Bank Soal'},
    { image: '/images/cbt-7.jpg', name: 'Tambah Paket Latihan'},
    { image: '/images/cbt-8.jpg', name: 'Tambah Paket Tryout'},
    { image: '/images/cbt-9.jpg', name: 'Dashboard Peserta'},
    { image: '/images/cbt-10.jpg', name: 'Tryout Akbar'},
    { image: '/images/cbt-11.jpg', name: 'Informasi Profil'},
    { image: '/images/cbt-12.jpg', name: 'Pilih Paket'},
  ];
  
  const faqs = ref([
    {
      question: "Apa itu CBT Online?",
      answer: "CBT Online adalah platform ujian berbasis web yang memudahkan penyelenggaraan ujian daring dengan fitur lengkap, fleksibel, dan terjangkau.",
      open: false,
    },
    {
      question: "Siapa saja yang bisa menggunakan CBT Online?",
      answer: "CBT Online dapat digunakan oleh sekolah, lembaga pelatihan, perusahaan, atau institusi pendidikan lainnya yang membutuhkan sistem ujian daring.",
      open: false,
    },
    {
      question: "Apa saja jenis soal yang bisa digunakan?",
      answer: "Platform ini mendukung soal pilihan ganda, essay, serta pengacakan soal dan jawaban untuk mencegah kecurangan.",
      open: false,
    },
    {
      question: "Apakah CBT Online bisa digunakan di HP?",
      answer: "Ya, CBT Online mendukung multi-device, termasuk penggunaan di HP, tablet, dan laptop.",
      open: false,
    },
    {
      question: "Apakah hasil ujian bisa langsung direkap?",
      answer: "Ya, hasil ujian direkap otomatis dan bisa di-export dalam format Excel atau PDF.",
      open: false,
    },
    {
      question: "Apakah ada fitur pembayaran otomatis?",
      answer: "CBT Online terintegrasi dengan payment gateway Xendit untuk mempermudah pembayaran layanan atau biaya peserta.",
      open: false,
    },
    {
      question: "Apakah ada akun terpisah untuk admin, guru, dan peserta?",
      answer: "Ya, sistem mendukung role-based access untuk admin, guru/pengajar, dan peserta ujian.",
      open: false,
    },
  ]);
  
  function toggleFAQ(index: number) {
    faqs.value[index].open = !faqs.value[index].open;
  }

  const artikelPosts = [
    { 
        id: 1,
        image: 'https://static.wixstatic.com/media/e09e14_977480f4326a4be0b394a0eba1849259~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5229578.png',
        title: 'Exclusive Class',
        description: 'Kelas hanya terdiri dari 3 peserta, memberikan suasana belajar lebih fokus dan personal.',
    },
    { 
        id: 2,
        image: 'https://static.wixstatic.com/media/e09e14_354dd187e9f647ffacd8f4e9693b56f3~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10907018.png',
        title: 'Flexible Format',  
        description: 'Peserta dapat memilih untuk mengikuti kelas secara tatap muka atau daring, sesuai preferensi.',
    },
    { 
        id: 3,
        image: 'https://static.wixstatic.com/media/e09e14_cf3d38017dc1401fadf165e6c40e369d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8324227.png', 
        title: 'Fix Schedule',
        description: 'Peserta dapat memilih untuk jadwal belajar dari yang telah ditentukan oleh kami.', 
    },
    ];
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
  