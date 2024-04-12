<script setup lang="ts">
import { defineProps } from "vue";
import type { DynamicInputProps } from "@/types";
import AddIcon from "@/components/svg/AddIcon.vue";
import DeleteIcon from "@/components/svg/DeleteIcon.vue";

const props = defineProps<DynamicInputProps>();

const addBtnColor = "#08a2fd";
const removeBtnColor = "#fff";
</script>

<template>
  <div class="input-list">
    <div class="input-item" v-for="(item, index) in props.input" :key="index">
      <div class="input-item-box">
        <input type="text" class="input" v-model="item.value">
        <div class="remove-btn-box" @click="props.removeInput(index)">
          <DeleteIcon width="20" height="20" :fill="removeBtnColor" />
          <div class="word" :style="`color: ${removeBtnColor}`">移除</div>
        </div>
      </div>
    </div>
  </div>
  <div class="add-btn-box">
    <div class="add-btn" @click="props.addInput">
      <AddIcon width="20" height="20" :fill="addBtnColor" />
      <div class="word" :style="`color: ${addBtnColor}`">添加</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-item {
  /* BFC, 防止相邻元素的外边距重叠 */
  overflow: hidden;
}

.input-item-box {
  display: flex;
  margin: 6px 0px 6px 30px;
}

.input {
  flex: 1;
  height: 40px;
  margin-right: 20px;
  border-radius: 6px;
  font-size: 16px;
  padding: 0 10px;
  font-family: system-ui, sans-serif;
  background-color: #ffffffbd;
}

.remove-btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  border-radius: 6px;
  background-color: red;
  cursor: pointer;

  
}

.add-btn-box {
  display: flex;
  justify-content: end;
  text-align: right;
  margin-top: 10px;

  .add-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border-radius: 6px;
    cursor: pointer;
    background-color: #ffffff96;
  }

}

.word {
  margin-left: 6px;
}
</style>