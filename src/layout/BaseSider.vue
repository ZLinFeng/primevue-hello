<script setup lang="ts">
import Menu from "primevue/menu"

import { ref } from "vue"


const items = ref([
    {
        separator: true
    },
    {
        label: "Settings",
        items: [
            {
                label: "Users",
                icon: "users"
            }
        ]
    }
])
</script>

<template>
    <div class="flex justify-center w-[280px]">
        <Menu
            :model="items"
            class="w-full h-screen"
            :unstyled="true"
        >
            <template #start>
                <div class="flex justify-center items-center my-8">
                    <span class="text-3xl italic">Play-Admin</span>
                </div>
            </template>
            <template #submenulabel="{item}">
                <span>{{ item.label }}</span>
            </template>
            <template>
                <div />
            </template>
        </Menu>
    </div>
</template>

<style scoped>
</style>