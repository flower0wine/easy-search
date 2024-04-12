<template>
    <svg t="1712840730644" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="5304" v-bind="prop">
        <path
            d="M512 960c-247.424 0-448-200.576-448-448s200.576-448 448-448 448 200.576 448 448S759.424 960 512 960zM512 176C326.464 176 176 326.464 176 512S326.464 848 512 848s336-150.464 336-336S697.536 176 512 176zM707.968 568 316.032 568C300.544 568 288 555.456 288 539.968L288 484.032c0-15.488 12.544-28.032 28.032-28.032l392 0c15.488 0 28.032 12.544 28.032 28.032l0 56C736 555.456 723.456 568 707.968 568z"
            p-id="5305"></path>
    </svg>
</template>

<script setup lang="ts">
import type { CommonSvgProps } from "@/components/svg/index";

const prop = defineProps<CommonSvgProps>();
</script>

<style scoped lang="scss">
</style>