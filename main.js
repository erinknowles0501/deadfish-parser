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
  //console.log(char);
  deadfishOutput.innerHTML = parseToDeadfish(
    char,
    val,
    mainOutput,
    mainCurrentVal
  );
}

let mainOutput = [];
let mainCurrentVal = 0;

function parseToDeadfish(char, val = null, output = null, currentVal) {
  if (char == POSSIBLE_COMMANDS.OUTPUT) {
    output.push(currentVal);
    return output;
  }

  if (commands.get(char) == undefined) {
    return;
  }

  if (char == POSSIBLE_COMMANDS.MULTIPLY) {
    // check if number of 'm's is even (ie a 'sequence' has just finished)
    if (val.match(/m/g || []).length % 2 == 0) {
      // get characters up to previous 'm' (ignoring most recent m)
      lastMIndex = val.slice(0, -1).lastIndexOf("m");
      charsToEval = val.slice(lastMIndex + 1, -1);

      // ignore output command
      charsToEval = charsToEval.replace(POSSIBLE_COMMANDS.OUTPUT, "");

      let multCount = 0;
      // evaluate
      let valToMult = [...charsToEval].reduce((acc, multChar) => {
        return acc + parseToDeadfish(multChar, null, null, multCount);
      }, 0);

      // call multiply(currentVal, valToMult);
      console.log("currentval", currentVal);
      output = commands.get(POSSIBLE_COMMANDS.MULTIPLY)(currentVal, valToMult);
      return output;
    }
    return;
  }

  currentVal = commands.get(char)(currentVal);
  console.log("currentval outside", currentVal);

  //TODO: refactor this. Shouldn't happen in this function.
  currentValueOutput.innerHTML = currentVal;
  return output || currentVal;
}
