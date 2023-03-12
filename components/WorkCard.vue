<template>
  <ul class="work-card-list">
    <li v-for="card in cards" :key="card.alt">
      <a :href="card.to" target="blank" class="work-card" rel="noopener">
        <img :src="`/assets/img/${card.img}.png`" :alt="card.alt" class="thumbnail">
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
const cards: Array<{ title: string; type: string; to: string; img: string; alt: string }> = [
  {
    title: 'PartnerSuccess',
    type: 'Web,UI',
    to: 'https://partnersuccess.jp/',
    img: 'partnersuccess',
    alt: 'thumbnail'
  },
  {
    title: 'AllianceHack',
    type: 'Web,Banner,Logo',
    to: 'https://partnersuccess.jp/media',
    img: 'alliancehack',
    alt: 'thumbnail'
  },
  {
    title: '双日ジェクト',
    type: 'Web',
    to: 'https://www.jectcorp.com/',
    img: 'sojitz-ject',
    alt: 'thumbnail'
  },
  {
    title: 'OOUI workout',
    type: 'Private Work',
    to: 'https://note.com/kazhto43/m/m25736918d591',
    img: 'ooui-workout',
    alt: 'thumbnail'
  },
  {
    title: 'WireFrame Template',
    type: 'Private Work',
    to: 'https://www.figma.com/community/file/1153318655827378317',
    img: 'wf-template',
    alt: 'thumbnail'
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
  margin: 120px 16px 160px 16px;
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
    margin: 0px 16px 120px 16px;
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
    width: 90%;
  }
}
</style>