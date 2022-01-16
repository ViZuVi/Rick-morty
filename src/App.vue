<template>
  <div class="app">
    <AppHeader />
    <router-view :key="$route.fullPath"> </router-view>
  </div>
</template>

<script>
import AppHeader from "./ui/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover,
button:hover {
  opacity: 0.7;
}

a:active,
button:hover {
  opacity: 0.5;
}

body {
  min-width: 320px;
  font-size: 17px;
  line-height: 30px;
  font-family: "Open Sans", "Arial", sans-serif;
  color: #000000;
  font-style: normal;
  margin: 0;
  padding: 0;

  background-color: #e6ebd0;
}

img {
  max-width: 100%;
  height: auto;
}
</style>

