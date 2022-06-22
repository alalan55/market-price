<template>
  <div class="home-template">
    <ButtonAddProduct @showModal="showModal" />
    <Modal v-if="isModalOpen" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonAddProduct from "@/components/atoms/ButtonAddProduct.vue";
import Modal from "@/components/organisms/ModalComponent.vue";

const isModalOpen = ref(false);

const showModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.home-template {
  width: 100%;
  height: 100%;
  padding: $padding-1 $padding-1-5;
}
</style>
