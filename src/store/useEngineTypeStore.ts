import {defineStore} from 'pinia';
import {ref} from "vue";
import { defaultConfig } from "@/engine";

export const useEngineTypeStore = defineStore("engineTypeStore", () => {
    const engineType = ref(defaultConfig.engine);

    function setEngineType(type: string) {
        engineType.value = type;
    }
    return {
        engineType,
        setEngineType
    }
});
