<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.wrapper {
  background: $bg;

  .content {
    height: calc(100vh - $navbarHeight);
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
</style>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
