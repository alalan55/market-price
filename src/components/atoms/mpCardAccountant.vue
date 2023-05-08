<script setup>
const props = defineProps({
  imgPath: { type: String, default: "" },
  price: { type: [String, Number], default: null },
  title: { type: String, default: "" },
});
</script>

<template>
  <div class="accountant">
    <div class="head">
      <span>{{ props.title }}</span>
    </div>
    <div class="body">
      <figure>
        <img :src="props.imgPath" alt="ìcone" />
      </figure>
      <h2>{{ props.price }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";
.accountant {
  padding: $space-1;
  border-radius: 10px;
  background: $dark-aqua-1;
  height: 150px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .head {
    text-align: center;
    span {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.75rem;
    }
  }
  .body {
    // border: 1px solid red;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
