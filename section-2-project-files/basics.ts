function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //A non typescript solution
  // if (typeof n1 === 'number' && typeof n2 ==='number') {
  //     return n1 + n2;
  // }
  // else {
  //     throw new Error("Incorrect Input!");
  // }
  const result = n1 + n2;
  if (showResult === true) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
