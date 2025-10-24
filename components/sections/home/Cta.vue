<template>
  <section class="pt-14 md:pt-2 py-8" id="about-me">
    <AtomsContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Column: Image -->
        <div
          class="flex justify-center items-center h-full opacity-0"
          :class="{ 'animate-fade-in-left': isVisible }"
        >
          <div
            class="w-full h-auto bg-gray-200 rounded-lg shadow-md overflow-hidden flex items-center justify-center"
          >
            <img
              src="/about-tama.jpeg"
              class="object-cover w-full h-full rounded-lg"
              :alt="content[currentLanguage].bioImageAlt"
            />
          </div>
        </div>

        <!-- Right Column: Bio and Experience -->
        <div
          class="relative py-4 opacity-0"
          :class="{ 'animate-fade-in-right': isVisible }"
        >
          <!-- Blur Effect -->
          <div class="absolute left-0 top-0 h-full w-full flex justify-end z-0">
            <span class="flex opacity-20">
              <span
                class="w-16 h-32 rounded-l-full flex bg-blue-500 blur-2xl"
              ></span>
              <span
                class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
              ></span>
            </span>
          </div>

          <!-- Content: Bio and Experience -->
          <div class="relative z-10">
            <h3 class="text-3xl font-semibold mb-4 text-black">
              {{ content[currentLanguage].bioTitle }}
            </h3>
            <p class="mb-8 leading-relaxed text-gray-700">
              {{ content[currentLanguage].bioDescription }}
            </p>

            <h4 class="text-2xl font-semibold mb-6 text-black">
              {{ content[currentLanguage].experienceTitle }}
            </h4>

            <!-- Experience List -->
            <div class="space-y-4">
              <div v-for="(exp, index) in content[currentLanguage].experienceItems" :key="index"
                   class="flex flex-col md:flex-row md:items-start gap-4">
                <div class="md:w-1/4 flex-shrink-0">
                  <p class="font-bold text-lg text-gray-800">{{ exp.year }}</p>
                </div>
                <div class="md:w-3/4">
                  <p class="text-gray-700 leading-relaxed">{{ exp.description }}</p>
                </div>
              </div>
            </div>

            <h4 class="text-2xl font-semibold mb-6 mt-8 text-black">
              {{ content[currentLanguage].achievementsTitle }}
            </h4>

            <!-- Achievements List -->
            <div class="space-y-4">
              <div v-for="(ach, index) in content[currentLanguage].achievementsItems" :key="index"
                   class="flex flex-col md:flex-row md:items-start gap-4">
                <div class="md:w-1/4 flex-shrink-0">
                  <p class="font-bold text-lg text-gray-800">{{ ach.year }}</p>
                </div>
                <div class="md:w-3/4">
                  <p class="text-gray-700 leading-relaxed">{{ ach.description }}</p>
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
import { ref, onMounted, onUnmounted, computed } from "vue";

// Assuming currentLanguage is provided globally via Nuxt's useState/useCookie
const currentLanguage = useState<"id" | "en">("currentLanguage");

// State to trigger animation when section is visible
const isVisible = ref(false);

// Intersection Observer to detect section visibility
let observer: IntersectionObserver | null = null;

// Multi-language content data
const content = ref({
  id: {
    bioTitle: "Tentang Saya",
    bioDescription:
      "Saya suka mengubah ide kompleks jadi solusi digital yang indah dan mudah dipakai. Fokus saya adalah membantu klien memecahkan masalah dan meningkatkan keuntungan lewat desain dan kode yang efektif. Mari wujudkan proyek digital yang berkelas dan berdampak!",
    bioImageAlt: "Foto Profil Tama",
    experienceTitle: "Pengalaman",
    experienceItems: [
      {
        year: "January 2025 - July 2025",
        description:
          "Freelance project dan membangun beberapa usaha jasa IT",
      },
      {
        year: "Juny 2024 - December 2024",
        description:
          "Fullstact developer di perusahaan PT. Jababeka Tbk.",
      },
      {
        year: "January 2024 - Juny 2024",
        description:
          "Junior Business Process Integration Analyst at PT Astra Honda Motor",
      },
      {
        year: "January 2023 - Juny 2023",
        description:
          "Fullstack developer at PT. Arkatama Multi Solusindo",
      },
      {
        year: "Agustus 2022 - December 2022",
        description:
          "Creative Digital Training at Alkademi x Amazon Web Services",
      },
    ],
    achievementsTitle: "Prestasi",
    achievementsItems: [
      {
        year: "July 2025",
        description:
          "Capstone Project Devops MLops Model Trainee from DeployCamp2025",
      },
      {
        year: "Mei 2025",
        description:
          "Top 10 di Event Alibaba Cloud Indonesia GenAI Hackathon2025",
      },
    ],
  },
  en: {
    bioTitle: "About Me",
bioDescription:
  "I love transforming complex ideas into beautiful and user-friendly digital solutions. My focus is to help clients solve problems and increase profits through effective design and code. Let’s bring high-class, impactful digital projects to life!",
bioImageAlt: "Tama's Profile Photo",
experienceTitle: "Experience",
experienceItems: [
  {
    year: "January 2025 - August 2025",
    description:
      "Freelance projects and building several IT service businesses",
  },
  {
    year: "August 2024 - December 2024",
    description:
      "Fullstack Developer at PT. Jababeka Tbk.",
  },
  {
    year: "July 2024 - August 2024",
    description:
      "Junior Business Process Integration Analyst at PT Astra Honda Motor",
  },
  // {
  //   year: "January 2023 - June 2023",
  //   description:
  //     "Fullstack Developer at PT. Arkatama Multi Solusindo",
  // },
  {
    year: "August 2022 - December 2022",
    description:
      "Creative Digital Training at Alkademi x Amazon Web Services",
  },
],
achievementsTitle: "Achievements",
achievementsItems: [
  {
    year: "July 2025",
    description:
      "Capstone Project DevOps MLOps Model Trainee from DeployCamp 2025",
  },
  {
    year: "May 2025",
    description:
      "Top 10 at Alibaba Cloud Indonesia GenAI Hackathon 2025",
  },
],

  },
});

onMounted(() => {
  const section = document.getElementById('about-me');
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
      threshold: 0.2 // Animation will trigger when 20% of the section is visible
    });
    observer.observe(section);
  }
});

onUnmounted(() => {
  if (observer) {
    const section = document.getElementById('about-me');
    if (section) {
      observer.unobserve(section); // Ensure observer is disconnected when component unmounts
    }
  }
});
</script>

<style scoped>
/* Keyframes for fade-in from left animation */
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Keyframes for fade-in from right animation */
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Classes to apply animations */
.animate-fade-in-left {
  animation: fade-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.1s; /* Slight delay for the image */
}

.animate-fade-in-right {
  animation: fade-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.4s; /* Starts after the left animation */
}
</style>
