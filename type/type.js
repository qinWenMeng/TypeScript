var bool = true;
var str = 'Hello, world!';
var num = 666;
var arr = [1, 2, 3];
var list = [1, '2', [3]];
var multiArr = ['1', 2];
console.log('bool:', bool);
console.log('str:', str);
console.log('num:', num);
console.log('arr:', arr);
console.log('list:', list);
console.log('multiArr:', multiArr);
// enum Color { Red, Green, Blue } // 默认情况下，从0开始为元素编号。
// enum Color { Red = 1, Green, Blue } // 从 1开始编号
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {})); // 全部都采用手动赋值
var c = Color.Green;
console.log('enum c:', c);
var colorName = Color[2]; //枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
console.log('enum colorName:', colorName);
var notSure = 4;
console.log('any notSure:', notSure);
notSure = "maybe a string instead";
console.log('any notSure:', notSure);
notSure = false;
console.log('any notSure:', notSure);
