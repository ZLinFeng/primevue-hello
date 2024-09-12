import type { App } from "vue"
import Aura from "@primevue/themes/aura"
import { definePreset } from "@primevue/themes"
import PrimeVue from "primevue/config"

const MaPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: "{purple.50}",
            100: "{purple.100}",
            200: "{purple.200}",
            300: "{purple.300}",
            400: "{purple.400}",
            500: "{purple.500}",
            600: "{purple.600}",
            700: "{purple.700}",
            800: "{purple.800}",
            900: "{purple.900}",
            950: "{purple.950}"
        },
        colorScheme: {
            light: {
                primary: {
                    color: "{purple.500}",
                    background: "{purple.500}"
                },
                info: {
                    color: "{slate.400}",
                },
                success: {
                    color: "{green.500}",
                },
                danger: {
                    color: "{red.500}"
                },
                warning: {
                    color: "{yellow-500}"
                }
            }
        }
    }
})

export default function initStyle(app: App) {
    app.use(PrimeVue, {
        theme: {
            preset: MaPreset
        }
    })
}