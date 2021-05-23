function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

// Write your code below here
// create CalcPerimeter prototype method
Shape.prototype.calcPerimeter = function() {
    return this.sides * this.sideLength;
}

// new square Shape object instance
const square = new Shape('Square', 5);

// new triangle Shape object instance
const triangle = new Shape('Triangle', 3, 3)

console.log(square.calcPerimeter());
console.log(triangle.calcPerimeter());
// console.log('home');