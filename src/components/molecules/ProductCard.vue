<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <div class="product-card__title">
        <span>{{ props.info.title }}</span>
      </div>

      <div class="product-card__wrapper--actions">
        <figure @click="openAccordion">
          <img src="/imgs/chevron-down.svg" alt="Abrir" v-if="!isOpen" />
          <img src="/imgs/chevron-up.svg" alt="Fechar" v-else />
        </figure>
      </div>
    </div>

    <div class="product-card__accordion" v-show="isOpen">
      <div class="product-card__accordion__info">
        <div>
          <span class="info__texts"
            >Quantidade: <strong>{{ props.info.quantity }}</strong></span
          >
        </div>
        <div>
          <span class="info__texts"
            >Valor Unitário:
            <strong>{{ numberToLocal(props.info.value) }}</strong></span
          >
        </div>
        <div>
          <span class="info__texts"
            >Total: <strong>{{ total }}</strong></span
          >
        </div>
      </div>
      <div class="product-card__accordion__content--action">
        <mp-button title="Atualizar" @event="$emit('action', props.info)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { numberToLocal } from "@/utils/formatters";
import mpButton from "@/components/atoms/mpButton.vue";

const props = defineProps({ info: Object });

const isOpen = ref(false);

const total = computed(() => {
  let tot = props.info.value * props.info.quantity;
  return numberToLocal(tot);
});

const openAccordion = () => {
  isOpen.value == true ? (isOpen.value = false) : (isOpen.value = true);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.product-card {
  &__wrapper {
    padding: $space-1 $space-0-5;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.04);
    box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.04);
    position: relative;
    z-index: 100;

    .product-card__title {
      span {
        font-weight: 700;
        font-size: 1.1em;
      }
    }

    .product-card__wrapper--actions {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      padding: 0 $space-0-5;

      figure {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
      }
    }
  }
  &__accordion {
    margin-top: -5% !important;
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    background: white;
    border-radius: 5px;
    padding: $space-1-5 $space-0-5 $space-1;

    &__info {
      & > div {
        margin: 0 0 0.8rem;
        .info__texts {
          font-size: 0.85em;
          font-weight: 500;
          strong {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
