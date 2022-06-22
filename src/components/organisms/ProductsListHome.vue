<template>
  <ul class="products-list">
    <li>
      <ProductCard />
    </li>

    <li>
      <ProductCard />
    </li>

    <li>
      <ProductCard />
    </li>
    <li>
      <ProductCard />
    </li>
    <li>
      <ProductCard />
    </li>
    <li>
      <ProductCard />
    </li>
    <li>
      <ProductCard />
    </li>
    <li>
      <ProductCard />
    </li>
    <li>
      <ProductCard />
    </li>
    <li>
      <ProductCard />
    </li>
    <li>
      <ProductCard />
    </li>
  </ul>
</template>

<script setup>
import ProductCard from "@/components/atoms/ProductCard.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.products-list {
  // height: calc(100vw - 120px);
  //   max-height: 100%;
  height: 65vh;
  overflow-y: auto;

  padding: 0;

  li {
    list-style: none;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
