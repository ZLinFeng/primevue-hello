<script setup lang="ts">

import Tree from "primevue/tree"
import {ref} from "vue"
import BaseTable from "@/components/BaseTable.vue"
import Divider from "primevue/divider"

const data = [
    {
        key: "a",
        label:"研发部门",
        data: "dev",
        children: [
            {
                key: "b",
                label: "Edison",
            }
        ]
    }
]

const selectKeys = ref(null)

</script>

<template>
    <div class="flex h-full w-full">
        <div class="w-[400px] mt-2 ml-2">
            <Tree
                v-model:selection-keys="selectKeys"
                :value="data"
                selection-mode="checkbox"
                class="w-[400px]"
            />
        </div>
        <Divider
            layout="vertical"
            class="h-full"
        />
        <div class="mt-2 w-auto">
            <BaseTable />
        </div>
    </div>
</template>

<style scoped>

</style>