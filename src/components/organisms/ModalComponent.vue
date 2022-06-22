<template>
  <teleport to="#modal">
    <div class="modal-bg">
      <div class="modal-container">
        <form>
          <div class="row">
            <label
              >Produto
              <input type="text" />
            </label>
          </div>
          <div class="row">
            <label
              >Quantidade
              <input type="number" />
            </label>
            <label
              >Valor
              <input type="number" />
            </label>
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script setup>
const emits = defineEmits(["close"]);
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
    padding: $padding-1-5;
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
    }
  }
}
</style>
