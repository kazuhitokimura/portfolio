<template>
  <button onclick="window.open('https://airtable.com/shrk6M40hGH6IqbWR', '_blank')" rel="noopener">
    <span class="material-symbols-outlined">
      mail
    </span>
    <span class="label">
      CONTACT
    </span>
  </button>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  gap: 8px;
  height: 44px;
  font-family: $JP-serif;
  color: $text-main;
  background-color: $surface-white;
  border: 1px solid $border-gray;
  border-radius: 4px;
  @include body1();

  &:hover {
    background-color: $surface-white;
    background-color: $overlay-hover;
  }

  &:focus-visible {
    outline: 2px solid $focused-default;
    outline-offset: 2px;
  }

  &:active {
    background-color: $surface-white;
    background-color: $overlay-pressed;
  }

  .material-symbols-outlined {
    font-size: 24px;
    height: 24px;
    color: $text-main;
  }
}

@media (max-width: 480px) {

  button {
    padding: 10px;

    .label {
      display: none
    }
  }
}
</style>