<template>
  <div class="r-hello">
    <p>hello {{ message }}</p>
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