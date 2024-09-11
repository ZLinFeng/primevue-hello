import { computed } from 'vue';
<script setup lang="ts">
import { computed } from "vue"


const props = defineProps<{name: string, size: number}>()

const computedStyle = computed(() => {
    return {
        width: `${props.size}px`,
        height: `${props.size}px`,
    }
})

const computedClass = computed(() => {
    return {"text-blue-500": props}
})

</script>

<template>
    <svg
        :class="computedClass"
        :style="computedStyle"
    >
        <use :xlink:href="'#icon-' + props.name" />
    </svg>
</template>

<style scoped>
</style>