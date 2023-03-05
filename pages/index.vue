<template>
  <div>
    <Header />
    <div class="whole-wrapper">
      <ProfileCard />
      <WorkCard />
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.whole-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 56px;
}

@media (max-width: 960px) {
  .whole-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 56px;
  }
}

@media (max-width: 480px) {
  .whole-wrapper {
    gap: 16px;
  }
}
</style>