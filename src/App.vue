<script setup>
import { RouterView } from "vue-router";
import NavBarVue from "@/components/organisms/NavBar.vue";

// alert('verificar utilização do componente view (AuthView.vue)')
</script>


<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.wrapper {
  background: $bg;

  .content {
    height: calc(100vh - $navbarHeight);
  }
}
</style>


<template>
  <RouterView/>
  
</template>
