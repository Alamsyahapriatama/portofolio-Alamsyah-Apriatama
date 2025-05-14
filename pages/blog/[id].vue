<template>
  <section class="h-[300px] bg-[#4633a8] bg-cover bg-center">
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
          <div class="relative mt-[125px]" v-if="blog">
            <h3 class="text-center text-white text-5xl font-semibold">{{ blog.title }}</h3>
            <h3 class="text-center text-white text-2xl mt-2">Published Date: {{ blog.date }}</h3>
          </div>
          <div class="relative mt-[105px]" v-else>
            <h3 class="text-center text-white text-5xl font-semibold">Blog 🧑‍🎓</h3>
            <h3 class="text-center text-white text-2xl mt-2">Dari Canggung ke Cas-Cis-Cus, Bareng Glotlink!</h3>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
    <section class="pt-8 md:pt-8 py-12">
      <AtomsContainer>
        <div class="lg:h-full w-full">
          <div class="relative">
            <div v-if="blog">
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
      </AtomsContainer>
    </section>
    <!-- Ikon WhatsApp Mengambang -->
    <a
      href="https://wa.me/6281998002469"
      target="_blank"
      class="fixed bottom-8 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
    >
      <img src="/images/icon-whatsapp.svg" alt="WhatsApp" class="w-6 h-6" />
    </a>
  </template>
  
  <script setup>
  useHead({
  title: "Glotlink - Jasa Pembuatan Website Murah",
  htmlAttrs: {
    lang: "id",
  },
  meta: [
    {
      name: "description",
      content: "Digitalisasikan bisnismu bersama GLOTLINK Kami menyediakan solusi digital seperti website, aplikasi, dan strategi pemasaran online.",
    },
    {
      name: "keywords",
      content: "naditechno, digitalisasi bisnis, jasa website, jasa aplikasi, web development, software house, digital marketing, e commerce shop, web online shop, web mobile, web cbt online, cbt online, kost murah, aplikasi kost murah, aplikasi siakad, aplikasi siakad murah, web siakad, website sekolah",
    },
    { name: "robots", content: "index, follow" },

    // Open Graph
    { property: "og:title", content: "Glotlink - Jasa Pembuatan Website Murah" },
    { property: "og:description", content: "Digitalisasikan bisnismu bersama GLOTLINK Solusi digital untuk era modern." },
    { property: "og:image", content: "/og-image.png" },
    { property: "og:url", content: "https://glotlink" },
    { property: "og:type", content: "website" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Glotlink - Jasa Pembuatan Website Murah" },
    { name: "twitter:description", content: "Solusi digital untuk bisnismu dari Glotlink" },
    { name: "twitter:image", content: "/og-image.png" },
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/logo.webp" },
    { rel: "canonical", href: "https://glotlink" },
  ],
});

  import { useRoute, useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const route = useRoute();
  const router = useRouter();
  const blog = ref(null); // Data blog yang diambil dari API
  
  // Fungsi untuk fetch data blog dari API berdasarkan ID
  const fetchBlog = async (id) => {
    try {
      const response = await fetch(`https://cms-les.naditechno.id/api/blog/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data blog:', data.data);
  
      // Pastikan sesuai dengan response API kamu
      if (data && data.data) {
        blog.value = {
          id: data.data.id,
          title: data.data.title,
          image: data.data.media[0].original_url, // Sesuaikan path image
          date: data.data.created_at ? new Date(data.data.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '-',
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
  
  // Fungsi kembali ke halaman blog list
  const goBack = () => {
    router.push('/news');
  };
  </script>
  