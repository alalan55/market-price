<template>
  <section class="resume" v-if="hasProducts">
    <div class="resume__title">
      <span>Resumo</span>
    </div>
    <div class="resume__content">
      <ProductsListResume />
    </div>
    <mp-button title="Limpar carrinho" v-if="hasProducts" @event="cleanCart" />
  </section>
  <NoProduct v-else />
</template>

<script setup>
import { computed } from "vue";
import ProductsListResume from "@/components/organisms/ProducsListResume.vue";
import mpButton from "@/components/atoms/mpButton.vue";
import NoProduct from "@/components/atoms/NoProduct.vue";
import { useBuyStore } from "@/stores/buy";

const useStore = useBuyStore();
const hasProducts = computed(() => useStore.$cartProducts.length);
const cleanCart = useStore.CLEAN_CART;
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.resume {
  padding: $space-1 $space-1-5;

  &__title {
    span {
      font-weight: 800;
      font-size: 1.3em;
      color: $pink-1;
    }
  }

  &__content {
    margin: 0.5rem 0 0.5rem;
  }
}
</style>
