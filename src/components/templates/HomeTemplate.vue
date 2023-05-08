<script setup>
import { ref } from "vue";
import { useBuyStore } from "@/stores/buy";
import mpButton from "@/components/atoms/mpButton.vue";
import Modal from "@/components/molecules/ModalComponent.vue";
import ProductList from "@/components/organisms/ProductsListHome.vue";
import CardAccountant from "../atoms/mpCardAccountant.vue";
import Accordion from "@/components/molecules/mpAccordion.vue";

const buyStore = useBuyStore();

const isModalOpen = ref(false);

const showModal = () => (isModalOpen.value = true);

const closeModal = () => (isModalOpen.value = false);

const saveProduct = (product) => {
  buyStore.BUY_PRODUCT(product);
  closeModal();
};

const setProductToUpdate = (product) => {
  buyStore.SET_PRODUCT_TO_UPDATE(product);
  showModal();
};

const updateProduct = (product) => {
  buyStore.UPDATE_PRODUCT(product);
  buyStore.RESET_PRODUCT_TO_UPDATE();
  closeModal();
};
</script>

<template>
  <section class="home-template">
    <Modal
      v-if="isModalOpen"
      @close="closeModal"
      @action="saveProduct"
      @update="updateProduct"
    />

    <div class="home-template__accountants">
      <CardAccountant
        class="item"
        title="Total geral"
        imgPath="/imgs/dollar-icon.svg"
        price="4.000,00"
      />
      <CardAccountant
        class="item"
        title="Total mensal"
        imgPath="/imgs/dollar-icon.svg"
        price="4.000,00"
      />
      <CardAccountant
        class="item"
        title="total anual"
        imgPath="/imgs/dollar-icon.svg"
        price="4.000,00"
      />
    </div>

    <div class="home-template__resumes">
      <div class="home-template__resumes__texts">
        <h2>Resumo</h2>
        <!-- <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt ut eaque
          delectus accusantium voluptates. Saepe, eos. Quae, maxime dolore minus commodi
          facere ipsam nisi, quas modi eum cumque sit.</span
        > -->
        <Accordion v-for="item in 5" :key="item"/>
      </div>
    </div>
    <!-- <ProductList class="home-template__list" @action="setProductToUpdate" />
    <mp-button @event="showModal" title="Adicionar Produto" /> -->
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.home-template {
  width: 100%;
  height: 100%;
  // padding: $space-1 $space-1-5;

  &__accountants {
    // border: 1px solid;
    display: flex;
    align-items: center;
    gap: $space-1;
    flex-wrap: wrap;
    .item {
      flex: 1 1 400px;
    }
  }

  &__resumes {
    color: $dark-aqua-1;
    &__texts {
    }
  }

  &__list {
    margin: 2rem 0;
  }

  & > div {
    &:not(:last-child) {
      margin-bottom: $space-1;
    }
  }
}
</style>
