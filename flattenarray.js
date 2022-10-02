
//--------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------//
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
  getDegree() {
    console.log(this.EducationQali);
  }
  getPerDeg() {
    console.log(this.degree);
  }
}
class EducationQali {
  constructor(degree, certificate, project) {
    this.degree = degree;
    this.certificate = certificate;
    this.project = project;
  }
  getPerDeg() {
    console.log(this.degree);
  }
}

let EduQuali1 = new EducationQali("B.E", "CCNA", "JavaScript");

let EduQuali2 = new EducationQali("M.E", "HTML", "CSS");

let square = new Shape("square", 20, 5, EduQuali2);

let triangle = new Shape("triangle", 20, 3, EduQuali2);

// square.calcPerimeter();
//square.getPerDeg();
EduQuali1.getPerDeg();
// triangle.calcPerimeter();
// console.log(square);

class City {
  constructor(name) {
    this.name = name.length === 0 ? randomName() : name;
    this.citizens = [];
  }

  randomName() {
    let names = "abcdefghijklmnopqrstuvwxyz";
    let t = Math.floor(Math.random() * 22);
    let randomNames = names.slice(t, t + 5);
    console.log(randomNames);
    return randomNames;
    //  length = 5;
    //  lowercase
  }
}

let obj1 = new City(" ");
console.log(obj1.name);

/////////

class World {
  constructor(num) {
    this.num = num;
    this.cities = [];
  } // Enter code below
  add_city(cityName) {}

  random_city() {}

  total_cities() {
    return cities.length;
  }
}
class City {
  constructor(name) {
    this.name = name.length === 0 ? randomName() : name;
    this.citizens = [];
  }

  randomName() {
    let names = "abcdefghijklmnopqrstuvwxyz";
    let t = Math.floor(Math.random() * 22);
    let randomNames = names.slice(t, t + 5);
    console.log(randomNames);
    return randomNames;
    //  length = 5;
    //  lowercase
  }

  add_citizen() {}
}

class Citizen {
  constructor() {
    this.age = math.floor(math.random() * 101);
  }
}

let world = new World(100);

//adds a new city called 'hackerhero'
world.add_city("hackerhero");

//should pull out a random city object within the world and log its value
console.log("Random city name: ", world.random_city().name);

//should pull out a random city object within the world and log its value
console.log(
  "Age of first citizen in another random city: ",
  world.random_city().citizens[0]
);

//should log 101 as there are 101  cities now
console.log("# of Cities: ", world.total_cities());

//--------------------------------------------------------------------------------//





//--------------------------------------------------------------------------------//
////////////
//--------------------------------------------------------------------------------//
//// find which number can give num % 2 === 0 in a given array

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      console.log(arr[i]);
    }
  }
  return undefined;
}

findElement([8, 2, 3, 4], (num) => num % 2 === 0);

//--------------------------------------------------------------------------------//

              JavaScript Array splice()        
              index of splice()
array.splice(index, howmany, item1, ....., itemX)
example
array.splice(2,1) = at array[2] remove 1 item
//--------------------------------------------------------------------------------//
//



//--------------------------------------------------------------------------------//



//--------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------//

//NOTES
//The split method splits a string into an array of strings.


//--------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------//



//--------------------------------------------------------------------------------//



//--------------------------------------------------------------------------------//


///



let n;
function sort(arr) {
for(let i=0; i<arr.length; i++){
    for(let j=0; j < n-i-1;j++){
   if(arr[j]> arr[j+1])     {
       let temp;
       temp = arr[j];
       arr[j] = arr[j+1];
        arr[j+1] = temp;
   }
   }
}
console.log(arr[j+1]) 
}

sort([4,8,22,87,60,9,6])

////--------------------------------------------------------------------------------//



//
//--------------------------------------------------------------------------------//


////--------------------------------------------------------------------------------//
/
//--------------------------------------------------------------------------------//



  //--------------------------------------------------------------------------------//

