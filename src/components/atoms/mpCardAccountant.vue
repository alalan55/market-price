<script setup>

</script>

<template>
  <div class="accountant">
    <div class="head">
      <span>Total Geral</span>
    </div>
    <div class="body">
      <figure>
        <img src="/imgs/dollar-icon.svg" alt="ìcone" />
      </figure>
      <h2>4.000,00</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";
.accountant {
  padding: $space-1;
  border-radius: 10px;
  background: $pink-4;
  height: 150px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .head {
    text-align: center;
    span {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.75rem;
    }
  }
  .body {
    // border: 1px solid red;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
