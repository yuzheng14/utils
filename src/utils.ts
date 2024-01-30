/**
 * 简单版本的节流
 * @param fn - 要节流的函数
 * @param interval - 节流间隔
 * @public
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
