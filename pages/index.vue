<script setup lang="ts">
useHead({
  title: "IT Fasting Camp",
  meta: [
    {
      name: "description",
      content: "Tempat belajar IT Gratis.",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
});
</script>
<template>
  <div>
    <SectionsHomeHeroSection />
    <SectionsHomeLatestPodcast />
    <SectionsHomePopularPodcasts />
    <SectionsAboutPodux />
    <SectionsWhyUs />
    <SectionsCallToAction />
  </div>
</template>
