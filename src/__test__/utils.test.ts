import { describe, expect, it } from 'vitest'
import { range } from '../utils'

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
  })
})
