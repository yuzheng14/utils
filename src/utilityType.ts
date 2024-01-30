/**
 * 把 T 中的 K 属性变为必选，其他属性保持不变
 */
export type RequiredKeys<T, K extends keyof T> = {
  [key in K]-?: T[key]
} & T
