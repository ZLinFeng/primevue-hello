<script setup>
//import { RouterView } from "vue-router"
console.log("hello")
import axios from "axios"
import { AuthApi } from "@/api/auth/type"


const clickButton = () => {
    axios.post(AuthApi.API.login).then((res) => {
        console.log(res.data)
    })
}
</script>

<template>
    <button
        class="w-[80px] text-white bg-slate-500 p-2"
        @click="clickButton"
    >
        Click
    </button>
</template>

<style scoped>
</style>