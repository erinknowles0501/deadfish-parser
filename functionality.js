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
    console.log("multiply: ", v, i);
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
