<script setup lang="ts">
import BaseSider from "./BaseSider.vue"
import Divider from "primevue/divider"
import BaseHeader from "@/layout/BaseHeader.vue"
import {RouterView} from "vue-router"
import ScrollPanel from "primevue/scrollpanel"
import {computed, ref, onMounted, onUnmounted} from "vue"

const screenWidth = ref(window.innerWidth)

const updateWidth = () => {
    screenWidth.value = window.innerWidth
    console.log(screenWidth.value)
}

onMounted(() => {
    window.addEventListener("resize", updateWidth)
})

onUnmounted(() => {
    window.removeEventListener("resize", updateWidth)
})

const computedWidth = computed(() => {
    console.log(`computed: ${screenWidth.value - 240}px`)
    return `${screenWidth.value - 240}px`
})


</script>

<template>
    <div class="flex h-screen w-screen">
        <div class="w-[240px] h-full">
            <BaseSider class="w-full h-full" />
        </div>
        <Divider
            layout="vertical"
            style="margin: 0; padding: 0;"
            class="w-[1px]"
        />
        <div
            class="flex flex-col grow bg-slate-200"
            :style="{width: computedWidth}"
        >
            <div class="bg-white h-[50px] flex items-center justify-end w-full">
                <BaseHeader />
            </div>
            <div
                class="flex-grow mt-10 mb-2 mx-2 bg-white rounded-2xl flex flex-col"
            >
                <scroll-panel
                    class="flex-grow h-[500px] w-full"
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