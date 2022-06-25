import { defineStore, acceptHMRUpdate } from "pinia";

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

  getters: {
    $cartProducts: (state) => state.cart,
    $totalProductsValue: (state) => {
      let total = 0;
      let arr = [];

      if (state.cart.length) {
        arr = [...state.cart];
        for (let item of arr) {
          total += item.quantity * item.value;
        }
      }
      return total;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBuyStore, import.meta.hot));
}
