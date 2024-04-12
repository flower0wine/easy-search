import type { ObjectOptional } from "@/types";
import icon_360 from "@/assets/360.webp";
import icon_baidu from "@/assets/baidu.webp";
import icon_bing from "@/assets/bing.webp";
import icon_duckduckgo from "@/assets/duckduckgo.webp";
import icon_google from "@/assets/google.webp";
import icon_sougou from "@/assets/sougou.webp";
import icon_yahoo from "@/assets/yahoo.webp";
import icon_yandex from "@/assets/yandex.webp";

import type { EngineModule } from "@/types";
import type { EasySearchStore } from "@/store/useEasySearchStore";
import { joinParams, dynamicFormOptions, joinDirectly } from "@/engine/baidu";

export const defaultConfig = {
    // 默认使用的搜索引擎
    engine: "baidu",
    // 默认的动态表单选项
    dynamicFormOptions,
    joinParams,
    joinDirectly
};

/**
 * 搜索引擎名称
 */
const names = [
    "360",
    "baidu",
    "bing",
    "duckduckgo",
    "google",
    "sougou",
    "yahoo",
    "yandex"
];

/**
 * 搜索引擎图标
 */
const icons = [
    icon_360,
    icon_baidu,
    icon_bing,
    icon_duckduckgo,
    icon_google,
    icon_sougou,
    icon_yahoo,
    icon_yandex
];


export const searchEngineNames: ObjectOptional<string> = {};
names.forEach((name) => {
    searchEngineNames[name] = name;
});

const searchEngineIcons: ObjectOptional<string> = {};
icons.forEach((icon, index) => {
    searchEngineIcons[names[index]] = icon;
});

export const icon = searchEngineIcons;

export type LazyEngineModule = () => Promise<EngineModule>;

/**
 * 支持的搜索引擎
 */
export const engine: ObjectOptional<LazyEngineModule> = {
    360: () => import("@/engine/360"),
    baidu: () => import("@/engine/baidu"),
    bing: () => import("@/engine/bing"),
    duckduckgo: () => import("@/engine/duckduckgo"),
    google: () => import("@/engine/google"),
    sougou: () => import("@/engine/sougou"),
    yahoo: () => import("@/engine/yahoo"),
    yandex: () => import("@/engine/yandex"),
};

/**
 * 获取 URL, 每个搜索引擎的参数不一样
 * @param engineModule 搜索引擎模块
 * @returns 返回 url
 */
export default function (store: EasySearchStore, engineModule: EngineModule): string {
    return engineModule.joinParams(store);
}

/**
 * 普通搜索, 直接将搜索的内容拼接到 URL 中
 * @param value 要直接拼接的内容
 * @param engineModule 搜索引擎模块
 * @returns 返回 url
 */
export function commonSearch(value: string, engineModule: EngineModule): string {
    return engineModule.joinDirectly(value);
}