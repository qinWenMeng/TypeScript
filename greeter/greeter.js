/* function greeter(person: string) {
  return `Hello, ${person}`;
}

let user = 'TypeScript';
// let user = ['TypeScript']; // Argument of type 'string[]' is not assignable to parameter of type 'string'.

document.body.innerHTML = greeter(user); // 删除 greeter 所有参数：Expected 0 arguments, but got 1. */
/* interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}

let user = { firstName: "TypeScript", lastName: "Language" };
document.body.innerHTML = greeter(user); */
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
var user = new Student('TypeScript', 'M.', 'Language');
console.log(user);
document.body.innerHTML = greeter(user);
