<template>
  <ul class="work-card-list">
    <li v-for="card in cards" :key="card.alt">
      <a :href="card.to" target="blank" class="work-card">
        <div class="thumbnail"></div>
        <div class="contents-wrapper">
          <div class="title-wrapper">
            <h2>{{ card.title }}</h2>
            <p>{{ card.type }}</p>
          </div>
          <span class="material-symbols-outlined">
            open_in_new
          </span>
        </div>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const generateImgPath = (fileName: string): string => {
  return new URL(`/assets/img/${fileName}.png`, import.meta.url).href
}
const cards: Array<{ title: string; type: string; to: string; img: string; alt: string }> = [
  {
    title: 'タイトル',
    type: 'Web',
    to: '/',
    img: generateImgPath(""),
    alt: ''
  },
  {
    title: 'タイトル',
    type: 'Web',
    to: '/',
    img: generateImgPath(""),
    alt: ''
  },
  {
    title: 'タイトル',
    type: 'Web',
    to: '/',
    img: generateImgPath(""),
    alt: ''
  },
  {
    title: 'タイトル',
    type: 'Web',
    to: '/',
    img: generateImgPath(""),
    alt: ''
  },
  {
    title: 'タイトル',
    type: 'Web',
    to: '/',
    img: generateImgPath(""),
    alt: ''
  },
]
</script>

<style lang="scss" scoped>
.work-card-list {
  display: grid;
  column-gap: 32px;
  row-gap: 44px;
  grid-template-columns: 1fr 1fr;
  width: 804px;
  margin: 120px 16px 80px 16px;
  list-style: none;
}

.work-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid $border-yellow;
  border-radius: 8px;
  overflow: hidden;
  background-color: $bg-white;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid $focused-default;
    outline-offset: 2px;
    text-decoration: underline;
    text-decoration-color: $text-main;
  }

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);

    .contents-wrapper {
      span {
        opacity: 1;
      }

      .title-wrapper {
        h2 {
          text-decoration: underline;
          text-decoration-color: $text-main;
        }
      }
    }
  }

  .thumbnail {
    background: $gray-100;
    width: 100%;
    aspect-ratio: 16 / 9;
    text-overflow: ellipsis;
  }

  .contents-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    gap: 4px;
    width: 100%;

    .title-wrapper {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      h2 {
        font-family: $JP-serif;
        color: $text-main;
        @include body1();
      }

      p {
        font-family: $JP-serif;
        color: $text-sub;
        @include caption();
        text-decoration: none;
      }
    }

    span {
      font-size: 24px;
      height: 24px;
      color: $text-main;
      opacity: 0;
    }
  }
}

@media (max-width: 960px) {
  .work-card-list {
    margin: 0px 16px 80px 16px;
    display: grid;
    column-gap: 32px;
    row-gap: 44px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    width: 90%;
  }
}

@media (max-width: 480px) {
  .work-card-list {
    margin: 0px 16px 80px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 90%;
  }
}
</style>