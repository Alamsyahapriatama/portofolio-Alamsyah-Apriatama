<template>
  <SectionsProgramHero />
  <section v-if="isDetailPage" class="pt-20">
    <AtomsContainer>
        <div class="lg:h-full w-full">
          <div class="relative">
            <div v-if="blog">
              <h1 class="text-3xl font-bold text-black-800 dark:text-black-200">
                {{ blog.title }}
              </h1>
              <p class="text-black-500 dark:text-black-400 mt-2">Dipublikasikan pada {{ blog.date }}</p>
              <img
                :src="blog.image"
                :alt="blog.title"
                class="w-full h-96 object-cover rounded-xl my-6"
              />
              <div
                class="blog-content text-black-600 dark:text-black-300 text-md leading-relaxed pt-4"
                v-html="blog.content"
              ></div>
            </div>
            <div v-else class="text-center text-black-600 dark:text-black-300">
              <p>Blog tidak ditemukan.</p>
            </div>
          </div>
        </div>
      <div class="bg-white rounded-xl shadow-md p-8 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-center text-black">Form Pendaftaran</h2>
        <form class="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Nama Lengkap" required class="border p-2 rounded" />
          <input type="email" placeholder="Email" required class="border p-2 rounded" />
          <input type="tel" placeholder="No HP" required class="border p-2 rounded" />
          <button type="submit" class="bg-[#4633a8] text-white py-2 rounded hover:bg-[#372b89]">
            Submit
          </button>
        </form>
      </div>
    </AtomsContainer>
  </section>
  <section v-else class="pt-2 md:pt-8 py-20">
    <AtomsContainer>
      <div class="lg:h-full w-full">
        <div class="relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
            <div v-for="paket in paketHarga" :key="paket.title" class="p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col">
              <img src="/images/program-english.webp" :alt="paket.title" class="object-cover rounded-xl w-5/5 mx-auto opacity-0 animate-fade-in transition duration-500 ease-in-out" />
              <h3 class="mt-4 text-black-800 dark:text-black-200 text-xl font-semibold"> The Mesmerizing Beauty of Russia </h3>
              <div class="mt-4 text-black-600 dark:text-black-300 text-base text-md">
                <div class="font-medium">
                  <i aria-hidden="true" class="fas fa-check-circle"></i> 8 Hari <i aria-hidden="true" class="fas fa-check-circle"></i> Uzbekistan Airways
                </div>
              </div>
              <div class="mt-4 grid grid-cols-2 gap-x-4 text-black-600 dark:text-black-300 text-base">
                <div class="font-medium">Harga Mulai</div>
                <div class="text-right">Rp30,5 JT</div>
              </div>
              <NuxtLink to="/program/english?id=1" class="py-2 border-[#9f91e1] bg-[#4633a8] text-white text-center rounded-lg transition duration-300" style="margin-top: 10px"> Lihat selengkapnya </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
  <div v-if="isModalOpen" class="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white dark:bg-white p-6 rounded-xl max-w-md w-full relative">
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-black text-4xl"> &times; </button>
      <img :src="selectedPaket.image" :alt="selectedPaket.title" class="rounded-xl w-full mb-4" />
      <h2 class="text-2xl font-bold mb-2">{{ selectedPaket.title }}</h2>
      <p class="text-black dark:text-black mb-4">{{ selectedPaket.description }}</p>
      <p class="text-lg font-semibold text-black dark:text-black mb-4">Harga: {{ selectedPaket.price }}</p>
      <a :href="`https://wa.me/6281234567890?text=Halo, saya tertarik dengan paket ${selectedPaket.title}`" target="_blank" class="block bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg"> Beli via WhatsApp </a>
    </div>
  </div>
</template>
<script setup>
  useHead({
    title: "Glotlink - Jasa Pembuatan Website Murah",
    htmlAttrs: {
      lang: "id",
    },
    meta: [{
        name: "description",
        content: "Digitalisasikan bisnismu bersama GLOTLINK Kami menyediakan solusi digital seperti website, aplikasi, dan strategi pemasaran online.",
      }, {
        name: "keywords",
        content: "naditechno, digitalisasi bisnis, jasa website, jasa aplikasi, web development, software house, digital marketing, e commerce shop, web online shop, web mobile, web cbt online, cbt online, kost murah, aplikasi kost murah, aplikasi siakad, aplikasi siakad murah, web siakad, website sekolah",
      }, {
        name: "robots",
        content: "index, follow"
      },
      // Open Graph
      {
        property: "og:title",
        content: "Glotlink - Jasa Pembuatan Website Murah"
      }, {
        property: "og:description",
        content: "Digitalisasikan bisnismu bersama GLOTLINK Solusi digital untuk era modern."
      }, {
        property: "og:image",
        content: "/og-image.png"
      }, {
        property: "og:url",
        content: "https://glotlink"
      }, {
        property: "og:type",
        content: "website"
      },
      // Twitter Card
      {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: "Glotlink - Jasa Pembuatan Website Murah"
      }, {
        name: "twitter:description",
        content: "Solusi digital untuk bisnismu dari Glotlink"
      }, {
        name: "twitter:image",
        content: "/og-image.png"
      },
    ],
    link: [{
      rel: "icon",
      type: "image/png",
      href: "/logo.webp"
    }, {
      rel: "canonical",
      href: "https://glotlink"
    }, ],
  });
  import {
    useRoute,
    useRouter
  } from 'vue-router';
  import {
    ref,
    onMounted
  } from 'vue';
  const route = useRoute();
  const router = useRouter();
  const isDetailPage = computed(() => !!route.query.id);

  const blog = ref(null); // Data blog yang diambil dari API
  // Fungsi untuk fetch data blog dari API berdasarkan ID
  const fetchBlog = async (id) => {
    try {
      const response = await fetch(`https://api-community-management.glotlink/blog/slug/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data blog:', data);
      // Pastikan sesuai dengan response API kamu
      if (data && data.data) {
        blog.value = {
          id: data.data.id,
          title: data.data.title,
          image: `https://api-community-management.glotlink/media/${data.data.image}`, // Sesuaikan path image
          date: data.data.created_at ? new Date(data.data.created_at).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }) : '-',
          content: data.data.content,
        };
      } else {
        blog.value = null;
      }
    } catch (error) {
      console.error('Gagal memuat data blog:', error);
      blog.value = null;
    }
  };
  // Ambil ID dari route dan fetch data saat component mount
  onMounted(() => {
    const blogId = route.params.id; // Ambil ID dari route param
    fetchBlog(blogId); // Panggil fetch blog berdasarkan ID
  });
  const isModalOpen = ref(false);
  const selectedPaket = ref(null);
  const openModal = (paket) => {
    selectedPaket.value = paket;
    isModalOpen.value = true;
  };
  const closeModal = () => {
    isModalOpen.value = false;
    selectedPaket.value = null;
  };
  const paketHarga = [{
    image: '/images/icon-starter.jpg',
    title: 'Visa Mandiri',
    description: 'Mandiri',
    price: '$ 200',
    priceInfo: '90',
  }, {
    image: '/images/icon-premium.jpg',
    title: 'Visa Group',
    description: 'Min 25 Pax',
    price: '$ 175',
    priceInfo: '90',
  }, {
    image: '/images/icon-exclusive.jpg',
    title: 'Visa Group +',
    description: 'Min 25 Pax',
    price: '$ 165',
    priceInfo: '90',
  }, ];
</script>