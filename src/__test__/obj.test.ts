import { assignObjValue } from '@/obj'
import { describe, expect, it } from 'vitest'

interface User {
  password: string
  username: string
}

describe('obj.ts', () => {
  it('assignObjValue', () => {
    const user: User = {
      password: '123456',
      username: 'test',
    }
    expect(assignObjValue(user, { password: 'msun' })).toEqual({
      password: 'msun',
      username: 'test',
    })
  })
})
