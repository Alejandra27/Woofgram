const g: number = 6;

class Cat {
  name: string;
}

const theCat = {};
let anotherCat = new Cat();
var otherCat = {};

interface Dog {}
type DogClosure = (dog: Dog) => void;

function makeDog() {}

// ---------------------------------

// Regular function
const makeCat = function () {};

// Arrow function
const makeBunny = () => {};

const Bunny = function () {};
Bunny.prototype.name = "Bugs Bunny";

const theBunny = new Bunny();
console.log(theBunny.name);
