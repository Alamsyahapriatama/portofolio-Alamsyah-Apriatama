<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue"; // Ensure all imports are present

// Gunakan cookie untuk bahasa
const langCookie = useCookie<"id" | "en">("currentLanguage", {
  default: () => "id",
});

// Sync state ke cookie
const currentLanguage = useState<"id" | "en">(
  "currentLanguage",
  () => langCookie.value
);

const navIsOpen = useState("navIsOpen", () => false);

// Toggle function for mobile nav
const toggleNav = () => {
  navIsOpen.value = !navIsOpen.value;
};

// Function to change language
const setLanguage = (lang: "id" | "en") => {
  currentLanguage.value = lang;
  langCookie.value = lang; // Update cookie
  // You might want to reload page or change content dynamically based on language here
  // For Nuxt, you might use useI18n().locale.value = lang if you have i18n setup
};

const navLinks = computed(() => {
  if (currentLanguage.value === "id") {
    return [
      { text: "Beranda", href: "/" },
      { text: "Layanan", href: "#service" },
      { text: "Portofolio", href: "#works" },
      { text: "Tentang", href: "#about-me" },
      { text: "Pencapaian", href: "#pricelist" },
      // { text: "Event", href: "#event" },
    ];
  } else {
    return [
      { text: "Home", href: "/" },
      { text: "Service", href: "#service" },
      { text: "Works", href: "#works" },
      { text: "About me", href: "#about-me" },
      { text: "Achievement", href: "#pricelist" },
      // { text: "Event", href: "#event" },
    ];
  }
});

const isScrolled = ref(false);

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  window.addEventListener("scroll", onScroll);
  onScroll(); // set awal
});

onUnmounted(() => {
  // It's good practice to remove the event listener properly
  window.removeEventListener("scroll", onScroll);
});

function handleMenuClick() {
  navIsOpen.value = false;
}

const hoveredMenu = ref<string | null>(null);

// Define WhatsApp number (replace with your actual number)
const whatsappNumber = "+6289602006499"; // Example: +6281234567890
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out"
  >
    <div
      :class="[
        'mx-auto flex items-center justify-between transition-all duration-300 ease-in-out',
        isScrolled
          ? 'w-full bg-[#F2F4F5] text-black shadow-lg rounded-none px-6 py-2'
          : 'w-[90%] mt-8 bg-white text-black rounded-xl shadow-lg px-6 py-3',
      ]"
    >
      <!-- Logo -->
      <div class="inline-flex items-center gap-2">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo-ss.gif" alt="logo" class="h-12 rounded-full" />
          <span
            class="text-2xl font-bold"
            :class="{
              'animate-color-wave': !isScrolled,
            }"
            >Alamsyah Apriatama</span
          >
        </NuxtLink>
      </div>

      <!-- Navigation & Language Switcher & Let's Talk Button -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out flex flex-col lg:flex-row lg:items-center gap-6',
          navIsOpen
            ? 'visible opacity-100 translate-y-0 absolute top-full left-0 w-full p-4 z-50'
            : 'hidden lg:flex',
          isScrolled ? 'bg-[#F2F4F5]' : 'bg-white w-[80%] md:w-auto px-6 py-3 ml-5 mt-2',
        ]"
      >
        <ul
          :class="[
            'flex flex-col lg:flex-row gap-4',
            isScrolled ? 'text-black' : 'text-black ',
          ]"
        >
          <li v-for="navItem in navLinks" :key="navItem.text" class="relative">
            <AtomsNavLink
              v-if="!navItem.hasDropdown"
              :href="navItem.href ?? ''"
              :text="navItem.text"
              @click="handleMenuClick"
            />
            <div
              v-else
              class="relative"
              @mouseenter="hoveredMenu = navItem.text"
              @mouseleave="hoveredMenu = null"
            >
              <button class="flex items-center gap-2 text-xl mt-[1px]">
                {{ navItem.text }}
              </button>
              <ul
                v-if="hoveredMenu === navItem.text"
                :class="[
                  'absolute top-full left-0 w-48 shadow-lg transition duration-200 z-10 rounded-lg',
                  isScrolled
                    ? 'text-black-200 bg-[#F2F4F5]'
                    : 'text-black bg-white',
                ]"
              >
                <li
                  v-for="subItem in navItem.dropdown"
                  :key="subItem.text"
                  :class="[
                    'px-4 py-2 rounded-lg ',
                    isScrolled ? 'hover:bg-[#3253A4]' : 'hover:bg-[#41A8DF]',
                  ]"
                >
                  <NuxtLink :to="subItem.href" @click="handleMenuClick">{{
                    subItem.text
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <!-- Language Switcher -->
        <div
          class="flex items-center gap-2 lg:border-l lg:border-gray-400 lg:pl-4 mt-4 lg:mt-0"
        >
          <button
            @click="setLanguage('id')"
            :class="{
              'font-bold text-[#0E2B4E]': currentLanguage === 'id',
              'text-gray-600 hover:text-[#0E2B4E]': currentLanguage !== 'id',
            }"
            class="text-md md:text-lg transition-colors duration-200"
          >
            ID
          </button>
          <span class="text-gray-400">|</span>
          <button
            @click="setLanguage('en')"
            :class="{
              'font-bold text-[#0E2B4E]': currentLanguage === 'en',
              'text-gray-600 hover:text-[#0E2B4E]': currentLanguage !== 'en',
            }"
            class="text-md md:text-lg transition-colors duration-200"
          >
            EN
          </button>
        </div>

        <!-- Let's Talk Button -->
        <NuxtLink
          :to="`https://wa.me/${whatsappNumber}`"
          target="_blank"
          class="inline-block px-4 py-2 rounded-full bg-[#0E2B4E] text-white font-semibold transition-colors duration-300 shadow-md hover:bg-blue-700 mt-4 lg:mt-0"
        >
          Let's Talk
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden border-l border-box-border pl-2">
        <button
          @click="toggleNav"
          class="outline-none w-7 h-auto flex flex-col relative"
        >
          <span
            class="w-6 h-0.5 rounded-full bg-gray-500 transition-all duration-300 ease-linear"
            :class="
              navIsOpen
                ? 'translate-y-1.5 rotate-[40deg] scale-x-100'
                : ' scale-x-50 origin-left'
            "
          ></span>
          <span
            class="w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-500 transition-all duration-300 ease-linear"
            :class="navIsOpen ? 'scale-x-0 opacity-0' : ''"
          ></span>
          <span
            class="w-6 mt-1 h-0.5 rounded-full bg-gray-500 transition-all duration-300 ease-linear"
            :class="
              navIsOpen
                ? '-translate-y-1.5 -rotate-[40deg] scale-x-100'
                : ' scale-x-75 origin-left'
            "
          ></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style>
/* Keyframes for fade-in animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

/* Keyframes for the color wave text animation */
@keyframes color-wave {
  0% {
    background-position: -200% 0; /* Start gradient far left, off-screen */
  }
  100% {
    background-position: 200% 0; /* Move gradient far right, off-screen */
  }
}

/* Class to apply the color wave animation */
.animate-color-wave {
  /* Use a linear gradient as background */
  background: linear-gradient(to right,
    black 0%,
    #0E2B4E 20%, /* Warna aktif utama */
    #0E2B4E 40%, /* Warna aktif utama */
    #0E2B4E 60%, /* Warna aktif utama */
    transparent 100%
  );
  /* Clip the background to the text shape */
  -webkit-background-clip: text;
  background-clip: text;
  /* Make the actual text color transparent */
  color: transparent;
  /* Make the gradient wider than the text to allow movement */
  background-size: 200% 100%;
  /* Apply the animation */
  animation: color-wave 3s ease-in-out infinite; /* Loop continuously */
}
</style>
