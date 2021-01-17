// ELEMENTS
const deadfishInput = document.querySelector("#deadfishInput");
const deadfishOutput = document.querySelector("#deadfishOutput");
const currentValueOutput = document.querySelector("#currentValueOutput");
const letterOutput = document.querySelector("#letterOutput");

// EVENT LISTENERS
deadfishInput.addEventListener("input", captureInput);

function captureInput() {
  let val = deadfishInput.value;
  let char = val.slice(-1);
  console.log(char);
  deadfishOutput.innerHTML = parseToDeadfish(val);
}

const functions = {
  inc(v) {
    return v + 1;
  },
  dec(v) {
    return v - 1;
  },
  square(v) {
    return v * v;
  },
  multiply(v, i) {
    return v * i;
  },
  reset(v) {
    return 0;
  },
};

const POSSIBLE_COMMANDS = {
  INCREMENT: "i",
  DECREMENT: "d",
  SQUARE: "s",
  OUTPUT: "o",
  // ROOT: 'r',
  MULTIPLY: "m",
  RESET: "c",
};

const commands = new Map();
commands.set(POSSIBLE_COMMANDS.INCREMENT, functions.inc);
commands.set(POSSIBLE_COMMANDS.DECREMENT, functions.dec);
commands.set(POSSIBLE_COMMANDS.SQUARE, functions.square);
commands.set(POSSIBLE_COMMANDS.MULTIPLY, functions.multiply);
commands.set(POSSIBLE_COMMANDS.RESET, functions.reset);

// Return the output array, and ignore all non-op characters
function parseToDeadfish(chars) {
  let output = [];
  let currentVal = 0;
  [...chars].forEach((c) => {
    if (c == POSSIBLE_COMMANDS.OUTPUT) {
      output.push(currentVal);
      return;
    }

    if (commands.get(c) == undefined) {
      return;
    }

    if (c == POSSIBLE_COMMANDS.MULTIPLY) {
      console.log("m");

      // check if number of 'm's is odd
      // if it is, start separate count
      // if ms is even! call multiply(currentVal, multCount);
      return;
    }

    currentVal = commands.get(c)(currentVal);
  });

  //TODO: refactor this. Shouldn't happen in this function.
  currentValueOutput.innerHTML = currentVal;
  return output;
}
