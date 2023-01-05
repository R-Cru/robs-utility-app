export function useCalculator() {
  let input1 = "";
  let input2 = "";
  let operation = "";

  function setInput1(num) {
    input1 = Number(num);
  }

  function setInput2(num) {
    input2 = Number(num);
  }

  function setOperation(op) {
    operation = op;
  }

  function reset() {}

  function calculate() {
    if (operation !== "" && input1 !== "" && input2 !== "") {
      if (operation === "+") {
        return input1 + input2;
      }
      if (operation === "-") {
        return input1 - input2;
      }
    } else {
      return "";
    }
  }

  function reset() {
    input1 = "";
    input2 = "";
    operation = "";
  }

  return { setInput1, setInput2, setOperation, calculate, reset };
}
