<template>
  <div class="button-product" @click="$emit('event')">
    <div class="button-product__title">
      <span> {{ props.title }} </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true, default: "Título do botão" },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.button-product {
  background: $pink-1;
  padding: $space-1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  max-width: 900px;
  margin: 0 auto;
  -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease-in-out;

  &:hover {
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.04);
    box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.04);
  }

  &__title {
    span {
      font-weight: 700;
      font-size: 1.1rem;
      color: white;
    }
  }
}
</style>
