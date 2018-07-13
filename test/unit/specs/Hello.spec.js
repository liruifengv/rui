/* eslint-disable */
import Vue from 'vue'
import { destroyVM, createTest } from '../util'
import Hello from 'packages/Hello/index.vue'

describe('Hello component', () => {
  let vm
  // 测试用例执行之后销毁实例
  afterEach(() => {
    destroyVM(vm)
  })
  it('render default classList in hello', () => {
    vm = createTest(Hello)
    expect(vm.$el.classList.contains('r-hello')).to.be.true
  })
  it('render custom message in hello', () => {
    vm = createTest(Hello, { message: 'RUI' }, true)
    expect(vm.$el.querySelector('.r-hello p').textContent).to.have.be.equal('hello RUI')
    expect(vm.message).to.equal('RUI')
  })
})
