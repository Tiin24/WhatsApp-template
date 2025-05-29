// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
import Analytics from "../pages/Analytics.vue";
import Users from "../pages/Users.vue";
import Settings from "../pages/Settings.vue";

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
        { path: "analytics", name: "analytics", component: Analytics },
        { path: "users", name: "users", component: Users },
        { path: "settings", name: "settings", component: Settings },
      ],
    },
  ],
});

export default router;
