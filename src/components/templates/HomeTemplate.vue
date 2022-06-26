<template>
  <div class="home-template">
    <Modal
      v-if="isModalOpen"
      @close="closeModal"
      @action="saveProduct"
      @update="updateProduct"
    />
    <ProductList class="list" @action="setProductToUpdate" />
    <TButton @event="showModal" title="Adicionar Produto" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBuyStore } from "@/stores/buy";
import TButton from "@/components/T/TButton.vue";
import Modal from "@/components/organisms/ModalComponent.vue";
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
@import "@/assets/scss/variables.scss";

.home-template {
  width: 100%;
  height: 100%;
  padding: $padding-1 $padding-1-5;

  .list {
    margin: 2rem 0;
  }
}
</style>
