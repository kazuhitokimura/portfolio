<template>
  <div class="tooltip">
  {{ text }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}
const props = withDefaults(defineProps<Props>(), {
  text: "",
});
</script>

<style lang="scss" scoped>
.tooltip{
  background-color: $surface-yellow;
  color: $text-main;
}
</style>