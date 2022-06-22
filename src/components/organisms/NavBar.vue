<template>
  <nav class="navBar">
    <div class="logo" @click="goHome">
      <span>Market Price.</span>
    </div>
    <div class="cart" @click="goResume">
      <img src="/imgs/cart.svg" alt="" />
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goHome = () => router.push("/");
const goResume = () => router.push("/resume");
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.navBar {
  height: $navbarHeight;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $padding-1-5;

  .logo {
    span {
      font-weight: 800;
      font-size: 1.2em;
      color: $pink-1;
    }
  }

  .cart {
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
