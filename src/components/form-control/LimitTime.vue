<script setup lang="ts">
import {useEasySearchStore} from "@/store/useEasySearchStore";
import DropdownCommon from "@/components/form-control/DropdownCommon.vue";

const easySearchStore = useEasySearchStore();

const options = [
  {
    label: "全部时间",
    value: "0"
  },
  {
    label: "最近一天",
    value: "1"
  },
  {
    label: "最近一周",
    value: "7"
  },
  {
    label: "最近一月",
    value: "30"
  },
  {
    label: "最近一年",
    value: "360"
  }
];

function change(value: string): void {
  easySearchStore.limitTime = value;
}
</script>

<template>
  <div class="limit-time">
    <div class="title">限定网页的时间</div>
    <DropdownCommon :options="options" @select="change"/>
  </div>
</template>

<style scoped lang="scss">

</style>