<script setup lang="ts">

import SvgIcon from "@/components/icon/SvgIcon.vue"
import {ref, watchEffect} from "vue"

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    iconColor:{
        type: String,
        required: true,
    },
    focusIconColor:{
        type: String,
        required: true,
    },
    bgColor:{
        type: String,
        required: true,
    },
    focusBgColor:{
        type: String,
        required: true,
    },
    border:{
        type: String,
        required: true,
    },
    hoverBorder:{
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    }
})

const elRef = ref<HTMLElement | null>(null)

watchEffect(() => {
    if (elRef.value) {
        elRef.value.style.setProperty("--bg-color", props.bgColor)
        elRef.value.style.setProperty("--btn-border", props.border)
        elRef.value.style.setProperty("--btn-size", props.size)
        elRef.value.style.setProperty("--text-color", props.iconColor)
        elRef.value.style.setProperty("--focus-text-color", props.focusIconColor)
        elRef.value.style.setProperty("--focus-bg-color", props.focusBgColor)
        elRef.value.style.setProperty("--hover-border-color", props.hoverBorder)
    }
})

</script>

<template>
    <button
        ref="elRef"
        class="flex justify-center items-center rounded icon-btn cursor-pointer"
        :StyleClass="{width: props.size, height: props.size}"
    >
        <SvgIcon
            :size="props.size - 10"
            :name="props.icon"
        />
    </button>
</template>

<style scoped>
.icon-btn {
  --bg-color: #f1f5f9;
  --btn-border: #94a3b8;
  --text-color: #0f172a;
  background-color: var(--bg-color);
  border: var(--btn-border) 1px solid;
  color: var(--text-color);
  padding: 5px;
}

.icon-btn:hover {
  --hover-border-color: #0f172a;
  border: var(--hover-border-color) 1px solid;
}

.icon-btn:focus {
  --hover-border-color: #0f172a;
  border: var(--hover-border-color) 1px solid;

  --focus-text-color: #fff;
  --focus-bg-color: #0f172a;
  color: var(--focus-text-color);
  background-color: var(--focus-bg-color);
}
</style>