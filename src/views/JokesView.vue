<template>
  <div v-if="!showAnswer" class="centred">
    <p @click="toggleShow">{{ joke.question }}</p>
    <p class="small" @click="toggleShow">(click for answer)</p>
  </div>
  <div v-if="showAnswer" class="centred">
    <p>{{ joke.answer }}</p>
    <button @click="loadRandomJoke">Next joke</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useVisitStore } from "../stores/visits";

const store = ref(null);

export default {
  data: () => {
    return {
      joke: {
        id: 1,
        question: "Why did the chicken cross the road?",
        answer: "To get to the other side.",
      },
      showAnswer: false,
    };
  },
  mounted() {
    store.value = useVisitStore();
    store.value.incrementJokesViews();
  },
  methods: {
    toggleShow() {
      this.showAnswer = !this.showAnswer;
    },
    loadRandomJoke() {
      this.joke = {
        id: 1,
        question: "Why did the chicken cross the road?",
        answer: "To get to the other side"
      };
      this.showAnswer = false;
    },
  },
};
</script>

<style scoped>
.centred {
  margin-top: 200px;
  text-align: center;
}

.small {
  font-size: 10px;
}
</style>
