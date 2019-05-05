import Hello from '../packages/Hello'
import Button from '../packages/button'
import Input from '../packages/input'
import Icon from '../packages/icon'
import Message from '../packages/message/message.js'
import '../font/iconfont';
const components = [
  Hello,
  Button,
  Input,
  Message,
  Icon
]

const install = function (Vue) {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
