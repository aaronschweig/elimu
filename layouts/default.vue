<template>
    <div class="flex w-full flex-col space-y-8 text-gray-700">
        <div class="flex justify-center w-full mt-4">
            <NuxtLink to="/" class="cursor-pointer">
                <img class="w-48" src="~/assets/logo.svg" alt="elimu logo">
            </NuxtLink>
        </div>
        <nav class="w-3/5 self-center">
            <ol class="flex justify-between">
                <NavItem to="/">Home</NavItem>
                <NavItem to="/kurse">Kurse</NavItem>
                <NavItem to="/nachhilfe">Nachhilfe</NavItem>
                <NavItem to="/lerncoaching">Lerncoaching</NavItem>
                <NavItem to="/preise">Preise</NavItem>
                <NavItem to="/about">Über mich</NavItem>
                <NavItem to="/kontakt">Kontakt</NavItem>
                <NavItem to="/impressum">Impressum</NavItem>
            </ol>
        </nav>
        <slot />
    </div>
</template>