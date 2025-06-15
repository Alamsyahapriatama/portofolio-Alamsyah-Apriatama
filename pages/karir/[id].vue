<template>
  <section class="pt-28 md:pt-28 py-20">
    <AtomsContainer>
      <div class="lg:h-full w-full">
        <div class="relative">
          <div v-if="blog">
            <h1 class="text-3xl font-bold text-black-800 dark:text-black-200">
              {{ blog.title }}
            </h1>
            <p class="text-black-500 dark:text-black-400 mt-2">
              Dipublikasikan pada {{ blog.date }}
            </p>
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
    href="https://wa.me/6287877131161"
    target="_blank"
    class="fixed bottom-8 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
  >
    <img src="/images/icon-whatsapp.svg" alt="WhatsApp" class="w-6 h-6" />
  </a>
</template>

<script setup>
useHead({
  title: "Les Belajar - Les Belajar Online Seru, Interaktif & Relevan", // Lebih spesifik dan menarik
  htmlAttrs: {
    lang: "id", // Bahasa sudah benar (Indonesia)
  },
  meta: [
    {
      name: "description",
      // Deskripsi dioptimalkan dari input Anda, menyertakan nama brand dan esensi layanan
      content:
        "Di Les Belajar, belajar bahasa tak lagi boring! Kami tawarkan les bahasa online yang seru, interaktif, dan relevan dengan kebutuhanmu di dunia nyata. Temukan cara baru belajar bahasa bersama kami!",
    },
    {
      name: "keywords",
      // Keywords yang relevan dengan layanan kursus bahasa oleh Les Belajar
      content:
        "Les Belajar, les bahasa, kursus bahasa online, belajar bahasa, bahasa asing, kursus interaktif, belajar bahasa seru, kursus bahasa menyenangkan, belajar bahasa efektif, platform belajar bahasa, les bahasa Inggris, les bahasa Mandarin, les bahasa Jepang, les bahasa Korea",
    },
    { name: "robots", content: "index, follow" }, // Pengaturan robots sudah baik

    // Open Graph (untuk Facebook, LinkedIn, dll.)
    {
      property: "og:title",
      content: "Les Belajar - Les Belajar Online Seru & Interaktif",
    }, // Konsisten dengan title utama
    {
      property: "og:description",
      // Deskripsi OG konsisten dengan meta description
      content:
        "Belajar bahasa tak lagi boring! Di Les Belajar, kami ubah cara belajarmu jadi seru, interaktif, dan super relevan dengan dunia nyata.",
    },
    { property: "og:image", content: "https://glotlink.com/og-image.png" }, // URL absolut untuk OG image lebih disarankan. Pastikan gambar ini ada dan relevan.
    { property: "og:url", content: "https://glotlink.com/" }, // URL website Anda
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Les Belajar" }, // Nama website untuk OG

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" }, // summary_large_image biasanya lebih menarik
    {
      name: "twitter:title",
      content: "Les Belajar - Les Belajar Online Seru & Interaktif",
    }, // Konsisten
    {
      name: "twitter:description",
      content:
        "Belajar bahasa tak lagi boring! Di Les Belajar, kami ubah cara belajarmu jadi seru, interaktif, dan super relevan dengan dunia nyata.",
    },
    { name: "twitter:image", content: "https://glotlink.com/og-image.png" }, // URL absolut untuk Twitter image. Gunakan gambar yang sama dengan OG atau spesifik Twitter jika ada.
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/logo.png" }, // Sesuai yang Anda berikan, pastikan file ini ada dan relevan
    { rel: "canonical", href: "https://glotlink.com/" }, // URL kanonikal website Anda
  ],
});

import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const blog = ref(null); // Data blog yang diambil dari API

// Fungsi untuk fetch data blog dari API berdasarkan ID
const fetchBlog = async (id) => {
  try {
    const response = await fetch(
      `https://api-community-management.lesbahasa/blog/slug/${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data blog:", data);

    // Pastikan sesuai dengan response API kamu
    if (data && data.data) {
      blog.value = {
        id: data.data.id,
        title: data.data.title,
        image: `https://api-community-management.lesbahasa/media/${data.data.image}`, // Sesuaikan path image
        date: data.data.created_at
          ? new Date(data.data.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "-",
        content: data.data.content,
      };
    } else {
      blog.value = null;
    }
  } catch (error) {
    console.error("Gagal memuat data blog:", error);
    blog.value = null;
  }
};

// Ambil ID dari route dan fetch data saat component mount
onMounted(() => {
  const blogId = route.params.id; // Ambil ID dari route param
  fetchBlog(blogId); // Panggil fetch blog berdasarkan ID
});
</script>
