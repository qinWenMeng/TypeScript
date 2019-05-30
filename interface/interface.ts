interface objValue {
  label: string;
}

function printLabel(obj: objValue): void {
  console.log(obj.label);
}

let myObj = { size: 10, label: "TypeScript" };
printLabel(myObj);

/**
 * @config 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
 */
interface SquareConfig {
  color?: string;
  width?: number;
}

interface returnValue {
  color: string;
  area: number;
}

// function createSquare(config: SquareConfig): { color: string; area: number } {
function createSquare(config: SquareConfig): returnValue {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    console.log('config.color: ', config.color);
    newSquare.color = config.color;
  }
  if (config.width) {
    console.log('config.width: ', config.width);
    newSquare.area = config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare);

/**
 * 对象字面量会被特殊对待而且会经过 额外属性检查
 *  // error: 'colour' not expected in type 'SquareConfig'
 *  let mySquare = createSquare({ colour: "red", width: 100 });
 * 绕开检查：
 * 1. 最简便的方法是使用类型断言：
 * let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // 类型断言
 * 2. 最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。
 *        interface SquareConfig {
 *           color?: string;
 *           width?: number;
 *           [propName: string]: any; // 字符串索引签名
 *        }
 * 3. 将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
    let squareOptions = { colour: "red", width: 100 };
    let mySquare = createSquare(squareOptions);
 */

/**
 * readonly 只读
 */

interface Point {
  readonly x: number;
  readonly y: number;
}

let p: Point = {
  x: 10,
  y: 20
};
// p.x = 30; // Cannot assign to 'x' because it is a read-only property.

// 调用签名
interface func {
  (source: string, subString: string): boolean;
}

/**
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
 * 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
 * @param src
 * @param sub
 */
let myFunc: func = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  console.log('result:', result);
  return result > 0;
}
console.log(myFunc('0123456789', '123'));

/**
 * TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
 * 
 * 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。
 * 👇👇👇索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。
 */
interface stringArray {
  [index: number]: string;
}

let myArr: stringArray;
myArr = ['1', '2'];
let myStr = myArr[0];
console.log('myStr:', myStr);
