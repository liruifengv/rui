<template>
  <div class="btn-box">
    <r-button :disabled='true'>禁用按钮</r-button>
    <r-button size='medium' :disabled='true'>禁用按钮</r-button>
    <r-button size='small' :disabled='true'>禁用按钮</r-button>
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
