<template>
  <header>
    <ContactBtn />
  </header>
</template>

<script setup lang="ts">
import ContactBtn from './ContactBtn.vue';

</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  background-color: $surface-white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
  position: fixed;
  z-index: 9999;
}

@media (max-width: 480px) {

  header {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>