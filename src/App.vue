<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $background;
  line-height: 1.35;

  a:hover,
  a:visited {
    text-decoration: none;
    color: initial;
  }
}
</style>
