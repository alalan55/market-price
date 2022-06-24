<template>
  <div class="resume">
    <div class="title">
      <span>Resumo</span>
    </div>
    <div class="content">
      <ProductsListResume />
    </div>
  </div>
</template>

<script setup>
import ProductsListResume from "@/components/organisms/ProducsListResume.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.resume {
  padding: $padding-1 $padding-1-5;

  .title {
    span {
      font-weight: 800;
      font-size: 1.3em;
      color: $pink-1;
    }
  }

  .content {
    border: 2px solid red;
    margin: .5rem 0 0 ;
  }
}
</style>
