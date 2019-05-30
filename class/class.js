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
/**
 * 注意：this.greet.bind(this); 如果不.bind(this), 输出的 greeter 里看不到 greet 方法, 但是仍然可以调用
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
        // this.greet = this.greet.bind(this);
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting + "!";
    };
    return Greeter;
}());
var greeter = new Greeter('TypeScript');
console.log('greeter:', greeter);
console.log(greeter.greet());
/**
 * 类从基类中继承了属性和方法。
 * 通过 extends关键字。
 * 派生类通常被称作 子类，基类通常被称作 超类。
 */
var Animal = /** @class */ (function () {
    function Animal() {
        this.move = this.move.bind(this);
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
// 👇👇👇Dog是一个 派生类，它派生自 Animal 基类
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
console.log('dog:', dog);
dog.bark();
dog.move(100);
