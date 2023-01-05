<script>
import { onMounted } from "vue";
import { useVisitStore } from "../stores/visits";
import Keyboard from "../components/Keyboard.vue";
import { useCalculator } from "../utilities/calculator";

const calculator = useCalculator();

export default {
  setup() {
    onMounted(() => {
      const store = useVisitStore();
      store.incrementCalculatorViews();
    });
  },
  data: () => {
    return {
      userInput: "",
      result: "",
    };
  },
  components: {
    Keyboard,
  },
  methods: {
    handleButtonClick(num) {
      this.userInput += num;
    },
    handleOpChoice(num) {
      calculator.setInput1(this.userInput);
      this.userInput = "";
      calculator.setOperation(num);
    },
    handleClear() {
      this.userInput = "";
      calculator.reset();
    },
    handleEnter() {
      calculator.setInput2(this.userInput);
      this.userInput = "";
      const res = calculator.calculate();
      return res;
    },
  },
};
</script>

<template>
  <div class="pad">
    <Keyboard
      :onButtonClick="handleButtonClick"
      :onOperationChoice="handleOpChoice"
      :onClear="handleClear"
      :onEnter="handleEnter"
    />
  </div>
</template>

<style scoped>
.pad {
  margin-top: 60px;
}
</style>
