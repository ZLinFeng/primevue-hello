import App from "@/App.vue"
import { createApp } from "vue"
import { initStores } from "./store"
import initMock from "./mock"
import router from "./router"
import initStyle from "./style"

async function bootstrap() {
    // 假如是开发环境则使用mock数据验证
    initMock()

    const app = createApp(App)

    // 配置UI
    initStyle(app)

    // pinia-store
    await initStores(app)

    // 配置路由
    app.use(router)

    app.mount("#app")
}

export { bootstrap }
