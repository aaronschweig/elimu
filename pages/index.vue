<script lang="ts" setup>
const { data } = await useAsyncData('bildung-wissen-lernen', () => queryContent('_homepage').where({ _partial: true, section: { $eq: 'bildung-wissen-lernen' } }).findOne())
</script>

<template>
    <div class="relative">
        <img src="/pens.webp" alt="chalkboard" class="w-full h-72 md:h-96 object-cover" />
        <div class="absolute top-1/4 md:top-1/3 left-4 md:right-[12.5%] text-base-100 text-4xl flex items-end flex-col">
            <h1>Ab sofort auch Online!</h1>
            <button class="btn btn-primary uppercase mt-12">Elimu bedeutet Bildung</button>
        </div>
    </div>
    <div class="grid md:grid-cols-2 mx-auto">
        <div class="flex flex-col space-y-8 items-center">
            <h2 class="text-2xl font-semibold tracking-wider">Bildung - Wissen - Lernen</h2>
            <p>Untrennbar miteinander verbunden!</p>
            <div class="grid md:grid-cols-2 mx-12 md:mx-24 gap-8">
                <img src="/room.webp"   alt="room" />
                <img src="/room.webp"   alt="room" />
            </div>
            <p>Lerncoaching - Nachhilfe - Lernkurse</p>
            <p>Mit Spaß das Lernen neu entdecken</p>
        </div>
        <div class="prose mx-12 md:mx-0">
            <ContentRenderer :value="data!" />
        </div>
    </div>
    <div class="relative">
        <img src="/pens.webp" alt="chalkboard" class="w-full h-96 object-cover" />
        <div
            class="absolute text-base-100 text-center md:text-left top-0 text-2xl md:text-4xl flex flex-col justify-center items-center w-full h-full bg-primary bg-opacity-50 gap-y-8">
            <h2>Jeder Mensch ist einmalig!</h2>
            <p class="text-lg md:text-xl">Deshalb muss auch jeder seinen Weg finden und ​jeder soll die auf ihn persönlich
                abgestimmte Unterstützung erhalten.</p>
            <p>Denn in allen steckt Einzigartiges!</p>
        </div>
    </div>
    <div class="grid gap-y-8 md:grid-cols-3">
        <div class="flex flex-col items-center gap-y-4">
            <Icon name="heroicons:map-pin" class="w-12 h-auto text-primary" />
            <div class="flex flex-col items-center">
                <span>Leidenbergstraße 18</span>
                <span>66640 Namborn-Gehweiler</span>
            </div>
        </div>
        <div class="flex flex-col items-center gap-y-4">
            <Icon name="heroicons:phone" class="w-12 h-auto text-primary" />
            <a href="tel:+491726943871">0172 - 6943871</a>
        </div>
        <div class="flex flex-col items-center gap-y-4">
            <Icon name="heroicons:envelope" class="w-12 h-auto text-primary" />
            <a href="mailto:jessica.schweig@web.de">jessica.schweig@web.de</a>
        </div>
    </div>
</template>