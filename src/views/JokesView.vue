<template>
  <div v-if="!showAnswer && ready" class="centred">
    <p @click="toggleShow">{{ joke.question }}</p>
    <p class="small" @click="toggleShow">(click for answer)</p>
  </div>
  <div v-if="showAnswer && ready" class="centred">
    <p>{{ joke.answer }}</p>
    <button @click="loadRandomJoke">Next joke</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useVisitStore } from "../stores/visits";
import CommsService from "../utilities/comms";

const store = ref(null);

export default {
  data: () => {
    return {
      joke: {
        id: -1,
        question: "",
        answer: "",
      },
      showAnswer: false,
      ready: false,
    };
  },
  mounted() {
    store.value = useVisitStore();
    store.value.incrementJokesViews();

    this.loadRandomJoke();
  },
  methods: {
    toggleShow() {
      this.showAnswer = !this.showAnswer;
    },
    loadRandomJoke() {
      let id = 0;
      if (this.joke.id < 9) {
        id = this.joke.id + 1;
      }

      CommsService.getJokeById(id).then(({ data }) => {
        this.joke = data;
        this.showAnswer = false;
        this.ready = true;
      });
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
