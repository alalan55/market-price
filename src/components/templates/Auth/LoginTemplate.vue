<script setup>
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import MpButton from "../../atoms/mpButton2.vue";
import MpInput from "../../atoms/mpInput.vue";

const user = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  };
});

const v$ = useVuelidate(rules, user);

const submitForm = () => {
  v$.value.$validate();

  if (v$.value.$error) {
    console.log("Tem Erros no forumlário", v$.value.$errors);
  } else {
    console.log("Formulário OK");
  }
};
</script>

<template>
  <div class="login">
    <div class="login__header">
      <span>Insira as suas informações abaixo para fazer login 😀</span>
    </div>
    <div class="login__form">
      <form @submit.prevent>
        <MpInput
          v-model="user.email"
          placeholder="📧 E-mail"
          class="inpt"
          :validator="v$"
          :rules="['email']"
        />

        <MpInput
          v-model="user.password"
          placeholder="🔒 Senha"
          type="password"
          :validator="v$"
          :rules="['password']"
          :show-eyes="true"
          class="inpt"
        />
      </form>
    </div>
    <div class="login--actions">
      <MpButton title="Entrar" @click="submitForm" />

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
