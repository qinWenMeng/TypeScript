function greeter(person: string) {
  return `Hello, ${person}`;
}

let user = 'TypeScript';
// let user = ['TypeScript']; // Argument of type 'string[]' is not assignable to parameter of type 'string'.

document.body.innerHTML = greeter(user); // 删除 greeter 所有参数：Expected 0 arguments, but got 1.