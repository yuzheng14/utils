/**
 * 给对象赋默认值，如果该字段已经存在则不赋值
 * @param obj 需要赋默认值的对象
 * @param defaultValue 默认值对象
 * @returns 原对象
 */
export function assignObjDefaultValue<T extends object>(obj: Record<string, unknown>, defaultValue: T): T {
  for (const key in defaultValue) {
    obj[key] === undefined && (obj[key] = defaultValue[key])
  }
  return obj as T
}

/**
 * 深拷贝对象的属性（不拷贝方法）
 * @param obj
 * @returns
 */
export function deepCopyPropsOfObj(obj: Record<string, unknown>): Record<string, unknown> {
  return JSON.parse(JSON.stringify(obj))
}
