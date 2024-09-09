import App from "@/App.vue"
import PrimeVue from "primevue/config"
import { createApp } from "vue"
import { initStores } from "./store"

async function bootstrap() {
    const app = createApp(App)

    // 配置UI
    app.use(PrimeVue, { unstyled: true })

    // pinia-store
    await initStores(app)

    // 配置路由

    app.mount("#app")
}

export { bootstrap }
