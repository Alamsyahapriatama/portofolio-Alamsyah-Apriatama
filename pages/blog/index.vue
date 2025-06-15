<script setup lang="ts">
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
</script>
<template>
  <div>
    <SectionsBlogHero />
    <SectionsBlogList />
    <!-- Ikon WhatsApp Mengambang -->
    <a
      href="https://wa.me/6287877131161"
      target="_blank"
      class="fixed bottom-8 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
    >
      <img src="/images/icon-whatsapp.svg" alt="WhatsApp" class="w-6 h-6" />
    </a>
  </div>
</template>
