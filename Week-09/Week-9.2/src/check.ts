// const x : any = 1;

// function greet(firstName: string){
//   console.log("hello"+ firstName);
// }

// greet("harkirat")

function sum(a: number, b: number) {
  return a + b;
}

function runafter1s(call: () => void) {
  setTimeout(call, 1000);
}

runafter1s(function () {
  console.log("hello");
});

function checkage(n: number) {
  if (n >= 18) return true;
  else return false;
}

const value = sum(1, 2);
console.log(value);

console.log(checkage(24));

interface Person {
  name: String;
  age: number;
  gender: String;
}

function isLeagalAge(person: Person) {
  if (person.age >= 18) return true;
  else return false;
}

const person: Person = {
  name: "harkirat",
  age: 24,
  gender: "male",
};

console.log(isLeagalAge(person));
