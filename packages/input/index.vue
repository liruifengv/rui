<template>
  <div class="r-input">
    <input 
      class="r-input__inner"
      :disabled = "disabled"
		  :class="[inputSize, inputDisabled]"
      ref="input"
      :placeholder="placeholder"
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
  </div>
</template>

<script>
  export default {
    name: 'r-input',
    data () {
      return {
        currentValue: this.value === undefined ? '' : this.value,
        // hovering: false,
        focused: false
      }
    },
    props: {
      value: [String, Number],
      placeholder: {
        type: String,
        default: ''
      },
      // type: {
      //   type: String,
      //   default: "default"
      // },
      size: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      // inputType () {
      //   return this.type ? `r-input--${this.type}` : "";
      // },
      inputSize () {
        return this.size ? `r-input--${this.size}` : "";
      },
      inputDisabled () {
        return this.disabled === true ? "is-disabled" : "";
      }
    },
    watch: {
      'value'(val, oldValue) {
        this.setCurrentValue(val)
      }
    },
    created() {
      this.$on('inputSelect', this.select);
    },
    methods: {
      focus() {
        this.$refs.input.focus()
      },
      blur() {
        this.$refs.input.blur()
      },
      select() {
        this.$refs.input.select()
      },
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event)
      },
      handleFocus(event) {
        this.focused = true;
        this.$emit('focus', event)
      },
      handleInput(event) {
        const value = event.target.value
        this.$emit('input', value)
        this.setCurrentValue(value)
      },
      handleChange(event) {
        this.$emit('change', event.target.value)
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return
        this.currentValue = value
      }
    }
  }
</script>

<style scoped>
  .r-input {
    width: 180px;
    position: relative;
    font-size: 14px;
    display: inline-block;
  }
  .r-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .r-input--medium {
    height: 36px;
    line-height: 36px;
  }
  .r-input--small {
    height: 32px;
    line-height: 32px;
  }
  .r-input__inner:hover,
  .r-input__inner:focus,
  .r-input__inner:active {
    border: 1px solid #42b983;
  }
  .is-disabled,
  .is-disabled:hover {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
</style>
