<script setup lang="ts">

import Tree from "primevue/tree"
import {ref} from "vue"
import BaseTable from "@/components/BaseTable.vue"

const data = [
    {
        key: "a",
        label:"/",
        data: "all",
        children: [
            {
                key: "b",
                label: "Development",
                data: "dev",
                children:[{
                    key: "c",
                    label: "algorithm",
                    data: "algorithm",
                    children:[{
                        key: "d",
                        label: "Edison",
                        data: "edison",
                    },
                    {
                        key: "e",
                        label: "Zhuuuuuuuuuuuuuuuuuuu",
                        data: "zhu",
                    }]
                }]
            }
        ]
    }
]

const selectKeys = ref(null)

</script>

<template>
    <div class="grid grid-cols-5">
        <div class="mt-2 ml-2 ">
            <Tree
                v-model:selection-keys="selectKeys"
                :value="data"
                selection-mode="checkbox"
                class="!p-0 !pr-2"
            />
        </div>
        <div class="col-start-2 col-span-4 pt-6">
            <BaseTable />
        </div>
    </div>
</template>

<style scoped>

</style>