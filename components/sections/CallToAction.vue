<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";

// Definisikan tipe untuk form
interface FormData {
  nama: string;
  ttl: string;
  domisili: string;
  universitas: string;
  jurusan: string;
  whatsapp: string;
  sumberInfo: string;
  motivasi: string;
}

// Data form dengan tipe `reactive`
const form = reactive<FormData>({
  nama: "",
  ttl: "",
  domisili: "",
  universitas: "",
  jurusan: "",
  whatsapp: "",
  sumberInfo: "",
  motivasi: "",
});

// Konversi reactive ke refs untuk binding
const formRefs = toRefs(form);

// State untuk validasi error
const errors = ref<Partial<FormData>>({});

// Fungsi validasi
const validateForm = async (): Promise<boolean> => {
  errors.value = {};

  // Validasi setiap inputan
  (Object.keys(form) as Array<keyof FormData>).forEach((key) => {
    if (!form[key]) {
      errors.value[key] = "Kolom ini wajib diisi";
    }
  });

  // Validasi khusus untuk nomor WhatsApp
  const whatsappPattern = /^[0-9]{10,15}$/;
  if (form.whatsapp && !whatsappPattern.test(form.whatsapp)) {
    errors.value.whatsapp =
      "Nomor WhatsApp harus berupa angka dan minimal 10 digit";
  }

  await nextTick();

  return Object.keys(errors.value).length === 0;
};

// Fungsi submit form
const submitForm = async (event: Event) => {
  console.log("CLICK");
  event.preventDefault(); // Hindari reload halaman

  console.log("Trying to submit...");

  if (await validateForm()) {
    console.log("Form berhasil dikirim!", form);
    alert("Form berhasil dikirim!");
    form.nama = "";
    form.ttl = "";
    form.domisili = "";
    form.universitas = "";
    form.jurusan = "";
    form.whatsapp = "";
    form.sumberInfo = "";
    form.motivasi = "";
  } else {
    console.log("Validasi gagal");
  }
};
</script>

<template>
  <section class="py-20" id="register">
    <AtomsContainer>
      <div
        class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:to-body-color"
      >
        <div class="mx-auto text-center max-w-xl md:max-w-2xl relative">
          <h2
            class="text-gray-800 pt-4 dark:text-white font-bold text-4xl md:text-5xl lg:text-6x"
          >
            Segera daftar
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#8cd66a]"
              >sekarang</span
            >
            karena kuota terbatas
          </h2>
          <div class="mx-auto max-w-md sm:max-w-xl pt-10">
            <div class="space-y-5">
              <!-- Input Nama -->
              <div>
                <p class="text-left pb-2 text-white font-semibold">Nama</p>
                <input
                  v-model="formRefs.nama.value"
                  type="text"
                  placeholder="Masukkan nama"
                  class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.nama" class="text-red-500 text-sm mt-1">
                  {{ errors.nama }}
                </p>
              </div>

              <!-- Input Tanggal Lahir -->
              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Tanggal Lahir
                </p>
                <input
                  v-model="formRefs.ttl.value"
                  type="date"
                  class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.ttl" class="text-red-500 text-sm mt-1">
                  {{ errors.ttl }}
                </p>
              </div>

              <!-- Input Domisili -->
              <div>
                <p class="text-left pb-2 text-white font-semibold">Domisili</p>
                <input
                  v-model="formRefs.domisili.value"
                  type="text"
                  class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.domisili" class="text-red-500 text-sm mt-1">
                  {{ errors.domisili }}
                </p>
              </div>

              <!-- Input Universitas -->
              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Asal Universitas
                </p>
                <input
                  v-model="formRefs.universitas.value"
                  type="text"
                  class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.universitas" class="text-red-500 text-sm mt-1">
                  {{ errors.universitas }}
                </p>
              </div>

              <!-- Input Jurusan -->
              <div>
                <p class="text-left pb-2 text-white font-semibold">Jurusan</p>
                <input
                  v-model="formRefs.jurusan.value"
                  type="text"
                  class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.jurusan" class="text-red-500 text-sm mt-1">
                  {{ errors.jurusan }}
                </p>
              </div>

              <!-- Input No WhatsApp -->
              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  No WhatsApp
                </p>
                <input
                  v-model="formRefs.whatsapp.value"
                  type="text"
                  placeholder="Contoh: 08123456789"
                  class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.whatsapp" class="text-red-500 text-sm mt-1">
                  {{ errors.whatsapp }}
                </p>
              </div>

              <!-- Input Sumber Informasi -->
              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Tahu info ini dari mana?
                </p>
                <input
                  v-model="formRefs.sumberInfo.value"
                  type="text"
                  class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.sumberInfo" class="text-red-500 text-sm mt-1">
                  {{ errors.sumberInfo }}
                </p>
              </div>

              <!-- Input Motivasi -->
              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Motivasi ikut acara ini
                </p>
                <textarea
                  v-model="formRefs.motivasi.value"
                  class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                ></textarea>
                <p v-if="errors.motivasi" class="text-red-500 text-sm mt-1">
                  {{ errors.motivasi }}
                </p>
              </div>

              <!-- Tombol Submit -->
              <button
                @click="submitForm"
                class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold text-lg transition duration-300"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
