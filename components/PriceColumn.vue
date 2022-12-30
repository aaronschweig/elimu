<script setup lang="ts">
defineProps<{
    title: string
    duration: string
    price: string
}>()
</script>

<template>
    <div
        class="flex flex-col justify-between h-96 bg-primary bg-opacity-10 rounded-lg p-4 text-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
        <h2 class="text-xl font-semibold">{{ title }}</h2>

        <p>
            <slot/>
        </p>

        <p>
            {{ duration }}<br />
            <span class="font-semibold text-xl mt-8">{{ price }}</span>
        </p>
    </div>
</template>