<template>
  <section class="home-template">
    <Modal
      v-if="isModalOpen"
      @close="closeModal"
      @action="saveProduct"
      @update="updateProduct"
    />
    <ProductList class="list" @action="setProductToUpdate" />
    <mp-button @event="showModal" title="Adicionar Produto" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useBuyStore } from "@/stores/buy";
import mpButton from "@/components/atoms/mpButton.vue";
import Modal from "@/components/molecules/ModalComponent.vue";
import ProductList from "@/components/organisms/ProductsListHome.vue";

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

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.home-template {
  width: 100%;
  height: 100%;
  padding: $padding-1 $padding-1-5;

  .list {
    margin: 2rem 0;
  }
}
</style>
