
//You can do this, typically it is better for typescript to infer what types are inside your object
// const person: {
//     name: string;
//     age: number;
// } = {
// This is an example of when you should define types, and not let typescript infer
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] //A Tuple is not a inferred by typescript, and as such you must be explicit in your type definitions
// } = {

enum Role { ADMIN = 1, READ_ONLY = 6, AUTHOR = 'Text' };

const person = {
    name: 'Kieran',
    age: 21,
    hobbies: ['Sports', 'Cooking', 'Driving'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); !!! Error !!! Typescript infers the type of hobby and will error here as you cannot use .map
}