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