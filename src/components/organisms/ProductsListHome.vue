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
  height: 65vh;
  overflow-y: auto;
  padding: 0;
  background: $pink-3;
  padding: .5rem;
  border-radius: 5px;

  li {
    list-style: none;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
