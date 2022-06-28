<template>
  <div class="main">
    <TheHeader></TheHeader>
    <NuxtPage />
  </div>
</template>
<style scoped>
div.main {
  display: flex;
  flex-direction: column;
}

@media screen and (orientation: landscape) {
  div.main {
    flex-direction: row;
  }
}
</style>