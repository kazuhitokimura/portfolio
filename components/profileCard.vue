<template>
  <div class="profile-card">
    <img class="profile-icon" alt="profile-icon" src="../assets/img/profileIcon.png">
    <h1>Kazuhito Kimura</h1>
    <h2>Designer</h2>
    <SocialBtn />
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
  margin-top: 16px;
  font-family: $EN-serif;
  text-align: center;
  color: $text-sub;
}

ul {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0px;
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
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  margin: 120px 16px 0px 16px;
  padding: 80px 20px;
  box-sizing: border-box;
}

.profile-icon {
  width: 164px;
  height: 164px;
  border-radius: 9999px;
}

@media (max-width: 960px) {
  .profile-card {
    width: 100%;
    padding: 80px 24px 100px 24px;
    max-width: 640px;
  }
}

@media (max-width: 480px) {
  .profile-card {
    margin: 88px 16px 32px 16px;
    width: 100%;
    padding: 40px 8px 40px 8px;
  }

  h2 {
    margin-top: 12px;
  }
}
</style>

