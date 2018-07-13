<template>
  <div>
    <div class="input-box">
      <r-input v-model="input1" placeholder="请输入内容" @focus="onFocus" @blur="onBlur" @change="onChange"/>
      <r-input v-model="input1" size="medium" placeholder="请输入内容" @focus="onFocus" @blur="onBlur" @change="onChange"/>
      <r-input v-model="input1" size="small" placeholder="请输入内容" @focus="onFocus" @blur="onBlur" @change="onChange"/>      
      <div class="input-value">你输入的是：{{input1}}</div>          
    </div>
    <div class="input-box">
      <r-input v-model="input2" placeholder="请输入内容" :disabled='true'/>      
      <r-input v-model="input2" size="medium" placeholder="请输入内容" :disabled='true'/>      
      <r-input v-model="input2" size="small" placeholder="请输入内容" :disabled='true'/>            
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      input1: '',
      input2: ''      
    }
  },
  methods: {
    onFocus () {
      console.log('focus')
      console.log(this.input1)
    },
    onBlur () {
      console.log('blur')
      console.log(this.input1)
    },
    onChange () {
      console.log('change')      
      console.log(this.input1)
    }
  }
}
</script>

<style scoped>
.input-box {
  margin-bottom: 20px;
}
.input-value {
  margin-top: 10px;
}
</style>
