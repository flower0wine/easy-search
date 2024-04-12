<script setup lang="ts">
import { useEasySearchStore } from "@/store/useEasySearchStore";
import DropdownCommon from "@/components/form-control/DropdownCommon.vue";

const easySearchStore = useEasySearchStore();

const options = [
  { value: "0", label: "全部语言" },
  { value: "1", label: "简体中文" },
  { value: "2", label: "繁体中文" },
];

function change(value: string) {
  easySearchStore.searchLanguage = value;
}
</script>

<template>
  <div class="search-language">
    <div class="title">网页语言</div>
    <DropdownCommon :options="options" @select="change"/>
  </div>
</template>

<style scoped lang="scss"></style>