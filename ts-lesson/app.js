"use strict";
// Basic Types:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        // only accessible within class 'Greeter'
        this.one = 'one';
        // only accessible within class 'Greeter' and its subclasses.
        this.two = true;
        this.three = 'three';
        this.greeting = message;
    }
    Greeter.prototype.greet = function (msg) {
        console.log(msg + "Hello, " + this.greeting + ", " + this.one + ":" + this.two);
    };
    return Greeter;
}());
var Someone = /** @class */ (function (_super) {
    __extends(Someone, _super);
    function Someone(greeting, gender) {
        var _this = _super.call(this, greeting) || this;
        _this.gender = gender;
        return _this;
    }
    Someone.prototype.print = function () {
        this.greet("person: ");
        this.two = false;
        console.log("person: Hello, " + this.greeting + ", " + this.two + ", gender:" + this.gender);
    };
    return Someone;
}(Greeter));
var greeter = new Greeter("TypeScript!");
greeter.greet("greeter: ");
console.log(greeter.three);
var person = new Someone("someone!", 'male');
console.log(person);
person.print();
var Employee = /** @class */ (function () {
    function Employee(name) {
        this._name = "";
        this._name = name;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            console.log('get...');
            return this._name;
        },
        set: function (newName) {
            console.log('set...');
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee("TypeScript~");
console.log(employee.name);
employee.name = "TypeScript!";
console.log(employee.name);
