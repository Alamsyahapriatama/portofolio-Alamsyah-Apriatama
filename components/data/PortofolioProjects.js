export const projects = [
  {
    id: 1,
    title: "Sistem Manajemen Kepegawaian (HRIS) - Proyek Kampus",
    description: "Pengembangan aplikasi HRIS untuk mengelola data karyawan, absensi, dan penggajian. Dibangun menggunakan Nuxt 3, Tailwind CSS, dan API Node.js.",
    tags: ["Nuxt 3", "Vue 3", "Tailwind CSS", "Pinia", "API REST"],
    imageUrl: "/public/Project-management.png", // Pastikan gambar ada di folder 'public/images/porto/'
    liveUrl: "https://hris.contoh.com",
    githubUrl: "https://github.com/yourusername/hris-project",
  },
  {
    id: 2,
    title: "E-Commerce Toko Online - Integrasi Pembayaran",
    description: "Aplikasi e-commerce lengkap dengan keranjang belanja, checkout, dan integrasi Midtrans untuk pembayaran. Fokus pada performa SEO dan kecepatan load.",
    tags: ["Nuxt 3", "TypeScript", "Bootstrap Vue", "Midtrans"],
    imageUrl: "/public/landing-page.JPG",
    liveUrl: "https://toko.contoh.com",
    githubUrl: null, // Jika tidak ingin menampilkan link GitHub
  },
  // ... tambahkan proyek lainnya
];