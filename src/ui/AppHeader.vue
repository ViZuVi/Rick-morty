<template>
  <div class="header">
    <router-link
      class="header__link"
      :class="{ active: $route.fullPath === '/' }"
      to="/"
      >To main page</router-link
    >
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  min-height: 30px;
  background-color: #3e3f38;
  color: #ffffff;
  padding: 20px;
}
.header__link.active {
  pointer-events: none;
  opacity: 0.5;
}
</style>