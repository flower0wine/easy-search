<script setup lang="ts">
import DynamicInput from "@/components/form-control/DynamicInput.vue";
import { useEasySearchStore } from "@/store/useEasySearchStore";
import type { DynamicInputProps } from "@/types";

const easySearchStore = useEasySearchStore();

const dynamicInputProps: DynamicInputProps = {
  input: easySearchStore.fuzzyMatchInputRefs,
  addInput: () => {
    easySearchStore.addInput(easySearchStore.fuzzyMatchInputRefs);
  },
  removeInput: (index: number) => {
    easySearchStore.removeInput(easySearchStore.fuzzyMatchInputRefs, index);
  }
};
</script>

<template>
  <div class="fuzzy-match-control">
    <div class="title">模糊匹配以下关键词</div>
    <dynamic-input v-bind="dynamicInputProps" />
  </div>
</template>

<style scoped lang="scss">

</style>