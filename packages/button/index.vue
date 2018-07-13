<template>
  <button
		class="r-button"
		:disabled = "disabled"
		:class="[buttonSize, buttonType, buttonDisabled]"
    @click="handleClick"
	>
	<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
export default {
  name: "r-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
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
    buttonType () {
      return this.type ? `r-button--${this.type}` : "";
    },
    buttonSize () {
      return this.size ? `r-button--${this.size}` : "";
    },
    buttonDisabled () {
      return this.disabled === true ? "is-disabled" : "";
    }
  },
  methods: {
    handleClick (e) {
      // console.log(e)
      this.$emit('click', 'this is click emit')
    }
  }
};
</script>

<style scoped>
.r-button {
  padding: 12px 20px;
  color: #000;
  display: inline-block;
  background: #fff;
  text-align: center;
  border: 1px solid #dcdfe6;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1;
  white-space: nowrap;
  outline: none;
  box-sizing: border-box;
  /* width: 100px;
		height: 50px; */
}
.r-button:hover,
.r-button:focus {
  color: #42b983;
  border: 1px solid #42b983;
}
.r-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.r-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.r-button--primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
}
.r-button--primary:hover,
.r-button--primary:focus {
  color: #fff;
  background-color: #40a9ff;
  border-color: #1890ff;
}
.r-button--danger {
  color: #f5222d;
  background-color: #f5f5f5;
  border-color: #d9d9d9;
}
.r-button--danger:hover {
  color: #fff;
  background-color: #f5222d;
  border-color: #f5222d;
}
.r-button--danger:focus,
.r-button--danger:active {
  color: #fff;
  background-color: #f5222d;
  border-color: #f5222d;
}
.r-button--dashed {
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dashed;
}
.r-button--dashed:hover,
.r-button--dashed:focus,
.r-button--dashed:active {
  color: #42b983;
  border: 1px dashed #42b983;
}
.is-disabled,
.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
</style>
