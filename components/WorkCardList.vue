<template>
  <div class="work-card-list">
    <WorkCard />
    <WorkCard />
    <WorkCard />
    <WorkCard />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.work-card-list {
  display: grid;
  column-gap: 32px;
  row-gap: 44px;
  grid-template-columns: 1fr 1fr;
  width: 900px;
  margin-left: 56px;
}
</style>