<script setup>
import { ref } from "vue";
import { useBuyStore } from "@/stores/buy";
import mpButton from "@/components/atoms/mpButton.vue";
import Modal from "@/components/molecules/ModalComponent.vue";
import ProductList from "@/components/organisms/ProductsListHome.vue";
import CardAccountant from "../atoms/mpCardAccountant.vue";

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
      <CardAccountant class="item" />
      <CardAccountant class="item" />
      <CardAccountant class="item" />
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
    .item{
      flex: 1 1 400px;
    }
  }

  &__list {
    margin: 2rem 0;
  }
}
</style>
