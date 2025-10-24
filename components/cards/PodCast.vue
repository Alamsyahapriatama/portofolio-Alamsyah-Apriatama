<template>
    <div
        class="p-4 relative h-auto flex flex-col rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
        
        <div class="relative h-max min-h-max">
            <nuxt-img :src="props.coverImage" :alt="props.title"
                class="w-full h-48 rounded-lg object-cover" /> 
        </div>

        <div class="pt-4 h-full flex flex-col justify-between">
            <div class="h-full">
                <h2
                    class="font-bold text-lg lg:text-xl line-clamp-2 mb-2 text-gray-800">
                    {{ props.title }}
                </h2>
                <p class="text-sm text-gray-600 line-clamp-3 mb-4">
                    {{ props.description }}
                </p>
                
                <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="tag in props.tags" :key="tag"
                        class="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {{ tag }}
                    </span>
                </div>
            </div>
            
            <div class="pt-5 flex gap-3 min-h-max h-max">
                
                <NuxtLink v-if="props.liveUrl" :to="props.liveUrl" target="_blank"
                    class="flex relative items-center text-white px-4 py-2 bg-primary gap-1 text-sm w-max rounded-lg hover:bg-green-600 transition">
                    <span class="relative">
                        Lihat Live
                    </span>
                </NuxtLink>
                
                <NuxtLink v-if="props.githubUrl" :to="props.githubUrl" target="_blank"
                    class="flex relative items-center text-gray-700 px-4 py-2 border border-gray-300 gap-1 text-sm w-max rounded-lg hover:bg-gray-100 transition">
                    <span class="relative">
                        GitHub
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// SOLUSI: Impor defineProps secara eksplisit. 
// Ini akan menenangkan Vetur/TypeScript di VS Code.
import { defineProps } from 'vue'; 

// Definisikan Interface untuk Props
interface ProjectProps {
    title: string;
    liveUrl?: string;     // Link demo proyek (Opsional)
    githubUrl?: string;   // Link GitHub (Opsional)
    coverImage: string;
    description: string;
    tags: string[];       // Array teknologi yang digunakan
}

// Mengambil props sebagai objek tunggal 'props'
const props = defineProps<ProjectProps>()
</script>