import { defineConfig, presetUno } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetExtra } from 'unocss-preset-extra'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
    presets: [
        presetUno(),
        presetAnimations(),
        presetExtra(),
        presetScrollbar(),
        presetShadcn({
            color: 'red',
            // With default setting for SolidUI, you need to set the darkSelector option.
            darkSelector: '[data-kb-theme="dark"]',
        }),
    ],
    // By default, `.ts` and `.js` files are NOT extracted.
    // If you want to extract them, use the following configuration.
    // It's necessary to add the following configuration if you use shadcn-vue or shadcn-svelte.
    content: {
        pipeline: {
            include: [
                // the default
                /\.(vue|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                // include js/ts files
                '**/*.{js,ts}',
            ],
        },
    },
    theme: {
        container: {
            center: true,
            padding: '2rem',
            margin: '0',
            screens: {
                '2xl': '1400px',
            },
        },
    },
})
