/* eslint-disable */
import Vue from 'vue'
import Message from 'packages/message/message.js'

describe('Message', () => {
  afterEach(() => {
    const el = document.querySelector('.r-message')
    if (!el) return
    if (el.parentNode) {
      el.parentNode.removeChild(el)
    }
    if (el.__vue__) {
      el.__vue__.$destroy()
    }
  })

  it('普通消息', done => {
    Message({
      message: '这是普通消息',
      duration: 500
    });
    const message = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(message.textContent).to.equal('这是普通消息');
    setTimeout(() => {
      expect(document.querySelector('.r-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('测试成功类型消息', done => {
    Message({
      type: 'success',
      message: '这是成功的消息',
      duration: 500
    })
    const message = document.querySelector('.r-message');
    const content = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(content.textContent).to.equal('这是成功的消息');
    expect(message.classList.contains('r-message--success')).to.be.true

    setTimeout(() => {
      expect(document.querySelector('.r-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('测试失败类型消息', done => {
    Message({
      type: 'error',
      message: '这是错误消息',
      duration: 500
    })
    const message = document.querySelector('.r-message');
    const content = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(content.textContent).to.equal('这是错误消息');
    expect(message.classList.contains('r-message--error')).to.be.true

    setTimeout(() => {
      expect(document.querySelector('.r-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('测试警告类型消息', done => {
    Message({
      type: 'warning',
      message: '这是一条警告！！！',
      duration: 500
    })
    const message = document.querySelector('.r-message');
    const content = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(content.textContent).to.equal('这是一条警告！！！');
    expect(message.classList.contains('r-message--warning')).to.be.true

    setTimeout(() => {
      expect(document.querySelector('.r-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('测试链式调用成功', done => {
    Message.success({
      message: '测试链式调用成功',
      duration: 500
    })
    const message = document.querySelector('.r-message');
    const content = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(content.textContent).to.equal('测试链式调用成功');
    expect(message.classList.contains('r-message--success')).to.be.true

    setTimeout(() => {
      expect(document.querySelector('.r-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('测试链式调用失败', done => {
    Message.error({
      message: '测试链式调用失败',
      duration: 500
    })
    const message = document.querySelector('.r-message');
    const content = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(content.textContent).to.equal('测试链式调用失败');
    expect(message.classList.contains('r-message--error')).to.be.true

    setTimeout(() => {
      expect(document.querySelector('.r-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('测试链式调用警告', done => {
    Message.warning({
      message: '测试链式调用警告',
      duration: 500
    })
    const message = document.querySelector('.r-message');
    const content = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(content.textContent).to.equal('测试链式调用警告');
    expect(message.classList.contains('r-message--warning')).to.be.true

    setTimeout(() => {
      expect(document.querySelector('.r-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('测试链式调用提示', done => {
    Message.info({
      message: '测试链式调用提示',
      duration: 500
    })
    const message = document.querySelector('.r-message');
    const content = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(content.textContent).to.equal('测试链式调用提示');
    expect(message.classList.contains('r-message--info')).to.be.true

    setTimeout(() => {
      expect(document.querySelector('.r-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('显示关闭按钮', done => {
    Message({
      message: '显示关闭按钮',
      showClose: true
    });
    const message = document.querySelector('.r-message__content');
    expect(document.querySelector('.r-message')).to.exist;
    expect(document.querySelector('.r-message__closeBtn')).to.exist;
    expect(message.textContent).to.equal('显示关闭按钮');

    setTimeout(() => {
      document.querySelector('.r-message__closeBtn').click();
      setTimeout(() => {
        expect(document.querySelector('.r-message')).to.not.exist;
        done();
      }, 500);
    }, 500);
  });
})
