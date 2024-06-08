import { present } from './predicate'

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

/**
 * generate an iterator of given range, left-closed and right-open ( [start, end) )
 * @param start - the start of the range
 * @param end - the end of the range
 */
export function range(end: number): IterableIterator<number>
export function range(start: number, end: number): IterableIterator<number>
export function* range(start: number, end?: number): IterableIterator<number> {
  for (let i = present(end) ? start : 0; i < (end ?? start); i++) yield i
}
