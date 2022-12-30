<script lang="ts" setup>
const { data } = await useAsyncData('bildung-wissen-lernen', () => queryContent('_homepage').where({ _partial: true, section: { $eq: 'bildung-wissen-lernen' } }).findOne())
</script>

<template>
    <div class="relative">
        <img src="/pens.jpg" alt="chalkboard" class="w-full h-96 object-cover">
        <div class="absolute top-32 right-72 text-base-100 text-4xl flex items-end flex-col">
            <h1>Ab sofort auch Online!</h1>
            <button class="btn btn-primary uppercase mt-12">Elimu bedeutet Bildung</button>
        </div>
    </div>
    <div class="grid grid-cols-2 mx-auto">
        <div class="flex flex-col space-y-8 items-center">
            <h2 class="text-2xl font-semibold tracking-wider">Bildung - Wissen - Lernen</h2>
            <p>Untrennbar miteinander verbunden!</p>
            <div class="grid grid-cols-2 mx-52 gap-8">
                <img src="/room.jpg" alt="room">
                <img src="/room.jpg" alt="room">
            </div>
            <p>Lerncoaching - Nachhilfe - Lernkurse</p>
            <p>Mit Spaß das Lernen neu entdecken</p>
        </div>
        <div class="prose">
            <ContentRenderer :value="data" />
        </div>
    </div>
    <div class="relative">
        <img src="/pens.jpg" alt="chalkboard" class="w-full h-96 object-cover">
        <div
            class="absolute text-base-100 top-0 text-4xl flex flex-col justify-center items-center w-full h-full bg-primary bg-opacity-50 gap-y-8">
            <h2>Jeder Mensch ist einmalig!</h2>
            <p class="text-xl">Deshalb muss auch jeder seinen Weg finden und ​jeder soll die auf ihn persönlich
                abgestimmte Unterstützung erhalten.</p>
            <p>Denn in allen steckt Einzigartiges!</p>
        </div>
    </div>
    <div class="flex w-2/3 mx-auto justify-between h-96 items-center">
        <div class="flex flex-col items-center">
            <Icon name="heroicons:map-pin" size="3rem" class="text-primary mb-4" />
            <span>Leidenbergstraße 18</span>
            <span>66640 Namborn-Gehweiler</span>
        </div>
        <div class="flex flex-col items-center">
            <Icon name="heroicons:phone" size="3rem" class="text-primary mb-4" />
            <a href="tel:+491726943871">0172 - 6943871</a>
        </div>
        <div class="flex flex-col items-center">
            <Icon name="heroicons:envelope" size="3rem" class="text-primary mb-4" />
            <a href="mailto:jessica.schweig@web.de">jessica.schweig@web.de</a>
        </div>
    </div>
</template>