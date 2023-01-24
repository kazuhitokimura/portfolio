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
  background-color: $gray-800;
  color: $text-white;
}
</style>