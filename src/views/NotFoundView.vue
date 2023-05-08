<template>
  <div class="not-found">
    <div class="not-found__messages">
      <h2 class="not-found__messages__title">Ops, Erro 404</h2>

      <span class="not-found__messages__sub-title">
        A página que você tentou acessar, não foi encontrada 🙁
      </span>
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
@import "@/assets/scss/utilities";
.not-found {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__messages {
    max-width: 80%;

    h2 {
      color: $dark-aqua-1;
      font-size: 2.5em;
      margin: $space-0-5 0;
    }

    span {
      font-weight: 600;
      font-size: 1.2em;
      color: $dark-aqua-1;
    }
  }
}
</style>
