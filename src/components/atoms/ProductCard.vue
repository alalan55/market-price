<template>
  <div class="product-card">
    <div class="title">
      <span>Arroz</span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.product-card {
  padding: $padding-05;
//   border: 1px solid white;
background: white;
  border-radius: 5px;

  .title {
    span {
      font-weight: 700;
      font-size: 1.4em;
    }
  }
}
</style>
