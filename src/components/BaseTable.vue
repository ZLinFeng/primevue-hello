<script setup lang="ts">

import Button from "primevue/button"

import DataTable from "primevue/datatable"
import Column from "primevue/column"
import Dialog from "primevue/dialog"

import {ref, watch} from "vue"

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
},{
    id: "1001",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5
},{
    id: "1002",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5
},{
    id: "1003",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5
},{
    id: "1004",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5
},{
    id: "1005",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5
},{
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
},{
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
},{
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
},{
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

const selectedProduct = ref([])
const addVisible = ref(false)

watch(selectedProduct, (newValue) => {
    console.log(newValue)
})

</script>

<template>
    <div class="flex flex-col gap-4 p-4">
        <div class="mx-8 flex items-center">
            <div class="flex h-[40px] gap-4 items-center">
                <Dialog
                    v-model:visible="addVisible"
                    modal
                    header="Add Record"
                >
                    <slot name="add" />
                </Dialog>
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
                    @click="addVisible = true"
                />
                <Button
                    class="h-[30px]"
                    severity="danger"
                    label="Delete"
                    icon="pi pi-trash"
                    outlined
                    :disabled="selectedProduct.length == 0"
                />
            </div>

            <div class="flex-auto flex justify-end gap-4">
                <Button
                    class="!h-[30px]"
                    severity="secondary"
                    icon="pi pi-download"
                    label="Import"
                />
                <Button
                    class="!h-[30px]"
                    severity="secondary"
                    icon="pi pi-upload"
                    label="Export"
                    :disabled="selectedProduct.length == 0"
                />
            </div>
        </div>
        <div v-if="advanceSearch" />
        <div>
            <DataTable
                v-model:selection="selectedProduct"
                :value="products"
                show-gridlines
                class="w-full"
                data-key="id"
                scrollable
                scroll-height="800px"
                table-style="min-width: 50rem"
                paginator
                removable-sort
                :rows="5"
                :rows-per-page-options="[5, 10, 20, 50]"
            >
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="text-xl text-slate-900 ml-4">
                            Users
                        </span>
                        <Button
                            icon="pi pi-refresh"
                            rounded
                            raised
                            class="mr-4"
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
                    style="min-width: 200px"
                />
                <Column
                    field="name"
                    header="Name"
                    sortable
                    style="min-width: 200px"
                />
                <Column
                    field="category"
                    header="Category"
                    sortable
                    style="min-width: 200px"
                />
                <Column
                    field="quantity"
                    header="Quantity"
                    sortable
                    style="min-width: 200px"
                />
                <Column
                    field="price"
                    header="Price"
                    sortable
                    style="min-width: 200px"
                />
                <Column
                    field="description"
                    header="Description"
                    sortable
                    style="min-width: 200px"
                />
            </DataTable>
        </div>
    </div>
</template>

<style scoped>

</style>