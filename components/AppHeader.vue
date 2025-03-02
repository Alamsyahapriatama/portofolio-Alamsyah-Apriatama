<script lang="ts" setup>
const navIsOpen = useState("navIsOpen", () => false);

function toggleNav(event: MouseEvent): void {
  event.preventDefault();
  navIsOpen.value = !navIsOpen.value;
}

const navLinks = [
  {
    text: "Tentang IFC",
    href: "#about",
  },
  {
    text: "Kenapa harus ikut?",
    href: "#why-join",
  },
  {
    text: "Syarat ikut IFC",
    href: "#requirements",
  },
  {
    text: "Kapan waktunya?",
    href: "#when-where",
  },
];
</script>
<template>
  <header class="absolute inset-x-0 top-3 py-3 z-50">
    <AtomsContainer class-name="relative">
      <nav class="flex items-center justify-between w-full relative">
        <!-- app logo -->
        <div class="inline-flex relative bg-inherit">
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="flex">
              <img
                src="/logo-ifc.png"
                alt="logo"
                class="w-6 h-6 rounded-l-full"
              />
            </span>
            <span class="text-lg text-gray-700 dark:text-white">IFC</span>
          </NuxtLink>
        </div>
        <div
          class="absolute top-10 px-5 sm:px-8 md:px-12 lg:px-0 lg:pt-0 lg:top-0 invisible opacity-40 lg:opacity-100 bg-body rounded-xl border border-box-border shadow-lg shadow-box-shadow lg:border-none lg:shadow-none lg:rounded-none lg:bg-transparent w-full lg:w-max py-6 lg:py-0 lg:visible lg:relative flex transition-all duration-300 ease-linear origin-top translate-y-6 lg:translate-y-0"
          :class="navIsOpen ? '!visible !opacity-100 !translate-y-0' : ''"
        >
          <ul
            class="text-gray-700 dark:text-gray-100 w-full flex lg:items-center gap-y-4 lg:gap-x-8 flex-col lg:flex-row"
          >
            <AtomsNavLink
              v-for="navItem in navLinks"
              :href="navItem.href"
              :text="navItem.text"
            />
          </ul>
        </div>

        <div class="flex lg:hidden border-l border-box-border pl-2">
          <button
            @click="toggleNav"
            class="outline-none w-7 h-auto flex flex-col relative"
          >
            <span
              class="w-6 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
              :class="
                navIsOpen
                  ? 'translate-y-1.5 rotate-[40deg] scale-x-100 '
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
                  ? '-translate-y-1.5 -rotate-[40deg] scale-x-100 '
                  : ' scale-x-75 origin-left'
              "
            ></span>
          </button>
        </div>
      </nav>
    </AtomsContainer>
  </header>
</template>
