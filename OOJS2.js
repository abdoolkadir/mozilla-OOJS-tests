// Creating Shape class using ES6 syntax
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    //create CalcPerimeter Method
    calcPerimeter() {
        return this.sides * this.sideLength;
    }
}

// Instantiate Square and Triangle Shape Objects
const square = new Shape('Square', 4, 5);
const triangle = new Shape('Triangle', 3, 3);

console.log(square.calcPerimeter());
console.log(triangle.calcPerimeter());