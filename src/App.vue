<template>
  <div class="container">
    <h1>hello</h1>
    <button @click="handleClick">button</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$toast('success')
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
