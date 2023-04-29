<script setup>
import { ref, reactive, computed } from "vue";
// import {Field, Form } from 'vee-validate'
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
// import {} from '@vuelida'
import MpButton from "../../atoms/mpButton2.vue";
import MpInput from "../../atoms/mpInput.vue";

const user = reactive({
  name: "",
  email: "",
  password: "",
  profile_pic: "",
});

const confirmationPassword = ref("");
const loadTest = ref(false);

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});

const v$ = useVuelidate(rules, user);

// const toggleLoading = () => {
//   loadTest.value = true;
//   setTimeout(() => {
//     loadTest.value = false;
//   }, 5000);
// };

const submitForm = () => {
  v$.value.$validate();

  if (v$.value.$error) {
    console.log("tem erros");
    console.log(v$.value.$errors);
  } else {
    console.log("não tem erross");
  }
};
</script>

<template>
  <div class="register">
    <div class="register__header">
      <span>Insira as informações abaixo para criar seu cadastro 😀</span>
    </div>
    <div class="register__form">
      <form>
        <MpInput
          v-model="user.name"
          placeholder="🙋 Nome"
          class="inpt"
          :validator="v$"
          :rules="['name']"
        />

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
          class="inpt"
          :validator="v$"
          :min-length-camp="6"
          :rules="['password']"
        />

        <MpInput
          v-model="confirmationPassword"
          placeholder="🔒 Confirmação de senha"
          class="inpt"
        />
      </form>
    </div>
    <div class="register--actions">
      <MpButton title="Cadastrar" :loading="loadTest" @click="submitForm" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.register {
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
        margin-bottom: $space-1;
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
