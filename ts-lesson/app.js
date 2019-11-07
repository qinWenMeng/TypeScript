"use strict";
// Basic Types:
// number
var num = 123;
// boolean
var flag = true;
// string
var str = 'Hello, TypeScript!';
// elemType[], Array<elemType>
var arr = [1, 2, 3];
var list = ['one', 'two', 'three'];
// Tuple
var tuple = [123, 'Hello, TypeScript!'];
// enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var color = Colors.Red;
console.log(color);
// Functions
var sum = function (x, y) { return x + y; };
console.log(sum(1, 2));
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
// Classes
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("TypeScript!");
console.log(greeter.greet());
