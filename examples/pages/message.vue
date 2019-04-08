<template>
  <div>
    <div class="btn-box">
      <r-button @click="onClick1">提示</r-button>
      <r-button @click="onClick2">成功</r-button>
      <r-button @click="onClick3">警告</r-button>
      <r-button @click="onClick4">失败</r-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    onClick1 () {
       this.$message({
          showClose: true,
          message: '这是一条提示消息',
          type: 'info',
          center:false
        });
    },
     onClick2 () {
       this.$message({
          showClose: true,
          message: '这是一条成功消息',
          type: 'success',
          center:false
        });
    },
    onClick3 () {
       this.$message({
          showClose: true,
          message: '这是一条警告消息',
          type: 'warning',
          center:false
        });
    },
    onClick4 () {
       this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error',
          center:false
        });
    },
  }
}
</script>

<style>
.btn-box {
  margin-bottom: 20px;
}
</style>
