import App from "@/App.vue"
import PrimeVue from "primevue/config"
import { createApp } from "vue"
import { initStores } from "./store"
import initMock from "./mock"

async function bootstrap() {
    // 假如是开发环境则使用mock数据验证
    initMock()

    const app = createApp(App)

    // 配置UI
    app.use(PrimeVue, { unstyled: true })

    // pinia-store
    await initStores(app)

    // 配置路由

    app.mount("#app")
}

export { bootstrap }
