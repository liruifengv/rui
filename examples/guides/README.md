# 开发指南

> Rui 是一个基于 Vue.js 的UI组件库。

### 安装

```
npm install rui-component -S
```

### 快速开始

```
import Vue from 'vue'
import Rui from 'rui-component'
 
Vue.use(Rui)
 
// or
import {
  Input,
  Button
  // ...
} from 'rui-component'
 
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
```
### 开始使用

至此，一个基于 Vue 和 RUI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

### [Issuse](https://github.com/liruifengv/rui/issues) 规范
-  Issuse 仅用于提交 Bug 或 Feature 以及设计相关的内容，其它内容可能会被直接关闭。
- 在提交 issue 之前，请搜索相关内容是否已被提出。
- 请说明 RUI 和 Vue 的版本号，并提供操作系统和浏览器信息。推荐使用 JSFiddle 生成在线 demo，这能够更直观地重现问题。

### [Pull Request](https://github.com/liruifengv/rui/pulls) 规范
- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息要以[组件名]: 描述信息 的形式填写，例如 Button: fix xxx bug。

- 不要提交 lib 里面打包的文件。

- 执行 npm run build:rui 后可以正确打包文件。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 如果是修复 bug，请在 PR 中给出描述信息。


### LICENSE

MIT