<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { icon, engine } from "@/engine";
import { useEngineTypeStore } from "@/store/useEngineTypeStore";
import { useEasySearchStore } from "@/store/useEasySearchStore";
import { useGlobalErrorStore } from "@/store/useGlobalErrorStore";
import { useDynamicFormStore } from "@/store/useDynamicFormStore";
import { packageBackgroundUrl } from "@/util";
import type { EngineModule } from "@/types";

const engineTypeStore = useEngineTypeStore();
const easySearchStore = useEasySearchStore();
const dynamicFormStore = useDynamicFormStore();
const globalErrorStore = useGlobalErrorStore();

const items = ref([]);

function setEngineType(type: string) {
  engine[type]().then((module: EngineModule) => {
    globalErrorStore.clearError();
    engineTypeStore.setEngineType(type);
    easySearchStore.setEngineModule(module);
    dynamicFormStore.setDynamicFormOption(module.dynamicFormOptions);
    // 检测模块是否实现, 未实现的模块应抛出错误
    module.joinParams(easySearchStore);
  }).catch((err) => {
    globalErrorStore.setError(err);
  });
}

defineExpose({
  items,
});
</script>

<template>
  <div class="search-engine-list">
    <div class="search-item" @click="setEngineType(index as string)" v-for="(item, index) in icon" :key="index"
      ref="items">
      <div class="icon-box">
        <div class="icon" :style="packageBackgroundUrl(item)"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$gridItemScale: 48px;

.search-engine-list {
  position: absolute;
  top: 56px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, #{$gridItemScale});
  border-radius: 8px;
  background-color: #ffffffa6;
}

.search-item {
  display: grid;
  place-items: center;
  width: #{$gridItemScale};
  height: #{$gridItemScale};
  

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 6px;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #ffffffb9;
    }
  }

  .icon {
    width: 24px;
    height: 24px;
    background: center/cover no-repeat;
  }
}
</style>