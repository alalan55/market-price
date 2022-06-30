<template>
  <!-- <div class="product-card" @click="$emit('action', props.info)"> -->
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
      <div class="product-card__accordion__content">
        <div class="info">
          <div>
            <span class="info__texts"
              ><strong>Quantidade:</strong> {{ props.info.quantity }}</span
            >
          </div>
          <div>
            <span class="info__texts"
              ><strong>Valor Unitário:</strong>
              {{ numberToLocal(props.info.value) }}</span
            >
          </div>
          <div>
            <span class="info__texts"><strong>Total:</strong> {{ total }}</span>
          </div>
        </div>
        <div class="product-card__accordion__content--action">
          <TButton title="Atualizar" @event="$emit('action', props.info)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { numberToLocal } from "@/utils/formatters";
import TButton from "@/components/T/TButton.vue";

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
@import "@/assets/scss/variables.scss";

.product-card {
  &__wrapper {
    padding: $padding-1 $padding-05;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.03);
    box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.03);
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
      padding: 0 $padding-05;

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
    margin: 0 auto;
    width: 95%;
    min-height: 29vh;
    border-radius: 0px 0px 5px 5px;
    position: relative;

    &__content {
      position: absolute;
      min-height: 100%;
      width: 100%;
      background: white;
      border-radius: 5px;
      top: -5px;
      padding: $padding-1-5 $padding-05 $padding-1;

      .info {
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

  @media (max-width: 300px) {
    // .title,
    // .value {
    //   span {
    //     font-size: 0.9em;
    //   }
    // }
  }
}
</style>
