<template>
  <header>
    <div class="contents">
      <ContactBtn />
    </div>
  </header>
</template>

<script setup lang="ts">
import ContactBtn from './ContactBtn.vue';

</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 100%;
  background-color: $surface-white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
  position: fixed;
  z-index: 9999;

  .contents {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 72px;
    width: 1280px;
    margin-right: 16px;
    margin-left: 16px;
  }
}

@media (max-width: 480px) {

  header {
    .contents{
      width: 100%;
    }
  }
}
</style>