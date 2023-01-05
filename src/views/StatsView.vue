<template>
  <div class="header">Your page visits:</div>
  <div class="body">
    <p v-for="(value, title) in visits">{{ title }}: {{ value }} times</p>
    <button @click="store.reset">Reset Stats</button>
  </div>
</template>

<script setup>
import { useVisitStore } from "../stores/visits";
import { storeToRefs } from "pinia";

const store = useVisitStore();
const visits = storeToRefs(store);
</script>

<style scoped>
.header {
  height: 20%;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
}

.body {
  height: 80%;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
}
</style>
