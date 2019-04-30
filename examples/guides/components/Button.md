# Button
---
常用的操作按钮。
## 基本用法
基础的按钮用法。

  <button-button1></button-button1>
  <highlight-code slot="codeText" lang="vue">
    <template>
    <div>
        <div class="btn-box">
        <r-button @click="onClick">默认按钮</r-button>
        <r-button size='medium'>中号按钮</r-button>
        <r-button size='small'>小号按钮</r-button>
        </div>
        <div class="btn-box">
        <r-button :disabled='true'>禁用按钮</r-button>
        <r-button size='medium' :disabled='true'>禁用按钮</r-button>
        <r-button size='small' :disabled='true'>禁用按钮</r-button>
        </div>
        <div class="btn-box">
        <r-button>默认按钮</r-button>
        <r-button type='primary'>主按钮</r-button>
        <r-button type='danger'>危险按钮</r-button>
        <r-button type='dashed'>虚线按钮</r-button>
        </div>
    </div>
    </template>
  </highlight-code>

## Attributes
| 参数        | 说明           | 类型  | 可选值 | 默认值 |
| ------------- |:-------------:| :-----|:-----|:-----|
| size     | 	尺寸 | string |  medium / small | ———|
| type      | 类型 |   string | primary / success / warning / danger / dashed | ——— |
| disabled | 禁用 |    boolean | ——— | false |
