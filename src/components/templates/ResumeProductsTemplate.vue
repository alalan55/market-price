<template>
  <div class="resume">
    <div class="title">
      <span>Resumo</span>
    </div>
    <div class="content">
      <ProductsListResume />
    </div>
    <TButton title="Limpar carrinho" v-if="hasProducts" @event="cleanCart" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import ProductsListResume from "@/components/organisms/ProducsListResume.vue";
import TButton from "@/components/T/TButton.vue";
import { useBuyStore } from "@/stores/buy";

const useStore = useBuyStore();
const hasProducts = computed(() => useStore.$cartProducts.length);
const cleanCart = useStore.CLEAN_CART;
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.resume {
  padding: $padding-1 $padding-1-5;

  .title {
    span {
      font-weight: 800;
      font-size: 1.3em;
      color: $pink-1;
    }
  }

  .content {
    border: 2px solid red;
    margin: 0.5rem 0 0.5rem;
  }
}
</style>
