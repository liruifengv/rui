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

<style>
</style>
