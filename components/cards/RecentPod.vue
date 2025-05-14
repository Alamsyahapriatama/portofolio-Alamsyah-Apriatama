<template>
    <div class="w-full relative rounded-2xl overflow-hidden">
        <nuxt-img :src="coverImage" alt="Cover image" width="2280" class="w-full aspect-square object-cover rounded-2xl" />
        <div
            class="absolute py-2 px-3 md:py-3 md:px-4 bottom-0 h-28 flex flex-col justify-between inset-x-0 bg-gradient-to-t from-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <h2 class="text-white font-semibold text-sm sm:text-base line-clamp-2">
                {{ title }}
            </h2>
            <span class="absolute text-xs text-white pt-6">
                {{ duration }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { title, href, duration, coverImage } = defineProps<{
    title: string,
    href: string,
    duration: string,
    coverImage: string
}>()
</script>