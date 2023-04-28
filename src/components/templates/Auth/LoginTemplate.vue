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
        <MpInput placeholder="📧 E-mail" class="inpt" />

        <MpInput placeholder="🔒 Senha" type="password" :show-eyes="true" class="inpt" />
      </form>
    </div>
    <div class="login--actions">
      <MpButton title="Entrar" />

      <span>
        Não tem uma conta? <router-link to="/auth/register">clique aqui</router-link> e
        registre-se!
      </span>
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
      .inpt {
        margin-bottom: $space-1-5;
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
