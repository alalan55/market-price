import { defineStore, acceptHMRUpdate } from "pinia";
import http from "@/services/axios";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async LOGIN(user) {
      try {
        const { data } = await http.post("auth/login", user);

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.content));

        this.user = data.user;
        this.token = data.token;

        return { message: "", isOk: true };
      } catch (error) {
        return {
          message: error?.response?.data?.detail
            ? error.response.data.detail
            : "Error ao realizar login",
          isOk: false,
        };
      }
    },
  },
  getters: {
    $user: (state) => state.user || JSON.parse(localStorage.getItem("user")),
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
