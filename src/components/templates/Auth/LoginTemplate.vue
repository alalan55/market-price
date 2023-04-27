<script setup>
import MpButton from "../../atoms/mpButton2.vue";
import MpInput from "../../atoms/mpInput.vue";
</script>

<template>
  <div class="login">
    <div class="login__header">
      <span>Insira as suas informações abaixo para fazer login 😀</span>
    </div>
    <div class="login__form">
      <form>
        <div>
          <MpInput placeholder="📧 E-mail"  />
        </div>
        <div>
          <MpInput placeholder="🔒 Senha" type="password" :show-eyes="true"  />
        </div>
      </form>
    </div>
    <div class="login__actions">
      <MpButton title="Entrar" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.login {
  display: flex;
  flex-direction: column;
  gap: $space-1;

  &__header {
    text-align: center;
    span {
      font-size: 1.05rem;
    }
  }

  &__form {
    form {
      div {
        margin-bottom: $space-1-5;
        // &:not(:last-child) {
        //   margin-bottom: $space-1-5;
        // }
      }
    }
  }
}
</style>
