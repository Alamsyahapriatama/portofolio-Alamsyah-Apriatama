<template>
  <section class="pt-2 md:pt-8 py-8" id="values">
    <AtomsContainer>
      <div class="lg:h-full w-full">
        <div class="relative">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2"
          >
            <div
              class="bg-[#F2F4F5] p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col justify-between"
              :class="{ 'opacity-0': !isVisible, 'animate-slide-in-left': isVisible }"
              style="animation-delay: 0.2s;"
            >
              <div class="flex items-center gap-2">
                <div class="flex-grow min-w-0 px-4 py-4">
                  <h1
                    class="text-black-800 dark:text-black-200 text-base sm:text-2xl font-semibold text-left break-words"
                  >
                    {{ cardData[0].title[currentLanguage] }}
                  </h1>
                  <p class="pt-4">
                    {{ cardData[0].description[currentLanguage] }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white border border-[#F2F4F5] p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col justify-between"
              :class="{ 'opacity-0': !isVisible, 'animate-slide-in-left': isVisible }"
              style="animation-delay: 0.4s;"
            >
              <div class="flex items-center gap-2">
                <div class="flex-grow min-w-0 px-4 py-4">
                  <h3
                    class="text-black-800 dark:text-black-200 text-base sm:text-2xl font-semibold text-left break-words"
                  >
                    {{ cardData[1].title[currentLanguage] }}
                  </h3>
                  <p class="pt-4">
                    {{ cardData[1].description[currentLanguage] }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white bg-[#F2F4F5] p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col justify-between"
              :class="{ 'opacity-0': !isVisible, 'animate-slide-in-left': isVisible }"
              style="animation-delay: 0.6s;"
            >
              <div class="flex items-center gap-2">
                <div class="flex-grow min-w-0 px-4 py-4">
                  <h3
                    class="text-black-800 dark:text-black-200 text-base sm:text-2xl font-semibold text-left break-words"
                  >
                    {{ cardData[2].title[currentLanguage] }}
                  </h3>
                  <p class="pt-4">
                    {{ cardData[2].description[currentLanguage] }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="bg-white border border-[#F2F4F5] p-2 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col justify-between"
              :class="{ 'opacity-0': !isVisible, 'animate-slide-in-left': isVisible }"
              style="animation-delay: 0.8s;"
            >
              <div class="flex items-center gap-2">
                <div class="flex-grow min-w-0 px-4 py-4">
                  <h3
                    class="text-black-800 dark:text-black-200 text-base sm:text-2xl font-semibold text-left break-words"
                  >
                    {{ cardData[3].title[currentLanguage] }}
                  </h3>
                  <p class="pt-4">
                    {{ cardData[3].description[currentLanguage] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue"; // Added computed

// Assuming currentLanguage is provided globally via Nuxt's useState/useCookie
const currentLanguage = useState<"id" | "en">("currentLanguage");

// Data for each card, with titles and descriptions for both languages
const cardData = ref([
  {
    title: {
      id: "#1 Profesional",
      en: "#1 Professionalism",
    },
    description: {
      id: "Saya menghadirkan layanan pengembangan yang andal dan ahli untuk situs web, aplikasi seluler, dan agen AI.",
      en: "I deliver reliable and expert development services for websites, mobile applications, and AI agents.",
    },
  },
  {
    title: {
      id: "#2 Kreativitas",
      en: "#2 Creativity",
    },
    description: {
      id: "Berinovasi dalam setiap solusi digital, mulai dari desain web yang intuitif hingga integrasi AI mutakhir.",
      en: "I innovate in every digital solution, from intuitive web designs to cutting-edge AI integrations.",
    },
  },
  {
    title: {
      id: "Kepercayaan",
      en: "Trustworthiness",
    },
    description: {
      id: "Saya berkomitmen pada kualitas dan kepuasan klien, membangun produk digital yang aman dan dapat diandalkan.",
      en: "I'm committed to quality and client satisfaction, building secure and dependable digital products.",
    },
  },
  {
    title: {
      id: "Pengalaman",
      en: "Experience",
    },
    description: {
      id: "Bertahun-tahun pengalaman dalam mengubah visi Anda menjadi situs web berkinerja tinggi, aplikasi seluler, dan solusi AI cerdas.",
      en: "I have years of expertise in transforming your vision into high-performing websites, mobile apps, and intelligent AI solutions.",
    },
  },
]);

const isVisible = ref(false); // State to track visibility for scroll animation

// Intersection Observer to trigger animation on scroll
let observer: IntersectionObserver | null = null;

onMounted(() => {
  const section = document.getElementById('values');
  if (section) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          if (observer) {
            observer.unobserve(section); // Stop observing once visible
          }
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the section is visible
    });
    observer.observe(section);
  }
});

onUnmounted(() => {
  if (observer) {
    const section = document.getElementById('values');
    if (section) {
      observer.unobserve(section); // Ensure observer is disconnected
    }
  }
});
</script>

<style>
/* Keyframes for fade-in animation (existing, kept for completeness) */
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

/* New Keyframes for slide-in-left animation */
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px); /* Start 50px to the left */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* End at original position */
  }
}

/* Class to apply the new animation */
.animate-slide-in-left {
  animation: slide-in-left 0.7s ease-out forwards; /* Animation duration */
}
</style>