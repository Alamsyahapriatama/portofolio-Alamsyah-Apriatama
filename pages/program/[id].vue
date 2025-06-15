<template>
  <SectionsProgramHero />
  <section v-if="isDetailPage" class="pt-12 py-12">
    <AtomsContainer>
      <div class="flex flex-col lg:flex-row gap-8 w-full">
        <!-- Kolom Kiri (Konten Program) -->
        <div class="lg:w-3/5 w-full">
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

        <!-- Kolom Kanan (Form) -->
        <div
          class="lg:w-2/5 w-full bg-white rounded-xl shadow-md p-8 mt-[-20px]"
        >
          <h2 class="text-2xl font-bold mb-6 text-center text-black">
            Form Pendaftaran
          </h2>
          <form class="grid grid-cols-1 gap-4" @submit.prevent="handleSubmit">
            <input
              type="text"
              v-model="form.name"
              placeholder="Nama Lengkap"
              required
              class="border p-2 rounded"
            />
            <input
              type="email"
              v-model="form.email"
              placeholder="Email"
              required
              class="border p-2 rounded"
            />
            <input
              type="tel"
              v-model="form.whatsapp"
              placeholder="No HP"
              required
              class="border p-2 rounded"
            />
            <select v-model="form.gender" required class="border p-2 rounded">
              <option disabled value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <input
              type="date"
              v-model="form.birth_date"
              required
              class="border p-2 rounded"
            />
            <input
              type="text"
              v-model="form.last_education"
              placeholder="Pendidikan Terakhir"
              class="border p-2 rounded"
            />
            <input
              type="text"
              v-model="form.occupation"
              placeholder="Pekerjaan"
              class="border p-2 rounded"
            />
            <textarea
              v-model="form.motivation"
              placeholder="Motivasi Belajar"
              class="border p-2 rounded"
            ></textarea>
            <input
              type="text"
              v-model="form.referral_source"
              placeholder="Sumber Informasi"
              class="border p-2 rounded"
            />
            <input type="text" v-model="form.program_id" />
            <input type="hidden" v-model="form.ever_learned_arabic" />
            <button
              type="submit"
              class="bg-[#3253A4] text-white py-2 rounded hover:bg-[#372b89]"
            >
              Submit
            </button>
          </form>
        </div>
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
                :to="`/program/english?id=${program.id}`"
                class="py-2 border-[#9f91e1] bg-[#3253A4] text-white text-center rounded-lg transition duration-300"
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
  title: "Belajar Asik - Jasa Pembuatan Website Murah",
  htmlAttrs: {
    lang: "id",
  },
  meta: [
    {
      name: "description",
      content:
        "Digitalisasikan bisnismu bersama Belajar Asik Kami menyediakan solusi digital seperti website, aplikasi, dan strategi pemasaran online.",
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
      content: "Belajar Asik - Jasa Pembuatan Website Murah",
    },
    {
      property: "og:description",
      content:
        "Digitalisasikan bisnismu bersama Belajar Asik Solusi digital untuk era modern.",
    },
    {
      property: "og:image",
      content: "/og-image.png",
    },
    {
      property: "og:url",
      content: "https://lesbahasa",
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
      content: "Belajar Asik - Jasa Pembuatan Website Murah",
    },
    {
      name: "twitter:description",
      content: "Solusi digital untuk bisnismu dari Belajar Asik",
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
      href: "/logo.png",
    },
    {
      rel: "canonical",
      href: "https://lesbahasa",
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
  const programId = route.query.id as string;
  // Ambil ID dari route param
  if (programId) {
    fetchProgram(programId);
  }
  fetchPrograms();
});

const form = ref({
  name: "",
  email: "",
  whatsapp: "",
  gender: "",
  birth_date: "",
  last_education: "",
  occupation: "",
  motivation: "",
  referral_source: "",
  program_id: "",
  ever_learned_arabic: false,
});

const handleSubmit = async () => {
  try {
    form.value.program_id = route.query.id as string;
    const response = await fetch(
      "https://cms-les.naditechno.id/api/program/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.value),
      }
    );

    const data = await response.json();
    if (response.ok) {
      alert("Pendaftaran berhasil!");
      form.value = {
        // Reset
        name: "",
        email: "",
        whatsapp: "",
        gender: "",
        birth_date: "",
        last_education: "",
        occupation: "",
        motivation: "",
        referral_source: "",
        program_id: "",
        ever_learned_arabic: false,
      };
    } else {
      console.error("Gagal menyimpan data:", data);
      alert("Terjadi kesalahan saat mendaftar.");
    }
  } catch (error) {
    console.error("Error saat submit:", error);
    alert("Terjadi kesalahan jaringan.");
  }
};
</script>
