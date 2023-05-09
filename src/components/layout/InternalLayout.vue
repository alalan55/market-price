<script setup>
import { RouterView } from "vue-router";
import NavBarVue from "@/components/organisms/NavBar.vue";
</script>

<template>
  <div class="wrapper">
    <NavBarVue />
    <div class="content">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>

      <!-- <RouterView /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.wrapper {
  background: $bg;

  .content {
    height: calc(100vh - $navbarHeight);
    padding: $space-1;
    max-width: 1350px;
    margin: 0 auto;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: $dark-aqua-1;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: $dark-aqua-2;
    }
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
