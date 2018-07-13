import Hello from '../packages/Hello'
import Button from '../packages/button'
import Input from '../packages/input'

const components = [
  Hello,
  Button,
  Input
]

const install = function (Vue) {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
