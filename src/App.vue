<template>
  <div id="app">
    <div class="main">
      <router-view class="page"></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  .main {
    height: 100%;
    overflow: auto;
  }
}
</style>
