<script setup lang="ts">
import DynamicInput from "@/components/form-control/DynamicInput.vue";
import {useEasySearchStore} from "@/store/useEasySearchStore";
import type { DynamicInputProps } from "@/types";

const easySearchStore = useEasySearchStore();

const dynamicInputProps: DynamicInputProps = {
  input: easySearchStore.noMatchInputRefs,
  addInput: () => {
    easySearchStore.addInput(easySearchStore.noMatchInputRefs);
  },
  removeInput: (index: number) => {
    easySearchStore.removeInput(easySearchStore.noMatchInputRefs, index);
  }
};
</script>

<template>
  <div class="complete-match-control">
    <div class="title">不匹配以下关键词</div>
    <dynamic-input v-bind="dynamicInputProps" />
  </div>
</template>

<style scoped lang="scss">

</style>