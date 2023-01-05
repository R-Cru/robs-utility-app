import { createRouter, createWebHistory } from "vue-router";
import CalculatorView from "../views/CalculatorView.vue";
import HomeView from "../views/HomeView.vue";
import DateView from "../views/DateView.vue";
import StatsView from "../views/StatsView.vue";
import JokesView from "../views/JokesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/calculator",
      name: "calculator",
      component: CalculatorView,
    },
    {
      path: "/date",
      name: "date",
      component: DateView,
    },
    {
      path: "/stats",
      name: "stats",
      component: StatsView,
    },
    {
      path: "/joke",
      name: "joke",
      component: JokesView,
    },
  ],
});

export default router;
