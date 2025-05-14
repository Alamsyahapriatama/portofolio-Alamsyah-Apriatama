<script lang="ts" setup>
    const { text, href } = defineProps<
    {
        text:string,
        href:string
    }>()
</script>
<template>
    <li class="lg:inline-flex">
        <NuxtLink class="lg:inline-flex transition hover:text-black ease-linear text-xl" :to="href">
            {{ text }}
        </NuxtLink>
    </li>
</template>