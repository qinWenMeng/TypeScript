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
var Grid = /** @class */ (function () {
    function Grid(prop) {
        this.prop = prop;
    }
    Grid.prototype.print = function () {
        console.log("Grid:", Grid.origin);
    };
    Grid.origin = { x: 100, y: 100 };
    return Grid;
}());
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(name) {
        var _this = _super.call(this, name) || this;
        _this.type = 'flex';
        console.log("Box:", Box.origin);
        return _this;
    }
    return Box;
}(Grid));
var demo = new Grid("Hello, TypeScript~");
console.log(demo);
demo.print();
var box = new Box('box');
console.log(box);
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function sum(a, b) {
        return a + b;
    }
    MyMath.sum = sum;
    function calc(val) {
        return 2 * (MyMath.PI * 100) * val / 100;
    }
    MyMath.calc = calc;
})(MyMath || (MyMath = {}));
var PI = 3.1415926;
console.log(PI);
console.log(MyMath.PI);
console.log(MyMath.sum(1, 1));
console.log(MyMath.calc(1));
var friend = {
    name: "TypeScript",
    gender: "TS",
    greet: function (message) {
        console.log(message + ", " + this.name + "~");
    }
};
console.log(friend);
friend.greet("Hello");
var Developer = /** @class */ (function () {
    function Developer(id) {
        this.id = 0;
        this.name = "ape";
        this.gender = "animal";
        this.age = 30;
        this.job = "IT";
        id && (this.id = id);
    }
    Developer.prototype.greet = function (message) {
        console.log(message);
    };
    return Developer;
}());
var dev = new Developer(1);
console.log(dev);
var stu = {
    student_name: "小明",
    school_name: "幼儿园",
    school_address: "火星"
};
console.log(stu);
