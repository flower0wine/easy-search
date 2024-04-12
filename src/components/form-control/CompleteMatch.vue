<script setup lang="ts">
import DynamicInput from "@/components/form-control/DynamicInput.vue";
import { useEasySearchStore } from "@/store/useEasySearchStore";
import type { DynamicInputProps } from "@/types";

const easySearchStore = useEasySearchStore();

const dynamicInputProps: DynamicInputProps = {
  input: easySearchStore.completeMatchInputRefs,
  addInput: () => {
    easySearchStore.addInput(easySearchStore.completeMatchInputRefs);
  },
  removeInput: (index: number) => {
    easySearchStore.removeInput(easySearchStore.completeMatchInputRefs, index);
  }
};
</script>

<template>
  <div class="complete-match-control">
    <div class="title">完整匹配以下关键词</div>
    <dynamic-input v-bind="dynamicInputProps" />
  </div>
</template>

<style scoped lang="scss"></style>