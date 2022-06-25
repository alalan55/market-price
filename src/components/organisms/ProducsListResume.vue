<template>
  <div class="list-resume">
    <div class="list">
      <ProductItemResume class="item" />
      <ProductItemResume class="item" />
      <ProductItemResume class="item" />
      <ProductItemResume class="item" />
      <ProductItemResume class="item" />
      <ProductItemResume class="item" />
      <ProductItemResume class="item" />
      <ProductItemResume class="item" />
    </div>

    <div class="bottom">
      <span>
        Total: <strong>{{ numberToLocal(useStore.$totalProductsValue) }}</strong></span
      >
    </div>
  </div>
</template>

<script setup>
import { numberToLocal } from "@/utils/formatters";
import { useBuyStore } from "@/stores/buy";
import ProductItemResume from "@/components/organisms/ProductItemResume.vue";

const useStore = useBuyStore();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

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
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 2.6rem;
      }
    }
  }

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: $padding-05;
    text-align: right;
    background: $pink-1;
    //  background-color: rgba(0, 0, 0, 0.9);
    // -webkit-backdrop-filter: blur(15px);
    // backdrop-filter: blur(15px);

    span {
      font-size: 1.2em;
    }
  }
}
</style>
