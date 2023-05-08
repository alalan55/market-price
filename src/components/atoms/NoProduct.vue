<template>
  <div class="empty-message">
    <span> Nenhum produto adicionado ainda.🙂</span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";
.empty-message {
  text-align: center;
  width: 100%;
   padding: $space-2 0;
  span {
    font-size: 1.1em;
    font-weight: 700;
    color: $dark-aqua-1;
  }
}
</style>
