// #030301

class Bike {
  constructor() {
    this.brand = "Yamaha";
  }
}

console.log(new Bike());

// #030302

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

let student = new Student("John", "Smith", 18);
console.log(student);
