<script setup lang="ts">
import {useEasySearchStore} from "@/store/useEasySearchStore";
import DropdownCommon from "@/components/form-control/DropdownCommon.vue";

const easySearchStore = useEasySearchStore();

const options = [
  {value: '', label: '任何位置'},
  {value: '1', label: '仅网页标题中'},
  {value: '2', label: '仅网页URL中'},
]

const change = (value: string) => {
  easySearchStore.keywordPosition = value;
}
</script>

<template>
  <div class="keyword-position">
    <div class="title">查询关键词位置</div>
    <DropdownCommon :options="options" @select="change"/>
  </div>
</template>

<style scoped lang="scss">

</style>