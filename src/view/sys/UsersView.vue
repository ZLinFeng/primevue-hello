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
        <div class="w-2/5 mt-2 ml-2">
            <Tree
                v-model:selection-keys="selectKeys"
                :value="data"
                selection-mode="checkbox"
            />
        </div>
        <Divider
            layout="vertical"
            class="h-full"
        />
        <div class="flex-grow mt-2">
            <BaseTable />
        </div>
    </div>
</template>

<style scoped>

</style>