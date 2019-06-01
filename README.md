# TypeScript
- #### 安装typescript：`sudo npm install -g typescript`
- #### 命令: `tsc`
- #### 查看安装版本：`tsc -v`
- #### 运行TypeScript编译器: `tsc <fileName>.ts` 
  注意：尽管 `<fileName>.ts` 里有错误, `<fileName>.js`依然会被创建

---
- #### TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。
- #### 在类的构造函数的参数上使用public等同于创建了同名的成员变量。
---
# Docs
- #### **类型注解**: `TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。`
- #### **基础类型**:
  #### 数据单元：数字，字符串，结构体，布尔值等。
  #### TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型。
  #### `1. 布尔值：`
      let isDone: boolean = false;
  #### `2. 数字：` 
     ##### 和JavaScript一样，TypeScript里的所有数字都是浮点数，类型是 number。 支持十进制，十六进制，二进制和八进制字面量。
      let decLiteral: number = 666;
  #### `3. 字符串:`
    ##### 支持模版字符串
      let name: string = "bob";
      name = "smith";

      let name: string = `Gene`;
  #### `4. 数组:`
    ##### 定义数组: 
    ##### 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：

      let list: number[] = [1, 2, 3];

    ##### 第二种方式是使用数组泛型，Array<元素类型>：

      let list: Array<number> = [1, 2, 3];
---
# Error
- `Accessors are only available when targeting ECMAScript 5 and higher.`
  ##### 原因：`tsc 默认 编译 ES3`
  ##### 解决方案：`tsc命令查看options, 指定编译 target version`
      tsc -t ES5 <fileName>.ts
-
