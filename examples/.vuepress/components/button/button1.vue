<template>
  <div class="btn-box">
    <r-button>默认按钮</r-button>
    <r-button type='primary'>主按钮</r-button>
    <r-button type='danger'>危险按钮</r-button>
    <r-button type='dashed'>虚线按钮</r-button>
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
