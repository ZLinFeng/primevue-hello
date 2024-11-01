<script setup lang="ts">

import PanelMenu from "primevue/panelmenu"
import { ref } from "vue"

const items = ref([
    {
        label: "Files",
        icon: "pi pi-file",
        items: [
            {
                label: "Documents",
                icon: "pi pi-file",
                items: [
                    {
                        label: "Invoices",
                        icon: "pi pi-file-pdf",
                        items: [
                            {
                                label: "Pending",
                                icon: "pi pi-stop"
                            },
                            {
                                label: "Paid",
                                icon: "pi pi-check-circle"
                            }
                        ]
                    },
                    {
                        label: "Clients",
                        icon: "pi pi-users"
                    }
                ]
            },
            {
                label: "Images",
                icon: "pi pi-image",
                items: [
                    {
                        label: "Logos",
                        icon: "pi pi-image"
                    }
                ]
            }
        ]
    },
    {
        label: "Cloud",
        icon: "pi pi-cloud",
        items: [
            {
                label: "Upload",
                icon: "pi pi-cloud-upload"
            },
            {
                label: "Download",
                icon: "pi pi-cloud-download"
            },
            {
                label: "Sync",
                icon: "pi pi-refresh"
            }
        ]
    },
    {
        label: "Devices",
        icon: "pi pi-desktop",
        items: [
            {
                label: "Phone",
                icon: "pi pi-mobile"
            },
            {
                label: "Desktop",
                icon: "pi pi-desktop"
            },
            {
                label: "Tablet",
                icon: "pi pi-tablet"
            }
        ]
    }
])
</script>

<template>
    <div class="flex flex-col">
        <div class="h-[100px] flex justify-center items-center">
            <span class="text-3xl italic">
                Play-Admin
            </span>
        </div>
        <div class="flex justify-center">
        <PanelMenu
            :model="items"
            class="w-[250px]"
            :pt="{panel: {class: ['border-0']}}"
        >
        <template #item="{item}">
            <router-link v-if="item.route" :to="item.route">
                <div>

                </div>
            </router-link>
            <div v-else>
                <div class="flex h-[30px] items-center gap-8">
                    <span :class="[item.icon, 'ml-3']" />
                    <span>
                        {{ item.label }}
                    </span>
                </div>
            </div>
        </template>
    </PanelMenu>
    </div>
    </div>
</template>

<style scoped>
</style>