<script setup lang="ts">

interface Props {
  img: string;
  alt: string;
  to: string;
  size: number;
}

const props = withDefaults(defineProps<Props>(), {
  img: "/",
  alt: "",
  to: "",
  size: 64,
});

const openLink = () => {
  openLink(); {
      window.open("to", "_blank");
    }
}
</script>


<template>
  <button @click="openLink">
    <img class="social-icon" :src="img" :alt="alt">
    <div></div>
  </button>
</template>

<style lang="scss" scoped>
button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 32px;

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
    width: 64px;
    height: 64px;
    border-radius: 32px;
  }
}
</style>