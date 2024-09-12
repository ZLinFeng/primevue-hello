<script setup lang="ts">
import Password from "primevue/password"
import FloatLabel from "primevue/floatlabel"
import { ref } from "vue"
import SvgIcon from "../icon/SvgIcon.vue"
import InputText from "primevue/inputtext"

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
</script>

<template>
    <div class="flex flex-col w-[400px] h-[600px] rounded-3x">
        <span class="text-2xl text-center mb-4 mt-12">
            {{ props.name }} Login
        </span>
        <span class="text-xs text-center line-clamp-2 leading-loose text-slate-800">
            {{ props.desc }}
        </span>
        <div class="flex h-[40px] mt-[30px] gap-2 place-content-center">
            <div class="place-content-center">
                <SvgIcon
                    name="username"
                    :size="25"
                    type="primary"
                />
            </div>
            <FloatLabel>
                <InputText
                    v-model="passwordValue"
                    input-id="passwd"
                    class="w-[250px]"
                />
                <label for="passwd">Username</label>
            </FloatLabel>
        </div>
        <div class="flex h-[40px] mt-[30px] gap-2 place-content-center">
            <div class="place-content-center">
                <SvgIcon
                    name="password"
                    :size="25"
                    type="info"
                />
            </div>
            <FloatLabel>
                <Password
                    v-model="passwordValue"
                    toggle-mask
                    input-id="passwd"
                    input-class="w-[250px]"
                />
                <label for="passwd">Password</label>
            </FloatLabel>
        </div>
    </div>
</template>

<style scoped>
</style>