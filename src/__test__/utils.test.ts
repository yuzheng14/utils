import { describe, expect, it } from 'vitest'
import { decode64, encode64, range } from '../utils'

declare global {
  const Iterator: {
    new <T>(): IterableIterator<T>
    <T>(): IterableIterator<T>
  }
}

describe('utils', () => {
  it('range', () => {
    expect([...range(5)]).toEqual([0, 1, 2, 3, 4])
    expect([...range(1, 5)]).toEqual([1, 2, 3, 4])
    expect(range(3)).toBeInstanceOf(Iterator)
    expect(range(3)[Symbol.iterator]()).toBeInstanceOf(Iterator)
    expect([...range(3)[Symbol.iterator]()]).toEqual([0, 1, 2])
  })

  it('base64', () => {
    expect(encode64('测试')).toBe('5rWL6K+V')
    expect(encode64('test')).toBe('dGVzdA==')
    expect(decode64('5rWL6K+V')).toBe('测试')
    expect(decode64('dGVzdA==')).toBe('test')
  })
})
