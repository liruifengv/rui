/* eslint-disable */
import Vue from 'vue'
import { destroyVM, createTest, createVue } from '../util'
import Button from 'packages/Button/index.vue'

describe('Button component', () => {
  let vm
  // 测试用例执行之后销毁实例
  afterEach(() => {
    destroyVM(vm)
  })
  // 测试默认button
  it('create a default button', () => {
    vm = createTest(Button)

    expect(vm.$el.classList.contains('r-button')).to.be.true
    expect(vm.$el.classList.contains('r-button--default')).to.be.true
  })
  // 测试默认 button size
  it('create a medium size button', () => {
    vm = createTest(Button, { size: 'medium' }, true)

    expect(vm.size).to.equal('medium')
    expect(vm.$el.classList.contains('r-button')).to.be.true
    expect(vm.$el.classList.contains('r-button--medium')).to.be.true
  })
  it('create a small size button', () => {
    vm = createTest(Button, { size: 'small' }, true)

    expect(vm.size).to.equal('small')    
    expect(vm.$el.classList.contains('r-button')).to.be.true
    expect(vm.$el.classList.contains('r-button--small')).to.be.true
  })
  // 测试默认 button type
  it('create a primary type button', () => {
    vm = createTest(Button, { type: 'primary' }, true)

    expect(vm.type).to.equal('primary')    
    expect(vm.$el.classList.contains('r-button')).to.be.true
    expect(vm.$el.classList.contains('r-button--primary')).to.be.true
  })
  it('create a danger type button', () => {
    vm = createTest(Button, { type: 'danger' }, true)

    expect(vm.type).to.equal('danger')    
    expect(vm.$el.classList.contains('r-button')).to.be.true
    expect(vm.$el.classList.contains('r-button--danger')).to.be.true
  })
  it('create a dashed type button', () => {
    vm = createTest(Button, { type: 'dashed' }, true)

    expect(vm.type).to.equal('dashed')        
    expect(vm.$el.classList.contains('r-button')).to.be.true
    expect(vm.$el.classList.contains('r-button--dashed')).to.be.true
  })
    // 测试默认 button disabled
  it('create a disabled button', () => {
    vm = createTest(Button, { disabled: true }, true)

    expect(vm.disabled).to.equal(true)            
    expect(vm.$el.classList.contains('r-button')).to.be.true
    expect(vm.$el.classList.contains('is-disabled')).to.be.true
  })
  // 测试 button click 事件
  it('test button handleClick', done => {
    let result;
    vm = createVue({
      template: `
        <r-button @click="handleClick"></r-button>
      `,
      methods: {
        handleClick(msg) {
          result = msg;
        }
      }
    }, true);
    vm.$el.click();
    setTimeout(_ => {
      expect(result).to.exist
      expect(result).to.equal('this is click emit')
      done();
    }, 20);
  });
})
