/**
 * 给对象赋默认值，如果该字段已经存在则不赋值
 * @param obj 需要赋默认值的对象
 * @param defaultValue 默认值对象
 * @returns 原对象
 */
export function assignObjDefaultValue<T extends object>(obj: object, defaultValue: T): T {
  Object.entries(defaultValue).forEach(
    ([key, value]) =>
      (obj as Record<string, unknown>)[key] === undefined && ((obj as Record<string, unknown>)[key] = value)
  )
  return obj as T
}

/**
 * 深拷贝对象的属性（不拷贝方法）
 * @param obj
 * @returns
 */
export function deepCopyPropsOfObj(obj: object): Record<string, unknown> {
  return JSON.parse(JSON.stringify(obj))
}
