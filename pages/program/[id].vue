<template>
  <SectionsProgramHero />
  <section v-if="isDetailPage" class="pt-20">
    <AtomsContainer>
      <div class="lg:h-full w-full">
        <div class="relative">
          <div v-if="program">
            <h1 class="text-3xl font-bold text-black-800 dark:text-black-200">
              {{ program.name }}
            </h1>
            <img
              :src="program.image"
              :alt="program.name"
              class="w-full h-96 object-cover rounded-xl my-6"
            />
            <div
              class="program-content text-black-600 dark:text-black-300 text-md leading-relaxed pt-4"
              v-html="program.description"
            ></div>
          </div>
          <div v-else class="text-center text-black-600 dark:text-black-300">
            <p>Program tidak ditemukan.</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-md p-8 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-center text-black">
          Form Pendaftaran
        </h2>
        <form class="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            required
            class="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            required
            class="border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="No HP"
            required
            class="border p-2 rounded"
          />
          <button
            type="submit"
            class="bg-[#4633a8] text-white py-2 rounded hover:bg-[#372b89]"
          >
            Submit
          </button>
        </form>
      </div>
    </AtomsContainer>
  </section>
  <section v-else class="pt-2 md:pt-8 py-20">
    <AtomsContainer>
      <div class="lg:h-full w-full">
        <div class="relative">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2"
          >
            <div
              v-for="program in paginatedPrograms"
              :key="program.id"
              class="bg-white p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between"
            >
              <div>
                <img
                  :src="program.image"
                  :alt="program.name"
                  class="object-cover rounded-xl w-full h-40 opacity-0 animate-fade-in transition duration-500 ease-in-out"
                />
                <h3
                  class="mt-4 text-black-800 dark:text-black-200 text-lg font-semibold"
                >
                  {{ program.name }}
                </h3>
                <div
                  class="program-content text-black-600 dark:text-black-300 text-md leading-relaxed pt-4"
                  v-html="limitWords(program.description, 16)"
                ></div>
              </div>
              <br />
              <NuxtLink
                to="/program/english?id={{ program.id }}"
                class="py-2 border-[#9f91e1] bg-[#4633a8] text-white text-center rounded-lg transition duration-300"
                style="margin-top: 10px"
              >
                Lihat selengkapnya
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: "Glotlink - Jasa Pembuatan Website Murah",
  htmlAttrs: {
    lang: "id",
  },
  meta: [
    {
      name: "description",
      content:
        "Digitalisasikan bisnismu bersama GLOTLINK Kami menyediakan solusi digital seperti website, aplikasi, dan strategi pemasaran online.",
    },
    {
      name: "keywords",
      content:
        "naditechno, digitalisasi bisnis, jasa website, jasa aplikasi, web development, software house, digital marketing, e commerce shop, web online shop, web mobile, web cbt online, cbt online, kost murah, aplikasi kost murah, aplikasi siakad, aplikasi siakad murah, web siakad, website sekolah",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    // Open Graph
    {
      property: "og:title",
      content: "Glotlink - Jasa Pembuatan Website Murah",
    },
    {
      property: "og:description",
      content:
        "Digitalisasikan bisnismu bersama GLOTLINK Solusi digital untuk era modern.",
    },
    {
      property: "og:image",
      content: "/og-image.png",
    },
    {
      property: "og:url",
      content: "https://glotlink",
    },
    {
      property: "og:type",
      content: "website",
    },
    // Twitter Card
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Glotlink - Jasa Pembuatan Website Murah",
    },
    {
      name: "twitter:description",
      content: "Solusi digital untuk bisnismu dari Glotlink",
    },
    {
      name: "twitter:image",
      content: "/og-image.png",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/logo.webp",
    },
    {
      rel: "canonical",
      href: "https://glotlink",
    },
  ],
});
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const isDetailPage = computed(() => !!route.query.id);

interface Program {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  estimated_time: string;
}
// Pagination
const currentPage = ref(1);
const itemsPerPage = 9;
const programs = ref<Program[]>([]);

// ✅ Helper function untuk limit kata
const limitWords = (text: string, maxWords: number) => {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

const program = ref<Program | null>(null);
const fetchProgram = async (id: string) => {
  try {
    const response = await fetch(
      `https://cms-les.naditechno.id/api/program/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data && data.data) {
      program.value = {
        id: data.data.id,
        name: data.data.name,
        description: data.data.description,
        price: data.data.price,
        estimated_time: data.data.estimated_time,
        image: `${data.data.media[0].original_url}`, // Pastikan base URL sesuai kebutuhan
      };
    } else {
      console.error("Format data tidak sesuai:", data);
    }
  } catch (error) {
    console.error("Gagal memuat data program:", error);
  }
};
// Fetch API
const fetchPrograms = async () => {
  try {
    const response = await fetch(
      "https://cms-les.naditechno.id/api/program/list/1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data && data.data && Array.isArray(data.data)) {
      programs.value = data.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        estimated_time: item.estimated_time,
        description: item.description,
        image: `${item.media[0].original_url}`, // Pastikan base URL sesuai kebutuhan
      }));
    } else {
      console.error("Format data tidak sesuai:", data);
    }
  } catch (error) {
    console.error("Gagal memuat data program:", error);
  }
};

const filteredPrograms = computed(() => {
  return programs.value;
});

// Pagination logika
const totalPages = computed(() =>
  Math.ceil(filteredPrograms.value.length / itemsPerPage)
);
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

// Pagination program
const paginatedPrograms = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredPrograms.value.slice(start, start + itemsPerPage);
});

// Ambil ID dari route dan fetch data saat component mount
onMounted(() => {
  const programId = route.params.id; // Ambil ID dari route param
  if (programId) {
    fetchProgram(programId);
  }
  fetchPrograms();
});
</script>
