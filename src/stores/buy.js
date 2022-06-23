import { defineStore } from "pinia";

export const useBuyStore = defineStore({
  id: "buy",
  state: () => ({
    cart: [],
  }),
  actions: {
    BUY_PRODUCT(product) {
      this.cart.push(product);
    },
  },
});
