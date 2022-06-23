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
  padding: 0.5rem;
  border-radius: 5px;

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  li {
    list-style: none;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
