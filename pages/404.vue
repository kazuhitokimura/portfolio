<template>
  <div class="whole-wrapper">
    <h1>404</h1>
    <p>{{ path }}は存在しないページです</p>
  </div>
</template>

<script setup lang="ts">
const path = location.href
</script>

<style lang="scss" scoped>
.whole-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
</style>