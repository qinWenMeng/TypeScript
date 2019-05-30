function printLabel(obj) {
    console.log(obj.label);
}
var myObj = { size: 10, label: "TypeScript" };
printLabel(myObj);
// function createSquare(config: SquareConfig): { color: string; area: number } {
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
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
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var p = {
    x: 10,
    y: 20
};
/**
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
 * 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
 * @param src
 * @param sub
 */
var myFunc = function (src, sub) {
    var result = src.search(sub);
    console.log('result:', result);
    return result > 0;
};
console.log(myFunc('0123456789', '123'));
var myArr;
myArr = ['1', '2'];
var myStr = myArr[0];
console.log('myStr:', myStr);
