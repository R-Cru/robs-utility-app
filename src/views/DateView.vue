<template>
  <div class="style">
    {{ getDate() }}
  </div>
</template>

<script>
import { useVisitStore } from "../stores/visits";

export default {
  mounted() {
    const store = useVisitStore();
    store.incrementDateViews();
  },
  methods: {
    getDate() {
      return new Date().toDateString();
    },
  },
};
</script>

<style scoped>
.style {
  line-height: 400px;
  text-align: center;
  font-weight: 600;
}
</style>
