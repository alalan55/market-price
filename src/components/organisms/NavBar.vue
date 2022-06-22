<template>
  <nav class="navBar">
    <div class="logo">
      <span>Market Price.</span>
    </div>
    <div class="cart">
      <!-- <img scr="/imgs/cart.svg" alt="Imagem de carrinho"/> -->
    </div>
  </nav>
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

.navBar {
  height: $navbarHeight;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $padding-1-5;

  .logo {
    span {
      font-weight: 800;
      font-size: 1.2em;
      color: $pink-1;
    }
  }

  .cart {
    border: 2px solid red;
    width: 50px;
  }
}
</style>
