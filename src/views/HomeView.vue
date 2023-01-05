<template>
  <p class="text">
    Please take a look around. Navigate using the buttons on left and... well,
    you've used a website before.
  </p>
</template>

<script setup>
import { useVisitStore } from "../stores/visits";
import { onMounted } from "vue";

const store = useVisitStore();

onMounted(() => {
  store.incrementHomeViews();
});
</script>

<style scoped>
.text {
  line-height: 400px;
  text-align: center;
  font-weight: 600;
}
</style>
