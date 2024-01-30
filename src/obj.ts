/**
 * 给对象赋默认值，如果该字段已经存在则不赋值
 * @param obj - 需要赋默认值的对象
 * @param defaultValue -  默认值对象
 * @returns 原对象
 * @public
 */
export function assignObjDefaultValue<T extends object>(obj: object, defaultValue: T): T {
  Object.entries(defaultValue).forEach(
    ([key, value]) =>
      (obj as Record<string, unknown>)[key] === undefined &&
      ((obj as Record<string, unknown>)[key] = value),
  )
  return obj as T
}

/**
 * 使用对象给对象赋值
 * @param obj - 要赋值的对象
 * @param value - 要赋的值
 * @returns 要赋值对象的引用
 * @public
 */
export function assignObjValue<T extends object>(obj: T, value: Partial<T>): T {
  Object.entries(value).forEach(([key, val]) => ((obj as Record<string, unknown>)[key] = val))
  return obj
}

/**
 * 深拷贝对象的属性（不拷贝方法）
 * @param obj - 要拷贝的对象
 * @returns
 * @public
 */
export function deepCopyPropsOfObj(obj: object): Record<string, unknown> {
  return JSON.parse(JSON.stringify(obj))
}
