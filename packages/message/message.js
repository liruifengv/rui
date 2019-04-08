
import Vue from 'vue'

import Main from './index.vue';

let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

// 创建message对象实例
const Message = function(options) {
    options = options || {};
    // this.$message('直接传入字符串')
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }

    let userOnClose = options.onClose; // 关闭时的回调函数
    let id = 'message_' + seed++;

    options.onClose = function() {
     Message.close(id, userOnClose); // 传入回调函数
    };

     instance = new MessageConstructor({ // 创建Vue对象实例
        data: options
    });

    instance.id = id;
    instance.vm = instance.$mount(); // 挂载实例
    document.body.appendChild(instance.vm.$el); // 插入DOM中
    instance.vm.visible = true; // 设置可见
    instance.dom = instance.vm.$el;
    instances.push(instance);
    return instance.vm;
}
// this.$message.success('链式调用方法')
var typeArr = ['success', 'warning', 'info', 'error']
typeArr.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

// 关闭回调
Message.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};
// 关闭全部
Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;

