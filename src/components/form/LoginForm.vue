<script setup lang="ts">
import Password from "primevue/password"
import FloatLabel from "primevue/floatlabel"
import Button from "primevue/button"
import { ref } from "vue"
import SvgIcon from "../icon/SvgIcon.vue"
import InputText from "primevue/inputtext"
import { RouterLink } from "vue-router"

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

const passwordValue = ref("")
const usernameValue = ref("")
const passwordActive = ref(false)
const usernameActive = ref(false)

const foucsPassword = () => {
    passwordActive.value = true
    usernameActive.value = false
}

const focusUsername = () => {
    passwordActive.value = false
    usernameActive.value = true
}
</script>

<template>
    <div class="flex flex-col w-[400px] h-[600px] rounded-3x">
        <span class="text-2xl text-center mb-4 mt-12">
            {{ props.name }} Login
        </span>
        <span class="text-xs text-center line-clamp-2 leading-loose text-slate-400">
            {{ props.desc }}
        </span>
        <div class="flex justify-center mt-[30px]">
            <div class="w-[300px] flex h-[40px] gap-6 place-content-center">
                <div class="place-content-center">
                    <SvgIcon
                        name="username"
                        :size="25"
                        :type="usernameActive ? 'primary' : 'info'"
                    />
                </div>
                <FloatLabel>
                    <InputText
                        v-model="usernameValue"
                        input-id="passwd"
                        class="w-[250px]"
                        @focus="focusUsername"
                        @focusout="console.log('hello')"
                    />
                    <label for="passwd">Username</label>
                </FloatLabel>
            </div>
        </div>
        <div class="flex justify-center mt-[30px]">
            <div class="flex h-[40px] gap-6 place-content-center w-[300px]">
                <div class="place-content-center">
                    <SvgIcon
                        name="password"
                        :size="25"
                        :type="passwordActive ? 'primary' : 'info'"
                    />
                </div>
                <FloatLabel>
                    <Password
                        v-model="passwordValue"
                        input-id="passwd"
                        input-class="w-[250px]"
                        :feedback="false"
                        toggle-mask
                        @focus="foucsPassword"
                    />
                    <label
                        for="passwd"
                    >Password</label>
                </FloatLabel>
            </div>
        </div>
        <div class="flex justify-center mt-[30px]">
            <Button class="w-[300px]">
                Sign in
            </Button>
        </div>
        <div class="flex justify-center mt-[30px] place-items-center gap-2">
            <span class="text-xs text-slate-400">Don't have an account?</span>
            <RouterLink
                to="/auth/register"
                class="text-xs"
            >
                Request Now
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
</style>