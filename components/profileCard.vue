<template>
    <div class="profile-card">
        <h1>Kazuhito Kimura</h1>
        <h2>Designer</h2>
        <ul class="social-btn">
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
  font-family: $EN-sans-serif;
  text-align: center;
}

h2 {
  font-family: $EN-serif;
  text-align: center;
}

ul{
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0px;
  gap: 64px;
}

li {
  list-style: none;
  width: auto;
}
.profile-card {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 80px 100px 80px;
  max-width: 480px;
  border: 1px solid $border-yellow;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
}
</style>