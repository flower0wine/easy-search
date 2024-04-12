import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { RefArray, InputValues, EngineModule } from "@/types";
import type { ComputedRef, Ref } from "vue";


export const useEasySearchStore = defineStore("easySearchStore", () => {
    const engineModule = ref<EngineModule>();
    const searchValue = ref<string>("");

    const fuzzyMatchInputRefs = ref<RefArray<string>>([]);
    const completeMatchInputRefs = ref<RefArray<string>>([]);
    const anyMatchInputRefs = ref<RefArray<string>>([]);
    const noMatchInputRefs = ref<RefArray<string>>([]);

    const displayRowNumber = ref<string>("10");
    const limitTime = ref<string>("0");
    const searchLanguage = ref<string>("0");
    const siteFormat = ref<string>("");
    const keywordPosition = ref<string>("");
    const siteSearch = ref<string>("");

    const fuzzyMatchInputValues = getInputValues(fuzzyMatchInputRefs);
    const completeMatchInputValues = getInputValues(completeMatchInputRefs);
    const anyMatchInputValues = getInputValues(anyMatchInputRefs);
    const noMatchInputValues = getInputValues(noMatchInputRefs);

    function getInputValues(input: Ref<RefArray<string>>): ComputedRef<InputValues> {
        return computed<InputValues>(() => {
            const arr: InputValues = [];
            input.value.forEach((item: Ref<string>) => {
                arr.push(item.value);
            });
            return arr;
        });
    }

    function addInput(input: RefArray<string>) {
        input.push(getReactiveInputValue());
    }

    function removeInput(input: RefArray<string>, index: number): void {
        input.splice(index, 1);
    }

    function getReactiveInputValue(): Ref<string> {
        return ref<string>("");
    }

    function setEngineModule(module: EngineModule): void {
        engineModule.value = module;
    }

    return {
        searchValue,
        // engine Module state
        engineModule,
        // form state
        fuzzyMatchInputRefs,
        completeMatchInputRefs,
        anyMatchInputRefs,
        noMatchInputRefs,
        displayRowNumber,
        limitTime,
        searchLanguage,
        siteFormat,
        keywordPosition,
        siteSearch,
        // getters
        fuzzyMatchInputValues,
        completeMatchInputValues,
        anyMatchInputValues,
        noMatchInputValues,
        // actions
        addInput,
        removeInput,
        setEngineModule,
    }
});

export type EasySearchStore = ReturnType<typeof useEasySearchStore>;