<script lang="ts" setup>
// Gunakan cookie
const langCookie = useCookie<'id' | 'en'>('currentLanguage', {
  default: () => 'id'
})

// Sync state ke cookie
const currentLanguage = useState<'id' | 'en'>('currentLanguage', () => langCookie.value)

const navIsOpen = useState("navIsOpen", () => false);

// Toggle function for mobile nav
const toggleNav = () => {
  navIsOpen.value = !navIsOpen.value;
};

const navLinks = computed(() => {
  if (currentLanguage.value === 'id') {
    return [
      { text: "Home", href: "/" },
      {
        text: "Kelas",
        hasDropdown: true,
        dropdown: [
          { text: "Kelas Offline", href: "/kelas/offline" },
          { text: "Kelas Online", href: "/kelas/online" },
          { text: "Kelas Private", href: "/kelas/private" },
        ]
      },
      {
        text: "Program",
        hasDropdown: true,
        dropdown: [
          { text: "Bahasa Inggris", href: "/program/english" },
          { text: "Bahasa Jepang", href: "/program/jepang" },
          { text: "Bahasa Jerman", href: "/program/jerman" },
          { text: "Bahasa Korea", href: "/program/korea" },
        ]
      },
      { text: "Blog", href: "/blog" },
      { text: "Karir", href: "/karir" },
      { text: "Hubungi Kami", href: "/hubungi-kami" },
    ]
  } else {
    return [
    { text: "Home", href: "/" },
      {
        text: "Kelas",
        hasDropdown: true,
        dropdown: [
          { text: "Kelas Offline", href: "/kelas/offline" },
          { text: "Kelas Online", href: "/kelas/online" },
          { text: "Kelas Private", href: "/kelas/private" },
        ]
      },
      {
        text: "Program",
        hasDropdown: true,
        dropdown: [
          { text: "Bahasa Inggris", href: "/program/english" },
          { text: "Bahasa Jepang", href: "/program/jepang" },
          { text: "Bahasa Jerman", href: "/program/jerman" },
          { text: "Bahasa Korea", href: "/program/korea" },
        ]
      },
      { text: "Blog", href: "/blog" },
      { text: "Karir", href: "/karir" },
      { text: "Hubungi Kami", href: "/hubungi-kami" },
    ]
  }
})

const isScrolled = ref(false);

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  window.addEventListener('scroll', onScroll);
  onScroll(); // set awal
});

onUnmounted(() => {
  window.removeEventListener('scroll', () => {});
});



function handleMenuClick() {
    navIsOpen.value = false;
}

const hoveredMenu = ref<string | null>(null);

</script>


<template>
 <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out">
  <div
    :class="[
      'mx-auto flex items-center justify-between transition-all duration-300 ease-in-out',
      isScrolled
        ? 'w-full bg-[#4633a8] text-white rounded-none px-36 py-2'
        : 'w-[80%] mt-8 bg-white text-black rounded-xl shadow-lg px-6 py-3'
    ]"
  >
    <!-- Logo -->
    <div class="inline-flex items-center gap-2">
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          src="/logo.webp"
          alt="logo"
          class="h-12 rounded-l-full"
        />
        <span
          class="hidden sm:inline text-3xl transition-all"
          :class="isScrolled ? 'text-white' : 'text-black'"
        >
          GLOTLINK
        </span>
      </NuxtLink>
    </div>

    <!-- Navigation -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out flex flex-col lg:flex-row lg:items-center gap-6',
        navIsOpen ? 'visible opacity-100 translate-y-0 absolute top-full left-0 w-full bg-white p-4 z-50' : 'hidden lg:flex'
      ]"
    >
      <ul
        :class="[
          'flex flex-col lg:flex-row gap-4',
          isScrolled ? 'text-white' : 'text-black'
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
              <span class="text-xs">▼</span>
            </button>
            <ul
              v-if="hoveredMenu === navItem.text"
              :class="[
                'absolute top-full left-0 w-48 shadow-lg transition duration-200 z-10 rounded-lg',
                isScrolled ? 'text-white bg-[#4633a8]' : 'text-black bg-white'
              ]"
            >
              <li
                v-for="subItem in navItem.dropdown"
                :key="subItem.text"
                :class="[
                  'px-4 py-2 rounded-lg ',
                  isScrolled ? 'hover:bg-[#6c5ce7]' : 'hover:bg-[#F2F2F2]'
                ]"
              >
                <NuxtLink :to="subItem.href" @click="handleMenuClick">{{ subItem.text }}</NuxtLink>
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
          :class="navIsOpen ? 'translate-y-1.5 rotate-[40deg] scale-x-100' : ' scale-x-50 origin-left'"
        ></span>
        <span
          class="w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
          :class="navIsOpen ? 'scale-x-0 opacity-0' : ''"
        ></span>
        <span
          class="w-6 mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
          :class="navIsOpen ? '-translate-y-1.5 -rotate-[40deg] scale-x-100' : ' scale-x-75 origin-left'"
        ></span>
      </button>
    </div>
  </div>
</header>

</template>