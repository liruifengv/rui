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

<style>
</style>
