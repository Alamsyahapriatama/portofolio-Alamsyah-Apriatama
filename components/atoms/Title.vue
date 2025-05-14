
<template>
    <h2 class="text-2xl md:text-3xl text-black-800 dark:text-black font-bold">
        {{ texte }}
    </h2>
</template>
<script lang="ts" setup>
const { texte } = defineProps<{texte:string}>()
</script>