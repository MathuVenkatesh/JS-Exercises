// class inside class
class Shape {
  constructor(name, sides, sideLength, EducationQali) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.EducationQali = EducationQali;
  }
  calcPerimeter() {
    console.log(this.sideLength);
  }
}
class EducationQali {
  constructor(degree, certificate, project) {
    this.degree = degree;
    this.certificate = certificate;
    this.project = project;
  }
}

let EduQuali1 = new EducationQali("B.E", "CCNA", "JavaScript");

let EduQuali2 = new EducationQali("M.E", "HTML", "CSS");

let square = new Shape("square", 20, 5, EduQuali1);

let triangle = new Shape("triangle", 20, 3, EduQuali2);

square.calcPerimeter();
triangle.calcPerimeter();
console.log(square);

//
class Shape {
  constructor(name, sides, sideLength, EducationQali) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.EducationQali = EducationQali;
  }
  calcPerimeter() {
    console.log(this.sideLength);
  }
}
class EducationQali {
  constructor(degree, certificate, project) {
    this.degree = degree;
    this.certificate = certificate;
    this.project = project;
  }
}

let EduQuali1 = new EducationQali("B.E", "CCNA", "JavaScript");

let EduQuali2 = new EducationQali("M.E", "HTML", "CSS");

let square = new Shape("square", 20, 5, EduQuali2);

let triangle = new Shape("triangle", 20, 3, EduQuali2);

square.calcPerimeter();
// triangle.calcPerimeter();
// console.log(square);
