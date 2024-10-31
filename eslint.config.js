import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,vue,svg}"],
        rules: { "@typescript-eslint/no-var-requires": 0 }
    },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    //...pluginVue.configs["flat/essential"],
    ...pluginVue.configs["flat/recommended"],
    {
        files: ["**/*.{vue,ts,tsx,svg}"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        rules: {
            "no-console": "off",
            indent: ["error", 4],
            "@typescript-eslint/no-explicit-any": ["off"],
            quotes: ["error", "double"],
            semi: ["error", "never"],
            "vue/html-indent": [
                "error",
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                },
            ],
            "@typescript-eslint/no-namespace": "off",
            "vue/multi-word-component-names": "off"
        },
    },
]
