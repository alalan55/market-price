<template>
  <teleport to="#modal">
    <div class="modal-bg">
      <div class="modal-container">
        <div class="btn-close" @click="close">
          <img src="/imgs/close.svg" alt="Botão de fechar" />
        </div>
        <form>
          <div class="row">
            <label
              >Produto
              <input type="text" v-model="productInfo.title" />
            </label>
          </div>
          <div class="row">
            <label
              >Quantidade
              <input type="number" v-model="productInfo.quantity" />
            </label>
            <label
              >Valor
              <input type="number" v-model="productInfo.value" />
            </label>
          </div>
          <div class="btn-save" v-if="!isEditing">
            <button @click.prevent="saveProduct">Salvar</button>
          </div>
          <div class="btn-save" v-else>
            <button @click.prevent="updatedProduct">Atualizar</button>
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { useBuyStore } from "@/stores/buy";

const emits = defineEmits(["close", "action", "update"]);
const store = useBuyStore();

const productInfo = ref({});
const isEditing = ref(false);

if (store.$productToUpdate) {
  productInfo.value = store.$productToUpdate;
  isEditing.value = true;
}

const saveProduct = () => {
  const id = new Date().getTime();
  let updatedProduct = { ...productInfo.value, id: id };
  emits("action", updatedProduct);
};

const updatedProduct = () => emits("update", productInfo.value);

const close = () => {
  emits("close");
  store.RESET_PRODUCT_TO_UPDATE();
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $space-1-5;
  z-index: 999;

  .modal-container {
    max-width: 100%;
    position: relative;
    background: white;
    padding: $space-2;
    border-radius: 5px;
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.01);
    box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.01);

    form {
      .row {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        &:not(:last-child) {
          margin: 0 0 1.5rem;
        }
        label {
          font-weight: 600;
          font-size: 1.1em;
          flex: 1 1 100px;
          display: flex;
          flex-direction: column;
          padding-bottom: $space-0-5;
          color: $pink-2;

          input {
            margin-top: $space-0-5;
            width: 100%;
            padding: $space-0-5;
            border-radius: 5px;
            border: 1px solid $pink-2;
            color: $pink-2;
            font-weight: 700;

            &:focus {
              outline: none;
            }
          }
        }
      }

      .btn-save {
        button {
          cursor: pointer;
          width: 100%;
          padding: $space-1;
          border-radius: 5px;
          font-weight: 600;
          color: white;
          background: $pink-1;
          border: none;
        }
      }
    }

    .btn-close {
      position: absolute;
      right: 25px;
      top: 20px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 90%;
        height: 90%;
        object-fit: contain;
        image-rendering: pixelated;
      }
    }
  }
}
</style>
