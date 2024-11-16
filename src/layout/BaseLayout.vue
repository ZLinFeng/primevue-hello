<script setup lang="ts">
import BaseHeader from "./BaseHeader.vue"
import { RouterView } from "vue-router"
</script>

<template>
    <div
        class="flex flex-col w-screen h-screen"
    >
        <div class="h-16 w-full">
            <BaseHeader />
        </div>
        <div class="w-full">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
</style>