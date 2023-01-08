<template>
    <div class="pb-32 flex flex-col space-y-8">
        <section class="relative">
            <div class="w-full lg:h-96 bg-emerald-500"></div>
            <h2
                class="text-4xl absolute flex top-0 w-full h-full items-center justify-center text-center text-base-100 leading-loose">
                Denksport(ler)! <br />-<br /> Aktives Lernen!</h2>
        </section>
        <ContentDoc class="prose mx-4 max-w-none lg:mx-96" />
        <dl class="mx-4 lg:mx-auto grid grid-cols-2 gap-x-16">
            <dt>Kursdauer:</dt>
            <dd>8 Einheiten à 90 Minuten</dd>
            <dt>Ort:</dt>
            <dd>Wird bekannt gegeben</dd>
        </dl>
    
        <NuxtLink class="btn btn-primary lg:w-1/5 mx-auto uppercase" to="/kontakt">Zum Kontaktformular</NuxtLink>
    </div>
</template>

<style scoped>
dt {
    @apply font-semibold underline
}
</style>