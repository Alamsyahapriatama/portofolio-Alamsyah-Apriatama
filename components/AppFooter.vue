<template>
  <footer class="bg-gray-300 dark:bg-gray-300 py-2">
    <AtomsContainer>
      <div
        class="max-w-full mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-between"
      >
        <!-- Left Column: Copyright -->
        <div class="text-center md:text-left">
          <p class="text-black dark:text-black">
            &copy; {{ new Date().getFullYear() }} Alamsyah Apriatama. All Rights Reserved
          </p>
        </div>

        <!-- Right Column: Contact & Social Media Icons -->
        <div class="text-center md:text-right">
          <div class="flex justify-center md:justify-end gap-x-5 gap-y-5">
            <a href="alamsyah.bahati@gmail.com" class="flex text-left text-black dark:text-black">
              <NuxtImg src="/images/icon/email-black.png" alt="Email Belajar Asik" class="w-8 h-8" />
            </a>
            <a href="https://wa.me/6289518577881" target="_blank" rel="noopener noreferrer" class="flex text-left text-black dark:text-black">
              <NuxtImg src="/images/icon/whatsapp-black.png" alt="WhatsApp Belajar Asik" class="w-8 h-8" />
            </a>
            <a href="https://facebook.com/lesbahasa" target="_blank" rel="noopener noreferrer" class="flex text-left text-black dark:text-black">
              <NuxtImg src="/images/icon/facebook-black.png" alt="Facebook Belajar Asik" class="w-8 h-8" />
            </a>
            <a href="https://instagram.com/Apriatamaaa" target="_blank" rel="noopener noreferrer" class="flex text-left text-black dark:text-black">
              <NuxtImg src="/images/icon/instagram-black.png" alt="Instagram Belajar Asik" class="w-8 h-8" />
            </a>
            <a href="https://tiktok.com/alamsyahapriatama" target="_blank" rel="noopener noreferrer" class="flex text-left text-black dark:text-black">
              <NuxtImg src="/images/icon/tiktok-black.png" alt="TikTok Belajar Asik" class="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </footer>
</template>

<script lang="ts" setup>
// No script specific logic is needed for this component.
// The `logo` ref was not used in the template, so it's removed for brevity.
</script>

<style scoped>
/* Scoped styles for this component */
</style>
