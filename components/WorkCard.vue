<template>
  <div class="work-card">
    <div class="thumbnail"></div>
    <div class="contents-wrapper">
      <div class="contents"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.work-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid $border-yellow;
  border-radius: 8px;

  .thumbnail {
    background: $yellow-700;
    width: 100%;
    aspect-ratio: 16 / 9;
    text-overflow: ellipsis;
  }

  .contents-wrapper {
    width: 100%;
    padding: 12px;

    .contents {
      background: #FFE8E8;
      height: 120px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>