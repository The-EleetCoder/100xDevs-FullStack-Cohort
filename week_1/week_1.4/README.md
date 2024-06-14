# Weel 1.4

We went through Functions and callbacks.

### What is a function?
A function in JavaScript is a set of statements that performs a task or calculates a value. It should take some input and return an output where there is some obvious relationship between the input and the output.

```js
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
```
### Why do we need functions?
Functions eliminate code complexity by enabling re-usability. A function is a block of 'reusable code' that is used several times in the JavaScript program where it is defined. JavaScript functions cut out the need to write the same code again, allowing modular coding.

### what is a callback function?
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

### what is an Anonymous function?
It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

```js
    var greet = function (platform) { 
        console.log("Welcome to ", platform); 
    }; 
      
    greet("GeeksforGeeks!"); 
```