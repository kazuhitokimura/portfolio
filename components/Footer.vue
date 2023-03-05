<template>
  <footer>
    <p>©2023 Kazuhito Kimura - All rights reserved</p>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: $surface-white;
  padding-top: 16px;
  padding-bottom: 16px;

  p {
    font-family: $EN-sans-serif;
    text-align: center;
    color: $text-sub;
    @include body2();
  }
}
</style>