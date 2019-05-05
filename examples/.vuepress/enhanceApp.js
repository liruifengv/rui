/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import 'highlight.js/styles/atom-one-dark.css';
import Rui from '../../src/index.js'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  //   Vue.use(VueHighlightJS)
  Vue.use(VueHighlightJS, {
    // Register only languages that you want
    languages: {
      css,
      javascript,
      vue
    }
  });
  Vue.use(Rui)
}
