<template>
  <footer class="bg-[#41A8DF] dark:bg-[#41A8DF]">
    <AtomsContainer>
      <div
        class="max-w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div>
          <NuxtLink to="/" class="flex items-center gap-3">
            <span class="text-3xl font-semibold text-black dark:text-black"
              >CV. Endo Jaya Mandiri</span
            >
          </NuxtLink>
          <p class="text-black dark:text-text-black mt-4 text-justify">
            Bimbingan ini kami susun untuk membantumu memahami pelajaran secara
            mendalam, bukan sekadar menghafal. Kami memprioritaskan
            materi-materi esensial dan struktur dasar ilmu pengetahuan, sehingga
            kamu tidak hanya bisa mengerjakan soal, tetapi juga benar-benar
            mengerti konsep di baliknya sejak pertama kali belajar.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-black dark:text-black mb-4">
            Kontak & Sosial Media
          </h3>
          <div class="grid grid-cols-5 max-w-full">
            <a
              href="mailto:lesbahasa@gmail.com"
              class="flex text-left text-black dark:text-black"
            >
              <img
                src="/images/icon/email-black.png"
                alt="Email Belajar Asik"
                class="w-8 h-8"
              />
            </a>
            <a
              href="https://wa.me/6281916786101"
              target="_blank"
              rel="noopener noreferrer"
              class="flex text-left text-black dark:text-black"
            >
              <img
                src="/images/icon/whatsapp-black.png"
                alt="WhatsApp Belajar Asik"
                class="w-8 h-8"
              />
            </a>
            <a
              href="https://facebook.com/lesbahasa"
              target="_blank"
              rel="noopener noreferrer"
              class="flex text-left text-black dark:text-black"
            >
              <img
                src="/images/icon/facebook-black.png"
                alt="Facebook Belajar Asik"
                class="w-8 h-8"
              />
            </a>
            <a
              href="https://instagram.com/lesbahasa"
              target="_blank"
              rel="noopener noreferrer"
              class="flex text-left text-black dark:text-black"
            >
              <img
                src="/images/icon/instagram-black.png"
                alt="Instagram Belajar Asik"
                class="w-8 h-8"
              />
            </a>
            <a
              href="https://tiktok.com/lesbahasa"
              target="_blank"
              rel="noopener noreferrer"
              class="flex text-left text-black dark:text-black"
            >
              <img
                src="/images/icon/tiktok-black.png"
                alt="TikTok Belajar Asik"
                class="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </AtomsContainer>

    <div
      class="py-4 bg-text-black dark:bg-[#3253A4] bg-[#3253A4] text-center text-white dark:text-white"
    >
      &copy; {{ new Date().getFullYear() }} Les Belajar. All Right Reserved
    </div>
  </footer>
</template>

<script lang="ts" setup>
const logo = ref("/logo.png");
</script>
