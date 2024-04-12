<template>
    <ElDropdown>
        <div class="dropdown-btn">
            <div class="dropdown-text">{{ selectedOption }}</div>
            <DropdownIcon width="16" height="16" :fill="FONT_COLOR" />
        </div>
        <template #dropdown>
            <ElDropdownMenu>
                <ElDropdownItem v-for="(item, index) in prop.options" :key="index" @click="change(index)">
                    <div>{{ item.label }}</div>
                </ElDropdownItem>
            </ElDropdownMenu>
        </template>
    </ElDropdown>
</template>

<script setup lang="ts">
import type { DropdownCommonProps } from "@/components/form-control/index";
import DropdownIcon from "@/components/svg/DropdownIcon.vue";
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus/es/components/dropdown/index";
import "element-plus/es/components/dropdown/style/css";
import "element-plus/es/components/dropdown-menu/style/css";
import "element-plus/es/components/dropdown-item/style/css";
import { ref } from "vue";

const selectedOption = ref();

const FONT_COLOR = "#606266";

const prop = defineProps<DropdownCommonProps>();
const emit = defineEmits<{
    (e: "select", value: string): void,
}>();


selectedOption.value = prop.options[0].label;

function change(index: number) {
    emit("select", prop.options[index].value);
    selectedOption.value = prop.options[index].label;
}

change(0);
</script>


<style scoped lang="scss">
.dropdown-btn {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #aaa;
    background-color: #fff;
}

.dropdown-text {
    color: v-bind(FONT_COLOR);
    font-size: 16px;
    margin-right: 10px;
}
</style>