import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InternalLayout from "../components/layout/InternalLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: InternalLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/resume",
          name: "resume",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/ResumeProductView.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "authIndex",
      component: () => import("../views/AuthView.vue"),
      children: [
        {
          path: "",
          name: "loginTemplate",
          component: () =>
            import("../components/templates/Auth/LoginTemplate.vue"),
        },
        {
          path: "register",
          name: "registerTemplate",
          component: () =>
            import("../components/templates/Auth/RegisterTemplate.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
