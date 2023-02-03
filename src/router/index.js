import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";

const routes = [
    { path: '/', component: MainPage, meta: { title: "Lazap" } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router;