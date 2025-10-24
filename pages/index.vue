<script setup lang="ts">
useHead({
  title: "Alamsyah Apriatama - Fullstack Developer | Jasa Pembuatan Website & Aplikasi",
  htmlAttrs: {
    lang: "id",
  },
  meta: [
    {
      name: "description",
      content:
        "Alamsyah Apriatama: Pengembang Fullstack berpengalaman 3 tahun. Hadirkan website, aplikasi web, dan mobile app yang inovatif, berdampak sosial, dan bermanfaat. Solusi digital efektif untuk bisnis Anda.",
    },
    {
      name: "keywords",
      content:
        "Jasa Pembuatan Website, Jasa Pembuatan Aplikasi, Jasa Pembuatan Aplikasi Android, Fullstack Developer, Pengembang Website, Web App Developer, Mobile App Developer, Custom Software, Kelas Belajar Coding",
    },
    { name: "robots", content: "index, follow" },

    // Open Graph (for Facebook, LinkedIn, etc.)
    {
      property: "og:title",
      content: "Alamsyah Apriatama - Fullstack Developer | Website & Aplikasi",
    },
    {
      property: "og:description",
      content:
        "Pengembang Fullstack berpengalaman 5 tahun. Hadirkan website, aplikasi web, dan mobile app yang inovatif, berdampak sosial, dan bermanfaat. Solusi digital efektif untuk bisnis Anda.",
    },
    { property: "og:image", content: "https://alamsyahapriatama.web.id/og-image.png" },
    { property: "og:url", content: "https://alamsyahapriatama.web.id/" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Alamsyah Apriatama" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Alamsyah Apriatama - Fullstack Developer | Website & Aplikasi",
    },
    {
      name: "twitter:description",
      content:
        "Wujudkan ide digital Anda! Alamsyah Apriatama, Fullstack Developer 5 tahun pengalaman. Spesialis website, web app, dan mobile app yang inovatif & berdampak.",
    },
    { name: "twitter:image", content: "https://alamsyahapriatama.web.id/og-image.png" },
  ],
  link: [
    { rel: "icon", type: "image/gif", href: "/logo-ss.gif" },
    { rel: "canonical", href: "https://alamsyahapriatama.web.id/" },
  ],
});
</script>
<template>
  <div>
    <SectionsHomeHeroSection />
    <SectionsHomeAbout />
    <SectionsHomeService />
    <SectionsHomeWorks />
    <SectionsHomeCta />
    <SectionsHomePriceList />
    <!-- <SectionsHomeEvent /> -->
  </div>
</template>
