<template>
  <footer
    class="bg-gray-100 dark:bg-body border-t border-gray-200 dark:border-gray-700"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10"
    >
      <!-- Logo & Short Description -->
      <div>
        <NuxtLink to="/" class="flex items-center gap-3">
          <span class="flex">
            <img
              src="/logo-ifc.png"
              alt="logo"
              class="w-6 h-6 rounded-l-full"
            />
          </span>
          <span class="text-xl font-bold text-gray-700 dark:text-white"
            >IT Fasting Camp</span
          >
        </NuxtLink>
        <p class="text-gray-600 dark:text-gray-300 mt-4">
          Program intensif belajar programming di bulan Ramadhan.
        </p>
      </div>

      <!-- Navigation Links -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-4">
          Navigasi
        </h3>
        <ul class="space-y-3">
          <li v-for="link in quickLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-gray-600 dark:text-gray-300 hover:text-primary transition"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-4">
          Kontak
        </h3>
        <div class="space-y-3">
          <div>
            <a
              href="https://wa.me/6282117902193"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 mt-2"
            >
              Whatsapp 1: +62 821-1790-2193
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/6289637447757"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 mt-2"
            >
              Whatsapp 2: +62 896-3744-7757
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/6282118939490"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 mt-2"
            >
              Whatsapp 3: +62 821-1893-9490
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div
      class="py-4 bg-gray-200 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-300"
    >
      &copy; {{ new Date().getFullYear() }} IT Fasting Camp. All Rights
      Reserved.
    </div>
  </footer>
</template>

<script lang="ts" setup>
const quickLinks = [
  { text: "Tentang IFC", href: "#about" },
  { text: "Kenapa Harus Ikut?", href: "#why-join" },
  { text: "Syarat Ikut IFC", href: "#requirements" },
  { text: "Kapan Waktunya?", href: "#when-where" },
];
</script>
