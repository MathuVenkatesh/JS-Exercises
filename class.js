// ES5 - function as a class to create object with 'new' keyword
//JavaScript uses functions as classes to create objects using the new keyword.
function Person(firstName, age) {
  // construct the object using the arguments
  this.firstName = firstName;
  this.age = age;
}
Person.prototype.describe = function () {
  return this.firstName + " " + this.age + " years old";
};

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());

// ES6 - Class
class Person {
  // construct the object using the arguments
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
  describe() {
    return this.firstName + " " + this.age + " years old";
  }
}

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());
