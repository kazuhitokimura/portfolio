<template>
  <div class="work-card-list">
    <WorkCard />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.work-card-list {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr 1fr;
  width: 900px;
}
</style>