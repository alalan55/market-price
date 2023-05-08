<script setup>
import { useBuyStore } from "@/stores/buy";
const store = useBuyStore();
</script>

<template>
  <figure>
    <img src="/imgs/cart.svg" alt="Carrinho de compras" />
    <div v-if="store.$cartProducts.length" class="number">
      <span>
        {{ store.$cartProducts.length > 10 ? `10+` : store.$cartProducts.length }}
      </span>
    </div>
  </figure>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";
figure {
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  position: relative;

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }

  .number {
    bottom: -11px;
    right: -10px;
    background: $dark-aqua-1;
    position: absolute;
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    span {
      font-size: 0.65rem;
      font-weight: 700;
    }
  }
}
</style>
