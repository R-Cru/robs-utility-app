<template>
  <div class="input_box">{{ userInput }}</div>
  <div class="container">
    <button
      v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]"
      @click="handleClick(num)"
      class="button"
    >
      {{ num }}
    </button>
    <button
      v-for="num in ['+', '-']"
      @click="handleOperation(num)"
      class="button"
    >
      {{ num }}
    </button>
    <button
      v-for="num in ['Calc', 'Clear']"
      @click="handleCommand(num)"
      class="button"
    >
      {{ num }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
    };
  },
  props: {
    onButtonClick: {
      typeof: Function,
      required: true,
    },
    onOperationChoice: {
      typeof: Function,
      required: true,
    },
    onClear: {
      typeof: Function,
      required: true,
    },
    onEnter: {
      typeof: Function,
      required: true,
    },
  },
  methods: {
    handleClick(num) {
      this.userInput += num;
      this.onButtonClick(num);
    },
    handleOperation(num) {
      this.userInput += num;
      this.onOperationChoice(num);
    },
    handleCommand(num) {
      if (num === "Clear") {
        this.onClear();
        this.userInput = "";
      }
      if (num === "Calc") {
        this.userInput = this.onEnter();
      }
    },
  },
};
</script>

<style scoped>
.input_box {
  margin: 36px;
  padding: 10px;
  height: 30px;
  background-color: antiquewhite;
  font-weight: 700;
  font-size: 25px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.button {
  flex: 0 0 26%;
  margin: 10px;
  font-weight: 500;
  font-size: 20px;
}
</style>
