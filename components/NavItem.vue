<script lang="ts" setup>
defineProps<{
    to: string
}>()
</script>

<template>
    <NuxtLink :to="to" as="li"
        class="cursor-pointer text-gray-400 uppercase text-sm hover:bg-gray-100 hover:text-neutral py-2 px-4 rounded"
        exact-active-class="bg-gray-100 text-neutral">
        <slot />
    </NuxtLink>
</template>