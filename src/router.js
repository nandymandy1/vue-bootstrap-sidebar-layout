import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/home.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboardHome",
      redirect: "/dashboard/link-1",
      component: () => import("./views/Dashboard/index.vue"),
      children: [
        {
          path: "link-1",
          name: "link-1",
          component: () => import("./views/Dashboard/Link-1.vue"),
        },
        {
          path: "link-2",
          name: "link-2",
          component: () => import("./views/Dashboard/Link-2.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "Authentication",
      redirect: "/auth/login",
      component: () => import("./views/Auth/index.vue"),
      children: [
        {
          path: "login",
          name: "Login",
          component: () => import("./views/Auth/Login.vue"),
        },
        {
          path: "register",
          name: "Register",
          component: () => import("./views/Auth/Register.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  NProgress.set(0.1);
  next();
});

router.afterEach(() => {
  setTimeout(() => NProgress.done(), 500);
});

export default router;
