import type { EasySearchStore } from "@/store/useEasySearchStore";
import type { ObjectOptional } from "@/types";
import { reactive } from "vue";

let store: EasySearchStore;

const PATH = "https://www.baidu.com/s";
let url: URL;

export const joinParams = function (storeParam: EasySearchStore): string {
    store = storeParam;
    url = new URL(PATH);
    joinFuzzyMatchInputValues();
    joinCompleteMatchInputValues();
    joinAnyMatchInputValues();
    joinNoMatchInputValues();
    joinKeywordPosition();
    joinSiteSearch();
    joinDisplayRowNumber();
    joinLimitTime();
    joinSearchLanguage();
    joinSiteFormat();
    return url.toString();
}

export function joinDirectly(value: string): string {
    url = new URL(PATH);
    url.searchParams.append("q1", value);
    return url.toString();
}

function joinFuzzyMatchInputValues(): void {
    const fuzzyMatchInputValues = store.fuzzyMatchInputValues;
    url.searchParams.append("q1", fuzzyMatchInputValues.join("+"));
}

function joinCompleteMatchInputValues(): void {
    const completeMatchInputValues = store.completeMatchInputValues;
    url.searchParams.append("q2", completeMatchInputValues.join("+"));
}

function joinAnyMatchInputValues(): void {
    const anyMatchInputValues = store.anyMatchInputValues;
    url.searchParams.append("q3", anyMatchInputValues.join("+"));
}

function joinNoMatchInputValues(): void {
    const noMatchInputValues = store.noMatchInputValues;
    url.searchParams.append("q4", noMatchInputValues.join("+"));
}

function joinKeywordPosition(): void {
    const keywordPosition = store.keywordPosition;
    url.searchParams.append("q5", keywordPosition);
}

function joinSiteSearch(): void {
    const siteSearch = store.siteSearch;
    url.searchParams.append("q6", siteSearch);
}

function joinDisplayRowNumber(): void {
    const displayRowNumber = store.displayRowNumber;
    url.searchParams.append("rn", displayRowNumber);
}

function joinLimitTime(): void {
    const limitTime = store.limitTime;
    url.searchParams.append("lm", limitTime);
}

function joinSearchLanguage(): void {
    const searchLanguage = store.searchLanguage;
    url.searchParams.append("ct", searchLanguage);
}

function joinSiteFormat(): void {
    const siteFormat = store.siteFormat;
    url.searchParams.append("ft", siteFormat);
}


export const dynamicFormOptions = reactive<ObjectOptional<Object>>({
    fuzzyMatchInput: {},
    completeMatchInput: {},
    anyMatchInput: {},
    noMatchInput: {},
    displayRowNumber: {},
    limitTime: {},
    searchLanguage: {},
    siteFormat: {},
    keywordPosition: {},
    siteSearch: {},
});