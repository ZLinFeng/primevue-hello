<script setup lang="ts">
import IconField from "primevue/iconfield"
import InputIcon from "primevue/inputicon"
import InputText from "primevue/inputtext"
import Avatar from "primevue/avatar"
import {ref} from "vue"
import SvgIcon from "@/components/icon/SvgIcon.vue"
import avatarUtl from "@/assets/images/avatar.png"

const searchInput = ref("")

</script>

<template>
    <div class="flex items-center gap-2 pr-8">
        <div class="flex-grow" />
        <div>
            <IconField class="flex items-center">
                <InputIcon>
                    <span class="pi pi-search text-black" />
                </InputIcon>
                <InputText
                    v-model="searchInput"
                    class="h-[30px] w-[180px] search-input"
                    placeholder="Search"
                />
                <InputIcon
                    class=""
                >
                    <div class="border-[1px] border-slate-400 bg-slate-100 rounded">
                        <span class="text-xs m-1 text-black">⌘+S</span>
                    </div>
                </InputIcon>
            </IconField>
        </div>
        <button
            class="p-[4px] content-center border-[1px] rounded
        cursor-pointer border-slate-400 bg-slate-100 text-black hover:border-black focus:text-white focus:bg-black focus:border-black"
        >
            <SvgIcon
                :size="18"
                name="alert"
            />
        </button>
        <button
            class="p-[4px] content-center border-[1px] rounded
        cursor-pointer border-slate-400 bg-slate-100 text-black hover:border-black focus:text-white focus:bg-black focus:border-black"
        >
            <SvgIcon
                :size="18"
                name="settings"
            />
        </button>
        <button class="flex items-center">
            <Avatar
                :image="avatarUtl"
                shape="circle"
            />
        </button>
    </div>
</template>

<style scoped>
.search-input {
  border: 1px solid #94a3b8 !important;
}

.search-input:hover {
  border-color: black !important;
}

.search-input:focus {
  border-color: black !important;
}
</style>