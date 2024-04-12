import type { Ref } from "vue";
import type { EasySearchStore } from "@/store/useEasySearchStore";

export interface ObjectOptional<T> {
    [propName: string | symbol]: T
}

/**
 * DynamicInputProps 组件的 props 的类型
 */
export interface DynamicInputProps {
    input: RefArray<string>;
    addInput: () => void;
    removeInput: (index: number) => void;
}

/**
 * 输入值的类型
 */
export type InputValues = Array<string>;

/**
 * ref 数组
 */
export type RefArray<T> = Array<Ref<T>>;

/**
 * 导入的引擎模块
 */
export interface EngineModule {
    joinParams: (storeParam: EasySearchStore) => string;
    dynamicFormOptions: ObjectOptional<Object>;
    joinDirectly: (value: string) => string;
}