<script setup lang="ts">
import Password from "primevue/password"
import FloatLabel from "primevue/floatlabel"
import Button from "primevue/button"
import Toast from "primevue/toast"
import { useToast } from "primevue/usetoast"
import { ref, watch } from "vue"
import SvgIcon from "../icon/SvgIcon.vue"
import InputText from "primevue/inputtext"
import { RouterLink } from "vue-router"
import { login } from "../../api/sys/auth"

const toast = useToast()

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    to: {
        type: String,
        default: "/"
    }
})

const passwordValue = ref("")
const usernameValue = ref("")

const passwordActive = ref(false)
const usernameActive = ref(false)

const passwordInvalid = ref(false)
const usernameInvalid = ref(false)

const passwordType = ref("info")
const usernameType = ref("info")

const loading = ref(false)

const focusPassword = () => {
    passwordInvalid.value = false
    passwordActive.value = true
    usernameActive.value = false
}

const focusUsername = () => {
    usernameInvalid.value = false
    passwordActive.value = false
    usernameActive.value = true
}

const outFocusPassword = () => {
    if (passwordValue.value.length == 0) {
        passwordInvalid.value = true
    }
    passwordActive.value = false
}

const outFocusUsername = () => {
    if (usernameValue.value.length == 0) {
        usernameInvalid.value = true
    }
    usernameActive.value = false
}

const computedStyle = (active: boolean, invalid: boolean) => {
    if (invalid) {
        return "danger"
    }

    if (active) {
        return "primary"
    }

    return "info"
}

watch([usernameActive, usernameInvalid], ([active, invalid]) => {
    usernameType.value = computedStyle(active, invalid)
}, {immediate: true})

watch([passwordActive, passwordInvalid], ([active, invalid]) => {
    passwordType.value = computedStyle(active, invalid)
}, {immediate: true})

const preventSpaces = (event: KeyboardEvent) => {
    if (event.key === " ") {
        event.preventDefault()
    }
}

const submit = () => {
    if (usernameValue.value.length == 0) {
        toast.add({ severity: "error", summary: "Login error", detail:"Username is required",  life: 3000 })
        return
    }

    if (passwordValue.value.length == 0) {
        toast.add({ severity: "error", summary: "Login error", detail:"Password is required",  life: 3000 })
        return
    }
    loading.value = true

    login(usernameValue.value, passwordValue.value).then(data => {
        loading.value = false
        if (data.data.code === 10000) {
            toast.add({severity: "success", summary:"Login success", 
                detail:`Welcome ${usernameValue.value}`, life: 3000})
            //TODO 跳转 
        } else {
            toast.add({severity: "error", summary:"Login error", 
                detail:`${data.data.msg}`, life:3000})
            usernameValue.value = ""
            passwordValue.value = ""
        }
    })
}
</script>

<template>
    <div class="flex flex-col w-[400px] h-[500px] rounded-3xl bg-white">
        <Toast />
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
                        :type="usernameType"
                    />
                </div>
                <FloatLabel>
                    <InputText
                        v-model="usernameValue"
                        input-id="passwd"
                        class="w-[250px]"
                        :invalid="usernameInvalid"
                        @focus="focusUsername"
                        @focusout="outFocusUsername"
                        @keydown="preventSpaces"
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
                        :type="passwordType"
                    />
                </div>
                <FloatLabel>
                    <Password
                        v-model="passwordValue"
                        input-id="passwd"
                        input-class="w-[250px]"
                        :feedback="false"
                        toggle-mask
                        :invalid="passwordInvalid"
                        @focus="focusPassword"
                        @focusout="outFocusPassword"
                        @keydown="preventSpaces"
                    />
                    <label
                        for="passwd"
                    >Password</label>
                </FloatLabel>
            </div>
        </div>
        <div class="flex justify-center mt-[30px]">
            <Button
                class="w-[300px] flex justify-center"
                :loading="loading"
                label="Sign in"
                @click="submit"
            />
        </div>
        <div class="flex justify-center mt-[30px] place-items-center gap-2">
            <span class="text-xs text-slate-400">Don't have an account?</span>
            <RouterLink
                :to="props.to"
                class="text-xs"
            >
                Request Now
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
</style>