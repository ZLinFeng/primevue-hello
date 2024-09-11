import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
//import Password from "@/components/input/Password.vue"

const coreRoutes: RouteRecordRaw[] = [
    {
        meta: {
            title: "Password"
        },
        component: () => import("@/components/TestComponent.vue"),
        name: "Password",
        path: "/password"
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_APP_BASE),
    routes: coreRoutes
})

export default router