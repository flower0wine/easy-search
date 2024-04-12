import { reactive } from "vue";
import type { ObjectOptional } from "@/types";

const PATH = "https://www.sogou.com/sogou";
let url: URL;

export const joinParams = function () {
    throw new Error("Module not implemented!");
}

export const dynamicFormOptions = reactive<ObjectOptional<Object>>({
});

export function joinDirectly(value: string): string {
    url = new URL(PATH);
    url.searchParams.append("query", value);
    return url.toString();
}