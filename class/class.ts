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
    this.move = this.move.bind(this);
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