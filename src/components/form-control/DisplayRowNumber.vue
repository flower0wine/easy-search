<script setup lang="ts">
import {useEasySearchStore} from "@/store/useEasySearchStore";
import DropdownCommon from "@/components/form-control/DropdownCommon.vue";

const easySearchStore = useEasySearchStore();

const options = [
  { value: "10", label: "显示10条" },
  { value: "20", label: "显示20条" },
  { value: "50", label: "显示50条" },
];

function change(value: string): void {
  easySearchStore.displayRowNumber = value;
}
</script>

<template>
  <div class="display-row-number">
    <div class="title">搜索结果显示条数</div>
    <DropdownCommon :options="options" @select="change" />
  </div>
</template>

<style scoped lang="scss">
</style>