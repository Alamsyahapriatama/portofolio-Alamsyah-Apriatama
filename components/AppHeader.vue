<script lang="ts" setup>
// Gunakan cookie
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

const navLinks = computed(() => {
  if (currentLanguage.value === "id") {
    return [
      { text: "Home", href: "/" },
      { text: "Tentang Kami", href: "#tentang" },
      { text: "Layanan", href: "#layanan" },
      { text: "Portofolio", href: "#portfolio" },
      { text: "Biaya", href: "#price-list" },
      { text: "Mengapa Memilih Kami", href: "#mengapa-memilih-kami" },
      { text: "Benefit", href: "#benefit" },
      { text: "Testimoni", href: "#testimoni" },
      { text: "Hubungi Kami", href: "#hubungi-kami" },
    ];
  } else {
    return [
      { text: "Home", href: "/" },
      { text: "Tentang Kami", href: "/tentang-kami" },
      { text: "Layanan", href: "/layanan" },
      { text: "Portofolio", href: "/portfolio" },
      { text: "Blog", href: "/blog" },
      { text: "Hubungi Kami", href: "/hubungi-kami" },
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
  window.removeEventListener("scroll", () => {});
});

function handleMenuClick() {
  navIsOpen.value = false;
}

const hoveredMenu = ref<string | null>(null);
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out"
  >
    <div
      :class="[
        'mx-auto flex items-center justify-between transition-all duration-300 ease-in-out',
        isScrolled
          ? 'w-full bg-[#3253A4] text-gray-200-200 rounded-none px-24 py-2'
          : 'w-[80%] mt-8 bg-white text-black rounded-xl shadow-lg px-6 py-3',
      ]"
    >
      <!-- Logo -->
      <div class="inline-flex items-center gap-2">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="logo" class="h-12 rounded-l-full" />
          <span
            class="text-2xl font-bold"
            :class="isScrolled ? 'text-white' : 'text-black'"
            >CV. Endo Jaya Mandiri</span
          >
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out flex flex-col lg:flex-row lg:items-center gap-6',
          navIsOpen
            ? 'visible opacity-100 translate-y-0 absolute top-full left-0 w-full p-4 z-50'
            : 'hidden lg:flex',
          isScrolled ? 'bg-[#3253A4]' : 'bg-white',
        ]"
      >
        <ul
          :class="[
            'flex flex-col lg:flex-row gap-4',
            isScrolled ? 'text-white' : 'text-black',
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
                    ? 'text-black-200 bg-[#3253A4]'
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
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden border-l border-box-border pl-2">
        <button
          @click="toggleNav"
          class="outline-none w-7 h-auto flex flex-col relative"
        >
          <span
            class="w-6 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
            :class="
              navIsOpen
                ? 'translate-y-1.5 rotate-[40deg] scale-x-100'
                : ' scale-x-50 origin-left'
            "
          ></span>
          <span
            class="w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
            :class="navIsOpen ? 'scale-x-0 opacity-0' : ''"
          ></span>
          <span
            class="w-6 mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
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
