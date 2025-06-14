<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
const router = useRouter();
const form = ref({
  master_carrer_id: "1",
  name: "",
  email: "",
  whatsapp: "",
  gender: "",
  birth_date: "",
  last_education: "",
  occupation: "",
  motivation: "",
  referral_source: "",
  pdf: false,
});

const pdfFile = ref<File | null>(null);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    pdfFile.value = target.files[0];
  } else {
    pdfFile.value = null;
  }
};

const handleSubmit = async () => {
  try {
    const formData = new FormData();

    // Append semua field ke FormData
    Object.entries(form.value).forEach(([key, value]) => {
      // Jika ada boolean false, konversi ke string agar FormData valid
      if (typeof value === 'boolean') {
        formData.append(key, value ? 'true' : 'false');
      } else if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    // Append file PDF jika ada
    if (pdfFile.value) {
      formData.append('pdf', pdfFile.value);
    }


    const response = await fetch("https://cms-les.naditechno.id/api/carrer/register", {
      method: "POST",
      // Jangan set header Content-Type, biarkan browser atur otomatis
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      alert("Pendaftaran berhasil!");
      form.value = {
        master_carrer_id: "1",
        name: "",
        email: "",
        whatsapp: "",
        gender: "",
        birth_date: "",
        last_education: "",
        occupation: "",
        motivation: "",
        referral_source: "",
        pdf: false,
      };
      pdfFile.value = null;
      // Jika mau reset input file juga, bisa tambah ref pada input file dan reset value di situ
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

<style>
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
</style>


<template>
  <section class="py-20" id="profile">
    <AtomsContainer>
      <!-- FILTER & EVENT LIST -->
      <div class="lg:w-5/5 w-full bg-white rounded-xl shadow-md p-8 mt-[-60px]">
          <h2 class="text-2xl font-bold mb-6 text-center text-black">
            Form Pendaftaran
          </h2>
          <form class="grid grid-cols-1 gap-4" @submit.prevent="handleSubmit">
            <input type="text" v-model="form.name" placeholder="Nama Lengkap" required class="border p-2 rounded" />
            <input type="email" v-model="form.email" placeholder="Email" required class="border p-2 rounded" />
            <input type="tel" v-model="form.whatsapp" placeholder="No HP" required class="border p-2 rounded" />
            <select v-model="form.gender" required class="border p-2 rounded">
              <option disabled value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <input type="date" v-model="form.birth_date" required class="border p-2 rounded" />
            <input type="text" v-model="form.last_education" placeholder="Pendidikan Terakhir" class="border p-2 rounded" />
            <input type="text" v-model="form.occupation" placeholder="Pekerjaan" class="border p-2 rounded" />
            <textarea v-model="form.motivation" placeholder="Motivasi Mengajar" class="border p-2 rounded"></textarea>
            <input type="text" v-model="form.referral_source" placeholder="Sumber Informasi" class="border p-2 rounded" />
            <input
              type="file"
              accept="application/pdf"
              @change="handleFileChange"
              class="border p-2 rounded"
            />

            <input type="hidden" v-model="form.ever_learned_arabic" />
            <button type="submit" class="bg-[#3253A4] text-white py-2 rounded hover:bg-[#372b89]">
              Submit
            </button>
          </form>
        </div>
    </AtomsContainer>
  </section>
</template>
