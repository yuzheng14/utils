import { present } from '../predicate'
import { describe, expect, it } from 'vitest'

describe('type predicate', () => {
  it('present', () => {
    expect(present(null)).toBeFalsy()
    expect(present(undefined)).toBeFalsy()
    expect(present(0)).toBeTruthy()
    expect(present('')).toBeTruthy()
    expect(present(false)).toBeTruthy()
  })
})
