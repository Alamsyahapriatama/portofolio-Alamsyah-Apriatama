<template>
  <section class="pt-20 md:pt-24">
    <AtomsContainer>
      <div class="grid md:grid-cols-2 gap-10 xl:gap-14 relative">
        <div class="flex md:h-full">
          <div
            class="w-full md:h-full rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border"
          >
            <img
              src="/images/section-1.webp"
              alt="Illustratuin about"
              width="500"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div class="md:py-2 lg:py-4 relative">
          <div class="absolute right-0 top-0 h-full w-full flex justify-end">
            <span class="flex opacity-20">
              <span
                class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"
              ></span>
              <span
                class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
              ></span>
            </span>
          </div>
          <div class="relative">
            <AtomsTitle texte="Tentang IT Fasting Camp" id="about" />
            <p class="text-gray-600 dark:text-gray-300 pt-5">
              IT Fasting Camp adalah workshop intensif selama 2 hari yang
              dirancang khusus untuk mahasiswa aktif yang ingin mengembangkan
              keterampilan Vue.js sambil mendalami nilai-nilai Islam dalam
              suasana Ramadan.
            </p>
            <div class="pt-5">
              <AtomsTitle texte="Kenapa harus ikut?" id="why-join" />
              <ul class="text-left space-y-4 mt-4">
                <li class="flex items-start">
                  <span class="text-green-500 text-xl mr-3">✅</span>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Belajar Vue.js dari basic</strong> – Insya Allah
                    kita akan belajar dari basic, yang terpenting ada keinginan
                    kuat untuk belajar.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 text-xl mr-3">✅</span>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Berkesempatan mengikuti mentoring lanjutan</strong>
                    – Jika berhasil mengikuti seluruh kegiatan workshop ini dan
                    menyelesaikan tugas akhir, akan diberi kesempatan untuk
                    lanjut ke mentoring lanjutan.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 text-xl mr-3">✅</span>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Diskusi Santai tentang Islam</strong> – Ngobrolin
                    hal-hal menarik tentang Islam yang relevan dengan zaman
                    sekarang, biar tidak hanya improve pengetahuan tentang
                    programming juga di saat yang sama kita bareng-bareng saling
                    charge keimanan.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 text-xl mr-3">✅</span>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Biaya Gratis !!!</strong>
                    – tidak ada biaya untuk mengikuti workshop ini, termasuk
                    nanti akan disediakan takjil dan makanan untuk berbuka.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 text-xl mr-3">✅</span>
                  <p class="text-gray-600 dark:text-gray-300">
                    <strong>Ketemu Teman Baru</strong> – Bangun relasi dengan
                    mahasiswa lain dan profesional IT!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
