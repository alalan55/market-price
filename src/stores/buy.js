import { defineStore, acceptHMRUpdate } from "pinia";
import { toBigger } from "../utils/formatters";

export const useBuyStore = defineStore({
  id: "buy",
  state: () => ({
    cart: [],
    productToUpdate: null,
  }),
  actions: {
    BUY_PRODUCT(product) {
      this.cart.push(product);
    },
    CLEAN_CART() {
      this.cart = [];
    },
    DELETE_PRODUCT(product) {
      const productIndex = this.cart.findIndex(
        (data) => data.id === product.id
      );
      this.cart.splice(productIndex, 1);
    },
    UPDATE_PRODUCT(product) {
      const productIndex = this.cart.findIndex(
        (data) => data.id === product.id
      );
      this.cart[productIndex] = product;
    },
    SET_PRODUCT_TO_UPDATE(product) {
      this.productToUpdate = product;
    },
    RESET_PRODUCT_TO_UPDATE() {
      this.productToUpdate = null;
    },
  },

  getters: {
    $cartProducts: (state) => toBigger(state.cart, 'title'),
    $productToUpdate: (state) => state.productToUpdate,
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
