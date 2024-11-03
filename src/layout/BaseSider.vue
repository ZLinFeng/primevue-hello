<script setup lang="ts">
import Menu from "primevue/menu"

import { ref } from "vue"
import SvgIcon from "@/components/icon/SvgIcon.vue"

const items = ref([
    {
        separator: true
    },
    {
        label: "SYSTEM",
        items: [
            {
                label: "Users",
                icon: "users",
                shortcut: "⌘+U"
            },
            {
                label: "Roles",
                icon: "roles",
                shortcut: "⌘+R"
            },
            {
                label: "Menus",
                icon: "menus",
                shortcut: "⌘+M"
            }
        ]
    }
])
</script>

<template>
    <div class="flex justify-center w-full">
        <Menu
            :model="items"
            class="w-full flex flex-col"
            style="border: 0"
        >
            <template #start>
                <div class="flex justify-center items-center my-6">
                    <span class="text-3xl italic">Play-Admin</span>
                </div>
            </template>
            <template #submenulabel="{item}">
                <span class="text-xs">{{ item.label }}</span>
            </template>
            <template #item="{item, props}">
                <div
                    class="h-[40px] flex items-center pl-4 gap-4"
                    v-bind="props.action"
                >
                    <div class="">
                        <SvgIcon
                            :size="20"
                            :name="item.icon"
                        />
                    </div>

                    <span>{{ item.label }}</span>
                    <span class="ml-auto text-[8px] p-1 border-[1px] border-slate-400 border-solid rounded bg-slate-100">{{ item.shortcut }}</span>
                </div>
            </template>
        </Menu>
    </div>
</template>

<style scoped>
</style>