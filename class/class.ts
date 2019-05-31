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

class Employee extends Person {
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

let howard = new Employee('Howard', 'Sales');
console.log('howard:', howard);
console.log(howard.getElevatorPitch());
// console.log(howard.name); // Property 'name' is protected and only accessible within class 'Person' and its subclasses.
// const fuck = new Person('Not Allowed!'); // Constructor of class 'Person' is protected and only accessible within the class declaration.

/**
 * readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
 * 
 * 参数属性通过给构造函数参数前面添加一个访问限定符来声明。 
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