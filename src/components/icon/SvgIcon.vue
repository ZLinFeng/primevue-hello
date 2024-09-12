import { computed } from 'vue';
<script setup lang="ts">
import { computed } from "vue"
import { $dt } from "@primevue/themes"


const props = defineProps({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        default: "primary",
        validator: (value: string): boolean => {
            return ["primary", "success", "info", "danger", "warning"].includes(value)
        } 
    }
})

const computedStyle = computed(() => {
    let color = $dt(`${props.type}.color`).value
    if (typeof color != "string") {
        color = color.light.value
    }
    return {
        color: `${color}`,
        width: `${props.size}px`,
        height: `${props.size}px`,
    }
})

</script>

<template>
    <svg
        :style="computedStyle"
    >
        <use :xlink:href="'#icon-' + props.name" />
    </svg>
</template>

<style scoped>
</style>