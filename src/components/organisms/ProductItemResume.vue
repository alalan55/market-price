<template>
  <div class="item">
    <div class="title"><span><strong>Laranja</strong></span></div>
    <div class="price"><span>R$ 5,90</span></div>
    <div class="qtd"><span>3</span></div>
    <div class="total">R$30,00</div>
    <div class="action">
      <img src="/imgs/trash.svg" alt="Botão de apagar" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.item {
  padding: $padding-05;
  border: 1px solid;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    span{
        font-size: .9em;
    }
  }
  .action{
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img{
        width: 90%;
        height: 90%;
        object-fit: cover;
    }
  }
}
</style>
