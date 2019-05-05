# Message
常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。
## 基本用法
从顶部出现，3 秒后自动消失。

<message-message1></message-message1>
  <highlight-code lang="vue">
    <template>
      <div>
        <r-button @click="onClick1">提示</r-button>
      </div>
    </template>
    <script>
      export default {
        name: 'message',
        methods: {
          onClick1() {
            this.$message('这是一条提示消息');
          }
        }
      }
    </script>
  </highlight-code>

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

<message-message2></message-message2>

  <highlight-code lang="vue">
    <template>
      <div>
        <r-button @click="onClick1">提示</r-button>
        <r-button @click="onClick2">成功</r-button>
        <r-button @click="onClick3">警告</r-button>
        <r-button @click="onClick4">失败</r-button>
      </div>
    </template>
    <script>
      export default {
        name: 'message',
        methods: {
          onClick1() {
            this.$message({
              message: '这是一条提示消息',
              type: 'info',
            });
          },
          onClick2() {
            // 链式调用
            this.$message.success('这是一条成功消息');
          },
          onClick3() {
            this.$message({
              message: '这是一条警告消息',
              type: 'warning'
            });
          },
          onClick4() {
            this.$message({
              message: '错了哦，这是一条错误消息',
              type: 'error'
            });
          },
        }
      }
    </script>
  </highlight-code>

## 可关闭

可以添加关闭按钮。

<message-message3></message-message3>
  <highlight-code lang="vue">
    <template>
      <div>
        <r-button @click="onClick1">提示</r-button>
        <r-button @click="onClick2">成功</r-button>
        <r-button @click="onClick3">警告</r-button>
        <r-button @click="onClick4">失败</r-button>
      </div>
    </template>
    <script>
      export default {
        name: 'message',
        methods: {
          onClick1() {
            this.$message({
              showClose: true,
              message: '这是一条提示消息',
              type: 'info'
            });
          },
          onClick2() {
            this.$message({
              showClose: true,
              message: '这是一条成功消息',
              type: 'success',
            });
          },
          onClick3() {
            this.$message({
              showClose: true,
              message: '这是一条警告消息',
              type: 'warning'
            });
          },
          onClick4() {
            this.$message({
              showClose: true,
              message: '错了哦，这是一条错误消息',
              type: 'error'
            });
          },
        }
      }
    </script>
  </highlight-code>

## 自定义关闭时间

可以自定义消息关闭的时间,0为不关闭

<message-message4></message-message4>
  <highlight-code lang="vue">
    <template>
      <div>
        <r-button @click="onClick1">10s自动关闭</r-button>
        <r-button @click="onClick2">不自动关闭</r-button>
      </div>
    </template>
    <script>
      export default {
        name: 'message',
        methods: {
          onClick1() {
            this.$message({
              showClose: false,
              message: '10s自动关闭',
              type: 'info',
              duration: 10000
            });
          },
          onClick2() {
            this.$message({
              showClose: true,
              message: '不自动关闭',
              type: 'info',
              duration: 0
            });
          }
        }
      }
    </script>
  </highlight-code>

## Attributes
| 参数        | 说明           | 类型  | 可选值 | 默认值 |
| ------------- |:-------------| :-----|:-----|:-----|
| message | 消息文字 |    string | ——— | ——— |
| type      | 类型 |   string | success / warning  / error / info | info |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 |    number | ——— | 	3000 |
| showClose | 是否显示关闭按钮 |    boolean | ——— | 	false |
| onClose | 	关闭时的回调函数, 参数为被关闭的 message 实例 |    function | ——— | 	——— |
