<script setup lang="ts">
useHead({
  title: "IT Fasting Camp",
  meta: [
    {
      name: "description",
      content:
        "Belajar Programming, Networking, sekaligus diskusi islam sambil menunggu buka puasa di bulan penuh berkah.",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
});
</script>
<template>
  <div>
    <SectionsHomeHeroSection />
    <SectionsAboutIFC />
    <SectionsWhenWhere />
    <SectionsCallToAction />
  </div>
</template>
