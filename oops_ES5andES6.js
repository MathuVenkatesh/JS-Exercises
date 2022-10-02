//OOPS in ES6 syntax
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(this.sideLength);
  }
}

let square = new Shape("square", 20, 5);

let triangle = new Shape("triangle", 20, 3);

square.calcPerimeter();
triangle.calcPerimeter();
//--------------------------------------------------------------------------------//
// OOPS in ES5 syntax

var Shape = function (name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
};

Shape.prototype.calcPerimeter = function () {
  console.log(this.sideLength);
};

let square = new Shape("square", 20, 5);

let triangle = new Shape("triangle", 20, 3);

square.calcPerimeter();
triangle.calcPerimeter();

//
