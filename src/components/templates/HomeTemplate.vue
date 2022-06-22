<template>
  <div class="home-template">
    <div class="button-product">
      <div class="title">
        <span> Adicionar produto </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.home-template {
  // border: 2px solid red;
  // min-height: 100%;
  width: 100%;
  height: 100%;
  padding: $padding-1 $padding-1-5;

  .button-product {
    background: white;
    padding: $padding-1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: 900px;
    margin: 0 auto;
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.01);
    box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.01);
    transition: 0.2s ease-in-out;

    &:hover {
      -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.04);
      box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.04);
    }

    .title {
      span {
        font-weight: 600;
        color: $pink-1;
      }
    }
  }
}
</style>
