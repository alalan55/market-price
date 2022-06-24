import { defineStore, acceptHMRUpdate } from "pinia";

export const useBuyStore = defineStore({
  id: "buy",
  state: () => ({
    cart: [],
  }),
  actions: {
    BUY_PRODUCT(product) {
      this.cart.push(product);
      // console.log('chegou aqui', product)
    },
  },

  getters: {
    $cartProducts: (state) => state.cart,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBuyStore, import.meta.hot));
}
