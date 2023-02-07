/**
 * 简单版本的节流
 * @param fn
 * @param interval
 */
export function throttle(fn: () => void, interval: number) {
  let time = 0
  return () => {
    if (Date.now() - time >= interval) {
      time = Date.now()
      fn()
    }
  }
}
