<script setup lang="ts">
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const form = reactive<FormData>({
  name: "",
  email: "",
  phone: "",
  message: "",
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
  if (form.phone && !whatsappPattern.test(form.phone)) {
    errors.value.phone =
      "Nomor WhatsApp harus berupa angka dan minimal 10 digit";
  }

  await nextTick();
  return Object.keys(errors.value).length === 0;
};

const submitForm = async () => {

  if (await validateForm()) {
    isLoading.value = true;
    try {
      const response = await fetch("https://api-community-management.lesbahasa/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Gagal mengirim data");

      alert("Terima kasih telah menghubungi kami! segera kami tindak lanjut melalui whatsapp.");
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
  <section class="py-8" id="register">
    <AtomsContainer>
      <div class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl">
        <div class="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 class="text-black-800 dark:text-black font-bold text-3xl md:text-4xl mb-8 mt-[-40px]">
              Hubungi
              <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#8cd66a]"
                style="color: #3253A4!important;"
              >
                Kami
              </span>
            </h2>
            <div class="space-y-5">
              <div>
                  <p class="text-left pb-2 text-black font-semibold">Nama</p>
                  <input
                    v-model="formRefs.name.value"
                    type="text"
                    placeholder="Masukkan nama"
                    class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                    {{ errors.name }}
                  </p>
                </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p class="text-left pb-2 text-black font-semibold">Email</p>
                  <input
                    v-model="formRefs.email.value"
                    type="email"
                    placeholder="Contoh: sample@gmail.com"
                    class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                    {{ errors.email }}
                  </p>
                </div>
                <div>
                  <p class="text-left pb-2 text-black font-semibold">Nomor Telepon</p>
                  <input
                    v-model="formRefs.phone.value"
                    type="text"
                    placeholder="Contoh: 08123456789"
                    class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
                    {{ errors.phone }}
                  </p>
                </div>
              </div>

              <div>
                <p class="text-left pb-2 text-black font-semibold">Pesan</p>
                <textarea
                  v-model="formRefs.message.value"
                  class="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 h-24"
                ></textarea>
                <p v-if="errors.message" class="text-red-500 text-sm mt-1">
                  {{ errors.message }}
                </p>
              </div>
              <button
                @click="submitForm"
                :disabled="isLoading"
                class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold text-lg transition duration-300 flex justify-center items-center"
                style="background-color: #3253A4!important;"
              >
                <span
                  v-if="isLoading"
                  class="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full mr-2"
                ></span>
                Submit
              </button>
            </div>
          </div>

          <!-- Kolom Kanan: Informasi Kontak -->
          <div class="flex flex-col items-start justify-center p  x-2">
            <h3 class="text-black font-semibold text-2xl mb-6">Informasi Lebih Lanjut</h3>
            <p class="text-black text-xl">Untuk informasi lebih lanjut, silakan hubungi kami melalui kontak di bawah ini atau datang langsung ke kantor pada jam operasional.</p>
            <div class="mt-4">
              <p class="text-left pb-2 text-black font-semibold">Alamat Kantor Kami</p>
              <p class="text-black"> Jl. Gegerkalong Hilir No. 151, Kelurahan Gegerkalong, Kecamatan Sukasari, Kota Bandung, Provinsi Jawa Barat 40153</p>
            </div>
            <div class="mt-4">
              <p class="text-left pb-2 text-black font-semibold">Nomor Telepon</p>
              <p class="text-black">+62 819-1678-6101</p>
            </div>
            <div class="mt-4">
              <p class="text-left pb-2 text-black font-semibold">E-Mail</p>
              <p class="text-black">cs@glotlink.com</p>
            </div>
            <div class="mt-4">
              <p class="text-left pb-2 text-black font-semibold">Waktu Operasional Kantor</p>
              <p class="text-black">Sabtu & Minggu Jam 07:30-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
