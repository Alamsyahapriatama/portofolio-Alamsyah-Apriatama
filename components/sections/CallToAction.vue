<script setup lang="ts">
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

const formRefs = toRefs(form);
const errors = ref<Partial<FormData>>({});
const isLoading = ref(false);

const validateForm = async (): Promise<boolean> => {
  errors.value = {};

  (Object.keys(form) as Array<keyof FormData>).forEach((key) => {
    if (!form[key]) {
      errors.value[key] = "Kolom ini wajib diisi";
    }
  });

  const whatsappPattern = /^[0-9]{10,15}$/;
  if (form.whatsapp && !whatsappPattern.test(form.whatsapp)) {
    errors.value.whatsapp =
      "Nomor WhatsApp harus berupa angka dan minimal 10 digit";
  }

  await nextTick();
  return Object.keys(errors.value).length === 0;
};

const submitForm = async (event: Event) => {
  event.preventDefault();

  if (await validateForm()) {
    isLoading.value = true;
    try {
      const response = await fetch("https://api.ifc.web.id/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Gagal mengirim data");

      alert("Terima kasih sudah mendaftar! nantikan info selanjutnya.");
      Object.keys(form).forEach((key) => (form[key as keyof FormData] = ""));
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      isLoading.value = false;
    }
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
              <div>
                <p class="text-left pb-2 text-white font-semibold">Nama</p>
                <input
                  v-model="formRefs.nama.value"
                  type="text"
                  placeholder="Masukkan nama"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.nama" class="text-red-500 text-sm mt-1">
                  {{ errors.nama }}
                </p>
              </div>

              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Tanggal Lahir
                </p>
                <input
                  v-model="formRefs.ttl.value"
                  type="date"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.ttl" class="text-red-500 text-sm mt-1">
                  {{ errors.ttl }}
                </p>
              </div>

              <div>
                <p class="text-left pb-2 text-white font-semibold">Domisili</p>
                <input
                  v-model="formRefs.domisili.value"
                  type="text"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.domisili" class="text-red-500 text-sm mt-1">
                  {{ errors.domisili }}
                </p>
              </div>

              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Asal Universitas
                </p>
                <input
                  v-model="formRefs.universitas.value"
                  type="text"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.universitas" class="text-red-500 text-sm mt-1">
                  {{ errors.universitas }}
                </p>
              </div>

              <div>
                <p class="text-left pb-2 text-white font-semibold">Jurusan</p>
                <input
                  v-model="formRefs.jurusan.value"
                  type="text"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.jurusan" class="text-red-500 text-sm mt-1">
                  {{ errors.jurusan }}
                </p>
              </div>

              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  No WhatsApp
                </p>
                <input
                  v-model="formRefs.whatsapp.value"
                  type="text"
                  placeholder="Contoh: 08123456789"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.whatsapp" class="text-red-500 text-sm mt-1">
                  {{ errors.whatsapp }}
                </p>
              </div>

              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Tahu info ini dari mana?
                </p>
                <input
                  v-model="formRefs.sumberInfo.value"
                  type="text"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <p v-if="errors.sumberInfo" class="text-red-500 text-sm mt-1">
                  {{ errors.sumberInfo }}
                </p>
              </div>

              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Motivasi ikut acara ini
                </p>
                <textarea
                  v-model="formRefs.motivasi.value"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 h-24"
                ></textarea>
                <p v-if="errors.motivasi" class="text-red-500 text-sm mt-1">
                  {{ errors.motivasi }}
                </p>
              </div>

              <button
                @click="submitForm"
                :disabled="isLoading"
                class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold text-lg transition duration-300 flex justify-center items-center"
              >
                <span
                  v-if="isLoading"
                  class="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full mr-2"
                ></span>
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
