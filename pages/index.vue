<template>
  <div class="whole-wrapper">
    <ProfileCard />
  </div>
</template>

<style lang="scss" scoped>
.whole-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: $bg-yellow;
}

@media (max-width: 480px) {
  .whole-wrapper {
    align-items: flex-start;
  }
}

</style>