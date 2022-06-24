<template>
  <div class="list-resume">
    <div class="bottom">
      <span>
        Total: <strong>{{ numberToLocal(useStore.$totalProductsValue) }}</strong></span
      >
    </div>
  </div>
</template>

<script setup>
import { numberToLocal } from "@/utils/formatters";
import { useBuyStore } from "@/stores/buy";

const useStore = useBuyStore();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.list-resume {
  height: 65vh;
  position: relative;

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: $padding-05;
    text-align: right;
    //  background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    span {
      font-size: 1.2em;
    }
  }
}
</style>
