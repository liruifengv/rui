<template>
  <div>
      <r-icon name="close" :size='16'/>
      <r-icon name="pause" :size='16'/>
      <r-icon name="check" :size='16'/>
      <r-icon name="info-circle-fill" :size='16'/>
      <r-icon name="check-circle-fill" :size='16' color="#ff0000"/>
      <r-icon name="close-circle-fill" :size='16' color="#ff0000"/>
      <r-icon name="warning-circle-fill" :size='16' color="#ff0000"/>
  </div>
</template>

<script>
  export default {
    name: 'Icon',
    mounted () {
      import('../../../../font/iconfont.js').then(module => {
        // use code
      })
    },
    methods: {
    }
  }

</script>

<style>
</style>
