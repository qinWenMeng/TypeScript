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