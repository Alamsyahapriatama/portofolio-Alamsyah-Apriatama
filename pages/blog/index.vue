<script setup lang="ts">
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
</script>
<template>
  <div>
    <SectionsBlogHero />
    <SectionsBlogList />
    <!-- Ikon WhatsApp Mengambang -->
    <a
      href="https://wa.me/6281998002469"
      target="_blank"
      class="fixed bottom-8 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
    >
      <img src="/images/icon-whatsapp.svg" alt="WhatsApp" class="w-6 h-6" />
    </a>
</div>
</template>
