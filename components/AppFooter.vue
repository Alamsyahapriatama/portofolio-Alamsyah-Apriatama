<template>
  <footer
    class="bg-[#41A8DF] dark:bg-[#41A8DF]"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] gap-10"
    >
      <div>
        <NuxtLink to="/" class="flex items-center gap-3">
          <NuxtImg
            :src="logo"
            alt="Belajar Asik Logo" class="h-12 w-auto" />
            <span class="text-3xl font-semibold text-black dark:text-black">Les Belajar</span>
        </NuxtLink>
        <p class="text-black dark:text-text-black mt-4 text-justify">
          Bimbingan ini kami susun untuk membantumu memahami pelajaran secara mendalam, bukan sekadar menghafal. Kami memprioritaskan materi-materi esensial dan struktur dasar ilmu pengetahuan, sehingga kamu tidak hanya bisa mengerjakan soal, tetapi juga benar-benar mengerti konsep di baliknya sejak pertama kali belajar.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-black dark:text-black mb-4"> Navigasi
        </h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-1">
          <li v-for="link in quickLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-black dark:text-black hover:text-primary transition" >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-black dark:text-black mb-4"> Kontak
        </h3>
        <div class="grid grid-cols-5 gap-x-5 gap-y-5"> 
          <a href="mailto:lesbahasa@gmail.com" class="flex text-left text-black dark:text-black"> 
            <NuxtImg src="/images/icon/email-black.png" alt="Email Belajar Asik" class="w-full h-full md:w-full md:h-full" />
          </a>
          <a href="https://wa.me/6281916786101" target="_blank" rel="noopener noreferrer" class="flex text-left text-black dark:text-black">
            <NuxtImg src="/images/icon/whatsapp-black.png" alt="WhatsApp Belajar Asik" class="w-full h-full md:w-full md:h-full" />
          </a>
          <a href="https://facebook.com/lesbahasa" target="_blank" rel="noopener noreferrer" class="flex text-left text-black dark:text-black">
            <NuxtImg src="/images/icon/facebook-black.png" alt="Facebook Belajar Asik" class="w-full h-full md:w-full md:h-full" />
          </a>
          <a href="https://instagram.com/lesbahasa" target="_blank" rel="noopener noreferrer" class="flex text-left text-black dark:text-black">
            <NuxtImg src="/images/icon/instagram-black.png" alt="Instagram Belajar Asik" class="w-full h-full md:w-full md:h-full" />
          </a>
          <a href="https://tiktok.com/lesbahasa" target="_blank" rel="noopener noreferrer" class="flex text-left text-black dark:text-black">
            <NuxtImg src="/images/icon/tiktok-black.png" alt="TikTok Belajar Asik" class="w-full h-full md:w-full md:h-full" />
          </a>
        </div>
      </div>
    </div>

    <div
      class="py-4 bg-text-black dark:bg-[#3253A4] bg-[#3253A4] text-center text-white dark:text-white" >
      &copy; {{ new Date().getFullYear() }} Les Belajar. All Right Reserved
    </div>
  </footer>
</template>

<script lang="ts" setup>
  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "Program", href: "/program" },
    { text: "Lokasi", href: "/lokasi" },
    { text: "Blog", href: "/blog" },
    { text: "Karir", href: "/karir" },
    { text: "Hubungi Kami", href: "/hubungi-kami" },
  ];

  const logo = ref('/logo-lesbahasa.png');
  // const app_name = ref(); // Jika tidak digunakan, bisa dihapus atau dikomentari
</script>