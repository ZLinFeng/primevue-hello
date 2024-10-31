<script setup lang="ts">
import LoginForm from "@/components/form/LoginForm.vue"
import loginUrl from "@/assets/images/Login.png"
</script>

<template>
    <div class="w-screen h-screen relative">
        <img
            :src="loginUrl"
            class="z-0 absolute top-0 left-0 bg-cover bg-center w-screen h-screen"
        >
        <div class="grid grid-cols-3 w-screen h-screen z-10 relative">
            <div class="col-span-1 col-start-1 place-items-center justify-end flex ">
                <LoginForm
                    name="Play"
                    desc="Hey,Enter your details to get sign in to your account"
                    to="/auth/register"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>