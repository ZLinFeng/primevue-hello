import type { App } from "vue"
import Aura from "@primevue/themes/aura"
import { definePreset } from "@primevue/themes"
import PrimeVue from "primevue/config"
import ToastService from "primevue/toastservice"

const MaPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: "{slate.50}",
            100: "{slate.100}",
            200: "{slate.200}",
            300: "{slate.300}",
            400: "{slate.400}",
            500: "{slate.500}",
            600: "{slate.600}",
            700: "{slate.700}",
            800: "{slate.800}",
            900: "{slate.900}",
            950: "{slate.950}"
        },
        colorScheme: {
            light: {
                primary: {
                    color: "{slate.900}",
                    background: "{slate.900}"
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
                    color: "{yellow.500}"
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
    app.use(ToastService)
}