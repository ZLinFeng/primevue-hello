<script setup lang="ts">

import BaseTable from "@/components/BaseTable.vue"
import UserAddForm from "@/components/form/UserAddForm.vue"


</script>

<template>
    <div class="grid grid-cols-5">
        <div class="col-start-1 col-span-5 pt-6">
            <BaseTable>
                <template #add>
                    <UserAddForm />
                </template>
            </BaseTable>
        </div>
    </div>
</template>

<style scoped>

</style>