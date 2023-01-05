import { defineStore } from "pinia";

export const useVisitStore = defineStore("visits", {
  state: () => ({
    home: 0,
    calculator: 0,
    date: 0,
    jokes: 0
  }),
  actions: {
    incrementCalculatorViews() {
      this.calculator++;
    },
    incrementDateViews() {
      this.date++;
    },
    incrementHomeViews() {
      this.home++;
    },
    incrementJokesViews() {
      this.jokes++;
    },
    reset() {
      this.calculator = 0;
      this.date = 0;
      this.home = 0;
      this.jokes = 0;
    },
  },
});
