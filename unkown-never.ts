let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Kieran';

if (typeof userInput === 'string') {//Unknown means we can not know what will be submitted to it, as such we cannot defined a type without first checking if the type is indeed that type,
userName = userInput; //as seen with this if statement
}

function generateError(message:string, code:number): never {// Never means it will NEVER return anything, in some instances you will still return an Undefined, but because we throw here,
    throw {message: message, errorCode: code}; //The script essentially crashes, and nothing is returned.
    // while (true) {} < another reason you would never return something, is if there was an infinite loop, like so
}

generateError('An Error Occurred', 500);