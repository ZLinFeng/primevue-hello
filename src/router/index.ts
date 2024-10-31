import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
//import Password from "@/components/input/Password.vue"

const coreRoutes: RouteRecordRaw[] = [
    {
        meta: {
            title: "Login"
        },
        component: () => import("@/view/auth/AuthLogin.vue"),
        name: "Login",
        path: "/login"
    },
    {
        meta: {
            title: "Test"
        },
        component: () => import("@/components/TestComponent.vue"),
        name: "Test",
        path: "/test"
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_APP_BASE),
    routes: coreRoutes
})

export default router