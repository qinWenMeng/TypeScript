let bool: boolean = true;
let str: string = 'Hello, world!';
let num: number = 666;
let arr: number[] = [1, 2, 3];
let list: Array<any> = [1, '2', [3]];
let multiArr: [string, number] = ['1', 2];
console.log('bool:', bool);
console.log('str:', str);
console.log('num:', num);
console.log('arr:', arr);
console.log('list:', list);
console.log('multiArr:', multiArr);

// enum Color { Red, Green, Blue } // 默认情况下，从0开始为元素编号。
// enum Color { Red = 1, Green, Blue } // 从 1开始编号
enum Color { Red = 1, Green = 2, Blue = 4 } // 全部都采用手动赋值
let c: Color = Color.Green;
console.log('enum c:', c);
let colorName: string = Color[2]; //枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
console.log('enum colorName:', colorName);

let notSure: any = 4;
console.log('any notSure:', notSure);
notSure = "maybe a string instead";
console.log('any notSure:', notSure);
notSure = false;
console.log('any notSure:', notSure);