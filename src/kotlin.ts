/**
 * 补充一些 kotlin 里面好用的 api
 */

declare global {
  interface Object {
    /** referencing to kotlin `also` */
    also: <T>(this: T, fn: (v: T) => void) => T
    /** referencing to kotlin `let` */
    let: <T, R>(this: T, fn: (v: T) => R) => R
  }
}

/** 对对象进行一些操作，但是扔返回对象本身 */
Object.prototype.also = function <T>(this: T, fn: (v: T) => void): T {
  fn(this)
  return this
}

/** 对对象进行一些操作，返回操作函数的返回值 */
Object.prototype.let = function <T, R>(this: T, fn: (v: T) => R): R {
  return fn(this)
}

export {}
