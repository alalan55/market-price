<template>
  <div class="home-template">
    <div class="button-product">
      <div class="title">
        <span>
          Adicionar produto
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.home-template {
  // border: 2px solid red;
  // min-height: 100%;
  width: 100%;
  height: 100%;
  padding: $padding-1 $padding-05;

  .button-product{
    border: 1px solid red;
    padding: $padding-1;
    border-radius: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .title{
      span{
        font-weight:600;
      }
    }
  }
}
</style>
