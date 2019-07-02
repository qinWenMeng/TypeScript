/**
 * 使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。
 */
/* function identity(arg: any): any {
  return arg;
} */
/**
 * 使用 类型变量(一种特殊的变量，只用于表示类型而不是值) 使返回值的类型与传入参数的类型是相同的。
 * identity函数叫做泛型，可以适用于多个类型。<T>：类型参数
 * 定义了泛型函数后，可以用两种方法使用:
 * 1. 传入所有的参数，包含类型参数
 * 2. 利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
 */
var output;
function identity(arg) {
    return arg;
}
// 1.
output = identity("1.myString");
console.log("value:", output, ", type:", typeof output);
// 2.
output = identity("2.myString");
console.log("value:", output, ", type:", typeof output);
/**
 * 使用泛型创建泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。
 * 换句话说，你必须把这些参数当做是任意或所有类型。
 */
/* function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
} */
function loggingIdentity(arg) {
    console.log("arg.length:", arg.length); // Array has a .length, so no more error
    return arg;
}
output = loggingIdentity([1, "2", true]);
console.log("arg:", output);
