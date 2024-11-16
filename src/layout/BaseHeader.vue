<script setup lang="ts">
import Menubar from "primevue/menubar"
import { ref } from "vue"

const items = ref([
    {
        label: "Home",
        icon: "pi pi-home"
    },
    {
        label: "System",
        icon: "pi pi-cog",
        badge: 4,
        items: [
            {
                label: "User",
                icon: "pi pi-user",
                route: "/sys/user"
            },
            {
                label: "Role",
                icon: "pi pi-crown"
            },
            {
                label: "Menu",
                icon: "pi pi-book"
            }
        ]
    }
])

</script>

<template>
    <div class="flex !h-full">
        <Menubar
            :model="items"
            class="w-screen mx-4 my-2"
        >
            <template #start>
                <span class="text-xl">Play-Admin</span>
            </template>
            <template #item="{ item, props, hasSubmenu }">
                <router-link
                    v-if="item.route"
                    v-slot="{ href, navigate }"
                    :to="item.route"
                    custom
                >
                    <a
                        v-ripple
                        :href="href"
                        v-bind="props.action"
                        @click="navigate"
                    >
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
                <a
                    v-else
                    v-ripple
                    :href="item.url"
                    :target="item.target"
                    v-bind="props.action"
                >
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <span
                        v-if="hasSubmenu"
                        class="pi pi-fw pi-angle-down"
                    />
                </a>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>

</style>