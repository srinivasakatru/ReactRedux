// let v1 = "greeting to es6";
// console.log(v1);
let v2 = "Greeting to ES6";

function Greeting(){
    let v2 = "Hello";
    console.log(v2);
}
Greeting();
console.log(v2);
Greeting();
console.log("Typeof Greeting"+typeof(Greeting));


const integers = [1,2,3];

const updatedintegers = integers.map((n)=>{
    return n*n
})

console.log("updated integers ["+updatedintegers+"]")

let ages = [23,,21,34,2,3];

let agesAbove20 = ages.filter((age)=> (age>20))

console.log(agesAbove20)

function Person(name,age){
    this.name = name;
    this.age = age
};
Person.prototype.introduction =function(){
    return `my name is ${this.name} and my age is ${this.age}`
}
var person = new Person("jake",23);

console.log(person)
console.log(person.introduction());

class PersonWithClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
};
const person1 = new PersonWithClass('bill','26');
console.log(person1);

const spreadExample = ['Hi','There','Whats'];

console.log(...spreadExample,'up','How','are','you')