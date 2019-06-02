/**
 * TypeScript能够根据返回语句自动推断出返回值类型
 *
 * 函数类型包含两部分：参数类型和返回值类型。 函数的类型只是由参数类型和返回值组成的。
 *
 * 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
 *
 * 返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
 *
 */
// Named function 命名函数
function add(x, y) {
    return x + y;
}
// Anonymous function 匿名函数
var myAdd = function (x, y) {
    return x + y;
};
/**
 * 完整类型： 参数类型和返回值类型两部分都需要
 * 在函数和返回值类型之前使用 => 符号
 */
var myFunc = function (x, y) {
    return x + y;
};
/**
 * 推断类型
 * 在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
 */
var myFunction = function (x, y) {
    return x + y;
};
/**
 * 传递给一个函数的参数个数必须与函数期望的参数个数一致。
 */
function printName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
// printName('Bob'); // error: Expected 2 arguments, but got 1. An argument for 'lastName' was not provided.
// printName('Bob', 'Adams', 'Sr.'); // error: Expected 2 arguments, but got 3.
printName('Hello,', 'Typescript!');
/**
 * 在参数名旁使用 ?实现可选参数的功能。
 * 可选参数必须跟在必须参数后面。
 * 没传参的时候，它的值就是undefined。
 */
function optionalParams(firstName, lastName) {
    console.log('optionalParams:', firstName, lastName);
}
optionalParams('TypeScript');
optionalParams('Hello', 'TypeScript');
/**
 * 默认初始化值的参数: 当用户没有传递这个参数或传递的值是undefined时, 为参数提供一个默认值
 * function initialParams(x: string, y?: string): void
 */
function initialParams(x, y) {
    if (y === void 0) { y = 'TypeScript'; }
    console.log('initialParams:', x, y);
}
initialParams('Hello');
// initialParams('Hello', '2', '3'); // error: Expected 1-2 arguments, but got 3.
/**
 * 剩余参数会被当做个数不限的可选参数。可以一个都没有，同样也可以有任意个。
 * 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，可以在函数体内使用这个数组。
 */
function restParams(must) {
    var restParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restParams[_i - 1] = arguments[_i];
    }
    console.log('restParams:', restParams);
}
var restParamsFunc = restParams;
restParams('0', '1', '2', '3');
var deck = {
    suits: ['hearts', 'spades', "clubs", "diamonds"],
    // 提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面.
    createCardPicker: function (str) {
        var _this = this;
        console.log('createCardPicker:', this);
        console.log(str);
        return function () {
            console.log('arrow function:', _this);
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 }; // this是Deck类型的
        };
    }
};
var cardPicker = deck.createCardPicker('Hello');
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
