function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  //Void is inferred by typescript because nothing is returned by the function, typescript does have a undefined type,
  console.log('Result: ' + num); // but you would need to return nothing in order for that to function
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(1, 3));

let combineValues: (a: number, b: number) => number; //This means combineValues === any function that takes 2 numbers, and returns a number

combineValues = add;

//combineValues = printResult; < this will not work because print results takes a single number and returns nothing.

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
