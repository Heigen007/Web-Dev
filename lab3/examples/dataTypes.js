// list all dataTypes in js with examples

// 1. Number
var num = 10; // or 10.5, 10e5
console.log(num); // 10

// 2. String
var str = "Hello World"; // or 'Hello World' or `Hello World, ${num}`
console.log(str); // Hello World

// 3. Boolean
var bool = true;
console.log(bool); // true

// 4. Undefined
var x;
console.log(x); // undefined

// 5. Null
var y = null;
console.log(y); // null

// 6. Object
var obj = {name: "John", age: 30};
console.log(obj); // {name: "John", age: 30}

// 7. Array
var arr = [1, 2, 3, 4];
console.log(arr); // [1, 2, 3, 4]

// 8. Function
function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(4, 3)); // 12

// 9. Symbol
var sym = Symbol('foo');
console.log(sym); // Symbol(foo)