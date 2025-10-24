<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

// Define the interface for an Event (Program) based on the new API response
interface Program {
  id: number; // Assuming ID is a number
  title: string; // Event title
  description: string;
  image: string; // URL for the event image (e.g., banner or thumbnail)
  price: string; // Event cost (e.g., "Free" or "Rp50.000")
  location: string; // Event location (e.g., "Online", "Zoom", "Bandung Tech Hub")
  quota: string; // Event quota (e.g., "Unlimited", "100 slots")
  date: string; // Event date (e.g., "2024-08-15")
  // Add any other fields you expect from the /api/event endpoint
}

// --- Scroll Animation State ---
const isVisible = ref(false);

// Pagination
const currentPage = ref(1);
const itemsPerPage = 9; // Display up to 9 events per page
const programs = ref<Program[]>([]);
const loading = ref(true); // Add loading state
const error = ref<string | null>(null); // Add error state

// --- Modal State ---
const showModal = ref(false);
const selectedEvent = ref<Program | null>(null);

// --- Registration Form State ---
const registerName = ref('');
const registerEmail = ref('');
const registerPhone = ref('');
const registerAddress = ref('');
const registerBirthday = ref('');
const registerGender = ref('');
const registrationSuccess = ref(false);
const registrationError = ref<string | null>(null);

// Helper function to limit words
const limitWords = (text: string, maxWords: number) => {
  if (!text) return ''; // Handle null or undefined text
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

// --- Modal Functions ---
const openModal = (program: Program) => {
  selectedEvent.value = program;
  showModal.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling background
  // Reset form states when opening modal
  registerName.value = '';
  registerEmail.value = '';
  registerPhone.value = '';
  registerAddress.value = '';
  registerBirthday.value = '';
  registerGender.value = '';
  registrationSuccess.value = false;
  registrationError.value = null;
};

const closeModal = () => {
  showModal.value = false;
  selectedEvent.value = null;
  document.body.style.overflow = ''; // Restore scrolling
};

// --- Registration Form Submission ---
const handleRegistration = async () => {
  registrationSuccess.value = false;
  registrationError.value = null;

  if (!registerName.value || !registerEmail.value || !registerPhone.value) {
    registrationError.value = 'Please fill in all registration fields.';
    return;
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerEmail.value)) {
    registrationError.value = 'Please enter a valid email address.';
    return;
  }

  console.log('Registering for event:', selectedEvent.value?.title, {
    name: registerName.value,
    email: registerEmail.value,
    phone: registerPhone.value,
    address: registerAddress.value,
    date_of_birth: registerBirthday.value,
    gender: registerGender.value,
  });

  // Simulate API call for registration
  try {
    // Replace with your actual registration API endpoint
    const response = await fetch('https://cms-jasalaravel.karuhundeveloper.com/api/event/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_id: selectedEvent.value?.id,
        name: registerName.value,
        email: registerEmail.value,
        phone: registerPhone.value,
        address: registerAddress.value,
        date_of_birth: registerBirthday.value,
        gender: registerGender.value,
      }),
    });

    if (response.ok) {
      registrationSuccess.value = true;
      // Optionally clear form or close modal after success
      registerName.value = '';
      registerEmail.value = '';
      registerPhone.value = '';
      registerAddress.value = '';
      registerBirthday.value = '';
      registerGender.value = '';
      setTimeout(() => {
        registrationSuccess.value = false;
        closeModal();
      }, 2000); // Close modal after 2 seconds on success
    } else {
      const errorData = await response.json();
      registrationError.value = errorData.message || 'Failed to register. Please try again.';
    }
  } catch (err: any) {
    registrationError.value = err.message || 'Network error during registration.';
    console.error('Registration error:', err);
  }
};


// Fetch API
const fetchPrograms = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch(
      "https://cms-jasalaravel.karuhundeveloper.com/api/event", // New API endpoint
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json(); // Get the full response data
    console.log("API Response Data:", responseData); // Log the response to understand its structure

    // Assuming the actual event data is in responseData.data
    if (responseData && responseData.data && Array.isArray(responseData.data)) {
      programs.value = responseData.data.map((item: any) => ({
        id: item.id,
        title: item.title, // Use 'title' from API for name
        description: item.description,
        image: item.media && item.media[0]?.original_url ? item.media[0].original_url : 'https://placehold.co/400x200/D1D1D1/000000?text=No+Image',
        price: item.price === 0 ? 'Free' : `Rp${new Intl.NumberFormat('id-ID').format(item.price)}`, // Format price
        location: item.location || 'Online / TBD', // Use 'location' from API
        quota: item.quota ? `${item.quota} slots` : 'Unlimited', // Use 'quota' from API
        date: item.date ? new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'TBD', // Format date
      }));
    } else {
      console.error("Data format not as expected:", responseData);
      setFallbackPrograms();
    }
  } catch (err: any) {
    console.error("Failed to load program data:", err);
    error.value = `Failed to load events: ${err.message}`;
    setFallbackPrograms(); // Use fallback on fetch error
  } finally {
    loading.value = false;
  }
};

// Fallback data function
const setFallbackPrograms = () => {
  programs.value = [
    {
      id: 1, // Changed to number for consistency with interface
      title: 'Belajar Ngoding Gratis: Wujudkan Website Impianmu dari Nol!',
      description: 'Pernah ingin belajar membuat website tapi bingung mulai dari mana? Atau mungkin merasa terhalang biaya kursus yang mahal? Jangan khawatir! Kami hadirkan kelas ngoding gratis 100% online yang akan membimbingmu dari nol hingga mahir membuat produk atau website sendiri. Kamu akan belajar secara fleksibel dan interaktif melalui grup WhatsApp eksklusif dan sesi tatap muka online interaktif melalui Zoom Meeting atau Discord untuk penjelasan materi yang mendalam, sesi coding langsung, dan tanya jawab secara real-time dengan mentor.',
      image: 'https://placehold.co/1600x900/A0A0A0/FFFFFF?text=Belajar+Ngoding+Gratis',
      price: 'Free',
      location: 'Online (WhatsApp, Zoom/Discord)',
      quota: 'Unlimited',
      date: 'Ongoing' // Example: "Ongoing" for continuous learning
    },
    {
      id: 2,
      title: 'Workshop Desain UI/UX dengan Figma',
      description: 'Pelajari dasar-dasar desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) menggunakan Figma, alat desain populer. Dari wireframing hingga prototipe interaktif.',
      image: 'https://placehold.co/1600x900/B0B0B0/FFFFFF?text=UI/UX+Figma',
      price: 'Free',
      location: 'Online (Zoom)',
      quota: '100 slots',
      date: 'Oct 20, 2024'
    },
    {
      id: 3,
      title: 'Pengenalan Data Science & Python',
      description: 'Selama dunia Data Science dan Machine Learning. Pelajari dasar-dasar Python untuk analisis data dan eksplorasi dataset sederhana.',
      image: 'https://placehold.co/1600x900/C0C0C0/FFFFFF?text=Data+Science+Python',
      price: 'Free',
      location: 'Online (Discord)',
      quota: 'Unlimited',
      date: 'Nov 10, 2024'
    },
  ];
};


const paginatedPrograms = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return programs.value.slice(start, start + itemsPerPage);
});

// Intersection Observer for Scroll Animation
let observer: IntersectionObserver | null = null;
onMounted(async () => {
  await fetchPrograms(); // Ensure data is fetched before observing

  const section = document.getElementById('event'); // Changed ID here
  if (section) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          if (observer) {
            observer.unobserve(section);
          }
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the section is visible
    });
    observer.observe(section);
  }
});

onUnmounted(() => {
  if (observer) {
    const section = document.getElementById('event'); // Changed ID here
    if (section) {
      observer.unobserve(section);
    }
  }
});
</script>

<template>
  <section class="pt-2 md:pt-8 py-8" id="event">
    <AtomsContainer>
      <div class="flex justify-center items-center mb-8">
        <h3 class="text-black text-3xl font-semibold text-center">
          Upcoming Events
        </h3>
      </div>

      <div v-if="loading" class="text-center py-10">
        <p class="text-gray-600">Loading events...</p>
        </div>
      <div v-else-if="error" class="text-center py-10 text-red-600">
        <p>{{ error }}</p>
      </div>
      <div v-else-if="paginatedPrograms.length === 0" class="text-center py-10 text-gray-600">
        <p>No upcoming events found.</p>
      </div>

      <div v-else class="lg:h-full w-full">
        <div class="relative">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2"
          >
            <div
              v-for="(program, index) in paginatedPrograms"
              :key="program.id"
              class="bg-white p-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col justify-between"
              :class="{ 'opacity-0': !isVisible, 'animate-fade-in-up-stagger': isVisible }"
              :style="{ 'animation-delay': `${index * 0.2 + 0.1}s` }"
            >
              <div>
                <img
                  :src="program.image"
                  :alt="program.title"
                  class="object-cover rounded-xl w-full h-40"
                />
                <h1
                  class="mt-4 text-black-800 dark:text-black-200 text-lg font-semibold"
                >
                  {{ program.title }}
                </h1>
                <div
                  class="program-content text-black-600 dark:text-black-300 text-md leading-relaxed pt-4 mb-4"
                  v-html="limitWords(program.description, 16)"
                ></div>

                <div class="flex justify-between items-center text-gray-700 text-sm mb-1">
                  <p class="flex-shrink-0">
                    <span class="font-semibold">Location:</span> {{ program.location || 'Online / TBD' }}
                  </p>
                  <p class="text-right">
                    <span class="font-semibold">Quota:</span> {{ program.quota || 'Unlimited' }}
                  </p>
                </div>
                <div class="flex justify-between items-center text-gray-700 text-sm mb-1">
                  <p class="flex-shrink-0">
                    <span class="font-semibold">Cost:</span> {{ program.price || 'Free' }}
                  </p>
                  <p class="text-right">
                    <span class="font-semibold">Date:</span> {{ program.date || 'TBD' }}
                  </p>
                </div>
              </div>
              <button
                @click="openModal(program)"
                class="py-2 mt-4 bg-[#3253A4] text-white font-semibold text-center rounded-lg transition duration-300 hover:bg-blue-700"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </AtomsContainer>
  </section>

   <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
    <div class="bg-white rounded-lg shadow-xl max-w-5xl w-full flex flex-col md:flex-row relative">
      <button @click="closeModal" class="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10">
        &times;
      </button>

      <div class="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh]">
        <div>
          <img
            :src="selectedEvent?.image"
            :alt="selectedEvent?.title"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ selectedEvent?.title }}</h3>
          <div class="text-gray-700 mb-4" v-html="selectedEvent?.description"></div>
          <div class="text-gray-700 text-sm">
            <p><span class="font-semibold">Location:</span> {{ selectedEvent?.location }}</p>
            <p><span class="font-semibold">Quota:</span> {{ selectedEvent?.quota }}</p>
            <p><span class="font-semibold">Cost:</span> {{ selectedEvent?.price }}</p>
            <p><span class="font-semibold">Date:</span> {{ selectedEvent?.date }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200 overflow-y-auto max-h-[90vh]">
        <h4 class="text-xl font-semibold text-gray-800 mb-4">Register for Event</h4>

        <div v-if="registrationSuccess" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong class="font-bold">Success!</strong>
          <span class="block sm:inline"> Your registration has been submitted.</span>
        </div>
        <div v-if="registrationError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline"> {{ registrationError }}</span>
        </div>

        <form @submit.prevent="handleRegistration" class="space-y-4">
          <div>
            <label for="registerName" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="registerName"
              v-model="registerName"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="registerEmail" class="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="registerEmail"
              v-model="registerEmail"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="registerPhone" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="registerPhone"
              v-model="registerPhone"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="registerAddress" class="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="registerAddress"
              v-model="registerAddress"
              rows="3"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div>
            <label for="registerBirthday" class="block text-sm font-medium text-gray-700">Birthday</label>
            <input
              type="date"
              id="registerBirthday"
              v-model="registerBirthday"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="registerGender" class="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="registerGender"
              v-model="registerGender"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="" disabled selected>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
/* Keyframes for fade-in animation (for images within cards) */
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
  animation: fade-in 1.5s ease-out forwards;
}

/* Keyframes for fade-in-up animation (for cards themselves) */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(50px); /* Start 50px below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* End at original position */
  }
}

/* Class to apply the new animation */
.animate-fade-in-up-stagger {
  animation: fade-in-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; /* 1s duration, smooth easing */
}
</style>