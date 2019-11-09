// Basic Types:

// number
let num: number = 123;

// boolean
let flag: boolean = true;

// string
let str: string = 'Hello, TypeScript!';

// elemType[], Array<elemType>
let arr: number[] = [1, 2, 3];
let list: Array<string> = ['one', 'two', 'three'];

// Tuple
let tuple: [number, string] = [123, 'Hello, TypeScript!'];

// enum
enum Colors {
  Red,
  Green,
  Blue
}
let color: Colors = Colors.Red;
console.log(color);

// Functions
let sum: (x: number, y: number) => number = function(x, y) { return x + y; };
console.log(sum(1, 2));
function add(x: number, y: number):number {
  return x + y;
}
console.log(add(2, 3));

// Classes
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
    this.greet("person: ");
    this.two = false;
    console.log(`person: Hello, ${this.greeting}, ${this.two}, gender:${this.gender}`);
  }
}
let greeter = new Greeter("TypeScript!");
greeter.greet("greeter: ");
console.log(greeter.three);
let person = new Someone("someone!", 'male');
console.log(person);
person.print();

class Employee {
  private _name: string = "";
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

let employee = new Employee("TypeScript~");
console.log(employee.name);
employee.name = "TypeScript!";
console.log(employee.name);

class Grid {
  static origin = { x: 100, y: 100 };
  constructor(public prop: string) {}
  print() {
    console.log(Grid.origin);
  }
}
let demo = new Grid("Hello, TypeScript~");
console.log(demo);
demo.print();