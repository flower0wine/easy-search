<script setup lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import FuzzyMatch from "@/components/form-control/FuzzyMatch.vue";
import CompleteMatch from "@/components/form-control/CompleteMatch.vue";
import AnyMatch from "@/components/form-control/AnyMatch.vue";
import DisplayRowNumber from "@/components/form-control/DisplayRowNumber.vue";
import LimitTime from "@/components/form-control/LimitTime.vue";
import SearchLanguage from "@/components/form-control/SearchLanguage.vue";
import SiteFormat from "@/components/form-control/SiteFormat.vue";
import KeywordPosition from "@/components/form-control/KeywordPosition.vue";
import SiteSearch from "@/components/form-control/SiteSearch.vue";
import NoMatch from "@/components/form-control/NoMatch.vue";
import { useDynamicFormStore } from "@/store/useDynamicFormStore";
import { useGlobalErrorStore } from "@/store/useGlobalErrorStore";
import { useEasySearchStore } from "@/store/useEasySearchStore";
import { storeToRefs } from "pinia";
import background from "@/assets/background.jpg";
import DropdownIcon from "./components/svg/DropdownIcon.vue";
import { ref } from "vue";

const dynamicFormStore = useDynamicFormStore();
const globalErrorStore = useGlobalErrorStore();
const easySearchStore = useEasySearchStore();

const FONT_COLOR = "#2d9ae7";
const BACKGROUND_COLOR = "#ffffffb5";

const { dynamicFormOption } = storeToRefs(dynamicFormStore);
const { searchValue } = storeToRefs(easySearchStore);

const searProBoardVisible = ref(false);

const dynamicFormOptionList = [{
  component: FuzzyMatch,
  name: "fuzzyMatchInput",
}, {
  component: CompleteMatch,
  name: "completeMatchInput",
}, {
  component: AnyMatch,
  name: "anyMatchInput",
}, {
  component: NoMatch,
  name: "noMatchInput",
}, {
  component: DisplayRowNumber,
  name: "displayRowNumber",
}, {
  component: LimitTime,
  name: "limitTime",
}, {
  component: SearchLanguage,
  name: "searchLanguage",
}, {
  component: SiteFormat,
  name: "siteFormat",
}, {
  component: KeywordPosition,
  name: "keywordPosition",
}, {
  component: SiteSearch,
  name: "siteSearch",
}];

document.body.style.backgroundImage = `url(${background})`;
</script>

<template>
  <div class="easy-search">
    <SearchInput />
    <div class="dropdown" :class="searProBoardVisible ? 'active' : ''">
      <div class="dropdown-box" @click="searProBoardVisible = !searProBoardVisible">
        <div class="word">高级选项</div>
        <DropdownIcon width="16" height="16" :fill="FONT_COLOR" />
      </div>
    </div>
    <Transition name="top-slide">
      <div class="search-pro-board" v-if="searProBoardVisible" :class="searchValue.length !== 0 ? 'disabled' : ''">
        <div class="search-pro" v-if="!globalErrorStore.hasError">
          <template v-for="(item, index) in dynamicFormOptionList" :key="index">
            <div v-if="dynamicFormOption[item.name]" class="form-item">
              <component :is="item.component" />
            </div>
          </template>
        </div>
        <div class="show-error" v-else>
          <div>{{ globalErrorStore.error }}</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.disabled {
  filter: grayscale(1);
}

.dropdown {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  margin-top: 25px;
  padding-right: 30px;
  border-radius: 6px;
  background-color: #ffffffb5;

  .dropdown-box {
    display: flex;
    align-items: center;
    padding: 6px 12px;
    border-radius: 6px;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #ffffff96;
    }
  }

  .word {
    font-size: 16px;
    margin-right: 6px;
    color: v-bind(FONT_COLOR);
  }

  &::v-deep svg {
    transition: transform 0.3s;
  }

  &::v-deep.active svg {
    transform: rotate(180deg);
  }
}

.easy-search {
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  margin-bottom: 200px;
  overflow: hidden;
}

.search-pro::v-deep {
  .title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
    color: v-bind(FONT_COLOR);
  }

  >div:not(.split) {
    border-radius: 8px;
    padding: 30px;
    background-color: v-bind(BACKGROUND_COLOR);
  }
}

.show-error {
  margin-top: 25px;
}

.show-error {
  text-align: center;
  line-height: 300px;
  border-radius: 6px;
  font-size: 24px;
  font-weight: bold;
  color: v-bind(FONT_COLOR);
  background-color: v-bind(BACKGROUND_COLOR);
}

.form-item {
  margin-top: 20px;
}
</style>