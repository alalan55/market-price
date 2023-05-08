<template>
  <div class="item">
    <div class="item__title">
      <span class="label">Produto: </span>
      <span>
        <strong>{{ props.product.title }}</strong>
      </span>
    </div>

    <div class="item__price">
      <span class="item__price__label">Preço Unit: </span>
      <span
        ><strong>{{ numberToLocal(props.product.value) }}</strong></span
      >
    </div>

    <div class="item__qtd">
      <span class="item__qtd__label">Qtd: </span>
      <span
        ><strong>{{ props.product.quantity }}</strong></span
      >
    </div>

    <div class="item__total">
      <span class="item__total__label">Tot: </span>
      <span
        ><strong>{{ total }}</strong></span
      >
    </div>

    <div class="item--action" @click="deleteProduct(props.product)">
      <figure>
        <img src="/imgs/trash.svg" alt="Botão de apagar" />
      </figure>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { numberToLocal } from "@/utils/formatters";
import { useBuyStore } from "@/stores/buy";
const props = defineProps({
  product: { type: Object, required: true },
});

const store = useBuyStore();

const total = computed(() => {
  let tot = props.product.value * props.product.quantity;
  return numberToLocal(tot);
});

const deleteProduct = (product) => {
  store.DELETE_PRODUCT(product);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.item {
  padding: $space-1 $space-0-5;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.03);
  box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.03);
  flex-wrap: wrap;
  gap: 0.5rem;

  div {
    flex: 1 1 200px;
    span {
      font-size: 0.9em;
    }

    .item__price__label,
    .item__total__label,
    .item__qtd__label {
      font-size: 0.7em;
      font-weight: 600;
    }
  }

  &--action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    background: $dark-aqua-1;
    justify-content: center;
    border-radius: 5px;
    padding: 0.3rem;

    figure {
      width: 30px;
      height: 30px;

      img {
        width: 90%;
        height: 90%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;

    div {
      width: 100%;
      flex: 1 1 auto;
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
