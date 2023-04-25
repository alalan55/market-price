<script setup>
import { ref } from "vue";
const props = defineProps({
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
  showEyes: { type: Boolean, default: false },
});

const eyePath = ref("/imgs/eye-off-icon.svg");
const typeIntp = ref(props.type);

const toggleInputType = () => {
  if (eyePath.value == "/imgs/eye-icon.svg") {
    eyePath.value = "/imgs/eye-off-icon.svg";

    typeIntp.value = props.type;
  } else {
    eyePath.value = "/imgs/eye-icon.svg";
    typeIntp.value = "text";
  }
};
</script>

<template>
  <div class="inpt">
    <input :type="typeIntp" :placeholder="props.placeholder" />

    <!-- PASSWORD-EYE -->
    <div v-if="props.showEyes" class="inpt__eyes">
      <figure @click="toggleInputType">
        <img :src="eyePath" />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.inpt {
  width: 100%;
  height: 45px;
  position: relative;
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

  &__eyes {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
      width: 30px;
      height: 30px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
