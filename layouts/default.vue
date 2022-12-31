<template>
    <div class="drawer">
        <input id="mobile-drawer" type="checkbox" class="drawer-toggle" />
        <div class="flex w-full flex-col space-y-8 text-gray-700 drawer-content">
            <div class="flex sticky top-0 z-10 bg-base-100 lg:hidden justify-between">
                <label for="mobile-drawer" class="btn btn-square btn-ghost">
                    <Icon name="heroicons:bars-3" class="w-8 h-auto text-gray-500" />
                </label>
                <NuxtLink to="/" class="btn btn-ghost">
                    <img class="w-12" src="~/assets/logo.svg" alt="elimu logo" />
                </NuxtLink>
                <div class="w-12"></div>
            </div>
            <div class="hidden md:flex justify-center w-full mt-4">
                <NuxtLink to="/" class="cursor-pointer">
                    <img class="w-40" src="~/assets/logo.svg" alt="elimu logo"/>
                </NuxtLink>
            </div>
            <!-- <nav class="w-3/5 self-center hidden md:block"> -->
            <nav class="navbar hidden lg:flex">
                <div class="navbar-start"></div>
                <ol class="navbar-center flex gap-x-2">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/kurse">Kurse</NavItem>
                    <NavItem to="/nachhilfe">Nachhilfe</NavItem>
                    <NavItem to="/lerncoaching">Lerncoaching</NavItem>
                    <NavItem to="/preise">Preise</NavItem>
                    <NavItem to="/about">Über mich</NavItem>
                    <NavItem to="/kontakt">Kontakt</NavItem>
                    <NavItem to="/impressum">Impressum</NavItem>
                </ol>
                <div class="navbar-end"></div>
            </nav>
            <slot />
        </div>
        <div class="drawer-side">
            <label for="mobile-drawer" class="drawer-overlay"></label>
            <ol class="menu w-64 bg-base-100">
                <NavItem to="/">Home</NavItem>
                <NavItem to="/kurse">Kurse</NavItem>
                <NavItem to="/nachhilfe">Nachhilfe</NavItem>
                <NavItem to="/lerncoaching">Lerncoaching</NavItem>
                <NavItem to="/preise">Preise</NavItem>
                <NavItem to="/about">Über mich</NavItem>
                <NavItem to="/kontakt">Kontakt</NavItem>
                <NavItem to="/impressum">Impressum</NavItem>
            </ol>
        </div>
    </div>
</template>