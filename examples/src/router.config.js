import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Button from '../pages/Button'
import Input from '../pages/Input'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})
