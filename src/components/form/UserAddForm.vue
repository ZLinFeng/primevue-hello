<script lang="ts" setup>
import InputText from "primevue/inputtext"
import TreeSelect from "primevue/treeselect"
import RadioButton from "primevue/radiobutton"
import Button from "primevue/button"
import { ref } from "vue"

const usernameValue = ref("")
const passwordValue = ref("")
const activeValue = ref("Yes")
</script>

<template>
    <div class="w-[600px] flex flex-col gap-8">
        <div class="flex">
            <div class="flex gap-4 items-center">
                <span>Username</span>
                <InputText
                    v-model="usernameValue"
                    class="h-[30px]"
                />
            </div>
            <div class="flex gap-4 items-center ml-auto">
                <span>Password</span>
                <InputText
                    v-model="passwordValue"
                    class="h-[30px]"
                    type="password"
                />
            </div>
        </div>
        <div class="flex gap-4 items-center">
            <span>Department</span>
            <TreeSelect
                class="grow h-[30px]"
                size="small"
            />
        </div>
        <div class="flex gap-4 items-center">
            <span>Roles</span>
            <TreeSelect
                class="grow h-[30px]"
                size="small"
            />
        </div>
        <div class="flex gap-4 items-center">
            <span>Active</span>
            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="activeValue"
                    input-id="activeValue1"
                    name="active"
                    value="Yes"
                />
                <label for="activeValue1">Yes</label>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton
                    v-model="activeValue"
                    input-id="activeValue2"
                    name="active"
                    value="No"
                />
                <label for="activeValue2">No</label>
            </div>
        </div>
        <div class="flex gap-4 justify-end">
            <Button
                severity="secondary"
                label="Cancel"
                size="small"
            />
            <Button
                label="Save"
                size="small"
            />
        </div>
    </div>
</template>

<style scoped>
</style>