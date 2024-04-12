import type { ObjectOptional } from "@/types";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import {ref} from "vue";
import { defaultConfig } from "@/engine";

export const useDynamicFormStore = defineStore("dynamicFormStore", () => {
    const dynamicFormOption: Ref<ObjectOptional<Object>> = ref<ObjectOptional<Object>>(defaultConfig.dynamicFormOptions);

    function setDynamicFormOption(option: ObjectOptional<Object>) {
        dynamicFormOption.value = option;
    }

    return {
        dynamicFormOption,
        setDynamicFormOption,
    }
});