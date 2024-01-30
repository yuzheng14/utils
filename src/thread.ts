import { throttle } from '@/utils'

/**
 * 阻塞进程工具函数
 * @param time - 阻塞时间
 * @public
 */
export function sleep(time: number) {
  const now = Date.now()
  const fn = throttle(() => console.log('睡眠中', Date.now()), 500)
  while (Date.now() - now <= time) {
    fn()
  }
}
