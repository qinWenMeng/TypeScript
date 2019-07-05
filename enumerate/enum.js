// Up使用初始化为 1。 其余的成员会从 1开始自动增长。
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log("----------///----------");
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
console.log("----------///----------");
// 常量成员
// 枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0
var Example;
(function (Example) {
    Example[Example["value"] = 0] = "value";
})(Example || (Example = {}));
console.log(Example.value);
console.log("----------///----------");
