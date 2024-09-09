// eslint.config.js
import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'
import nuxt from './.nuxt/eslint.config.mjs'

export default
nuxt(
    antfu({
        type: 'app',
        formatters: true,
        unocss: true,
        typescript: true,
        vue: true,
        jsonc: true,
        yaml: true,
        stylistic: {
            indent: 4,
            quotes: 'single',
        },
    }),
).append(
    {
        plugins: [
            perfectionist.configs['recommended-natural'],
        ],
    },
)
