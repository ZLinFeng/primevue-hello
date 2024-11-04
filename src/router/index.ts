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
    },
    {
        meta: {
            title: "Layout"
        },
        component: () => import("@/layout/BaseLayout.vue"),
        path: "/",
        name: "Layout",
        children: [
            {
                name: "User",
                component: () => import("@/view/sys/UsersView.vue"),
                path: "sys/user"
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_APP_BASE),
    routes: coreRoutes
})

export default router