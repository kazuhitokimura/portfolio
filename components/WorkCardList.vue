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
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 12px;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
  width: 900px;
}
</style>