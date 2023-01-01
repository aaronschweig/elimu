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
                    <img class="w-40" src="~/assets/logo.svg" alt="elimu logo" />
                </NuxtLink>
            </div>
            <nav class="navbar hidden lg:flex">
                <div class="navbar-start"></div>
                <ul class="navbar-center menu menu-horizontal flex gap-x-2">
                    <NavItem to="/">Home</NavItem>
                    <li class="z-10" tabindex="0">
                        <span
                            class="cursor-pointer text-gray-400 uppercase text-sm hover:bg-gray-100 hover:text-neutral py-2 px-4 rounded">Kurse</span>
                        <ul class="bg-base-100 w-64 rounded-box overflow-hidden">
                            <NavItem to="/kurse/lernen-mit-system">Lernkurs - Lernen mit System</NavItem>
                            <NavItem to="/kurse/aktives-lernen">Denksportler - Aktives Lernen</NavItem>
                        </ul>
                    </li>
                    <NavItem to="/nachhilfe">Nachhilfe</NavItem>
                    <NavItem to="/lerncoaching">Lerncoaching</NavItem>
                    <NavItem to="/preise">Preise</NavItem>
                    <NavItem to="/about">Über mich</NavItem>
                    <NavItem to="/kontakt">Kontakt</NavItem>
                    <NavItem to="/impressum">Impressum</NavItem>
                </ul>
                <div class="navbar-end"></div>
            </nav>
            <slot />
        </div>
        <div class="drawer-side">
            <label for="mobile-drawer" class="drawer-overlay"></label>
            <ul class="menu w-52 bg-base-100 [&>a]:py-4">
                <NavItem to="/">Home</NavItem>
                <li tabindex="0">
                    <span
                        class="cursor-pointer text-gray-400 uppercase text-sm hover:bg-gray-100 hover:text-neutral py-2 px-4 rounded">
                        Kurse
                        <Icon name="heroicons:chevron-right-20-solid" class="w-6 h-auto" />
                    </span>
                    <ul class="bg-base-100 w-52 rounded-box overflow-hidden">
                        <NavItem to="/kurse/lernen-mit-system">Lernkurs - Lernen mit System</NavItem>
                        <NavItem to="/kurse/aktives-lernen">Denksportler - Aktives Lernen</NavItem>
                    </ul>
                </li>
                <NavItem to="/nachhilfe">Nachhilfe</NavItem>
                <NavItem to="/lerncoaching">Lerncoaching</NavItem>
                <NavItem to="/preise">Preise</NavItem>
                <NavItem to="/about">Über mich</NavItem>
                <NavItem to="/kontakt">Kontakt</NavItem>
                <NavItem to="/impressum">Impressum</NavItem>
            </ul>
        </div>
    </div>
</template>