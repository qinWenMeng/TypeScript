// Up使用初始化为 1。 其余的成员会从 1开始自动增长。
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log("----------///----------");

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

console.log("----------///----------");

// 常量成员
// 枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0
enum Example {
  value
}

console.log(Example.value);

console.log("----------///----------");
