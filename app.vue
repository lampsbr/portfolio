<template>
  <div class="main">
    <TheHeader></TheHeader>
    <NuxtPage />
  </div>
</template>
<style>
body{
  margin: 0;
}

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