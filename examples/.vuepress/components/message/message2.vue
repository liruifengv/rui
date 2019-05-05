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

<style>
</style>
