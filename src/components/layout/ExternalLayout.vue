<script setup>
import { RouterView } from "vue-router";
import NavBarVue from "@/components/organisms/NavBar.vue";
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.wrapper {
  background: $bg;
  height: 100vh;

  //   .content {
  //     height: calc(100vh - $navbarHeight);
  //   }
}
</style>
