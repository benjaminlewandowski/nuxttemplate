// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    modules: [
        '@unocss/nuxt',
        '@nuxt/content',
        '@nuxthq/studio',
        '@nuxt/devtools',
        '@nuxt/test-utils',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@dargmuesli/nuxt-cookie-control',
        '@nuxt/image',
        'nuxt-svgo',
        '@vueuse/nuxt',
        '@vee-validate/nuxt',
        'dayjs-nuxt',
        '@nuxt/icon',
        '@formkit/auto-animate',
        '@nuxt/fonts',
        '@nuxt/scripts',
        '@nuxtjs/color-mode',
        '@nuxtjs/seo',
    ],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        classSuffix: '',
    },
    features: {
        // For UnoCSS
        inlineStyles: false,
    },
    eslint: {
        config: {
            standalone: false,
        },
    },
})
