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

// #30303

class Car {
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
}

let car = new Car("Ford", "Focus", "black");
console.log(car);

// #30304

class Animal {
  constructor(name, verb, sound) {
    this.name = name;
    this.verb = verb;
    this.sound = sound;
  }
  speak() {
    console.log(
      this.name +
        " " +
        (this.verb ? this.verb + "s" : " says '" + this.sound + "'")
    );
  }
}
new Animal("Dog", "bark", null).speak();
new Animal("Cat", "meow").speak();
new Animal("Cow", null, "moo").speak();
new Animal("Lion", "roar", null).speak();
new Animal("Duck", null, "quack").speak();

// #30305

let names = ["Alice", "Bernard", "Catherine", "David"];
let jobs = ["Accountant", "Biz Manager", "Cleaner", "Director"];

class Employee {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}
const makeEmployees = (names, jobs) => {
  return names.map((e, i) => {
    return new Employee(e, jobs[i]);
  });
};
console.log(makeEmployees(names, jobs));
