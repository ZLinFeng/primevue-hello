<script setup lang="ts">
import BaseSider from "./BaseSider.vue"
import Divider from "primevue/divider"
import BaseHeader from "@/layout/BaseHeader.vue"
import {RouterView} from "vue-router"
import ScrollPanel from "primevue/scrollpanel"


</script>

<template>
    <div class="flex h-screen w-full">
        <div class="w-[240px]">
            <BaseSider />
        </div>
        <Divider
            layout="vertical"
            style="margin: 0; padding: 0;"
            class="w-[1px]"
        />
        <div class="flex flex-col flex-grow bg-slate-200">
            <div class="bg-white h-[50px] flex items-center justify-end">
                <BaseHeader />
            </div>
            <div
                class="flex-grow mt-8 mb-2 mx-2 bg-white rounded-2xl flex flex-col"
            >
                <scroll-panel
                    class="flex-grow h-[500px]"
                    :dt="{
                        bar: {
                            background: 'black'
                        }
                    }"
                >
                    <RouterView />
                </scroll-panel>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>