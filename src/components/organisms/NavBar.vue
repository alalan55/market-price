<template>
  <nav class="navBar">
    <div class="navBar__logo" @click="goRoute(`home`)">
      <span>Market Price V2.</span>
    </div>
    <div class="navBar__cart" @click="goRoute(`resume`)">
      <img src="/imgs/cart.svg" alt="Carrinho de compras" />
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goRoute = (path) => router.push({ name: path });
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.navBar {
  height: $navbarHeight;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $space-1-5;

  &__logo {
    cursor: pointer;
    span {
      font-weight: 800;
      font-size: 1.2em;
      color: $pink-1;
    }
  }

  &__cart {
    cursor: pointer;
    width: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 90%;
      height: 90%;
      object-fit: contain;
      image-rendering: pixelated;
    }
  }
}
</style>
