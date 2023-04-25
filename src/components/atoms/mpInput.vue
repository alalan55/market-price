<script setup>
const props = defineProps({
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
});
</script>

<template>
  <div class="inpt">
    <input :type="props.type" :placeholder="props.placeholder" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.inpt {
  width: 100%;
  height: 45px;
  input {
    width: 100%;
    height: 100%;
    padding: $space-0-5;
    border-radius: 10px;
    border: 1px solid $pink-4;

    &:focus {
      outline: none;
    }
  }
}
</style>
