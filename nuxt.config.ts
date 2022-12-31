// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/image-edge'
    ],
    app: {
        head: {
            title: 'Elimu',
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
    image: {
    },
})
