<template>
  <footer
    class="bg-gray-100 dark:bg-[#9f91e1]"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10"
    >
      <!-- Logo & Short Description -->
      <div>
        <NuxtLink to="/" class="flex items-center gap-3">
          <span class="flex">
            <NuxtImg
              :src="logo"
              alt="logo"
              class="w-full h-12 rounded-l-full"
            />
          </span> 
          <h3 class="text-left text-black text-lg">GLOTLINK</h3>
        </NuxtLink>
        <p class="text-black dark:text-black mt-4">
          Digitalisasikan Bisnismu Bersama GLOTLINK Semua Yang Anda Butuhkan Untuk Membangun Bisnis Digital Yang Sukses!
        </p>
      </div>

      <!-- Navigation Links -->
      <div>
        <h3 class="text-lg font-semibold text-black dark:text-black mb-4">
          Navigasi
        </h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-1">
          <li v-for="link in quickLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-black-600 dark:text-black hover:text-primary transition"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div>
        <h3 class="text-lg font-semibold text-black dark:text-black mb-4">
          Kontak
        </h3>
        <div class="space-y-3">
          <div>
            <a
              class="text-black-600 dark:text-black mt-2"
            >
              Email: glotlink@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/6281297447501"
              target="_blank"
              class="text-black-600 dark:text-black mt-2"
            >
              Whatsapp: 0812-9744-7501
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div
      class="py-4 bg-gray-200 dark:bg-[#4633a8] text-center text-black-600 dark:text-gray-300"
    >
      &copy; {{ new Date().getFullYear() }}  GLOTLINK
    </div>
  </footer>
</template>

<script lang="ts" setup>
  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "Kelas", href: "/kelas" },
    { text: "Program", href: "/program" },
    { text: "Lokasi", href: "/lokasi" },
    { text: "Blog", href: "/blog" },
    { text: "Karir", href: "/karir" },
    { text: "Hubungi Kami", href: "/hubungi-kami" },
  ];

  const logo = ref('/logo.webp')
  const app_name = ref()
</script>
