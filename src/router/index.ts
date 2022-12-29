import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UUIDV1View from "../views/UUIDV1View.vue";
import UUIDV3View from "../views/UUIDV3View.vue";
import UUIDV4View from "../views/UUIDV4View.vue";
import UUIDV5View from "../views/UUIDV5View.vue";
import NilUUIDView from "../views/NilUUIDView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/v1",
      name: "uuidv1",
      component: UUIDV1View,
    },
    {
      path: "/v3",
      name: "uuidv3",
      component: UUIDV3View,
    },
    {
      path: "/v4",
      name: "uuidv4",
      component: UUIDV4View,
    },
    {
      path: "/v5",
      name: "uuidv5",
      component: UUIDV5View,
    },
    {
      path: "/nil",
      name: "nil-uuid",
      component: NilUUIDView,
    },
  ],
});

export default router;
