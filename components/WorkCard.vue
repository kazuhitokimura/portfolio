<template>
  <div class="work-card">
    <div class="thumbnail"></div>
    <div class="contents-wrapper">
      <div class="contents">テキストテキスト</div>
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
  overflow:hidden;
  background-color: $bg-white;

  .thumbnail {
    background: $gray-200;
    width: 100%;
    aspect-ratio: 16 / 9;
    text-overflow: ellipsis;
  }

  .contents-wrapper {
    width: 100%;
    padding: 12px;

    .contents {
      background: #FFE8E8;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>