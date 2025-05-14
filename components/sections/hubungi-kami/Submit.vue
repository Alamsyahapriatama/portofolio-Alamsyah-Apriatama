<script setup lang="ts">
interface FormData {
  name: string;
  phone: string;
  message: string;
}

const form = reactive<FormData>({
  name: "",
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
      const response = await fetch("https://api-community-management.glotlink/contact-us", {
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
  <section class="py-20" id="register">
    <AtomsContainer>
      <div
        class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-[#9f91e1]"
      >
        <div class="mx-auto text-center max-w-xl md:max-w-2xl relative">
          <h2
            class="text-black-800 pt-4 dark:text-black font-bold text-4xl md:text-5xl lg:text-6x"
          >
            Hubungi kami
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#8cd66a]"
              style="color: #FEC827!important;"
              >sekarang</span
            > juga
          </h2>
          <div class="mx-auto max-w-md sm:max-w-xl pt-10">
            <div class="space-y-5">
              <div>
                <p class="text-left pb-2 text-white font-semibold">Nama</p>
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

              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  No WhatsApp
                </p>
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
              <div>
                <p class="text-left pb-2 text-white font-semibold">
                  Pesan
                </p>
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
                style="background-color: #FEC827!important;"
              >
                <span
                  v-if="isLoading"
                  class="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full mr-2"
                ></span>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
