<template>
  <div class="profile-card">
    <img class="profile-icon" alt="profile-icon" src="../assets/img/profileicon.JPG">
    <h1>Kazuhito Kimura</h1>
    <h2>Designer</h2>
    <ul>
      <li>
        <SocialBtn />
      </li>
      <li>
        <SocialBtn />
      </li>
      <li>
        <SocialBtn />
      </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>
h1 {
  margin-top: 32px;
  font-family: $EN-sans-serif;
  text-align: center;
  color: $text-main;
}

h2 {
  margin-top: 24px;
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
}

.profile-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
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
  border-radius: 82px;
}
</style>