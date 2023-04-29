import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "./assets/scss/main.scss";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const options = {};

app.use(createPinia());
app.use(router);
app.use(Toast, options);

app.mount("#app");
