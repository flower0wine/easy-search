<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { packageBackgroundUrl } from "@/util";
import { useEngineTypeStore } from "@/store/useEngineTypeStore";
import { useEasySearchStore } from "@/store/useEasySearchStore";
import searchStart, { commonSearch, icon, defaultConfig } from "@/engine";
import SearchEngineList from "@/components/SearchEngineList.vue";
import type { EngineModule } from "@/types";
import CloseFork from "@/components/svg/CloseForkIcon.vue";
import { storeToRefs } from "pinia";

const engineTypeStore = useEngineTypeStore();
const easySearchStore = useEasySearchStore();

const searchEngineListVisible = ref(false);

const iconContainer = ref();
const searchEngineList = ref();

const selectedEngineIcon = computed<string>(() => {
  return packageBackgroundUrl(icon[engineTypeStore.engineType]);
});

const { searchValue: inputValue } = storeToRefs(easySearchStore);

function search(): void {
  if (!easySearchStore.engineModule) {
    // 设置引擎模块
    easySearchStore.setEngineModule({
      joinParams: defaultConfig.joinParams,
      dynamicFormOptions: defaultConfig.dynamicFormOptions,
      joinDirectly: defaultConfig.joinDirectly,
    });
  }
  let url;
  if(inputValue.value.length === 0) {
    url = searchStart(easySearchStore, easySearchStore.engineModule as EngineModule);
  } else {
    url = commonSearch(inputValue.value, easySearchStore.engineModule as EngineModule);
  }
  window.open(url, "_blank");
}

function clickToHiddenSearchEngineList(e: MouseEvent): void {
  const target = e.target as HTMLElement;

  // 如果点击的不是 iconContainer, 或者点击了 searchEngineList 的子项(不包含其本身)，就隐藏 searchEngineList.
  // root 是 SearchEngineList 组件的根元素. 由于 v-if, searchEngineList.value 可能为 undefined.
  if (!iconContainer.value.contains(target) || searchEngineList.value?.items?.some((item: HTMLElement) => item.contains(target))) {
    searchEngineListVisible.value = false;
  }
}

onMounted(() => {
  window.addEventListener("click", clickToHiddenSearchEngineList);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", clickToHiddenSearchEngineList);
});

</script>

<template>
  <div>
    <div class="easy-search-input-container">
      <div class="icon-container" ref="iconContainer" @click="searchEngineListVisible = !searchEngineListVisible">
        <div class="icon-box">
          <div class="icon" :style="selectedEngineIcon"></div>
        </div>
      </div>
      <input type="text" class="input" :class="inputValue.length === 0 ? '' : 'not-empty'" @keyup.enter="search"
        v-model="inputValue" placeholder="高级搜索">
      <div class="close-icon" @click="inputValue =''">
        <CloseFork width="10" height="10" fill="#eee" />
      </div>
      <div class="search-button-container" @click="search">
        <div class="search-button">搜索</div>
      </div>
      <Transition name="top-slide">
        <SearchEngineList v-if="searchEngineListVisible" ref="searchEngineList" />
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
$inputContainerHeight: 50px;

.easy-search-input-container {
  position: relative;
  display: flex;
  height: #{$inputContainerHeight};
  align-items: center;
  border-radius: 8px;
  background-color: #fff6;
  margin-top: 100px;
  transition: background-color 0.2s;

  &:focus-within {
    background-color: rgba(255, 255, 255, 0.575);
  }

  &:focus-within .close-icon {
    display: flex;
  }
}

.input {
  position: relative;
  flex: 1;
  width: #{$inputContainerHeight};
  height: #{$inputContainerHeight};
  padding: 0 10px;
  font-size: 16px;
  font-family: system-ui, sans-serif;
  background-color: transparent;

  /* :has 的兼容性处理, 结合了 JavaScript */
  &.not-empty~.close-icon {
    display: flex;
  }

  /* :has 具有兼容性问题 */
  /*  &:has(.input:not(:placeholder-shown)) .close-icon {
    display: flex;
  } */
}

.close-icon {
  $scale: 22px;
  display: none;
  justify-content: center;
  align-items: center;
  width: #{$scale};
  height: #{$scale};
  margin: 0 7px;
  border-radius: #{$scale / 2};
  background-color: #52525286;
}

.search-button-container {
  height: #{$inputContainerHeight};
  padding: 5px;
  cursor: pointer;
  color: #3a3a3a7d;

  &:hover .search-button {
    color: #e21919bb;
    background-color: #ffffffa2;
  }

  .search-button {
    display: inline-block;
    width: 80px;
    height: #{$inputContainerHeight - 10px};
    text-align: center;
    border-radius: 8px;
    padding: 10px 7px;
    letter-spacing: 5px;
    text-indent: 5px;
    border: 1px solid #bbb;
    background-color: #ffffff59;
    transition: background-color 0.2s, color 0.2s;
  }
}

.icon-container {
  display: grid;
  place-items: center;
  padding: 4px;
  width: #{$inputContainerHeight};
  height: #{$inputContainerHeight};
  cursor: pointer;

  &:hover .icon-box {
    background-color: #ffffffb9;
  }

  .icon-box {
    padding: 4px;
    border-radius: 8px;
    transition: background-color 0.2s;
  }

  .icon {
    width: 30px;
    height: 30px;
    background: center/cover no-repeat;
  }
}
</style>