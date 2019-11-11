/// <reference path="./ts/common.ts" />
/// <reference path="./ts/one.ts" />
/// <reference path="./ts/two.ts" />
Common.all();
Common.one();
Common.two();

namespace MultiNamespace {
  export namespace Hello {
    export function hi(message: string) {
      console.log(message);
    }
  }
  export function hey(msg: string) {
    console.log(msg);
  }
}

MultiNamespace.Hello.hi("Hello, namespace!");
MultiNamespace.hey("Hello, world!");
