<script setup>
import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
  showEyes: { type: Boolean, default: false },
  size: { type: String, default: "normal" },
  modelValue: { type: String },
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

const getSize = (s) => {
  let size = "";

  switch (s) {
    case "normal":
      size = "45px";
      break;
    case "small":
      size = "35px";
      break;
  }

  return size;
};
</script>

<template>
  <div class="inpt" :style="{ height: getSize(props.size) }">
    <input
      :type="typeIntp"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

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
      width: 25px;
      height: 25px;
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
