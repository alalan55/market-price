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

  <section class="no-content" v-else>
    <span> Nenhum produdo adicionado ainda🙂</span>
  </section>
</template>

<script setup>
import { computed } from "vue";
import ProductsListResume from "@/components/organisms/ProducsListResume.vue";
import mpButton from "@/components/atoms/mpButton.vue";
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

.no-content {
  text-align: center;
  padding: $space-2 0;

  span {
    font-weight: 600;
    color: $pink-1;
    font-size: 1.1em;
  }
}
</style>
