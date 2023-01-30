<template>
  <div class="profile-card">
    <img class="profile-icon" alt="profile-icon" src="../assets/img/profileIcon.png">
    <h1>Kazuhito Kimura</h1>
    <h2>Designer</h2>
    <ul>
      <li>
        <SocialBtn img="_nuxt/assets/img/note.png" alt="note" to="https://note.com/kazhto43" />
      </li>
      <li>
        <SocialBtn img="_nuxt/assets/img/github.png" alt="github" to="https://github.com/kazuhitokimura" />
      </li>
      <li>
        <SocialBtn img="_nuxt/assets/img/Twitter.png" alt="twitter" to="https://twitter.com/kimurasu02" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
h1 {
  margin-top: 24px;
  font-family: $EN-sans-serif;
  text-align: center;
  color: $text-main;
}

h2 {
  margin-top: 20px;
  font-family: $EN-serif;
  text-align: center;
  color: $text-sub;
}

ul {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0px;
  gap: 64px;
  margin-top: 48px;
}

li {
  list-style: none;
  width: 64px;
  height: 64px;
}

.profile-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px 24px 40px 24px;
  padding: 80px 80px 100px 80px;
  width: 640px;
  border: 1px solid $border-yellow;
  background-color: $bg-white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  box-sizing: border-box;
}

.profile-icon {
  width: 164px;
  height: 164px;
  border-radius: 9999px;
}

@media (max-width: 960px) {
  .profile-card {
    margin: 16px;
    width: 100%;
    padding: 80px 24px 100px 24px;
    max-width: 640px;
  }
}

@media (max-width: 480px) {
  .profile-card {
    margin: 16px 16px 32px 16px;
    width: 100%;
    padding: 40px 20px 72px 20px;
  }

  ul {
    gap: 32px;
    flex-wrap: wrap;
  }

  li {
    width: 56px;
    height: 56px;
  }
}
</style>

