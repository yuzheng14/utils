/** Does value not equal to undefined or null */
export function present<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}
