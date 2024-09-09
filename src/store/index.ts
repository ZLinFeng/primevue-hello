import { createPinia, defineStore } from "pinia"
import type { App } from "vue"

export const userStore = defineStore("user", () => {

})


export async function initStores(app: App) {
    const pinia = createPinia()

    app.use(pinia)

    return pinia
}