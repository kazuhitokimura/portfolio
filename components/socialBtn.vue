<template>
  <ul>
    <li v-for="btn in btns" :key="btn.alt">
      <div>
        <a :href="btn.to" target="blank">
          <img :src="btn.img" :alt="btn.alt" class="social-icon">
          <div></div>
        </a>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const generateImgPath = (fileName: string): string => {
  return new URL(`../assets/img/${fileName}.png`, import.meta.url).href
}
const btns: Array<{ to: string; img: string; alt: string }> = [
  {
    to: 'https://note.com/kazhto43',
    img: generateImgPath("note"),
    alt: 'note'
  },
  {
    to: 'https://github.com/kazuhitokimura',
    img: generateImgPath("github"),
    alt: 'github'
  },
  {
    to: 'https://twitter.com/kimurasu02',
    img: generateImgPath("Twitter"),
    alt: 'twitter'
  },
]
</script>


<style lang="scss" scoped>
a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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

ul {
  gap: 32px;
  flex-wrap: wrap;
}

li {
  width: 56px;
  height: 56px;
  list-style: none;
}
</style>