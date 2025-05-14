<template>
  <section class="pt-14 md:pt-2 py-20 bg-[#E6E5E5]">
    <AtomsContainer>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 pt-12">
        
        <!-- Kolom 1: YouTube -->
        <div class="w-full h-full">
          <div class="rounded-xl overflow-hidden shadow-lg">
            <iframe
              class="w-full h-64 md:h-80 lg:h-70 rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div>
          <h3 class="px-6 text-black text-3xl font-semibold">Bersama GLOTLINK Mempersiapkan Studi Kamu di Jerman</h3>
          <p class="pt-4 px-6">Hanya dengan lulus sertifikat B2 akan mudah mencapai cita-cita kamu studi di Jerman Program yang akan kami berikan adalah kursus intensif Bahasa Jerman, tryout dan test Goethe, seminar, workshop, brain test, reservasi housing, persiapan keberangkatan, aplikasi studi perguruan tinggi di Jerman dan lainnya.</p>
          
          <button 
            class="px-4 py-2 bg-[#9f91e1] text-black rounded-lg hover:bg-opacity-80 transition duration-300"
            style="margin-left: 20px; margin-top: 20px;"
          >
            Pelajari lebih lanjut
          </button>
        </div>

      </div>

    </AtomsContainer>
  </section>
</template>


<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    
    const artikelPosts = [
      { 
        id: 1,
        image: '/images/professional-services.webp', 
        title: 'Tim profesional dan berpengalaman',
      },
      { 
        id: 2,
        image: '/images/platform.webp', 
        title: 'Teknologi terbaru & pendekatan agile',  
      },
      { 
        id: 3,
        image: '/images/business-people.webp', 
        title: 'Fokus pada kebutuhan dan tujuan bisnis Anda', 
      },
      { 
        id: 4,
        image: '/images/maintenance.webp', 
        title: 'After-sales support dan pemeliharaan sistem',
      },
    ];

    const goToBlog = (id) => {
      // Ganti dengan navigasi ke halaman artikel detail
      router.push(`/artikel/${id}`);
      
    };

    return { artikelPosts, goToBlog };
  },
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
