<script setup>
import { RouterView } from "vue-router";
import NavBarVue from "@/components/organisms/NavBar.vue";
</script>

<template>
  <div class="wrapper">
    <NavBarVue />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.wrapper {
  background: $bg;

  .content {
    height: calc(100vh - $navbarHeight);
  }
}
</style>
