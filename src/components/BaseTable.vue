<script setup lang="ts">

import Button from "primevue/button"

import DataTable from "primevue/datatable"
import Column from "primevue/column"
import ColumnGroup from "primevue/columngroup"   // optional
import Row from "primevue/row"                   // optional

import {ref} from "vue"

const advanceSearch = ref(false)

const products = ref([{
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5
}])

const selectedProduct = ref(null)

</script>

<template>
    <div class="flex flex-col gap-4 w-full">
        <div class="flex items-center">
            <div class="flex h-[40px] gap-4 items-center">
                <Button
                    class="h-[30px]"
                    icon="pi pi-filter"
                    label="Filter"
                    outlined
                />
                <Button
                    class="h-[30px]"
                    icon="pi pi-plus"
                    label="Add"
                />
                <Button
                    class="h-[30px]"
                    severity="danger"
                    label="Delete"
                    icon="pi pi-trash"
                    disabled
                />
            </div>

            <div class="flex-auto flex justify-end pr-8 gap-4">
                <Button
                    class="!h-[30px]"
                    severity="success"
                    icon="pi pi-download"
                    label="Import"
                />
                <Button
                    class="!h-[30px]"
                    severity="help"
                    icon="pi pi-upload"
                    label="Export"
                />
            </div>
        </div>
        <div v-if="advanceSearch" />
        <div class="pr-8">
            <DataTable
                v-model:selection="selectedProduct"
                :value="products"
                class="w-full"
                data-key="id"
                scrollable
                scroll-height="400px"
                table-style="min-width: 50rem"
                paginator
                removable-sort
                :rows="5"
                :rows-per-page-options="[5, 10, 20, 50]"
            >
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="text-xl text-slate-900">
                            Users
                        </span>
                        <Button
                            icon="pi pi-refresh"
                            rounded
                            raised
                        />
                    </div>
                </template>
                <Column
                    selection-mode="multiple"
                    header-style="width: 3rem"
                />
                <Column
                    field="code"
                    header="Code"
                    sortable
                    style="min-width: 400px"
                />
                <Column
                    field="name"
                    header="Name"
                    sortable
                    style="min-width: 400px"
                />
                <Column
                    field="category"
                    header="Category"
                    sortable
                    style="min-width: 400px"
                />
                <Column
                    field="quantity"
                    header="Quantity"
                    sortable
                    style="min-width: 400px"
                />
                <Column
                    field="price"
                    header="Price"
                    sortable
                    style="min-width: 400px"
                />
                <Column
                    field="description"
                    header="Description"
                    sortable
                    class="w-[400px]"
                />
            </DataTable>
        </div>
    </div>
</template>

<style scoped>

</style>