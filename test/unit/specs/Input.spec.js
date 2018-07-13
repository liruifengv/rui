/* eslint-disable */
import Vue from 'vue'
import { destroyVM, createTest } from '../util'
import Input from 'packages/Input/index.vue'

describe('Input component', () => {
  let vm
  // 测试用例执行之后销毁实例
  afterEach(() => {
    destroyVM(vm)
  })
  // 测试默认input
  it('create a default Input', () => {
    vm = createTest(Input)

    expect(vm.$el.classList.contains('r-input')).to.be.true
    const input = vm.$el.querySelector('.r-input__inner')
    expect(input.classList.contains('r-input__inner')).to.be.true    
  })
  // 测试默认 input size
  it('create a medium size input', () => {
    vm = createTest(Input, { size: 'medium' }, true)

    expect(vm.size).to.equal('medium')
    expect(vm.$el.classList.contains('r-input')).to.be.true
    const input = vm.$el.querySelector('.r-input__inner')    
    expect(input.classList.contains('r-input__inner')).to.be.true
    expect(input.classList.contains('r-input--medium')).to.be.true    
  })
  it('create a small size input', () => {
    vm = createTest(Input, { size: 'small' }, true)

    expect(vm.size).to.equal('small')    
    expect(vm.$el.classList.contains('r-input')).to.be.true
    const input = vm.$el.querySelector('.r-input__inner')    
    expect(input.classList.contains('r-input__inner')).to.be.true
    expect(input.classList.contains('r-input--small')).to.be.true
  })
    // 测试默认 input disabled
  it('create a disabled input', () => {
    vm = createTest(Input, { disabled: true }, true)

    expect(vm.disabled).to.equal(true)
    expect(vm.$el.classList.contains('r-input')).to.be.true
    const input = vm.$el.querySelector('.r-input__inner')    
    expect(input.classList.contains('r-input__inner')).to.be.true
    expect(input.classList.contains('is-disabled')).to.be.true    
  })
})
