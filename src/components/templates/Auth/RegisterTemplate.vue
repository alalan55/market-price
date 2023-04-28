<script setup>
import MpButton from "../../atoms/mpButton2.vue";
import MpInput from "../../atoms/mpInput.vue";
</script>

<template>
  <div class="login">
    <div class="login__header">
      <span>Insira as informações abaixo para criar seu cadastro 😀</span>
    </div>
    <div class="login__form">
      <form>
        <div>
          <MpInput placeholder="🙋 Nome" />
        </div>
        <div>
          <MpInput placeholder="📧 E-mail" />
        </div>
        <div>
          <MpInput placeholder="🔒 Senha" />
        </div>
        <div>
          <MpInput placeholder="🔒 Confirmação de senha" />
        </div>
      </form>
    </div>
    <div class="login--actions">
      <MpButton title="Cadastrar" />
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

  &--actions {
    span {
      margin-top: $space-1;
      display: block;
      text-align: center;
      a {
        font-weight: 600;
        text-decoration: none;
        color: $pink-4;
      }
    }
  }
}
</style>
