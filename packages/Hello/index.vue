<template>
  <div class="r-hello">
    hello {{ message }}
  </div>
</template>

<script>
export default {
  name: 'r-hello',
  props: {
    message: String
  }
}
</script>