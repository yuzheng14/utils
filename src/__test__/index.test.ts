import * as all from '../index'
import { describe, it, expect } from 'vitest'

describe('函数导出测试', () => {
  it('assignObjDefaultValue', () => {
    expect(all.assignObjDefaultValue).toBeDefined()
  })
  it('deepCopyPropsOfObj', () => {
    expect(all.deepCopyPropsOfObj).toBeDefined()
  })
  it('sleep', () => {
    expect(all.sleep).toBeDefined()
  })
  it('throttle', () => {
    expect(all.throttle).toBeDefined()
  })
})
