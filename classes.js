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

// #30306

let cities = ["Bangkok", "Tokyo", "New York", "Rome", "Berlin"];

class Traveler {
  constructor(name) {
    this.name = name;
    this.city = cities[0];
  }
  pickRandom() {
    this.city = cities[Math.floor(Math.random() * cities.length)];
    return `${this.name} is going to ${this.city}`;
  }
}
let traveler = new Traveler("Tony");
console.log(traveler.pickRandom());
console.log(traveler.pickRandom());
console.log(traveler.pickRandom());

// #30307

let labels = ["apples", "bananas", "bread", "cookies", "broccoli", "onions"];
let prices = [20, 12, 24, 53, 32, 15];
let discounts = [0, 0, 10, 25, 0, 5];

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  applyDiscount(discount) {
    this.price *= 1 - discount / 100;
  }
}
class Receipt {
  constructor(products) {
    this.products = products;
  }
  calcTotal() {
    return this.products.reduce((acc, curr) => acc + curr.price, 0);
  }
}
const getReceipt = (labels, prices, discounts) => {
  let products = labels.map((e, i) => {
    let p = new Product(e, prices[i]);
    p.applyDiscount(discounts[i]);
    return p;
  });
  //console.log(products);
  let receipt = new Receipt(products);
  //console.log(`Total: ${receipt.calcTotal()}`);
  let receiptSum = receipt.calcTotal();
  // advanced print
  const wordLen = Math.max(
    5,
    products.reduce(
      (acc, curr) => (acc < curr.name.length ? curr.name.length : acc),
      0
    )
  );
  const priceLen =
    Math.max(
      receiptSum.toFixed(2).length,
      products.reduce(
        (acc, curr) =>
          acc < curr.price.toFixed(2).length
            ? curr.price.toFixed(2).length
            : acc,
        0
      )
    ) + 1; // plus one for the $-sign
  console.log("-".padEnd(13 + wordLen, "-"));
  products.forEach(e =>
    console.log(
      `| ${e.name.padEnd(wordLen, " ")} | ${("$" + e.price.toFixed(2)).padStart(
        priceLen,
        " "
      )} |`
    )
  );
  console.log("-".padEnd(13 + wordLen, "-"));
  console.log(
    `| ${"Total".padEnd(wordLen, " ")} | ${(
      "$" + receiptSum.toFixed(2)
    ).padStart(priceLen, " ")} |`
  );
  console.log("-".padEnd(13 + wordLen, "-"));
};
getReceipt(labels, prices, discounts);
