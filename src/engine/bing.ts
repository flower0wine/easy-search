import { useEasySearchStore } from "@/store/useEasySearchStore";
import { reactive } from "vue";
import type { ObjectOptional } from "@/types";

const easySearchStore = useEasySearchStore();
const PATH = "https://cn.bing.com/search";

let url: URL;
let query: string[];

export const joinParams = function () {
    query = [];
    url = new URL(PATH);
    resolveFuzzyMatchValues();
    resolveCompleteMatchValues();
    resolveAnyMatchValues();
    resolveNoMatchValues();
    resolveKeywordPosition();

    resolveLimitTime();
    url.searchParams.append("q", query.filter((value) => value !== "").join("+"));
    return url.toString();
}

export function joinDirectly(value: string): string {
    url = new URL(PATH);
    url.searchParams.append("q", value);
    return url.toString();
}

function resolveFuzzyMatchValues(): void {
    query.push(easySearchStore.fuzzyMatchInputValues.join("+"));
}

function resolveCompleteMatchValues(): void {
    const completeMatchInputValues = easySearchStore.completeMatchInputValues;
    const transformedValues = completeMatchInputValues.map((value) => {
        return value ? `"${value}"` : '';
    });
    query.push(transformedValues.join("+"));
}

function resolveAnyMatchValues(): void {
    query.push(easySearchStore.anyMatchInputValues.join("+"));
}

function resolveNoMatchValues(): void {
    const noMatchInputValues = easySearchStore.noMatchInputValues;
    const transformedValues = noMatchInputValues.map((value) => {
        return `-${value}`;
    });
    query.push(transformedValues.join("+"));
}

function resolveKeywordPosition(): void {

}

function resolveLimitTime(): void {
    const limitTime = easySearchStore.limitTime;
}

export const dynamicFormOptions = reactive<ObjectOptional<Object>>({
    fuzzyMatchInput: {},
    completeMatchInput: {},
    anyMatchInput: {},
    noMatchInput: {},
    siteFormat: {},
    keywordPosition: {},
    siteSearch: {},
});