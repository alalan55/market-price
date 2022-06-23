<template>
  <div class="product-card">
    <div class="title">
      <span>Arroz</span>
    </div>
    <div class="value">
      <span> R$5.50 </span>

      <div class="unit">
        <span>Unidade</span>
      </div>
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    span {
      font-weight: 700;
      font-size: 1.4em;
    }
  }
  .value {
    position: relative;
    span {
      font-weight: 600;
      font-size: 1.2em;
    }

    .unit {
      position: absolute;
      top: -14.5px;
      right: 0;

      span {
        font-size: 0.55em;
      }
    }
  }
}
</style>
