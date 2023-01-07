<template>
    <div class="pb-32 flex flex-col space-y-8">
        <section class="relative">
            <img src="/pens.webp" class="w-full lg:h-96 object-cover" />
            <h2
                class="text-4xl absolute flex top-0 w-full h-full items-center justify-center text-center text-base-100 leading-loose">
                Denksport(ler)! <br />-<br /> Lernen mit System</h2>
        </section>
        <!--  class="flex flex-wrap py-12 space-y-12 font-semibold text-gray-500 mx-4 lg:mx-96 lg:text-xl leading-relaxed h-44" -->
        <div class="flex flex-wrap h-44 space-x-16 font-semibold text-gray-500 mx-4 lg:mx-96 lg:text-xl leading-relaxed">
            <p>Wie lerne ich richtig?</p>
            <p>Lernen macht Spaß!</p>
            <p>Wie lerne ich nachhaltiger?</p>
            <p>Wie lerne ich schneller und effektiver?</p>
            <p>Lernen und Konzentration durch die richtige Technik!</p>
        </div>
       <!--  <div class="py-12 relative font-semibold text-gray-500 mx-4 lg:mx-96 lg:text-xl leading-relaxed h-44">
            <p class="absolute top-0">Wie lerne ich richtig?</p>
            <p class="absolute bottom-0">Lernen macht Spaß!</p>
            <p class="absolute top-0 w-full h-full flex items-center justify-center">Wie lerne ich nachhaltiger?</p>
            <p class="absolute top-0 right-0">Wie lerne ich schneller und effektiver?</p>
            <p class="absolute bottom-0 right-0 text-center">Lernen und Konzentration durch die <br/> richtige Technik!</p>
        </div> -->
        <ContentDoc class="prose mx-4 max-w-none lg:mx-72" />
        <dl class="mx-4 lg:mx-auto grid grid-cols-2 gap-x-16">
            <dt>Kursdauer:</dt>
            <dd>12 Einheiten à 90 Minuten</dd>
            <dt>Gruppengröße:</dt>
            <dd>4-8 Teilnehmer</dd>
            <dt>Ort:</dt>
            <dd>Wird bekannt gegeben</dd>
            <dt>Neue Kurse für Kinder und Jugendliche:</dt>
            <dd>Neue Termine im Februar</dd>
        </dl>
    
        <NuxtLink class="btn btn-primary lg:w-1/5 mx-auto uppercase" to="/kontakt">Zum Kontaktformular</NuxtLink>
    </div>
</template>

<style scoped>
dt {
    @apply font-semibold underline
}
</style>