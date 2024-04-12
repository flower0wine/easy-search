import {defineStore} from "pinia";
import { computed, ref } from "vue";

export const useGlobalErrorStore = defineStore("globalErrorStore", () => {
    const error = ref();

    const hasError = computed(() => {
        return !!error.value;
    });

    function clearError() {
        error.value = null;
    }

    function setError(err: any) {
        error.value = err;
    }

    return { error, hasError, clearError, setError };
});