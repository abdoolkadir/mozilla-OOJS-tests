# mozilla-OOJS-tests
The aim of this skill test is to assess whether you've understood our Object-oriented JavaScript for beginners, Object prototypes, and Inheritance in JavaScript articles.


# OOJS 1
In this task we provide you with a constructor. We want you to:

Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK.

# OOJS 2
Next up we want you to take the Shape class you saw in Task #1 (including the calcPerimeter() method) and recreate it using ES class syntax instead.

Test that it works by creating the square and triangle object instances as before (using new Shape() for both), and then calling their calcPerimeter() methods.

# OOJS 3
Finally, we'd like you to start with the ES Shape class you created in the last task.

We'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area. Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.

Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works ok.