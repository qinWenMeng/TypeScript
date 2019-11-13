// Basic Types:

/* number */
let num: number = 123;

/* 布尔boolean */
let flag: boolean = true;

/* 字符串string */
let str: string = 'Hello, TypeScript!';

/* 数组elemType[], Array<elemType> */
let arr: number[] = [1, 2, 3];
let list: Array<string> = ['one', 'two', 'three'];

/* 元组Tuple */
let tuple: [number, string] = [123, 'Hello, TypeScript!'];

/* 枚举enum */
enum Colors {
  Red,
  Green,
  Blue
}
let color: Colors = Colors.Red;
console.log(color);

/* 函数Functions */
let sum: (x: number, y: number) => number = function(x, y) { return x + y; };
console.log(sum(1, 2));
function add(x: number, y: number):number {
  return x + y;
}
console.log(add(2, 3));

/* 类Classes */
class Greeter {
  greeting: string;
  // only accessible within class 'Greeter'
  private one: string =  'one';
  // only accessible within class 'Greeter' and its subclasses.
  protected two: boolean = true;
  readonly three:string = 'three';
  constructor(message: string) {
    this.greeting = message;
  }
  greet(msg?: string):void {
    console.log(`${msg}Hello, ${this.greeting}, ${this.one}:${this.two}`);
  }
}
class Someone extends Greeter {
  constructor(greeting: string, public gender: string) {
    super(greeting);
  }
  print():void {
    this.greet('person: ');
    this.two = false;
    console.log(`person: Hello, ${this.greeting}, ${this.two}, gender:${this.gender}`);
  }
}
let greeter = new Greeter('TypeScript!');
greeter.greet('greeter: ');
console.log(greeter.three);
let person = new Someone('someone!', 'male');
console.log(person);
person.print();

class Employee {
  private _name: string = '';
  constructor(name: string) {
    this._name = name;
  }
  get name():string {
    console.log('get...');
    return this._name;
  }
  set name(newName: string) {
    console.log('set...');
    this._name = newName;
  }
}

let employee = new Employee('TypeScript~');
console.log(employee.name);
employee.name = 'TypeScript!';
console.log(employee.name);

class Grid {
  static origin = { x: 100, y: 100 };
  constructor(public prop: string) {}
  print() {
    console.log('Grid:', Grid.origin);
  }
}
class Box extends Grid {
  constructor(name: string) {
    super(name);
    console.log('Box:', Box.origin);
  }
  type: string = 'flex';
}
let demo = new Grid('Hello, TypeScript~');
console.log(demo);
demo.print();
let box = new Box('box');
console.log(box);

/* 命名空间namespace */
namespace MyMath {
  export const PI = 3.14;
  export function sum(a: number, b: number) {
    return a + b;
  }
  export function calc(val: number) {
    return 2 * (PI * 100) * val / 100;
  }
}
const PI = 3.1415926;
console.log(PI);
console.log(MyMath.PI);
console.log(MyMath.sum(1, 1));
console.log(MyMath.calc(1));

/* 接口interface */
interface Person {
  name: string; // 必传
  age?: number; // 可选
  readonly gender: string; // 只读
  // [propName: string]: any; // 额外
  greet(message: string): void;
}

interface People {
  id: number;
  job: string;
}

let friend: Person = {
  name: 'TypeScript',
  gender: 'TS',
  greet(message: string):void {
    console.log(`${message}, ${this.name}~`);
  }
};
console.log(friend);
friend.greet('Hello');

class Developer implements Person, People {
  id: number = 0;
  name: string = 'ape';
  gender: string =  'animal';
  age: number = 30;
  job: string = 'IT';
  greet(message: string): void {
    console.log(message);
  }
  constructor(id?: number) {
    id && (this.id = id);
  }
}
let dev = new Developer(1);
console.log(dev);

interface School {
  school_name: string;
  school_address: string;
}
interface Student extends School {
  student_name: string;
}
const stu: Student = {
  student_name: '小明',
  school_name: '幼儿园',
  school_address: '火星'
};
console.log(stu);

interface Func {
  (a: number, b: number): boolean;
}
function myFunc(x:number, y:number):boolean {
  console.log(x % y === 0);
  return x % y === 0;
}
let func: Func = myFunc;
func(20, 4);

/* 泛型 */
function identity<T>(arg: T):T {
  console.log(arg);
  return arg;
}
identity<string>('Hello, TypeScript!');
identity('Hello, TypeScript~');

// 接口中使用泛型
interface IdentityFn {
  <T>(arg: T):T;
}
function identityFunc<T>(arg: T):T {
  console.log(arg);
  return arg;
}
let iFunc: IdentityFn = identityFunc;
iFunc('Hello, ts!');

// 泛型接口参数
interface GenericIdentityFn<T> {
  (arg: T):T;
}
function genericIdentityFunc<T>(arg: T):T {
  console.log(arg);
  return arg;
}
let gFunc: GenericIdentityFn<string | number> = genericIdentityFunc;
gFunc('Hello, ts~');
gFunc(1024);

// 泛型约束
interface Lengthwise {
  length: number;
}
function getLength<T extends Lengthwise>(arg:T):T {
  console.log(arg.length);
  return arg;
}
getLength([1, 2, 3]);
getLength({ key: '123', value: '456', length: 2 });
