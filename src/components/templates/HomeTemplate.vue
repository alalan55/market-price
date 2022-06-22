<template>
  <div class="home-template">
    <ButtonAddProduct />
  </div>
</template>

<script setup>
import ButtonAddProduct from "@/components/atoms/ButtonAddProduct.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.home-template {
  width: 100%;
  height: 100%;
  padding: $padding-1 $padding-1-5;
}
</style>
