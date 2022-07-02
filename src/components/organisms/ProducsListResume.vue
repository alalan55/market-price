<template>
  <div class="list-resume">
    <div class="list">
      <ProductItemResume
        class="item"
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="bottom">
      <span>
        TOTAL:
        <strong>{{ numberToLocal(useStore.$totalProductsValue) }}</strong></span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { numberToLocal } from "@/utils/formatters";
import { useBuyStore } from "@/stores/buy";
import ProductItemResume from "@/components/molecules/ProductItemResume.vue";

const products = ref([]);

const useStore = useBuyStore();

products.value = useStore.$cartProducts;
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.list-resume {
  height: 65vh;
  position: relative;

  .list {
    overflow-y: auto;
    height: 100%;

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
    .item {
      margin-bottom: 1.3rem;
      &:last-child {
        margin-bottom: 2.6rem;
      }
    }
  }

  .bottom {
    position: absolute;
    bottom: -1px;
    width: 100%;
    padding: $space-0-5;
    text-align: right;
    background: $pink-1;
    color: white;
    height: 45px;
    //  background-color: rgba(0, 0, 0, 0.9);
    // -webkit-backdrop-filter: blur(15px);
    // backdrop-filter: blur(15px);

    span {
      font-size: 1.2em;
    }
  }
}
</style>
