<template>
  <div class="r-icon" :style="{
    display: 'inline-flex',
    height: iconSize,
    width: iconSize}"
    @click="handleClick"
    >
    <svg :style="{fill:color}">
      <use :xlink:href='`#icon-${name}`'></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "r-icon",
    props: {
      color: String,
      name: {
        type: String,
        required: true
      },
      size: { // 因为用户可能传带单位的与不带单位的
        type: [Number, String],
        default: "1em"
      }
    },
    computed: { // 计算属性里面对这个值进行操作, 类型如果是数字, 就我们来给他加上单位吧,也就是默认单位是'px'
      iconSize() {
        if (typeof this.size === "number") return this.size + "px";
        else return this.size;
      }
    },
      methods: {
    handleClick (e) {
      // console.log(e)
      this.$emit('click', 'this is click emit')
    }
  }
  }

</script>
