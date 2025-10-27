<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

// 1. Interface untuk Proyek Portofolio Anda
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[]; // Digunakan untuk filter dan menampilkan teknologi
  imageUrl: string;
  liveUrl: string | null;
  githubUrl: string | null;
}

// 2. Data Statis Portofolio Anda
// Data diambil dari screenshot 'image_9d9c47.png'
const staticProjects: Project[] = [
  {
    id: 1,
    title: "Sistem Manajemen Kepegawaian (HRIS)",
    description:
      "Pengembangan aplikasi HRIS untuk mengelola data karyawan, Memberikan log waktu nyata mengenai perkembangan tugas dan proyek yang baru saja diselesaikan atau memerlukan tindakan. Fokus pada progres proyek dan aktivitas terkini, dirancang untuk Menyediakan visualisasi cepat mengenai volume atau status penyelesaian proyek dari bulan ke bulan.",
    tags: ["Nuxt.js", "Vue 3", "Tailwind CSS", "MySQL", "API REST"],
    imageUrl: "/management-project.png", // Pastikan gambar ada di folder public/images/porto/
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Sistem Informasi Perpustakaan (SLiMS)",
    description:
      "Perancangan dan implementasi Sistem Informasi Perpustakaan (SIP) berbasis web untuk perpustakaan sekolah/institusi (SIT Madani), yang kemungkinan besar menggunakan software open-source populer seperti Senayan Library Management System (SLiMS).",
    tags: ["Next.js", "Typescript", "Bootstrap Vue", "API REST"],
    imageUrl: "/library-information-system.png", // Pastikan gambar ada di folder public/images/porto/
    liveUrl: "https://library-information-system.vercel.app/",
    githubUrl: "https://github.com/Alamsyahapriatama/library-information-system.git", // Jika tidak ada link GitHub
  },
 
  {
    id: 3,
    title: "Layanan Legalitas Perusahaan (Asalegal)",
    description: "Perancangan dan pengembangan Situs Web Korporat (Company Profile) untuk sebuah firma atau konsultan hukum yang berfokus pada solusi dan legalitas perusahaan. Tujuannya adalah membangun kredibilitas, memfasilitasi konsultasi, dan mendigitalkan lead generation.",
    tags: ["React", "Next.js", "Node.js", "REST API"],
    imageUrl: "/asa-legal-tama.png",
    liveUrl: "https://asa-legal-tama.vercel.app",
    githubUrl: "https://github.com/Alamsyahapriatama/asa-legal-tama.git",
  },
 {
    id: 4,
    title: "Sistem Aplikasi Absensi Karyawan Berbasis Lokasi (Geolocation Attendance System)",
    description: "pengembangan aplikasi Progressive Web App (PWA) atau aplikasi hybrid untuk manajemen kehadiran karyawan (Pegawai KSCM), yang fitur utamanya bergantung pada lokasi GPS untuk validasi Check-In dan Check-Out.",
    tags: ["React Native", "Node.js", "REST API"],
    imageUrl: "/public/attend-system.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alamsyahapriatama/employe-attendance-tracking-app.git",
  },

 {
    id: 5,
    title: "VoucherVault - Sistem Digitalisasi Dokumen & OCR Terintegrasi ESP32-CAM",
    description: "pengembangan Sistem Manajemen Dokumen (DMS) berbasis web yang dirancang untuk mempermudah dan mendigitalisasi proses capturing (pengambilan gambar), penyimpanan, dan ekstraksi data dari dokumen fisik (seperti invoice atau voucher), khususnya di lingkungan seperti PT Jababeka Morotai.",
    tags: ["React","Python", "PHP", "Node.js", "MySQL", "REST API"],
    imageUrl: "/public/web-scan-storage-system.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/Alamsyahapriatama/esp32cam-scan.git",
  },

{
    id: 6,
    title: "Sistem Manajemen Purchase Order (PO) dan Keuangan",
    description: " Proyek ini adalah pengembangan modul krusial dalam sebuah Sistem Manajemen Terpadu yang berfokus pada efisiensi proses pengadaan barang (PO) dan analisis keuangan terkait (Profit & Loss). Modul ini bertujuan mendigitalisasi dan menyederhanakan pelacakan transaksi PO dan status saldo perusahaan.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: "/public/Sistem-management.jpg",
    liveUrl: "",
    githubUrl: "",
  },

];

// --- State Data ---
const projects = ref<Project[]>(staticProjects);
const loading = ref(false);
const error = ref<string | null>(null);

// --- Filter State ---
const activeFilter = ref("All");
// Ambil semua tag unik dari data proyek untuk tombol filter
const filters = computed(() => {
  const allTags = new Set<string>();
  staticProjects.forEach((project) => {
    project.tags.forEach((tag) => {
      allTags.add(tag.trim());
    });
  });
  return ["All", ...Array.from(allTags)].sort();
});

// --- Modal State ---
const showModal = ref(false);
const selectedProject = ref<Project | null>(null);

// --- Fungsi untuk mengatur filter aktif ---
const selectFilter = (filterName: string) => {
  activeFilter.value = filterName;
};

// --- Fungsi Modal ---
const openModal = (project: Project) => {
  selectedProject.value = project;
  showModal.value = true;
  document.body.style.overflow = "hidden"; // Mencegah scrolling background
};

const closeModal = () => {
  showModal.value = false;
  selectedProject.value = null;
  document.body.style.overflow = ""; // Mengembalikan scrolling
};

// --- Scroll Animation State ---
const isVisible = ref(false);

const limitWords = (text: string, maxWords: number) => {
  if (!text) return '';
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

// --- Filter proyek berdasarkan tag yang aktif ---
const filteredProjects = computed(() => {
  if (activeFilter.value === "All") {
    return projects.value;
  }
  return projects.value.filter((project) =>
    project.tags.includes(activeFilter.value)
  );
});

// --- Intersection Observer untuk Animasi Gulir ---
let observer: IntersectionObserver | null = null;
onMounted(() => {
  const section = document.getElementById("works");
  if (section) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            if (observer) {
              observer.unobserve(section);
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    observer.observe(section);
  }
});

onUnmounted(() => {
  if (observer) {
    const section = document.getElementById("works");
    if (section) {
      observer.unobserve(section);
    }
  }
});
</script>

<template>
  <section class="pt-2 md:pt-24 py-8 relative" id="works">
    <div class="absolute inset-0 z-0 flex justify-end overflow-hidden">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-blue-500 blur-2xl"></span>
        <span
          class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
        ></span>
      </span>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div
        class="flex flex-col md:flex-row justify-between items-center mb-8"
      >
        <h3
          class="text-black text-3xl font-semibold mb-4 md:mb-0 text-center md:text-left"
        >
          Portfolio
        </h3>

        <div class="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="selectFilter(filter)"
            :class="{
              'bg-blue-600 text-white': activeFilter === filter,
              'bg-gray-300 text-black': activeFilter !== filter,
              'hover:bg-blue-700 hover:text-white': activeFilter === filter,
              'hover:bg-gray-400': activeFilter !== filter,
            }"
            class="px-4 py-2 rounded-xl transition-colors duration-300 shadow-md text-sm sm:text-base"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <div v-if="loading" class="text-center py-10">
        <p class="text-gray-600">Memuat karya...</p>
      </div>
      <div v-else-if="error" class="text-center py-10 text-red-600">
        <p>{{ error }}</p>
      </div>
      <div
        v-else-if="filteredProjects.length === 0"
        class="text-center py-10 text-gray-600"
      >
        <p>Tidak ada karya yang ditemukan untuk kategori yang dipilih.</p>
      </div>

      <div v-else class="lg:h-full w-full">
        <div class="relative">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2"
          >
            <div
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              class="bg-[#F2F4F5] p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl flex flex-col justify-between"
              :class="{
                'opacity-0': !isVisible,
                'animate-fade-in-up-stagger': isVisible,
              }"
              :style="{ 'animation-delay': `${index * 0.2 + 0.1}s` }"
            >
              <div>
                <div class="h-48 overflow-hidden rounded-xl bg-gray-200">
                  <img
                    :src="project.imageUrl || '/placeholder.jpg'"
                    :alt="project.title"
                    class="object-cover w-full h-full opacity-0 animate-fade-in transition duration-500 ease-in-out"
                    @load="
                      ($event) => {
                        ($event.target as HTMLImageElement).style.opacity = '1';
                      }
                    "
                    @error="
                      ($event) => {
                        ($event.target as HTMLImageElement).src =
                          '/placeholder.jpg';
                      }
                    "
                  />
                </div>
                <h3
                  class="mt-4 text-black text-lg font-semibold min-h-[54px] line-clamp-2"
                >
                  {{ project.title }}
                </h3>
                <div class="flex flex-wrap gap-1 mt-3 mb-4">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-3 py-1 text-xs rounded-md text-black transition-colors duration-300 shadow-sm bg-[#E0E0E0] hover:bg-gray-300"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div
                  class="text-black/70 text-sm leading-relaxed min-h-[60px]"
                  v-html="limitWords(project.description, 16)"
                ></div>
              </div>
              <button
                @click="openModal(project)"
                class="py-2 mt-4 bg-blue-600 text-white font-semibold text-center rounded-lg transition-colors duration-300 shadow-xl border border-blue-600 hover:bg-blue-700"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div
        class="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 p-6 relative max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
        @click.stop
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-bold z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Tutup modal"
        >
          &times;
        </button>

        <div class="pr-8">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">
            {{ selectedProject?.title }}
          </h3>

          <div v-if="selectedProject?.imageUrl" class="mb-6">
            <div class="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img
                :src="selectedProject.imageUrl"
                :alt="selectedProject.title"
                class="object-cover w-full h-full"
                @error="
                  ($event) => {
                    ($event.target as HTMLImageElement).src =
                      '/placeholder.jpg';
                  }
                "
              />
            </div>
          </div>

          <h4 class="text-xl font-semibold text-gray-800 mb-2">Deskripsi</h4>
          <div
            class="text-gray-700 mb-6 leading-relaxed text-base"
          >
            {{ selectedProject?.description }}
          </div>

          <div v-if="selectedProject?.tags.length" class="mb-6">
            <h4 class="text-xl font-semibold text-gray-800 mb-4">
              Teknologi Digunakan
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in selectedProject.tags"
                :key="tag"
                class="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
            <a
              v-if="selectedProject?.liveUrl"
              :href="selectedProject.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                />
                <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                />
              </svg>
              Lihat Demo Langsung
            </a>
            <a
              v-if="selectedProject?.githubUrl"
              :href="selectedProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.4 5.4 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.1-3.75s-1.07-.37-3.3 1.15a12.2 12.2 0 0 0-6.2 0c-2.23-1.52-3.3-1.15-3.3-1.15a5.07 5.07 0 0 0-.1 3.75A5.4 5.4 0 0 0 5 12.17c0 5.4 3.3 6.63 6.44 7A3.37 3.37 0 0 0 11 18.13V22"
                />
              </svg>
              Repositori GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style>
/* Keyframes untuk animasi fade-in (untuk gambar dalam kartu) */
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
  animation: fade-in 1.5s ease-out forwards;
}

/* Keyframes untuk animasi fade-in-up (untuk kartu) */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Class untuk menerapkan animasi stagger */
.animate-fade-in-up-stagger {
  animation: fade-in-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
</style>