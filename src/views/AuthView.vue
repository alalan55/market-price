<script setup>
import { RouterView } from "vue-router";
import Logo from "../components/atoms/logo.vue";
// import AuthTemplateVue from "../components/templates/AuthTemplate.vue";
</script>
<template>
  <main class="auth">
    <div class="auth__header">
      <Logo class="auth__header__icon-logo" />
    </div>
    <div class="auth__body">
      <RouterView />
      <!-- <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView> -->
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.auth {
  padding: $space-1-5;
  border-radius: 15px;
  background: white;
  width: 600px;
  -webkit-box-shadow: -5px 6px 47px -20px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: -5px 6px 47px -20px rgba(0, 0, 0, 0.45);
  box-shadow: -5px 6px 47px -20px rgba(0, 0, 0, 0.35);

  & > div {
    padding: $space-1 0;
  }

  &__header {
    position: relative;
    &__icon-logo {
      position: absolute;
      top: -20px;
      left: 50%;

      transform: translate(-50%, -50%);
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    min-width: 100%;
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
