<template>
  <div class="product-card" @click="$emit('action', props.info)">
    <div class="title">
      <span>{{ props.info.title }}</span>
    </div>
    <div class="value">
      <span> {{ numberToLocal(props.info.value) }}</span>

      <div class="unit">
        <span>Unidade</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { numberToLocal } from "@/utils/formatters";
const props = defineProps({ info: Object });
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.product-card {
  padding: $padding-1 $padding-05;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .title {
    span {
      font-weight: 700;
      font-size: 1.4em;
    }
  }
  .value {
    position: relative;
    span {
      font-weight: 600;
      font-size: 1.2em;
    }

    .unit {
      position: absolute;
      top: -14.5px;
      right: 0;

      span {
        font-size: 0.55em;
      }
    }
  }

  @media (max-width: 300px) {
    .title,
    .value {
      span {
        font-size: 0.9em;
      }
    }
  }
}
</style>
