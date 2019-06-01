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
        // this.move = this.move.bind(this);
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
/**
 * 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
 * 在构造函数里访问 this的属性之前，我们 一定要调用 super()。
 */
var Animals = /** @class */ (function () {
    function Animals(theName) {
        this.name = theName;
    }
    Animals.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animals;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
        // this.move = this.move.bind(this);
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animals));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
        // this.move = this.move.bind(this);
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animals));
var sam = new Snake('Sammy the Python');
console.log('sam:', sam);
sam.move();
var tom = new Horse('Tommy the Palomino');
console.log('tom:', tom);
tom.move(1000);
/**
 * 在TypeScript里，成员都默认为 public。也可以明确的将一个成员标记成 public。
 * 当成员被标记成 private时，它就不能在声明它的类的外部访问。
 */
var PrivateProps = /** @class */ (function () {
    function PrivateProps() {
        this.str = 'Hello, TypeScript!';
        console.log('PrivateProps constructor:', this.str);
    }
    return PrivateProps;
}());
var privateProp = new PrivateProps();
// console.log(privateProp.str); // Property 'str' is private and only accessible within class 'PrivateProps'.
/**
 * protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
 * 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承(super)。
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Someone = /** @class */ (function (_super) {
    __extends(Someone, _super);
    function Someone(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
        // this.getElevatorPitch = this.getElevatorPitch.bind(this);
    }
    Someone.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Someone;
}(Person));
var howard = new Someone('Howard', 'Sales');
console.log('howard:', howard);
console.log(howard.getElevatorPitch());
// console.log(howard.name); // Property 'name' is protected and only accessible within class 'Person' and its subclasses.
// const fuck = new Person('Not Allowed!'); // Constructor of class 'Person' is protected and only accessible within the class declaration.
/**
 * readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
 *
 * 参数属性：通过给构造函数参数前面添加一个访问限定符来声明。
 * 使用 private限定一个参数属性会声明并初始化一个私有成员；
 * 对于 public和 protected来说也是一样。
 */
var Octopus = /** @class */ (function () {
    function Octopus(theName, paramsProps) {
        this.paramsProps = paramsProps;
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs', 'Hello, TypeScript!');
console.log(dad.paramsProps);
dad.paramsProps = 'Hello, TypeScript~';
// dad.name = "Man with the 3-piece suit"; // Cannot assign to 'name' because it is a read-only property.
console.log(dad.paramsProps);
/**
 * TypeScript支持通过getters/setters来截取对对象成员的访问。
 * 只带有 get不带有 set的存取器自动被推断为 readonly。
 */
var auth = 'secret code';
var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            console.log('getter...');
            return this._fullName;
        },
        set: function (newName) {
            console.log('setter...');
            if (auth && auth === 'secret code') {
                this._fullName = newName;
            }
            else {
                console.error('Error: Unauthorized update of student!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var stu = new Student();
stu.fullName = 'name:TypeScript';
console.log(stu.fullName);
/**
 * static 创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
 * 每个实例想要访问这些属性的时候，都要在 属性 前面加上类名。
 */
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/**
 * 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
 * abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
 * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
 *
 * 抽象方法的语法与接口方法相似。 抽象方法的语法与接口方法相似。两者都是定义方法签名但不包含方法体。
 * 抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
 */
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    People.prototype.printMeeting = function () {
        console.log('printMeeting...');
    };
    return People;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super.call(this, 'qinWenMeng') || this;
    }
    Employee.prototype.printName = function () {
        console.log('Employee:', this.name);
    };
    Employee.prototype.test = function () {
        console.log('wrong...');
    };
    return Employee;
}(People));
var people;
// people = new People(); // error: Cannot create an instance of an abstract class.
people = new Employee();
people.printName();
people.printMeeting();
// people.test(); //error: Property 'test' does not exist on type 'People'.
