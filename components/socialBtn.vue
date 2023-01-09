<template>
  <button>
    <img class="social-icon" alt="twitter" src="../assets/img/Twitter.png">
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
    outline: 4px solid $focused-light;
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
      opacity: 0.12;
    }
  }

  .social-icon {
    width: 64px;
    height: 64px;
    border-radius: 32px;
  }
}
</style>