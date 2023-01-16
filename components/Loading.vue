<template>

  <div class="whole-wrapper">
    <div class="loading">
      <div class="loading-front"></div>
      <div class="loading-back"></div>
    </div>
  </div>

</template>


<script setup lang="ts">

setTimeout(() => {
  window.onload = function () {
    const loader = document.querySelector("whole-wrapper");
    loader.classList.add("whole-loaded");
  }, 1300;
});
</script>

<style lang="scss" scoped>
.whole-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: $bg-yellow;
}

.whole-loaded {
  opacity: 0;
}

.loading {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  text-indent: -9999em;
  border-top: 4px solid $gray-200;
  border-right: 4px solid $gray-200;
  border-bottom: 4px solid $gray-200;
  border-left: 4px solid $brand-main;
  animation:animate 1.5s linear infinite;
}

@keyframes animate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>