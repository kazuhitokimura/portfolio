<template>
  <a :href="to" target="_blank">
    <img :src="img" :alt="alt" class="social-icon">
    <div></div>
  </a>
</template>


<script setup lang="ts">
interface Props {
  img: string;
  alt: string;
  to: string;
}
const props = withDefaults(defineProps<Props>(), {
  img: "/",
  alt: "",
  to: "/",
});

const size = ref("size");
</script>


<style lang="scss" scoped>
a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind(size);
  border-radius: 9999px;

  &:focus-visible {
    outline: 2px solid $focused-default;
    outline-offset: 2px;
  }

  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    opacity: 0;
    left: 0;
    top: 0;
    background: black;
    color: $text-white;

    &:hover {
      opacity: 0.08;
    }

    &:active {
      opacity: 0.16;
    }
  }

  .social-icon {
    border-radius: 9999px;
    width: 100%;
    height: 100%;
  }
}
</style>