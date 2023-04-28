<script setup>
import { ref } from "vue";
// import {Field, Form } from 'vee-validate'
import MpButton from "../../atoms/mpButton2.vue";
import MpInput from "../../atoms/mpInput.vue";

const user = ref({
  name: "",
  email: "",
  password: "",
  profile_pic: "",
});
const confirmationPassword = ref("");
const loadTest = ref(false);
const toggleLoading = () =>{
  loadTest.value = true
  setTimeout(() => {
    loadTest.value = false
  }, 5000)
}
</script>

<template>
  <div class="register">
    <div class="register__header">
      <span>Insira as informações abaixo para criar seu cadastro 😀</span>
    </div>
    <div class="register__form">
      <form>
        <MpInput v-model="user.name" placeholder="🙋 Nome" class="inpt" />

        <MpInput v-model="user.email" placeholder="📧 E-mail" class="inpt" />

        <MpInput v-model="user.password" placeholder="🔒 Senha" class="inpt" />

        <MpInput
          v-model="confirmationPassword"
          placeholder="🔒 Confirmação de senha"
          class="inpt"
        />
      </form>
    </div>
    <div class="register--actions">
      <MpButton title="Cadastrar" :loading="loadTest" @click="toggleLoading"/>
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
