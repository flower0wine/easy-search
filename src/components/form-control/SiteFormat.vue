<script setup lang="ts">
import {useEasySearchStore} from "@/store/useEasySearchStore";
import DropdownCommon from "@/components/form-control/DropdownCommon.vue";

const easySearchStore = useEasySearchStore();

const options = [
  {value: '', label: '所有网页和文件'},
  {value: 'pdf', label: 'Adobe Acrobat PDF (.pdf)'},
  {value: 'doc', label: '微软 Word (.doc)'},
  {value: 'xls', label: '微软 Excel (.xls)'},
  {value: 'ppt', label: '微软 Powerpoint (.ppt)'},
  {value: 'rtf', label: 'RTF 文件 （.rtf）'},
  {value: 'all', label: '所有格式'},
];

const change = (value: string) => {
  easySearchStore.siteFormat = value;
};
</script>

<template>
  <div class="site-format">
    <div class="title">网页或文件格式</div>
    <DropdownCommon :options="options" @select="change"/>
  </div>
</template>

<style scoped lang="scss">

</style>