<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBarVue from "./components/ornagisms/NavBar.vue";
</script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="wrapper">
  <NavBarVue />

  <div class="content">
    <RouterView />
  </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.wrapper{
  background: $bg;

  .content {
    // border: 2px solid blue;
    height: calc(100vh - $navbarHeight);
  }
}

</style>
