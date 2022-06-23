<template>
  <ul class="products-list" v-if="products.length">
    <li v-for="product in products" :key="product.id">
      <ProductCard :info="product" />
    </li>
  </ul>

  <div class="empty-message" v-else>
    <span> Nenhum produto adicionado! </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBuyStore } from "@/stores/buy";
import ProductCard from "@/components/atoms/ProductCard.vue";

const products = ref([]);
const buyStore = useBuyStore();

products.value = buyStore.$cartProducts;
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

.empty-message {
  text-align: center;
  span {
    font-size: 1.1em;
    font-weight: 700;
    color: $pink-1;
  }
}
</style>
