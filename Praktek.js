class Groot {
  constructor(name, age, isAlive) {
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
  }
}

class Leaf extends Groot {
  constructor(name, age) {
    super(name, age, true);
  }

  withered() {
    return `${this.name} sedang layu!`;
  }
}

class Tree extends Groot {
  constructor(name, age) {
    super(name, age, true);
  }

  growing() {
    return `${this.name} sedang tumbuh!`;
  }
}

class Animal extends Groot {
  constructor(name, age) {
    super(name, age, false);
  }
  eat() {
    return `${this.name} sedang makan!`;
  }
}

const myLeaf = new Leaf("kelor", 3);
const myTree = new Tree("mangga", 5);
const myAnimal = new Animal("kucing", 2);

console.log(myLeaf.withered());
console.log(myTree.growing());
console.log(myAnimal.eat());
console.log(myAnimal);
console.log(myLeaf);
console.log(myTree);
