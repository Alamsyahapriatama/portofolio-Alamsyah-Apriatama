<template>
    <section class="pt-4 md:pt-14 py-20">
      <AtomsContainer>
        <div class="grid md:grid-cols-2 gap-10 xl:gap-14 relative">
          <div class="flex md:h-full">
            <div class="w-full md:h-full rounded-3xl border border-box-border">
              <NuxtImg src="/images/product-fitur.jpg" alt="Belajar Asik" class="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
          <div class="md:py-2 lg:py-4 relative">
            <div class="absolute right-0 top-0 h-full w-full flex justify-end">
              <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
              </span>
            </div>
            <div class="relative">
              <div class="flex items-center gap-4">
                <NuxtImg src="/images/circle-1.svg" class="w-10 h-10" />
                <AtomsTitle texte="CBT-ONLINE.WEB.ID"/>
              </div>
              <p class="pt-4 text-black-700 dark:text-black-300 text-sm md:text-base"> Aplikasi CAT, CBT, dan Try Out Online adalah solusi digital all-in-one untuk mempersiapkan diri menghadapi berbagai ujian penting seperti CPNS, sekolah kedinasan, ujian sekolah, hingga tes masuk perguruan tinggi. Tersedia dalam versi website dan mobile app, aplikasi ini memungkinkan kamu belajar secara fleksibel kapan pun dan di mana pun. Dengan tampilan yang user-friendly dan akses mudah lewat browser atau smartphone, kamu bisa mengikuti simulasi ujian dengan suasana seperti tes sesungguhnya, lengkap dengan waktu yang berjalan real-time. </p>
              <p class="pt-4 text-black-700 dark:text-black-300 text-sm md:text-base"> Dilengkapi dengan fitur-fitur unggulan seperti bank soal yang selalu update, pembahasan detail setiap soal, serta analisis hasil dan sertifikat digital, aplikasi ini juga terintegrasi langsung dengan email, WhatsApp, dan payment gateway. Kamu akan mendapatkan notifikasi hasil ujian secara instan dan bisa melakukan pembayaran dengan metode yang aman dan beragam, mulai dari transfer bank hingga e-wallet. Semua dirancang untuk memberikan pengalaman belajar yang efisien, praktis, dan maksimal. </p>
              <p class="pt-4 text-black-700 dark:text-black-300 text-sm md:text-base"> Demo: <a href="https://cbt-online.web.id">https://cbt-online.web.id</a></p>
            </div>
          </div>
        </div>
        <iframe 
            class="pt-4 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0412562266088!2d106.7793264748294!3d-6.258295993730252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4234cab542d%3A0xbaea8abe6bfb3227!2sBelajar Asik%20Languages!5e0!3m2!1sid!2sid!4v1745572281906!5m2!1sid!2sid" 
            width="100%" 
            height="450" 
            style="border:0;"
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </AtomsContainer>
    </section>
  </template>
  <script setup lang="ts">
    import {
      useRoute,
      useRouter
    } from 'vue-router';
    import {
      ref,
      onMounted
    } from 'vue';
    interface Layanan {
      id: string;
      title: string;
      content: string;
      note: string;
      image: string;
      nominal: number;
    }
    const router = useRouter();
    // Pagination
    const currentPage = ref(1);
    const itemsPerPage = 9;
    const layanans = ref < Layanan[] > ([]);
    const selectedLayanan = ref < any > (null); // atau pakai interface Layanan
    const isLoading = ref(false);
    // Fetch API
    const fetchLayanans = async () => {
      try {
        const response = await fetch('https://api-community-management.lesbahasa/layanan?orderBy=nomor&order=ASC', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-PERUSAHAAN': 'da20774f-0164-405d-bf5a-38b5ec27a92e'
          }
        });
        const data = await response.json();
        if (data && data.data.items && Array.isArray(data.data.items)) {
          layanans.value = data.data.items.map((item: any) => ({
            id: item.id,
            title: item.title,
            content: item.content,
            note: item.note,
            image: `https://api-community-management.lesbahasa/media/${item.image}`, // Pastikan base URL sesuai kebutuhan
            nominal: item.nominal,
          }));
        } else {
          console.error('Format data tidak sesuai:', data);
        }
      } catch (error) {
        console.error('Gagal memuat data layanan:', error);
      }
    };
    // Panggil API saat mount
    onMounted(() => {
      fetchLayanans();
    });
    const filteredLayanans = computed(() => {
      return layanans.value
    });
    // Pagination layanan
    const paginatedLayanans = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return filteredLayanans.value.slice(start, start + itemsPerPage);
    });
    const goDetail = (slug: string) => {
      router.push(`/product/${slug}`);
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
  <style scoped>
    .pricing-table th,
    .pricing-table td {
      @apply border p-3 text-sm text-left;
    }
  
    .pricing-table thead tr {
      background-color: #9f91e1;
      color: white;
    }
  </style>