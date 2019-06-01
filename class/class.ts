/**
 * 注意：this.greet.bind(this); 如果不.bind(this), 输出的 greeter 里看不到 greet 方法, 但是仍然可以调用
 */
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
    // this.greet = this.greet.bind(this);
  }
  greet() {
    return `Hello, ${this.greeting}!`;
  }
}

let greeter = new Greeter('TypeScript');
console.log('greeter:', greeter);
console.log(greeter.greet());

console.log('-----------------------------------');

/**
 * 类从基类中继承了属性和方法。
 * 通过 extends关键字。
 * 派生类通常被称作 子类，基类通常被称作 超类。
 */
class Animal {
  constructor() {
    // this.move = this.move.bind(this);
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}
// 👇👇👇Dog是一个 派生类，它派生自 Animal 基类
class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
console.log('dog:', dog);
dog.bark();
dog.move(100);

console.log('-----------------------------------');

/**
 * 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
 * 在构造函数里访问 this的属性之前，我们 一定要调用 super()。
 */
class Animals {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animals {
  constructor(name: string) {
    super(name);
    // this.move = this.move.bind(this);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse extends Animals {
  constructor(name: string) {
    super(name);
    // this.move = this.move.bind(this);
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let sam = new Snake('Sammy the Python');
console.log('sam:', sam);
sam.move();
let tom: Animal = new Horse('Tommy the Palomino');
console.log('tom:', tom);
tom.move(1000);

console.log('-----------------------------------');

/**
 * 在TypeScript里，成员都默认为 public。也可以明确的将一个成员标记成 public。
 * 当成员被标记成 private时，它就不能在声明它的类的外部访问。
 */
class PrivateProps {
  private str: string = 'Hello, TypeScript!';
  constructor() {
    console.log('PrivateProps constructor:', this.str);
  }
}

const privateProp = new PrivateProps();
// console.log(privateProp.str); // Property 'str' is private and only accessible within class 'PrivateProps'.

console.log('-----------------------------------');

/**
 * protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
 * 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承(super)。
 */
class Person {
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Someone extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
    // this.getElevatorPitch = this.getElevatorPitch.bind(this);
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Someone('Howard', 'Sales');
console.log('howard:', howard);
console.log(howard.getElevatorPitch());
// console.log(howard.name); // Property 'name' is protected and only accessible within class 'Person' and its subclasses.
// const fuck = new Person('Not Allowed!'); // Constructor of class 'Person' is protected and only accessible within the class declaration.

console.log('-----------------------------------');

/**
 * readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
 * 
 * 参数属性：通过给构造函数参数前面添加一个访问限定符来声明。 
 * 使用 private限定一个参数属性会声明并初始化一个私有成员；
 * 对于 public和 protected来说也是一样。
 */
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string, public paramsProps: string) {
    this.name = theName;
  }
}
let dad = new Octopus('Man with the 8 strong legs', 'Hello, TypeScript!');
console.log(dad.paramsProps);
dad.paramsProps = 'Hello, TypeScript~';
// dad.name = "Man with the 3-piece suit"; // Cannot assign to 'name' because it is a read-only property.
console.log(dad.paramsProps);

console.log('-----------------------------------');

/**
 * TypeScript支持通过getters/setters来截取对对象成员的访问。
 * 只带有 get不带有 set的存取器自动被推断为 readonly。 
 */
let auth = 'secret code';
class Student {
  private _fullName: string;
  get fullName(): string {
    console.log('getter...');
    return this._fullName;
  }
  set fullName(newName: string) {
    console.log('setter...');
    if (auth && auth === 'secret code') {
      this._fullName = newName;
    } else {
      console.error('Error: Unauthorized update of student!');
    }
  }
}
let stu = new Student();
stu.fullName = 'name:TypeScript';
console.log(stu.fullName);

console.log('-----------------------------------');

/**
 * static 创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
 * 每个实例想要访问这些属性的时候，都要在 属性 前面加上类名。
 */
class Grid {
  static origin = { x: 0, y: 0 };
  constructor(public scale: number) { }
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}
let grid1 = new Grid(1);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));

console.log('-----------------------------------');

/**
 * 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
 * abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
 * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
 * 
 * 抽象方法的语法与接口方法相似。 抽象方法的语法与接口方法相似。两者都是定义方法签名但不包含方法体。
 * 抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
 */

abstract class People {
  constructor(public name: string) { }
  abstract printName(): void; // 必须在派生类中实现
  printMeeting(): void {
    console.log('printMeeting...');
  }
}
class Employee extends People {
  constructor() {
    super('qinWenMeng');
  }
  printName() {
    console.log('Employee:', this.name);
  }
  test() {
    console.log('wrong...');
  }
}

let people: People;
// people = new People(); // error: Cannot create an instance of an abstract class.
people = new Employee();
people.printName();
people.printMeeting();
// people.test(); //error: Property 'test' does not exist on type 'People'.

console.log('-----------------------------------');

/**
 * 类定义会创建两个东西：类的实例类型和一个构造函数。(查看编译后的文件)
 * 
 *  var Maker 将被赋值为构造函数。
 *  当我们调用 new 并执行了这个函数后，便会得到一个类的实例。 
 *  这个构造函数也包含了类的所有静态属性。
 *  换个角度说，我们可以认为类具有 实例部分与 静态部分这两个部分。
    var Maker = (function () {
      function Maker(message) {
        this.greeting = message;
    }
    Maker.prototype.greet = function () {
        return "Maker: Hello, " + this.greeting + "!";
    };
    return Maker;
    }());
 */
class Maker {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Maker: Hello, ${this.greeting}!`;
  }
}

let maker: Maker; // Maker 类的实例的类型是 Maker 。
maker = new Maker('TypeScript');
console.log(maker.greet());

console.log('-----------------------------------');

class Producer {
  static standardGreeting = 'static: Hello, TypeScript!';
  greeting: string;
  greet() {
    if (this.greeting) {
      return `Producer: Hello, ${this.greeting}!`;
    } else {
      return Producer.standardGreeting;
    }
  }
}
let producer1: Producer;
producer1 = new Producer();
console.log(producer1.greet());

/**
 * typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。
 * 更确切的说，"告诉我 Greeter标识符的类型"，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数。 
 */
let producerMaker: typeof Producer = Producer;
producerMaker.standardGreeting = 'producerMaker: Hello, TypeScript!';
let producer2: Producer = new producerMaker();
console.log(producer2.greet());

console.log('-----------------------------------');

/**
 * 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
 */

class Point {
  x: number;
  y: number;
}

class Point3D extends Point {
  z: number;
}

let point3D: Point3D = { x: 1, y: 2, z: 3 };