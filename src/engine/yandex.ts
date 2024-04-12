import { reactive } from "vue";
import type { ObjectOptional } from "@/types";

const PATH = "https://yandex.com/search";
let url : URL;

export const joinParams = function () {
    throw new Error("Module not implemented!");
}

export const dynamicFormOptions = reactive<ObjectOptional<Object>>({
});

export function joinDirectly(value: string): string {
    url = new URL(PATH);
    url.searchParams.append("text", value);
    return url.toString();
}
