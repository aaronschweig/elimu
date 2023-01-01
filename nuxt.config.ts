// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
    ],
    app: {
        head: {
            title: 'Elimu',
            htmlAttrs: {
                lang: 'de'
            },
            link: [
                {
                    //<link rel="icon" href="/favicon.svg" type="image/svg+xml">
                    rel: "icon",
                    href: "/favicon.svg",
                    type: "image/svg+xml"
                }
            ],
        }
    },
})
