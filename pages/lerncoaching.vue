<template>
    <div class="space-y-4">
        <!--<h3 class="ml-4 font-semibold text-lg lg:mx-72">Unterstützung bei:</h3>
         <div class="grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 lg:h-96 lg:mx-72 gap-4 rounded-lg shadow-lg border p-4 bg-primary bg-opacity-10 text-sm lg:text-base lg:font-semibold lg:items-center">
            <p>Lernschwierigkeiten und Lernstörungen</p>
            <p>Bewältigung von ​Ängsten</p>
            <p>Lese-, Schreib- und Rechenschwäche</p>
            <p>Konzentrationsschwäche</p>
            <p>Selbstmanagement</p>
            <p>Ressourcenstärkung</p>
        </div> -->

        <div class="bg-primary text-white text-lg lg:h-96 lg:px-72 space-y-4 py-8 text-center">
            <h3 class="font-semibold text-xl lg:mb-16 lg:text-2xl">Unterstützung bei:</h3>
            <ul class="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:h-full">
                <li>Lernschwierigkeiten und Lernstörungen</li>
                <li>Bewältigung von ​Ängsten</li>
                <li>Lese-, Schreib- und Rechenschwäche</li>
                <li>Konzentrationsschwäche</li>
                <li>Selbstmanagement</li>
                <li>Ressourcenstärkung</li>
            </ul>
        </div>

        <ContentDoc class="prose mx-4 max-w-none lg:mx-72" />
    </div>
</template>