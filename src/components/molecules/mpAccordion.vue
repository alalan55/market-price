<script setup>
import { ref } from "vue";

const showBody = ref(false);
</script>

<template>
  <div class="acc">
    <div class="acc__header">
      <div class="left"><span>Some title here</span></div>
      <div class="right">
        <figure @click="showBody = !showBody">
          <img :src="showBody ? '/imgs/chevron-up.svg' : '/imgs/chevron-down.svg'" />
        </figure>
      </div>
    </div>
    <div v-if="showBody" class="acc__body">corpo aqui</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.acc {
  color: $light-aqua-2;
  padding: 0.5rem 0;
  border-bottom: 1px solid;

  &__header {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;

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

    .left {
      span {
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }

  &__body {
    padding: 1rem 0.2rem;
  }
}
</style>
