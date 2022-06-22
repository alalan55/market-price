<template>
  <teleport to="#modal">
    <div class="modal-bg">
      <div class="modal-container">
        <div class="btn-close" @click="$emit('close')">
           <img src="/imgs/close.svg" alt="" />
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
          <div class="btn-save">
            <button @click.prevent="saveProduct">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
const emits = defineEmits(["close"]);

const productInfo = ref({});

const saveProduct = () => {
  const id = new Date();
  console.log({ ...productInfo.value, id: id });
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
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
  padding: $padding-1-5;

  .modal-container {
    max-width: 100%;
    position: relative;
    background: white;
    padding: $padding-2;
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
          padding-bottom: $padding-05;
          color: $pink-2;

          input {
            margin-top: $padding-05;
            width: 100%;
            padding: $padding-05;
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
          padding: $padding-1;
          border-radius: 5px;
          font-weight: 600;
          color: white;
          background: $pink-1;
          border: none;
        }
      }
    }

    .btn-close{
      position: absolute;
      right: 25px;
      top: 20px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img{
        width: 90%;
        height: 90%;
        object-fit: contain;
        image-rendering: pixelated;
      }
    }
  }
}
</style>
