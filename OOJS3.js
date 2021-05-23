class Shape {
    constructor(name, sides, sideLength) {
        this.name = name; this.sides = sides; this.sideLength = sideLength
    }
}
  class Square extends Shape {
    constructor(sideLength) {
      super('square', 4);

      this.sideLength = sideLength;
      
   }
   calcArea () {
    return Math.pow(this.sideLength, 2);
   }
   calcPerimeter() {
    return this.sides * this.sideLength;
   }
  }
   
  
  const square = new Square(5) 
  
  console.log(square.calcArea());
//   console.log(square.sideLength);

  console.log(square.calcPerimeter());
  //console.log(square.name)