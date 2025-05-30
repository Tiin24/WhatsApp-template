// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Dashboard from "../pages/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/dashboard", // Redirige directamente al dashboard
    },
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "dashboard", name: "dashboard", component: Dashboard },
      ],
    },
  ],
});

export default router;
