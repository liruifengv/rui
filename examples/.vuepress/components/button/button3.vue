<template>
  <div class="btn-box">
    <r-button @click="onClick">默认按钮</r-button>
    <r-button size='medium'>中号按钮</r-button>
    <r-button size='small'>小号按钮</r-button>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    methods: {
      onClick() {
        alert('click')
      }
    }
  }

</script>

<style>
  .btn-box {
    margin-bottom: 20px;
  }

</style>
