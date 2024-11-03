<script setup lang="ts">

import Button from "primevue/button"
import ToggleButton from "primevue/togglebutton"
import InputText from "primevue/inputtext"
import SvgIcon from "@/components/icon/SvgIcon.vue"
import SplitButton from "primevue/splitbutton"
import Select from "primevue/select"
import {ref} from "vue"

const selectField = ref()
const condition = ref("=")
const input = ref("")

const advanceSearch = ref(false)

const options = ref([
    {
        name: "Username"
    }
])

const conditionOptions = ref([
    {
        name: "="
    },
    {
        name: ">="
    },
    {
        name: "<="
    },
    {
        name: "!="
    }
])

const items = [
    {
        label: "AND"
    },
    {
        label: "OR",

    },
    {
        label: "NOT",
    }
]


</script>

<template>
    <div class="flex flex-col">
        <div class="flex h-[40px] gap-4 items-center">
            <Button
                class="h-[25px] w-[25px] items-center flex justify-center"
            >
                <div class="flex items-center text-white">
                    <SvgIcon
                        :size="20"
                        name="refresh"
                    />
                </div>
            </Button>
            <div
                :class="{'h-[25px]': true,
                         'w-[25px]': true,
                         'bg-slate-100': !advanceSearch,
                         'bg-slate-900': advanceSearch,
                         'hover:border-slate-900': true,
                         'border-slate-400': !advanceSearch,
                         'border-slate-900': advanceSearch,
                         'border-[1px]': true,
                         'text-slate-900': !advanceSearch,
                         'text-white': advanceSearch,
                         'items-center': true,
                         'flex': true,
                         'justify-center': true,
                         'cursor-pointer': true,
                         'rounded':true}"
                @click="advanceSearch = !advanceSearch"
            >
                <div class="flex items-center">
                    <SvgIcon
                        :size="20"
                        name="filter"
                    />
                </div>
            </div>
            <Button class="h-[25px] w-[25px] items-center flex justify-center bg-slate-500 rounded cursor-pointer">
                <div class="flex items-center text-white">
                    <SvgIcon
                        :size="20"
                        name="add"
                    />
                </div>
            </Button>
            <Button class="h-[25px] w-[25px] items-center flex justify-center">
                <div class="flex items-center text-white">
                    <SvgIcon
                        :size="20"
                        name="refresh"
                    />
                </div>
            </Button>

            <div class="flex-grow flex" />
        </div>
        <div v-if="advanceSearch">
            <Select
                v-model="selectField"
                :options="options"
                option-label="name"
                placeholder="Select a filed"
                class="h-[30px] w-[150px] items-center"
            />
            <Select
                v-model="condition"
                :options="conditionOptions"
                option-label="name"
                class="h-[30px] w-[80px] items-center"
            />
            <InputText
                v-model="input"
                class="h-[30px] w-[180px]"
            />
            <SplitButton
                label="Add"
                :model="items"
                icon="pi pi-plus"
                class="h-[30px]"
                @click=""
            />
        </div>
        <div class="" />
    </div>
</template>

<style scoped>

</style>