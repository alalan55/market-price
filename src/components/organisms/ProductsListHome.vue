<template>
  <ul class="products-list" v-if="products.length">
    <li v-for="product in products" :key="product.id">
      <ProductCard :info="product" @action="action" />
    </li>
  </ul>
  <NoProduct v-else />
</template>

<script setup>
import { ref } from "vue";
import { useBuyStore } from "@/stores/buy";
import ProductCard from "@/components/molecules/ProductCard.vue";
import NoProduct from "@/components/atoms/NoProduct.vue";
const emit = defineEmits(["action"]);

const products = ref([]);
const buyStore = useBuyStore();
products.value = buyStore.$cartProducts;

const action = (value) => {
  emit("action", value);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.products-list {
  height: 65vh;
  overflow-y: auto;
  padding: 0;
  padding: 0.5rem;
  border-radius: 5px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

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
