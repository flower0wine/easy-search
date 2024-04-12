<script setup lang="ts">
import { useEasySearchStore } from "@/store/useEasySearchStore";

const easySearchStore = useEasySearchStore();
</script>

<template>
  <div class="site-search">
    <div class="title">指定要搜索的网站</div>
    <input type="text" class="input" v-model="easySearchStore.siteSearch" placeholder="例如：baidu.com">
  </div>
</template>

<style scoped lang="scss">
.input {
  width: 500px;
  height: 40px;
  border-radius: 6px;
  font-size: 16px;
  padding: 0 10px;
  font-family: system-ui, sans-serif;
  background-color: #ffffffbd;
}
</style>