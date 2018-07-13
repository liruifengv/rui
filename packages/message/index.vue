<template>
  <div
    class="r-message"
    :class="[messageType]"
  >
	  <slot>
      <p class="r-message__content">{{ message }}</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "r-button",
  props: {
    type: {
      type: String,
      default: "info"
    },
    message: {
      type: String,
      default: ""
    }
  },
  computed: {
    messageType () {
      return this.type ? `r-message--${this.type}` : "";
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.r-message--success{
  background: #42b983
}
.r-message--error{
  background: #ff0000
}
</style>
