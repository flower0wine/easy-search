<script setup lang="ts">
import DynamicInput from "@/components/form-control/DynamicInput.vue";
import { useEasySearchStore } from "@/store/useEasySearchStore";
import type { DynamicInputProps } from "@/types";

const easySearchStore = useEasySearchStore();

const dynamicInputProps: DynamicInputProps = {
  input: easySearchStore.anyMatchInputRefs,
  addInput: () => {
    easySearchStore.addInput(easySearchStore.anyMatchInputRefs);
  },
  removeInput: (index: number) => {
    easySearchStore.removeInput(easySearchStore.anyMatchInputRefs, index);
  }
};
</script>

<template>
  <div class="complete-match-control">
    <div class="title">匹配以下任意一个关键词</div>
    <dynamic-input v-bind="dynamicInputProps" />
  </div>
</template>

<style scoped lang="scss"></style>